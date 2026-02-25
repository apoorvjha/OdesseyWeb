import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Navigation, Plus, Trash2, ArrowRight, Clock, Map as MapIcon, CheckCircle2, Search, Loader2, GripVertical, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 👇 Reads securely from your .env file
const OLA_MAPS_API_KEY = process.env.REACT_APP_OLA_MAPS_API_KEY || ""; 

const RoutePlannerPage = () => {
  const navigate = useNavigate();

  // --- STATE ---
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingText, setLoadingText] = useState('');
  
  const [itineraryStops, setItineraryStops] = useState([]);
  const [suggestedPlaces, setSuggestedPlaces] = useState([]);
  const [routeCoords, setRouteCoords] = useState({ start: null, end: null });
  
  const [customStopName, setCustomStopName] = useState('');
  const [isFindingLocation, setIsFindingLocation] = useState(false);

  // --- MAP REFS ---
  const mapContainerRef = useRef(null);
  const mapInstance = useRef(null);
  const markersRef = useRef([]); 
  const dragItem = useRef();
  const dragOverItem = useRef();

  const placeholderImages = [
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1550155416-8316dfa99f18?auto=format&fit=crop&w=400&q=80"
  ];

  // --- ROBUST GEOCODING HELPER ---
  // Tries Ola Maps first, falls back to OpenStreetMap if Ola fails or key is missing
  const getCoordinates = async (placeName) => {
    try {
      if (OLA_MAPS_API_KEY) {
        const res = await fetch(`https://api.olamaps.io/places/v1/geocode?address=${encodeURIComponent(placeName)}&api_key=${OLA_MAPS_API_KEY}`);
        const data = await res.json();
        if (data?.geocodingResults?.[0]?.geometry?.location) {
          return {
            lat: data.geocodingResults[0].geometry.location.lat,
            lng: data.geocodingResults[0].geometry.location.lng,
            name: data.geocodingResults[0].name || placeName
          };
        }
      }
      // Fallback to free OpenStreetMap API
      const osmRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(placeName)}`);
      const osmData = await osmRes.json();
      if (osmData && osmData.length > 0) {
        return { lat: parseFloat(osmData[0].lat), lng: parseFloat(osmData[0].lon), name: osmData[0].name || placeName };
      }
    } catch (e) { console.error("Geocoding failed:", e); }
    return null;
  };

  // --- 100% DYNAMIC SEARCH: GEOCODING & RECOMMENDATIONS ---
  const handleSearchRoutes = async (e) => {
    e.preventDefault();
    if (!origin || !destination) return;

    setIsLoading(true);
    setIsSearching(false);
    setItineraryStops([]);

    try {
      setLoadingText('Locating Origin...');
      const startLoc = await getCoordinates(origin);
      
      setLoadingText('Locating Destination...');
      const endLoc = await getCoordinates(destination);

      if (!startLoc || !endLoc) {
        alert("Could not find exact coordinates for those cities. Try adding a state name.");
        setIsLoading(false);
        return;
      }

      setRouteCoords({ start: startLoc, end: endLoc });

      // 👇 DYNAMIC WIKIPEDIA API: Finds real monuments/places near the destination!
      setLoadingText('Finding real places...');
      const wikiRes = await fetch(`https://en.wikipedia.org/w/api.php?action=query&list=geosearch&gsradius=10000&gscoord=${endLoc.lat}|${endLoc.lng}&format=json&origin=*`);
      const wikiData = await wikiRes.json();

      if (wikiData?.query?.geosearch?.length > 0) {
        // Map Wikipedia results to our UI format
        const dynamicPlaces = wikiData.query.geosearch.slice(0, 5).map((place, index) => ({
          id: place.pageid,
          name: place.title,
          lat: place.lat,
          lng: place.lon,
          type: "Landmark",
          time: "1-2 Hours",
          icon: Camera,
          desc: `A notable real-world landmark located exactly at these coordinates.`,
          img: placeholderImages[index % placeholderImages.length]
        }));
        setSuggestedPlaces(dynamicPlaces);
      } else {
        setSuggestedPlaces([]);
      }

      setIsSearching(true);
    } catch (error) {
      console.error("Search Error:", error);
      alert("Error generating route.");
    } finally {
      setIsLoading(false);
    }
  };

  // --- INITIALIZE RELIABLE MAPLIBRE + OLA MAPS ---
  useEffect(() => {
    if (!isSearching) return;

    const initializeMap = () => {
      if (mapInstance.current || !mapContainerRef.current) return;

      const map = new window.maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json`,
        center: [routeCoords.start.lng, routeCoords.start.lat],
        zoom: 5,
        attributionControl: false,
        // 👇 CRITICAL FIX: Intercepts map tile requests to inject the Ola API key
        transformRequest: (url) => {
          if (url.includes('olamaps.io')) {
            return { url: `${url}${url.includes('?') ? '&' : '?'}api_key=${OLA_MAPS_API_KEY}` };
          }
          return { url };
        }
      });

      map.on('load', () => {
        mapInstance.current = map;
        updateMapEntities();
      });
    };

    if (!window.maplibregl) {
      const link = document.createElement('link');
      link.href = 'https://unpkg.com/maplibre-gl@3.x/dist/maplibre-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = 'https://unpkg.com/maplibre-gl@3.x/dist/maplibre-gl.js';
      script.async = true;
      script.onload = initializeMap;
      document.head.appendChild(script);
    } else {
      initializeMap();
    }
  }, [isSearching]);

  // --- UPDATE MAP PINS & ROUTE ---
  useEffect(() => {
    if (mapInstance.current && window.maplibregl) {
      updateMapEntities();
    }
  }, [routeCoords, itineraryStops]);

  const updateMapEntities = () => {
    const map = mapInstance.current;
    if (!map || !routeCoords.start || !routeCoords.end) return;

    markersRef.current.forEach(marker => marker.remove());
    markersRef.current = [];

    const waypoints = []; 

    // Custom Circular HTML Marker
    const createMarkerElement = (name, color) => {
      const el = document.createElement('div');
      el.innerHTML = `
        <div style="position: relative; display: flex; align-items: center; justify-content: center; transform: translate(-50%, -50%);">
          <div style="width: 16px; height: 16px; background-color: ${color}; border-radius: 50%; border: 3px solid white; box-shadow: 0 3px 8px rgba(0,0,0,0.4); z-index: 2;"></div>
          <div style="position: absolute; left: 22px; white-space: nowrap; font-family: system-ui; font-size: 13px; font-weight: 800; color: #111827; text-shadow: 1px 1px 2px white, -1px -1px 2px white, 1px -1px 2px white, -1px 1px 2px white; z-index: 1;">
            ${name}
          </div>
        </div>
      `;
      return el;
    };

    // 1. Origin (Black)
    const startCoord = [routeCoords.start.lng, routeCoords.start.lat];
    waypoints.push(startCoord);
    const startMarker = new window.maplibregl.Marker({ element: createMarkerElement(origin.toUpperCase(), '#111827') })
      .setLngLat(startCoord).addTo(map);
    markersRef.current.push(startMarker);

    // 2. Stops (Green)
    itineraryStops.forEach((stop) => {
      const stopCoord = [stop.lng, stop.lat];
      waypoints.push(stopCoord);
      const stopMarker = new window.maplibregl.Marker({ element: createMarkerElement(stop.name, '#16a34a') })
        .setLngLat(stopCoord).addTo(map);
      markersRef.current.push(stopMarker);
    });

    // 3. Destination (Orange)
    const endCoord = [routeCoords.end.lng, routeCoords.end.lat];
    waypoints.push(endCoord);
    const endMarker = new window.maplibregl.Marker({ element: createMarkerElement(destination.toUpperCase(), '#ea580c') })
      .setLngLat(endCoord).addTo(map);
    markersRef.current.push(endMarker);

    // 4. Draw Route Polyline
    if (map.getSource('route')) {
      map.getSource('route').setData({ type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: waypoints } });
    } else {
      map.addSource('route', { type: 'geojson', data: { type: 'Feature', properties: {}, geometry: { type: 'LineString', coordinates: waypoints } } });
      map.addLayer({
        id: 'route', type: 'line', source: 'route', layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: { 'line-color': '#16a34a', 'line-width': 4, 'line-dasharray': [2, 2] }
      });
    }

    // 5. Fit Map Bounds
    const bounds = new window.maplibregl.LngLatBounds(waypoints[0], waypoints[0]);
    waypoints.forEach(coord => bounds.extend(coord));
    map.fitBounds(bounds, { padding: 80, maxZoom: 12 });
  };

  // --- TIMELINE CONTROLS ---
  const addStop = (stop) => {
    if (!itineraryStops.find(s => s.id === stop.id)) setItineraryStops([...itineraryStops, stop]);
  };
  const removeStop = (id) => setItineraryStops(itineraryStops.filter(s => s.id !== id));

  // --- EXACT COORDINATE CUSTOM SEARCH ---
  const handleAddCustomStop = async (e) => {
    e.preventDefault();
    if (!customStopName.trim()) return;

    setIsFindingLocation(true);

    try {
      const locationData = await getCoordinates(customStopName);

      if (locationData) {
        const customStop = {
          id: Date.now(), 
          name: locationData.name, 
          lat: locationData.lat,    
          lng: locationData.lng,     
          type: "Custom Stop",
          time: "Flexible",
          icon: MapPin,
          desc: "A personalized location added by you.",
          img: placeholderImages[0]
        };
        setItineraryStops([...itineraryStops, customStop]);
        setCustomStopName(''); 
      } else {
        alert(`Could not find "${customStopName}". Try adding a city name (e.g. "Juhu Beach, Mumbai").`);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsFindingLocation(false);
    }
  };

  // --- DRAG AND DROP ---
  const handleDragStart = (e, position) => { dragItem.current = position; e.target.style.opacity = 0.5; };
  const handleDragEnter = (e, position) => { e.preventDefault(); dragOverItem.current = position; };
  const handleDrop = (e) => {
    e.preventDefault();
    const copyListItems = [...itineraryStops];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    setItineraryStops(copyListItems);
    dragItem.current = null; dragOverItem.current = null; e.target.style.opacity = 1;
  };
  const handleDragEnd = (e) => { e.target.style.opacity = 1; };

  const handleFinalize = () => {
    navigate('/plan', { state: { prefillPackage: { title: `Custom Drive: ${origin} to ${destination}`, location: `${origin} to ${destination}` } } });
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', fontFamily: 'system-ui, -apple-system, sans-serif', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* 1. HERO & SEARCH */}
      <div style={{ position: 'relative', height: isSearching ? '25vh' : '50vh', minHeight: '220px', backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transition: 'all 0.5s ease-in-out' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.95))' }} />
        
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%', maxWidth: '900px', padding: '0 20px', boxSizing: 'border-box' }}>
          <h1 style={{ fontSize: isSearching ? '32px' : '48px', fontWeight: '800', color: 'white', marginBottom: '15px', textAlign: 'center', transition: 'all 0.3s' }}>
            Interactive Route Planner
          </h1>
          {!isSearching && (
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.9)', textAlign: 'center', marginBottom: '40px' }}>
              Enter your starting point and destination. We'll plot the route and dynamically find real landmarks along the way.
            </p>
          )}

          <form onSubmit={handleSearchRoutes} style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', padding: '15px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.2)', marginTop: isSearching ? '10px' : '0' }}>
            <div style={{ flex: '1 1 250px', position: 'relative' }}>
              <Navigation size={20} color="#9ca3af" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="Start (e.g. Delhi)" value={origin} onChange={(e)=>setOrigin(e.target.value)} required disabled={isLoading} style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', borderRadius: '12px', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 'bold' }} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 10px', color: 'white' }}><ArrowRight size={20} /></div>
            <div style={{ flex: '1 1 250px', position: 'relative' }}>
              <MapPin size={20} color="#16a34a" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
              <input type="text" placeholder="End (e.g. Ahmedabad)" value={destination} onChange={(e)=>setDestination(e.target.value)} required disabled={isLoading} style={{ width: '100%', boxSizing: 'border-box', padding: '16px 16px 16px 45px', borderRadius: '12px', border: 'none', outline: 'none', fontSize: '15px', fontWeight: 'bold' }} />
            </div>

            <button type="submit" disabled={isLoading} style={{ flex: '0 1 auto', padding: '0 30px', borderRadius: '12px', backgroundColor: '#16a34a', color: 'white', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer', height: '54px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {isLoading ? <><Loader2 size={18} className="animate-spin" /> {loadingText}</> : 'Map Route'}
            </button>
          </form>
        </div>
      </div>

      {/* 2. THREE-COLUMN DASHBOARD */}
      {isSearching && (
        <div style={{ maxWidth: '1400px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: 'minmax(300px, 1.1fr) minmax(300px, 1fr) minmax(350px, 1.1fr)', gap: '30px', animation: 'fadeIn 0.5s ease-out' }}>
          
          {/* COLUMN 1: TIMELINE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', position: 'sticky', top: '100px', height: 'fit-content' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '30px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '800', color: '#111827', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Clock color="#16a34a" /> Route Timeline
              </h2>
              <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '30px', fontStyle: 'italic' }}>Drag and drop stops to reorder your trip.</p>

              <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: '3px dashed #d1d5db', display: 'flex', flexDirection: 'column', gap: '25px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-30px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#111827', border: '3px solid white' }} />
                  <h4 style={{ fontSize: '12px', color: '#6b7280', fontWeight: '700', textTransform: 'uppercase' }}>Start</h4>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', textTransform: 'capitalize' }}>{origin}</p>
                </div>

                {itineraryStops.map((stop, index) => (
                  <div key={stop.id} draggable onDragStart={(e) => handleDragStart(e, index)} onDragEnter={(e) => handleDragEnter(e, index)} onDragEnd={handleDragEnd} onDragOver={(e) => e.preventDefault()} onDrop={handleDrop} style={{ position: 'relative', backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '12px', border: '1px solid #bbf7d0', display: 'flex', gap: '10px', alignItems: 'center', cursor: 'grab' }}>
                    <div style={{ position: 'absolute', left: '-28px', top: '15px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#16a34a', border: '3px solid white' }} />
                    <div style={{ cursor: 'grab', color: '#9ca3af' }}><GripVertical size={20} /></div>
                    <div style={{ flex: 1 }}>
                      <h4 style={{ fontSize: '11px', color: '#15803d', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '2px' }}>Stop {index + 1}</h4>
                      <p style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', marginBottom: '2px', lineHeight: '1.2' }}>{stop.name}</p>
                    </div>
                    <button onClick={() => removeStop(stop.id)} style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', padding: '5px' }}><Trash2 size={18} /></button>
                  </div>
                ))}

                <div style={{ position: 'relative' }}>
                  <div style={{ position: 'absolute', left: '-30px', top: '2px', width: '16px', height: '16px', borderRadius: '50%', backgroundColor: '#ea580c', border: '3px solid white' }} />
                  <h4 style={{ fontSize: '12px', color: '#6b7280', fontWeight: '700', textTransform: 'uppercase' }}>End</h4>
                  <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', textTransform: 'capitalize' }}>{destination}</p>
                </div>
              </div>

              <button onClick={handleFinalize} disabled={itineraryStops.length === 0} style={{ width: '100%', padding: '16px', borderRadius: '12px', backgroundColor: itineraryStops.length > 0 ? '#111827' : '#e5e7eb', color: itineraryStops.length > 0 ? 'white' : '#9ca3af', fontSize: '16px', fontWeight: 'bold', border: 'none', cursor: itineraryStops.length > 0 ? 'pointer' : 'not-allowed', marginTop: '40px', transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                Finalize Trip Details <ArrowRight size={18} />
              </button>
            </div>

            <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#111827', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={18} color="#0284c7" /> Add a Custom Stop
              </h3>
              <form onSubmit={handleAddCustomStop} style={{ display: 'flex', gap: '10px' }}>
                <input type="text" placeholder="Search exact place..." value={customStopName} onChange={(e) => setCustomStopName(e.target.value)} disabled={isFindingLocation} style={{ flex: 1, padding: '12px 15px', borderRadius: '10px', border: '1px solid #d1d5db', outline: 'none', fontSize: '14px', minWidth: '0' }} />
                <button type="submit" disabled={isFindingLocation} style={{ padding: '0 15px', borderRadius: '10px', backgroundColor: '#0284c7', color: 'white', fontWeight: 'bold', border: 'none', cursor: isFindingLocation ? 'not-allowed' : 'pointer' }}>
                  {isFindingLocation ? <Loader2 size={16} className="animate-spin" /> : 'Add'}
                </button>
              </form>
            </div>
          </div>

          {/* COLUMN 2: RELIABLE MAPLIBRE + OLA TILE WIDGET */}
          <div style={{ backgroundColor: '#e0f2fe', borderRadius: '24px', overflow: 'hidden', position: 'sticky', top: '100px', height: 'calc(100vh - 150px)', minHeight: '500px', border: '1px solid #bae6fd', boxShadow: 'inset 0 0 50px rgba(0,0,0,0.05)' }}>
            <div ref={mapContainerRef} style={{ width: '100%', height: '100%' }}>
              {!window.maplibregl && <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#0284c7', fontWeight: 'bold', textAlign: 'center', padding: '20px' }}>Loading Map Engine...</div>}
            </div>
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', backgroundColor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(5px)', padding: '10px 15px', borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 'bold', color: '#1f2937', zIndex: 30 }}>
              <MapIcon size={18} color="#0284c7" /> Powered by Ola Maps
            </div>
          </div>

          {/* COLUMN 3: DYNAMIC PILL RECOMMENDATIONS */}
          <div style={{ overflowY: 'auto', paddingRight: '10px' }} className="hide-scrollbar">
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: '#111827', marginBottom: '5px' }}>Route Suggestions</h2>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '25px', textTransform: 'capitalize' }}>
              Found {suggestedPlaces.length} attractions near {destination}.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {suggestedPlaces.length > 0 ? suggestedPlaces.map((rec) => {
                const isAdded = itineraryStops.find(s => s.id === rec.id);
                return (
                  <div key={rec.id} style={{ backgroundColor: 'white', borderRadius: '50px', padding: '10px', display: 'flex', alignItems: 'center', gap: '15px', border: isAdded ? '2px solid #16a34a' : '1px solid #e5e7eb', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', transition: 'all 0.2s' }}>
                    <div style={{ width: '80px', height: '80px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid #f3f4f6' }}>
                      <img src={rec.img} alt={rec.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <div style={{ flex: 1, overflow: 'hidden' }}>
                      <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{rec.name}</h4>
                      <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{rec.desc}</p>
                    </div>
                    <button onClick={() => isAdded ? removeStop(rec.id) : addStop(rec)} title={isAdded ? "Remove" : "Add"} style={{ width: '45px', height: '45px', borderRadius: '50%', flexShrink: 0, border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', marginRight: '5px', backgroundColor: isAdded ? '#f0fdf4' : '#f3f4f6', color: isAdded ? '#15803d' : '#374151' }}>
                      {isAdded ? <CheckCircle2 size={22} /> : <Plus size={22} />}
                    </button>
                  </div>
                )
              }) : (
                <div style={{ padding: '20px', textAlign: 'center', color: '#6b7280', backgroundColor: 'white', borderRadius: '20px', border: '1px dashed #d1d5db' }}>
                  No automatic suggestions found. Use the search box!
                </div>
              )}
            </div>
          </div>

        </div>
      )}

      {/* Global Styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default RoutePlannerPage;