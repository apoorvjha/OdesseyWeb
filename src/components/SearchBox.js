/*import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Mock data for suggestions (Since we don't have a backend yet)
  const suggestions = [
    { name: "Munnar Hills", state: "Kerala", type: "mountain" },
    { name: "Taj Mahal", state: "Uttar Pradesh", type: "heritage" },
    { name: "Kerala Backwaters", state: "Kerala", type: "beach" },
    { name: "Gulmarg Valley", state: "Kashmir", type: "mountain" },
    { name: "Shimla Hills", state: "Himachal", type: "mountain" },
  ];

  const handleSearchClick = () => {
    if (!location) return;

    // Find if the typed location matches our database
    const match = suggestions.find(place => 
      place.name.toLowerCase().includes(location.toLowerCase()) || 
      place.state.toLowerCase().includes(location.toLowerCase())
    );

    // If match found, pass the object, otherwise pass a generic object with the text
    const result = match || { name: location, state: "India", type: "general", description: "Search result", famousFor: [] };
    
    onSearch(result);
    setShowSuggestions(false);
  };

  const selectSuggestion = (place) => {
    setLocation(place.name);
    setShowSuggestions(false);
    onSearch(place);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-2 shadow-2xl flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        
        {/* Location Input *}
        <div className="relative flex-1 w-full p-2">
          <div className="flex items-center px-4">
            <MapPin className="h-5 w-5 text-green-600 mr-3" />
            <div className="flex-1 text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Destination</label>
              <input
                type="text"
                placeholder="Where to?"
                className="w-full text-gray-900 font-medium placeholder-gray-400 outline-none truncate"
                value={location}
                onChange={(e) => {
                  setLocation(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
              />
            </div>
          </div>

          {/* Dropdown Suggestions *}
          {showSuggestions && location.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-4 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 text-left">
              {suggestions
                .filter(s => s.name.toLowerCase().includes(location.toLowerCase()) || s.state.toLowerCase().includes(location.toLowerCase()))
                .map((place, idx) => (
                  <div 
                    key={idx}
                    onClick={() => selectSuggestion(place)}
                    className="px-6 py-3 hover:bg-green-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0"
                  >
                    <p className="font-medium text-gray-800">{place.name}</p>
                    <p className="text-xs text-gray-500">{place.state}</p>
                  </div>
                ))}
            </div>
          )}
        </div>

        {/* Date Input (Visual Only for now) *}
        <div className="flex-1 w-full p-2">
          <div className="flex items-center px-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <Calendar className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Dates</label>
              <span className="block text-gray-900 font-medium truncate">Add dates</span>
            </div>
          </div>
        </div>

        {/* Guests Input (Visual Only for now) *}
        <div className="flex-1 w-full p-2">
          <div className="flex items-center px-4 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <Users className="h-5 w-5 text-green-600 mr-3" />
            <div className="text-left">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Travelers</label>
              <span className="block text-gray-900 font-medium truncate">Add guests</span>
            </div>
          </div>
        </div>

        {/* Search Button *}
        <div className="p-2 w-full md:w-auto">
          <button 
            onClick={handleSearchClick}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white p-4 rounded-xl shadow-lg hover:shadow-green-200/50 transition-all duration-200 flex items-center justify-center md:aspect-square"
          >
            <Search className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
*/

/*
import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const SearchBox = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearchClick = () => {
    if (!location) return;
    onSearch({ name: location });
  };

  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '50px', // Makes it pill-shaped
      padding: '10px 25px',
      display: 'flex',
      flexWrap: 'wrap', // Allows wrapping on small phones
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px', // 👈 THIS CONTROLS THE DISTANCE BETWEEN ITEMS
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      maxWidth: '850px',
      width: '95%',
      margin: '0 auto' // Centers the box itself
    }}>
      
      {/* 1. Destination Input *}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '200px' }}>
        <MapPin color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Destination</label>
          <input
            type="text"
            placeholder="Where to?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              fontWeight: '600',
              color: '#1f2937',
              width: '100%',
              fontSize: '14px'
            }}
          />
        </div>
      </div>

      {/* Divider Line (Visual only) *}
      <div style={{ width: '1px', height: '30px', backgroundColor: '#e5e7eb' }}></div>

      {/* 2. Dates (Visual Placeholder) *}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
        <Calendar color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Dates</label>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', cursor: 'pointer' }}>Add dates</span>
        </div>
      </div>

       {/* Divider Line *}
       <div style={{ width: '1px', height: '30px', backgroundColor: '#e5e7eb' }}></div>

      {/* 3. Travelers (Visual Placeholder) *}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
        <Users color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Travelers</label>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937', cursor: 'pointer' }}>Add guests</span>
        </div>
      </div>

      {/* 4. Search Button *}
        onClick={handleSearchClick}
        style={{
          backgroundColor: '#16a34a', // Green color
          border: 'none',
          borderRadius: '50%', // Circle shape
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(22, 163, 74, 0.4)',
          marginLeft: '10px'
        }}
      >
        <Search color="white" size={24} />
      </button>

    </div>
  );
};

export default SearchBox;
*/

import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';
import { State, City } from 'country-state-city';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SearchBox = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [startDate, setStartDate] = useState(null);
  
  //  1. NEW STATE FOR GUESTS
  const [guests, setGuests] = useState(1); // Default to 2 guests

  const wrapperRef = useRef(null);

  // Load Data
  useEffect(() => {
    const states = State.getStatesOfCountry('IN').map(state => ({
      name: state.name, type: 'State', isoCode: state.isoCode
    }));
    const cities = City.getCitiesOfCountry('IN').map(city => ({
      name: city.name, type: 'City', stateCode: city.stateCode
    }));
    window.allLocations = [...states, ...cities];
  }, []);

  // Filter logic
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.length > 1) {
      const filtered = window.allLocations.filter(item => 
        item.name.toLowerCase().startsWith(value.toLowerCase())
      ).slice(0, 10);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const handleSelect = (item) => {
    setQuery(item.name);
    setShowSuggestions(false);
  };

  // Close dropdown logic
  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  const inputStyle = {
    border: 'none',
    outline: 'none',
    fontWeight: '600',
    color: '#1f2937',
    width: '100%',
    fontSize: '14px',
    backgroundColor: 'transparent'
  };

  return (
    <div ref={wrapperRef} style={{
      backgroundColor: 'white',
      borderRadius: '50px',
      padding: '10px 25px',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '20px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
      maxWidth: '850px',
      width: '95%',
      margin: '0 auto',
      position: 'relative',
      zIndex: 40
    }}>
      
      {/* 1. Destination Input */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '200px', position: 'relative' }}>
        <MapPin color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Destination</label>
          <input
            type="text"
            placeholder="Search state or city..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => query.length > 1 && setShowSuggestions(true)}
            style={inputStyle}
          />
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && (
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '-20px',
            width: '300px',
            backgroundColor: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
            zIndex: 100,
            overflow: 'hidden',
            maxHeight: '300px',
            overflowY: 'auto'
          }}>
            {suggestions.map((item, index) => (
              <div 
                key={index}
                onClick={() => handleSelect(item)}
                style={{
                  padding: '12px 20px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f3f4f6',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0fdf4'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
              >
                <span style={{ fontWeight: '500', color: '#374151' }}>{item.name}</span>
                <span style={{ fontSize: '10px', color: '#9ca3af', textTransform: 'uppercase' }}>{item.type}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ width: '1px', height: '30px', backgroundColor: '#e5e7eb' }}></div>

      {/* 2. Dates */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
        <Calendar color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Dates</label>
          <div style={{ width: '100%' }}>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Add dates"
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              customInput={<input style={{ ...inputStyle, cursor: 'pointer' }} />}
            />
          </div>
        </div>
      </div>

       <div style={{ width: '1px', height: '30px', backgroundColor: '#e5e7eb' }}></div>

      {/* 3. Travelers - NOW EDITABLE */}
      <div style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: '150px' }}>
        <Users color="#16a34a" size={20} style={{ marginRight: '10px' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
          <label style={{ fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', color: '#6b7280' }}>Travelers</label>
          
          {/* 👇 GUEST INPUT FIELD */}
          <input 
            type="number" 
            min="1" 
            max="20"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            style={inputStyle}
          />
        </div>
      </div>

      <button 
        onClick={() => onSearch({ name: query, date: startDate, guests: guests })}
        style={{
          backgroundColor: '#16a34a',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(22, 163, 74, 0.4)',
          marginLeft: '10px'
        }}
      >
        <Search color="white" size={24} />
      </button>

    </div>
  );
};

export default SearchBox;