/*import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState, useRef } from 'react';
import { State } from 'country-state-city';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ExploreStates = () => {
  const [states, setStates] = useState([]);
  const scrollContainerRef = useRef(null);

  // 👇 RELIABLE IMAGE LIST (No more broken links)
  const stateImages = [
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80", // India Palace
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80", // Taj Mahal
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-pavagadh-temple-gujarat-state-hero2?qlt=82&ts=1726733709050", // Pavagadh Gujarat
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-varkala-cliff-varkala-kerala-attr-hero?qlt=82&ts=1742154423234", // Varkala
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80", // Golden Temple
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Auli_Himalayas.jpg"  // Auli
  ];

  useEffect(() => {
    const indiaStates = State.getStatesOfCountry('IN');
    
    // Duplicate list for "endless" feel
    const infiniteList = [
      ...indiaStates, ...indiaStates, ...indiaStates
    ];
    
    setStates(infiniteList);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section style={{ position: 'relative', padding: '60px 0', backgroundColor: '#f9fafb' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>
          Explore by <span style={{ color: '#16a34a', fontStyle: 'italic' }}>States</span>
        </h2>
        <p style={{ color: '#6b7280', fontSize: '18px' }}>
          Swipe to discover the unique culture of every region.
        </p>
      </div>

      {/* LEFT ARROW *}
      <button 
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          left: '20px',
          top: '55%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronLeft size={24} color="#374151" />
      </button>

      {/* RIGHT ARROW *}
      <button 
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          right: '20px',
          top: '55%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronRight size={24} color="#374151" />
      </button>

      {/* SCROLL CONTAINER *}
      <div 
        ref={scrollContainerRef}
        className="hide-scrollbar" 
        style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory', 
          padding: '20px 60px',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {states.map((state, index) => (
          <div key={`${state.isoCode}-${index}`} style={{
            flex: '0 0 auto',
            width: '280px',
            scrollSnapAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
            border: '1px solid #e5e7eb',
            transition: 'transform 0.3s'
          }}>
            
            {/* Image Area *}
            <div style={{ height: '180px', backgroundColor: '#f3f4f6' }}>
              <img 
                // 👇 THIS LINE FIXES THE IMAGES
                // It cycles through our list of 6 valid images
                src={stateImages[index % stateImages.length]}
                alt={state.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Content Area *}
            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {state.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Discover eco-friendly stays and local traditions in {state.name}.
              </p>
              
              <button style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#f0fdf4',
                color: '#16a34a',
                fontSize: '13px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreStates;
*/

import React, { useEffect, useState, useRef } from 'react';
import { State } from 'country-state-city';
import { ChevronLeft, ChevronRight } from 'lucide-react';
// 👇 1. IMPORT THIS
import { useNavigate } from 'react-router-dom';

const ExploreStates = () => {
  // 👇 2. ADD THIS LINE HERE (Inside the component, at the top)
  const navigate = useNavigate(); 

  const [states, setStates] = useState([]);
  const scrollContainerRef = useRef(null);

  // Reliable Image List
  const stateImages = [
    "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80", 
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80", 
    "https://images.unsplash.com/photo-1519955266818-0231b63402bc?auto=format&fit=crop&w=600&q=80", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-varkala-cliff-varkala-kerala-attr-hero?qlt=82&ts=1742154423234", 
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80", 
    "https://images.unsplash.com/photo-1598324789736-4861f89564a0?auto=format&fit=crop&w=600&q=80"
  ];

  useEffect(() => {
    const indiaStates = State.getStatesOfCountry('IN');
    // Duplicate for endless scroll feel
    const infiniteList = [...indiaStates, ...indiaStates, ...indiaStates];
    setStates(infiniteList);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = 320; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section style={{ position: 'relative', padding: '60px 0', backgroundColor: '#f9fafb' }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto 40px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>
          Explore by <span style={{ color: '#16a34a', fontStyle: 'italic' }}>States</span>
        </h2>
        <p style={{ color: '#6b7280', fontSize: '18px' }}>
          Swipe to discover the unique culture of every region.
        </p>
      </div>

      {/* ARROWS */}
      <button 
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          left: '20px',
          top: '55%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronLeft size={24} color="#374151" />
      </button>

      <button 
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          right: '20px',
          top: '55%',
          transform: 'translateY(-50%)',
          zIndex: 10,
          backgroundColor: 'white',
          border: '1px solid #e5e7eb',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        <ChevronRight size={24} color="#374151" />
      </button>

      {/* SCROLL CONTAINER */}
      <div 
        ref={scrollContainerRef}
        className="hide-scrollbar" 
        style={{
          display: 'flex',
          gap: '30px',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory', 
          padding: '20px 60px',
          scrollBehavior: 'smooth',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {states.map((state, index) => (
          <div 
            key={`${state.isoCode}-${index}`}
            // 👇 3. ADD ONCLICK HERE
            onClick={() => navigate(`/state/${state.isoCode}`)}
            style={{
              flex: '0 0 auto',
              width: '280px',
              scrollSnapAlign: 'center',
              backgroundColor: 'white',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
              border: '1px solid #e5e7eb',
              transition: 'transform 0.3s',
              cursor: 'pointer' // Shows hand cursor on hover
            }}
          >
            
            <div style={{ height: '180px', backgroundColor: '#f3f4f6' }}>
              <img 
                src={stateImages[index % stateImages.length]}
                alt={state.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: '20px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {state.name}
              </h3>
              <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                Discover eco-friendly stays and local traditions in {state.name}.
              </p>
              
              <button style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                backgroundColor: '#f0fdf4',
                color: '#16a34a',
                fontSize: '13px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer'
              }}>
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExploreStates;