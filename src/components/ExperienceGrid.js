/*import React, { useState } from 'react';
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
        
        {/* Main Heading *}
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '40px', textAlign: 'center' }}>
          Curated <span style={{ color: '#16a34a', fontStyle: 'italic' }}>Experiences</span>
        </h2>

        {/* --- MAIN FLEX CONTAINER --- *}
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', // Wraps on mobile
          gap: '30px', 
          height: 'auto',
          minHeight: '500px' // Ensures consistent height
        }}>

          {/* === LEFT SIDE: CATEGORIES (60%) === *}
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
                
                {/* 1. TOP BOX (The Card) *}
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

                {/* 2. BOTTOM BOX (The Text) *}
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

          {/* === RIGHT SIDE: CAROUSEL (40%) === *}
          <div style={{ 
            flex: '2', // Takes up 2 parts of space
            minWidth: '300px',
            position: 'relative',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
          }}>
            
            {/* The Image *}
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

            {/* Overlay Gradient *}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }}></div>

            {/* Left Arrow *}
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

            {/* Right Arrow *}
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

            {/* Dots Indicator *}
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
*/

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowRight, Mountain, Coffee, Map, Landmark, Compass, User, Smile, Globe, Home, Users, Calendar, Wallet } from 'lucide-react';

const ExperienceGrid = () => {
  // --- STATE ---
  // 1. Left Side: Controls which 3 cards are visible
  const [cardScrollIndex, setCardScrollIndex] = useState(0); 

  // 2. Right Side: Controls which Category is Active (for the image source)
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  // 3. Right Side: Controls the specific SLIDE within the Active Category
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // 4. Modal State
  const [selectedCategory, setSelectedCategory] = useState(null);

  // --- DATA: Each Category now has an ARRAY of 'images' ---
  const categories = [
    {
      id: 1, title: "Nature & Landscape", icon: Mountain,
      subtitle: "What the place looks and feels like", color: "#dcfce7", textColor: "#166534",
      items: ["Mountains / Hills", "Beaches / Coastline", "Forests / Jungles", "Deserts", "Lakes & Rivers"],
      images: [
        "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", // Mountain
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", // Beach
        "https://images.unsplash.com/photo-1448375240586-dfd8f37933ff?auto=format&fit=crop&w=800&q=80"  // Forest
      ]
    },
    {
      id: 2, title: "Food & Culinary", icon: Coffee,
      subtitle: "What you eat & drink there", color: "#fef9c3", textColor: "#854d0e",
      items: ["Street Food", "Local Cuisine", "Cafés & Coffee Culture", "Seafood", "Food Trails"],
      images: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Plated
        "https://images.unsplash.com/photo-1606491956689-2ea28c674675?auto=format&fit=crop&w=800&q=80", // Street Food
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80"  // Coffee
      ]
    },
    {
      id: 3, title: "Urban vs Rural", icon: Map,
      subtitle: "Pace & vibe", color: "#dbeafe", textColor: "#1e40af",
      items: ["Metro City", "Heritage City", "Small Town", "Village Life", "Remote / Off-grid"],
      images: [
        "https://images.unsplash.com/photo-1449824913929-49aa711563b1?auto=format&fit=crop&w=800&q=80", // City
        "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80", // Village
        "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?auto=format&fit=crop&w=800&q=80"  // Metro
      ]
    },
    {
      id: 4, title: "Culture & Heritage", icon: Landmark,
      subtitle: "Stories, people, history", color: "#ffedd5", textColor: "#9a3412",
      items: ["Historical Monuments", "Temples / Spiritual Sites", "Art & Craft Hubs", "Tribal / Indigenous Culture"],
      images: [
        "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80", // Taj
        "https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?auto=format&fit=crop&w=800&q=80", // Temple
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80"  // Art
      ]
    },
    {
      id: 5, title: "Adventure Level", icon: Compass,
      subtitle: "What you do there", color: "#fee2e2", textColor: "#991b1b",
      items: ["Trekking / Hiking", "Rafting / Kayaking", "Scuba / Snorkeling", "Paragliding"],
      images: [
        "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80", // Hike
        "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?auto=format&fit=crop&w=800&q=80", // Camp
        "https://images.unsplash.com/photo-1544551763-46a8723ba3f9?auto=format&fit=crop&w=800&q=80"  // Kayak
      ]
    },
    {
      id: 6, title: "Wellness & Slow Travel", icon: Smile,
      subtitle: "How it makes you feel", color: "#f3e8ff", textColor: "#6b21a8",
      items: ["Yoga & Meditation", "Ayurveda / Healing", "Digital Detox", "Silent Retreats"],
      images: [
        "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=800&q=80", // Yoga
        "https://images.unsplash.com/photo-1599447421405-0c174ac2526e?auto=format&fit=crop&w=800&q=80", // Spa
        "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"  // Meditation
      ]
    },
    {
      id: 7, title: "Social & Festive", icon: Users,
      subtitle: "Energy & crowd", color: "#fce7f3", textColor: "#9d174d",
      items: ["Party Destination", "Festival Town", "Nightlife", "Cultural Events"],
      images: [
        "https://images.unsplash.com/photo-1514525253440-b393452e8d26?auto=format&fit=crop&w=800&q=80", // Party
        "https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?auto=format&fit=crop&w=800&q=80", // Festival
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"  // Crowd
      ]
    },
    {
      id: 8, title: "Sustainability", icon: Globe,
      subtitle: "Impact-driven travel", color: "#ecfccb", textColor: "#3f6212",
      items: ["Eco-Friendly", "Community-Based Tourism", "Farm Stays", "Local-Owned Experiences"],
      images: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80", // Eco
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80", // Field
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80"  // Plants
      ]
    },
    {
      id: 9, title: "Stay Experience", icon: Home,
      subtitle: "Where & how you live", color: "#e0e7ff", textColor: "#3730a3",
      items: ["Luxury Resorts", "Boutique Hotels", "Homestays", "Eco Lodges"],
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80", // Resort
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80", // Hotel
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=80"  // Room
      ]
    },
    {
      id: 10, title: "Travel Style", icon: User,
      subtitle: "Who it’s best for", color: "#ccfbf1", textColor: "#115e59",
      items: ["Solo Travelers", "Couples", "Families", "Group Trips"],
      images: [
        "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80", // Solo
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80", // Friends
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80"  // Family
      ]
    },
    {
      id: 11, title: "Time & Seasonality", icon: Calendar,
      subtitle: "When to go", color: "#ffedd5", textColor: "#9a3412",
      items: ["All-Season Destination", "Monsoon Magic", "Winter Wonderland", "Summer Escape"],
      images: [
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80", // Season
        "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&w=800&q=80", // Sun
        "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?auto=format&fit=crop&w=800&q=80"  // Snow
      ]
    },
    {
      id: 12, title: "Budget & Accessibility", icon: Wallet,
      subtitle: "Practical filters", color: "#f1f5f9", textColor: "#334155",
      items: ["Budget-Friendly", "Mid-Range", "Luxury", "Easy to Reach"],
      images: [
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80", // Money
        "https://images.unsplash.com/photo-1526304640152-d4619684e484?auto=format&fit=crop&w=800&q=80", // Coins
        "https://images.unsplash.com/photo-1518183214770-9cffbec72538?auto=format&fit=crop&w=800&q=80"  // Map
      ]
    }
  ];

  // --- HELPERS FOR INFINITE CYCLING ---
  const getSafeIndex = (index, length) => {
    return ((index % length) + length) % length;
  };

  // 1. Get Visible Cards (Left)
  const visibleCards = [
    categories[getSafeIndex(cardScrollIndex, categories.length)],
    categories[getSafeIndex(cardScrollIndex + 1, categories.length)],
    categories[getSafeIndex(cardScrollIndex + 2, categories.length)],
  ];

  // 2. Get Currently Active Category (for Right Side)
  const activeCategory = categories[getSafeIndex(activeCategoryIndex, categories.length)];
  
  // 3. Get Current Slide Image (from the Active Category's images)
  const currentHeroImage = activeCategory.images[getSafeIndex(currentSlideIndex, activeCategory.images.length)];

  // --- HANDLERS ---
  
  // Hovering a card: Sets the Active Category + Resets slideshow to 0
  const handleCardHover = (catIndex) => {
    setActiveCategoryIndex(catIndex);
    setCurrentSlideIndex(0); // Always start from first image when switching category
  };

  const scrollCardsLeft = () => setCardScrollIndex(prev => prev - 1);
  const scrollCardsRight = () => setCardScrollIndex(prev => prev + 1);

  // Right Side Arrows: Cycle through the images of the CURRENT category
  const scrollSlideLeft = () => setCurrentSlideIndex(prev => prev - 1);
  const scrollSlideRight = () => setCurrentSlideIndex(prev => prev + 1);

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '40px', color: '#111827' }}>
          Curated <span style={{ color: '#16a34a' }}>Experiences</span>
        </h2>

        {/* --- MAIN GRID CONTAINER --- */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '40px', alignItems: 'stretch' }}>
          
          {/* 1. LEFT SIDE: CARD LIST */}
          <div style={{ position: 'relative' }}>
            
            {/* Card Nav Buttons */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '15px' }}>
              <button onClick={scrollCardsLeft} style={{ padding: '8px', borderRadius: '50%', border: '1px solid #e5e7eb', cursor: 'pointer', backgroundColor: 'white' }}>
                <ChevronLeft size={20} color="#374151" />
              </button>
              <button onClick={scrollCardsRight} style={{ padding: '8px', borderRadius: '50%', border: '1px solid #e5e7eb', cursor: 'pointer', backgroundColor: 'white' }}>
                <ChevronRight size={20} color="#374151" />
              </button>
            </div>

            {/* Visible Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
              {visibleCards.map((cat) => {
                const isActive = cat.id === activeCategory.id;

                return (
                  <div 
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat)}
                    // 👇 HOVER: Updates activeCategory, Resets slideshow
                    onMouseEnter={() => handleCardHover(categories.indexOf(cat))}
                    style={{
                      backgroundColor: cat.color,
                      borderRadius: '24px',
                      padding: '25px',
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: isActive ? `2px solid ${cat.textColor}` : '2px solid transparent',
                      transform: isActive ? 'scale(1.02)' : 'scale(1)',
                      minHeight: '320px'
                    }}
                  >
                    <div>
                      <div style={{ marginBottom: '20px', color: cat.textColor }}><cat.icon size={40} /></div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: cat.textColor, marginBottom: '10px', lineHeight: '1.3' }}>{cat.title}</h3>
                      <p style={{ fontSize: '13px', color: cat.textColor, opacity: 0.9, lineHeight: '1.5' }}>{cat.subtitle}</p>
                    </div>
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '13px', fontWeight: '600', color: cat.textColor }}>
                      Explore <ArrowRight size={14} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 2. RIGHT SIDE: SLIDESHOW PREVIEW */}
          <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '400px' }}>
            
            {/* The Image (Changes based on activeCategory + currentSlideIndex) */}
            <img 
              src={currentHeroImage} 
              alt={activeCategory.title} 
              style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'opacity 0.3s ease' }} 
            />
            
            {/* Text Overlay */}
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '30px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
              <h3 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '5px' }}>{activeCategory.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '14px' }}>
                {activeCategory.items[getSafeIndex(currentSlideIndex, activeCategory.items.length)] || "Explore"}
              </p>
            </div>

            {/* Slideshow Arrows (Control ONLY the image slide) */}
            <div style={{ 
              position: 'absolute', top: '50%', left: 0, right: 0, 
              transform: 'translateY(-50%)', 
              display: 'flex', justifyContent: 'space-between', padding: '0 20px',
              zIndex: 10 
            }}>
              <button 
                onClick={scrollSlideLeft}
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
              >
                <ChevronLeft size={24} color="#1f2937" />
              </button>
              
              <button 
                onClick={scrollSlideRight}
                style={{ backgroundColor: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
              >
                <ChevronRight size={24} color="#1f2937" />
              </button>
            </div>

            {/* Dots (Show which image # is active) */}
            <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '8px' }}>
              {activeCategory.images.map((_, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    width: '8px', height: '8px', borderRadius: '50%', 
                    backgroundColor: getSafeIndex(currentSlideIndex, activeCategory.images.length) === idx ? 'white' : 'rgba(255,255,255,0.5)',
                    transition: 'all 0.3s'
                  }} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* --- MODAL --- */}
      {selectedCategory && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 100,
          backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'
        }}>
          <div style={{
            backgroundColor: 'white', width: '100%', maxWidth: '600px',
            borderRadius: '24px', overflow: 'hidden', position: 'relative',
            maxHeight: '80vh', display: 'flex', flexDirection: 'column',
            boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
          }}>
            <div style={{ padding: '30px', backgroundColor: selectedCategory.color }}>
              <button 
                onClick={() => setSelectedCategory(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'white', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}
              >
                <X size={20} color="#374151" />
              </button>
              <div style={{ color: selectedCategory.textColor, marginBottom: '15px' }}>
                <selectedCategory.icon size={48} />
              </div>
              <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: selectedCategory.textColor, marginBottom: '5px' }}>
                {selectedCategory.title}
              </h2>
              <p style={{ fontSize: '16px', color: selectedCategory.textColor, opacity: 0.9 }}>
                {selectedCategory.subtitle}
              </p>
            </div>
            <div style={{ padding: '30px', overflowY: 'auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '15px' }}>
                {selectedCategory.items.map((item, idx) => (
                  <div 
                    key={idx}
                    style={{
                      padding: '15px 20px', borderRadius: '12px',
                      backgroundColor: '#f9fafb', border: '1px solid #e5e7eb',
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      cursor: 'pointer', transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = selectedCategory.color; e.currentTarget.style.borderColor = 'transparent'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#f9fafb'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
                  >
                    <span style={{ fontWeight: '600', color: '#374151', fontSize: '16px' }}>{item}</span>
                    <ArrowRight size={18} color={selectedCategory.textColor} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default ExperienceGrid;