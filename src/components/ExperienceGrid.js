import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Utensils, Trees, Building2 } from 'lucide-react';

const ExperienceGrid = () => {
  // --- CAROUSEL DATA (Right Side) ---
  const carouselImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80", // India Fort
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80", // Kerala Boat
    "https://images.unsplash.com/photo-1562979314-bee7453e911c?auto=format&fit=crop&w=800&q=80", // Mumbai City
    "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=800&q=80"  // Indian Food
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
  };

  // --- CATEGORY DATA (Left Side) ---
  const categories = [
    {
      title: "Food",
      icon: Utensils,
      color: "#fef3c7", // Light yellow bg
      textColor: "#d97706", // Dark yellow text
      desc: "Taste the authentic spices and flavors of local cuisines."
    },
    {
      title: "Nature",
      icon: Trees,
      color: "#dcfce7", // Light green bg
      textColor: "#16a34a", // Dark green text
      desc: "Connect with the wild, from lush forests to calm rivers."
    },
    {
      title: "Cities",
      icon: Building2,
      color: "#e0f2fe", // Light blue bg
      textColor: "#0284c7", // Dark blue text
      desc: "Explore the heritage and vibrant life of ancient cities."
    }
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: '#fff' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Main Heading */}
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '40px', textAlign: 'center' }}>
          Curated <span style={{ color: '#16a34a', fontStyle: 'italic' }}>Experiences</span>
        </h2>

        {/* --- MAIN FLEX CONTAINER --- */}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', // Wraps on mobile
          gap: '30px', 
          height: 'auto',
          minHeight: '500px' // Ensures consistent height
        }}>

          {/* === LEFT SIDE: CATEGORIES (60%) === */}
          <div style={{ 
            flex: '3', // Takes up 3 parts of space
            minWidth: '300px',
            display: 'flex',
            gap: '20px',
            justifyContent: 'space-between'
          }}>
            {categories.map((cat, index) => (
              <div key={index} style={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '15px' 
              }}>
                
                {/* 1. TOP BOX (The Card) */}
                <div style={{
                  flex: '1', // Fills available height
                  backgroundColor: cat.color,
                  borderRadius: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: cat.textColor,
                  minHeight: '200px',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <cat.icon size={48} style={{ marginBottom: '15px' }} />
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>{cat.title}</h3>
                </div>

                {/* 2. BOTTOM BOX (The Text) */}
                <div style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '16px',
                  padding: '20px',
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  height: '120px', // Fixed height for alignment
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {cat.desc}
                </div>

              </div>
            ))}
          </div>

          {/* === RIGHT SIDE: CAROUSEL (40%) === */}
          <div style={{ 
            flex: '2', // Takes up 2 parts of space
            minWidth: '300px',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            
            {/* The Image */}
            <img 
              src={carouselImages[currentIndex]} 
              alt="Experience Gallery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                top: 0, 
                left: 0,
                transition: 'opacity 0.5s ease-in-out'
              }} 
            />

            {/* Overlay Gradient */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>

            {/* Left Arrow */}
            <button 
              onClick={prevImage}
              style={{
                position: 'absolute',
                left: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px', 
                height: '40px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <ChevronLeft size={24} color="#1f2937" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={nextImage}
              style={{
                position: 'absolute',
                right: '20px',
                top: '50%',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: 'none',
                borderRadius: '50%',
                width: '40px', 
                height: '40px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <ChevronRight size={24} color="#1f2937" />
            </button>

            {/* Dots Indicator */}
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '8px'
            }}>
              {carouselImages.map((_, idx) => (
                <div 
                  key={idx}
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    backgroundColor: idx === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                    transition: 'background 0.3s'
                  }}
                />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceGrid;