/*import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Quote } from 'lucide-react';

const TravelerStories = () => {
  const scrollRef = useRef(null);

  // --- MOCK STORIES DATA ---
  const stories = [
    {
      id: 1,
      name: "Ananya Sharma",
      location: "Spiti Valley, Himachal",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      image: "https://tripstorz.com/_astro/key-monastery-in-spiti-valley-during-winter.CLBQd5yK_Z2dSSsR.jpg",
      title: "Finding Silence in the Mountains",
      snippet: "The silence in Spiti isn't empty; it's full of answers. Living with the locals in a mud house changed how I view luxury..."
    },
    {
      id: 2,
      name: "Rahul Mehta",
      location: "Gokarna, Karnataka",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      image: "https://s7ap1.scene7.com/is/image/incredibleindia/1-om-beach-gokarna-karnataka-city-hero?qlt=82&ts=1726720866389",
      title: "Beyond the Beaches",
      snippet: "Gokarna is more than just beaches. I hiked the cliff trails at sunrise and discovered a hidden temple that isn't on any map..."
    },
    {
      id: 3,
      name: "Priya & Amit",
      location: "Mawlynnong, Meghalaya",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      image: "https://www.esikkimtourism.in/wp-content/uploads/2018/07/Meghalaya-Mawlynnong.jpg",
      title: "Walking on Living Roots",
      snippet: "The living root bridges are nature's engineering marvel. We stayed in a homestay where the host cooked us a bamboo feast..."
    },
    {
      id: 4,
      name: "David Mathew",
      location: "Varanasi, UP",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      image: "https://www.indianpanorama.in/assets/images/tourpackages/banner/holy-varanasi.webp",
      title: "Colors of the Ghats",
      snippet: "Varanasi is an assault on the senses in the best way possible. The evening Aarti ceremony was a spiritual experience I'll never forget..."
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 350; // Card width + gap
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* HEADER *}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '40px' }}>
          <div>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>
              Traveler <span style={{ color: '#16a34a', fontStyle: 'italic' }}>Diaries</span>
            </h2>
            <p style={{ color: '#6b7280', fontSize: '18px' }}>
              Real stories from real wanderers.
            </p>
          </div>
          
          {/* NAVIGATION BUTTONS *}
          <div style={{ display: 'flex', gap: '15px' }}>
            <button 
              onClick={() => scroll('left')}
              style={{
                width: '45px', height: '45px', borderRadius: '50%',
                border: '1px solid #d1d5db', backgroundColor: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'white'; }}
            >
              <ChevronLeft size={20} color="#374151" />
            </button>
            <button 
              onClick={() => scroll('right')}
              style={{
                width: '45px', height: '45px', borderRadius: '50%',
                border: 'none', backgroundColor: '#16a34a',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', boxShadow: '0 4px 6px rgba(22, 163, 74, 0.3)',
                transition: 'all 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <ChevronRight size={20} color="white" />
            </button>
          </div>
        </div>

        {/* --- CAROUSEL CONTAINER --- *}
        <div 
          ref={scrollRef}
          className="hide-scrollbar"
          style={{
            display: 'flex',
            gap: '30px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            paddingBottom: '20px', // Space for shadow
            scrollBehavior: 'smooth'
          }}
        >
          {stories.map((story) => (
            <div key={story.id} style={{
              flex: '0 0 auto',
              width: '350px',
              scrollSnapAlign: 'start',
              backgroundColor: 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #f3f4f6',
              display: 'flex',
              flexDirection: 'column'
            }}>
              
              {/* Card Image *}
              <div style={{ height: '200px', position: 'relative' }}>
                <img 
                  src={story.image} 
                  alt={story.location} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute', bottom: '15px', left: '15px',
                  backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
                  padding: '5px 12px', borderRadius: '20px',
                  display: 'flex', alignItems: 'center', gap: '5px'
                }}>
                  <MapPin size={14} color="white" />
                  <span style={{ color: 'white', fontSize: '12px', fontWeight: '500' }}>{story.location}</span>
                </div>
              </div>

              {/* Card Content *}
              <div style={{ padding: '25px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Quote size={24} color="#e5e7eb" style={{ marginBottom: '10px' }} />
                
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>
                  {story.title}
                </h3>
                
                <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                  "{story.snippet}"
                </p>

                {/* Divider *}
                <div style={{ width: '100%', height: '1px', backgroundColor: '#f3f4f6', marginBottom: '20px' }}></div>

                {/* Traveler Profile *}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img 
                    src={story.avatar} 
                    alt={story.name} 
                    style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid white', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}
                  />
                  <div>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827', margin: 0 }}>{story.name}</p>
                    <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>Verified Traveler</p>
                  </div>
                  
                  <button style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: '600', color: '#16a34a', background: 'none', border: 'none', cursor: 'pointer' }}>
                    Read Story &rarr;
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TravelerStories;
*/

import React, { useState } from 'react';
import { User, MapPin, X, Calendar, Camera } from 'lucide-react';

const TravelerStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);

  // --- MOCK DATA WITH FULL STORIES & GALLERIES ---
  const stories = [
    {
      id: 1,
      name: "Arjun Mehta",
      location: "Spiti Valley, Himachal",
      date: "Oct 12, 2023",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      image: "https://spitiadventure.com/wp-content/uploads/2025/12/Spiti-Valley-Tour-Guide-.jpg",
      title: "Finding Silence in the Middle of Nowhere",
      preview: "The roads to Spiti are not for the faint-hearted. But once you cross the Kunzum Pass, the silence hits you...",
      fullStory: `The roads to Spiti are not for the faint-hearted. But once you cross the Kunzum Pass, the silence hits you. It’s not just the absence of noise; it’s the presence of peace. 
      
      We started our journey from Manali at 4 AM. The drive was treacherous, with the Chenab river roaring beside us. By the time we reached Kaza, the landscape had transformed into a cold desert—stark, barren, yet incredibly beautiful.
      
      The highlight was the night sky at Hikkim, the world's highest post office. I have never seen so many stars in my life. It felt like the galaxy was right there, just out of reach. We stayed in a local homestay, eating thukpa and listening to stories from the local lamas. Spiti isn't a vacation; it's a pilgrimage for the soul.`,
      gallery: [
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEieTitVXYXtwZbtrI2pGViiu7NPoohN9E_Z6aALW45xMcGWdsm1qvcLrqDDub52v5_MMtZbgIvg5YeGjPBE2NChXqcfv_fElFdz6mw6rXHM06TZ5ndmVdeVBNt1kXRTxq8sdVz_ovru_xI/w1200-h630-p-k-no-nu/Geu+Monastery%252C+Spiti+Valley%252C+Himachal+Pradesh%252C+India+%25282+of+5%2529.jpg", // Monastery
        "https://assets.cntraveller.in/photos/60ba0be8689bf55e0664ec68/master/w_1600%2Cc_limit/astro6-866x1183.jpg", // Night Sky
        "https://i0.wp.com/lahimalaya.com/wp-content/uploads/2020/03/Visit-Spiti-in-March.jpg?fit=1500%2C915&ssl=1"  // Road
      ]
    },
    {
      id: 2,
      name: "Sara Ali",
      location: "Varkala, Kerala",
      date: "Dec 05, 2023",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      title: "Sunsets and Seafood on the Cliffs",
      preview: "Varkala is unlike any other beach in India. The red cliffs rising above the Arabian Sea create a dramatic backdrop...",
      fullStory: `Varkala is unlike any other beach in India. The red cliffs rising above the Arabian Sea create a dramatic backdrop that you simply can't find in Goa.
      
      My mornings began with yoga on the rooftop of my hostel, watching the fishermen bring in their catch. The vibe here is slow, deliberate. You don't rush in Varkala.
      
      The best part? The food. The cliff edge is lined with cafes serving the freshest seafood. I spent hours at Café del Mar, reading a book and sipping iced coffee. Walking down the steps to the Black Beach for a sunset swim became my daily ritual. If you want to disconnect to reconnect, this is the place.`,
      gallery: [
        "https://images.unsplash.com/photo-1590050752117-238cb0fb5689?auto=format&fit=crop&w=600&q=80", // Cliff View
        "https://images.unsplash.com/photo-1596323676158-1f486d5252b4?auto=format&fit=crop&w=600&q=80", // Food
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"  // Beach
      ]
    },
    {
      id: 3,
      name: "Rohan Das",
      location: "Meghalaya, North East",
      date: "Jan 15, 2024",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg",
      image: "https://images.unsplash.com/photo-1622308644420-a94bb8a23fa9?auto=format&fit=crop&w=800&q=80",
      title: "Walking on Living Roots",
      preview: "Trekking to the Double Decker Root Bridge was the most physically demanding yet rewarding experience of my life...",
      fullStory: `Trekking to the Double Decker Root Bridge was the most physically demanding yet rewarding experience of my life. 3,500 steps down into the valley, surrounded by dense jungle.
      
      When we finally saw the bridges, it was surreal. To think that these were not built, but grown over centuries by the Khasi people, is mind-blowing. Nature and humanity working in perfect harmony.
      
      We took a dip in the crystal clear blue pools underneath the bridge. The water was freezing but refreshing. The hike back up tested our endurance, but the local Maggi and tea stalls kept us going. Meghalaya truly is the abode of clouds.`,
      gallery: [
        "https://images.unsplash.com/photo-1592345279419-959d784e8aad?auto=format&fit=crop&w=600&q=80", // Waterfall
        "https://images.unsplash.com/photo-1626084022830-589574516629?auto=format&fit=crop&w=600&q=80", // Bridge
        "https://images.unsplash.com/photo-1605628574765-6548df80cc1b?auto=format&fit=crop&w=600&q=80"  // Jungle
      ]
    }
  ];

  return (
    <section id="traveler-diaries" style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* SECTION HEADER */}
        <div style={{ marginBottom: '50px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>
            Traveler <span style={{ color: '#16a34a', fontStyle: 'italic' }}>Diaries</span>
          </h2>
          <p style={{ color: '#6b7280', fontSize: '18px' }}>Real stories from the Odessey community.</p>
        </div>

        {/* CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          {stories.map((story) => (
            <div 
              key={story.id} 
              onClick={() => setSelectedStory(story)}
              style={{
                borderRadius: '20px', overflow: 'hidden', backgroundColor: 'white',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6',
                cursor: 'pointer', transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              {/* Card Image */}
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={story.image} alt={story.location} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: '15px', left: '15px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', backdropFilter: 'blur(4px)' }}>
                  <MapPin size={12} /> {story.location}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '25px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '15px' }}>
                  <img src={story.avatar} alt={story.name} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid #e5e7eb' }} />
                  <div>
                    <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#111827' }}>{story.name}</h4>
                    <span style={{ fontSize: '12px', color: '#9ca3af' }}>{story.date}</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px', lineHeight: '1.4' }}>{story.title}</h3>
                <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>{story.preview}</p>
                <span style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px' }}>Read Full Story &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- POP-UP MODAL --- */}
      {selectedStory && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(5px)', padding: '20px'
        }}>
          
          <div style={{
            backgroundColor: 'white', width: '100%', maxWidth: '800px',
            height: '90vh', borderRadius: '24px', overflowY: 'auto',
            position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            display: 'flex', flexDirection: 'column'
          }}>

            {/* Close Button */}
            <button 
              onClick={() => setSelectedStory(null)}
              style={{
                position: 'fixed', top: '20px', right: '20px',
                backgroundColor: 'white', border: 'none', borderRadius: '50%',
                width: '40px', height: '40px', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)', zIndex: 1010
              }}
            >
              <X size={24} color="#374151" />
            </button>

            {/* Modal Hero Image */}
            <div style={{ height: '350px', flexShrink: 0 }}>
              <img 
                src={selectedStory.image} 
                alt={selectedStory.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* Modal Content */}
            <div style={{ padding: '40px' }}>
              
              {/* Header Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                <div>
                  <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '10px', lineHeight: '1.2' }}>{selectedStory.title}</h2>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#6b7280', fontSize: '14px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><MapPin size={16} /> {selectedStory.location}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}><Calendar size={16} /> {selectedStory.date}</span>
                  </div>
                </div>
                <img src={selectedStory.avatar} alt={selectedStory.name} style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid #f3f4f6' }} />
              </div>

              {/* The Story Text */}
              <div style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '40px', whiteSpace: 'pre-line' }}>
                {selectedStory.fullStory}
              </div>

              {/* Photo Gallery Section */}
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Camera color="#16a34a" /> Captured Moments
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px' }}>
                  {selectedStory.gallery.map((img, idx) => (
                    <div key={idx} style={{ borderRadius: '12px', overflow: 'hidden', height: '150px' }}>
                      <img src={img} alt="Gallery" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'} />
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default TravelerStories;