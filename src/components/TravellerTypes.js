/*import React, { useState } from 'react';
import { Compass, Camera, Image as ImageIcon, X, Upload } from 'lucide-react';

const TravellerTypes = () => {
  const [activeModal, setActiveModal] = useState(null);

  // --- CONTENT DATA ---
  const travellerContent = {
    title: "The Traveller",
    definition: "A Traveller seeks to immerse themselves in the culture. They don't just see sights; they feel them.",
    destinations: [
      { name: "Spiti Valley", desc: "Rugged mountains.", img: "https://images.unsplash.com/photo-1579619623193-4e3113110593?auto=format&fit=crop&w=400&q=80" },
      { name: "Varkala Cliff", desc: "Soul meets sea.", img: "https://images.unsplash.com/photo-1596309873994-4d1012117565?auto=format&fit=crop&w=400&q=80" },
      { name: "Meghalaya", desc: "Living root bridges.", img: "https://images.unsplash.com/photo-1590456206869-d34346e92f23?auto=format&fit=crop&w=400&q=80" }
    ]
  };

  const touristContent = {
    title: "The Tourist",
    definition: "A Tourist travels for pleasure, relaxation, and the joy of ticking famous landmarks off their list.",
    destinations: [
      { name: "Taj Mahal", desc: "Symbol of love.", img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=400&q=80" },
      { name: "Jaipur", desc: "The Pink City.", img: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=400&q=80" },
      { name: "Goa", desc: "Sun and sand.", img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80" }
    ]
  };

  const galleryImages = [
    "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1534951474654-886e563917a8?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1533241242337-331e5a593719?auto=format&fit=crop&w=400&q=80",
    "https://images.unsplash.com/photo-1605626960011-e6c867a5c32c?auto=format&fit=crop&w=400&q=80"
  ];

  // --- CARD COMPONENT ---
  const Card = ({ icon: Icon, title, desc, onClick, color }) => (
    <div 
      onClick={onClick}
      style={{
        flex: '1',                // Makes all cards equal width
        minWidth: '280px',        // Prevents them from getting too squished
        backgroundColor: 'white',
        borderRadius: '16px',
        padding: '30px',
        textAlign: 'center',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        border: '1px solid #f3f4f6',
        cursor: 'pointer',
        transition: 'transform 0.2s',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{
        width: '60px', height: '60px', borderRadius: '50%', 
        backgroundColor: color, opacity: 0.1, position: 'absolute'
      }}></div>
      <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: color }}>
        <Icon size={32} />
      </div>
      
      <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>{desc}</p>
      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>Explore &rarr;</span>
    </div>
  );

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      
      {/* HEADING *}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>Find Your Travel Persona</h2>
        <p style={{ color: '#6b7280' }}>Discover who you are and share your journey.</p>
      </div>

      {/* --- GRID CONTAINER (Forces Side-by-Side) --- *}
      <div style={{
        display: 'flex',           // This aligns them horizontally
        justifyContent: 'center',
        gap: '30px',               // Space between cards
        flexWrap: 'wrap',          // Wraps to next line ONLY if screen is too small (mobile)
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <Card 
          icon={Compass} 
          title="The Traveller" 
          desc="Soul searchers looking for the unknown." 
          onClick={() => setActiveModal('traveller')}
          color="#2563eb" // Blue
        />
        <Card 
          icon={Camera} 
          title="The Tourist" 
          desc="Sightseers looking for beauty and comfort." 
          onClick={() => setActiveModal('tourist')}
          color="#ea580c" // Orange
        />
        <Card 
          icon={ImageIcon} 
          title="Photo Gallery" 
          desc="Share your moments with the community." 
          onClick={() => setActiveModal('gallery')}
          color="#16a34a" // Green
        />
      </div>

      {/* --- MODAL (POPUP) --- *}
      {activeModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100, backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '40px', borderRadius: '20px',
            width: '90%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
            position: 'relative', boxShadow: '0 20px 25px rgba(0,0,0,0.1)'
          }}>
            <button 
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: '20px', right: '20px', background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '40px', height: '40px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={20} />
            </button>

            {/* TRAVELLER CONTENT *}
            {activeModal === 'traveller' && (
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Compass /> The Traveller
                </h2>
                <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#4b5563', borderLeft: '4px solid #3b82f6', paddingLeft: '15px', marginBottom: '30px' }}>
                  "{travellerContent.definition}"
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  {travellerContent.destinations.map((place, i) => (
                    <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                      <img src={place.img} alt={place.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                      <div style={{ padding: '15px' }}>
                        <h4 style={{ fontWeight: 'bold' }}>{place.name}</h4>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>{place.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TOURIST CONTENT *}
            {activeModal === 'tourist' && (
              <div>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#c2410c', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Camera /> The Tourist
                </h2>
                <p style={{ fontSize: '18px', fontStyle: 'italic', color: '#4b5563', borderLeft: '4px solid #f97316', paddingLeft: '15px', marginBottom: '30px' }}>
                  "{touristContent.definition}"
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  {touristContent.destinations.map((place, i) => (
                    <div key={i} style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                      <img src={place.img} alt={place.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                      <div style={{ padding: '15px' }}>
                        <h4 style={{ fontWeight: 'bold' }}>{place.name}</h4>
                        <p style={{ fontSize: '13px', color: '#6b7280' }}>{place.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* GALLERY CONTENT *}
            {activeModal === 'gallery' && (
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#15803d', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ImageIcon /> Community Gallery
                  </h2>
                  <button onClick={() => alert("Upload feature coming soon!")} style={{ padding: '10px 20px', backgroundColor: '#16a34a', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Upload size={16} /> Upload
                  </button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
                  {galleryImages.map((img, i) => (
                    <img key={i} src={img} alt="Gallery" style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }} />
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default TravellerTypes;
*/
/*
import React, { useState } from 'react';
import { Compass, Camera, Image as ImageIcon, X, Upload, Mountain, CloudRain, Activity, Map } from 'lucide-react';

const TravelerTypes = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [activeTab, setActiveTab] = useState('himalayas'); // For the Traveller Modal Tabs

  // --- DATA FOR TABLES ---
  const sikkimTreks = [
    { name: "Goecha La", alt: "4,940m", dur: "10-12 Days", diff: "Strenuous", unique: "Kanchenjunga SE face views" },
    { name: "Dzongri La", alt: "4,170m", dur: "8 Days", diff: "Moderate", unique: "Views of 16 Himalayan peaks" },
    { name: "Green Lake", alt: "5,200m", dur: "14 Days", diff: "Strenuous", unique: "Remote base camp, zero crowds" },
    { name: "Sandakphu", alt: "3,636m", dur: "7 Days", diff: "Easy/Mod", unique: "View of Everest, Lhotse, Makalu" },
  ];

  const uttarakhandTreks = [
    { name: "Roopkund", alt: "5,029m", time: "May-Jun", highlight: "Mystery Lake & Trishul views" },
    { name: "Valley of Flowers", alt: "3,658m", time: "Jul-Aug", highlight: "UNESCO site, 500+ flower species" },
    { name: "Kedarkantha", alt: "3,810m", time: "Dec-Apr", highlight: "Premier winter snow trek" },
    { name: "Chopta-Tungnath", alt: "3,680m", time: "All Year", highlight: "Highest Shiva temple in the world" },
  ];

  const sahyadriTreks = [
    { name: "Kalsubai", alt: "5,400ft", diff: "Moderate", feature: "Highest point in Maharashtra" },
    { name: "Harihar Fort", alt: "3,676ft", diff: "Hard", feature: "Near-vertical rock-cut stairs" },
    { name: "Andharban", alt: "2,160ft", diff: "Easy", feature: "Deep forest immersion & fog trails" },
    { name: "Alang-Madan-Kulang", alt: "4,800ft+", diff: "Hard", feature: "Toughest trek, massive rock massifs" },
  ];

  const wellnessPrograms = [
    { type: "Panchakarma", dur: "14-21 Days", focus: "Full-body detox", treat: "Vamana, Virechana, Basti" },
    { type: "Stress Mgmt", dur: "7 Days", focus: "Mental clarity", treat: "Shirodhara, Yoga Nidra" },
    { type: "Sleep Care", dur: "9 Days", focus: "Somnipathy", treat: "Foot rituals, Deep tissue massage" },
  ];

  const gujaratTransport = [
    { dest: "Rann of Kutch", mode: "Road", time: "9 Hours", cost: "₹1,700–2,400" },
    { dest: "Rann of Kutch", mode: "Train (Bhuj)", time: "7-8 Hours", cost: "₹1,600–2,700" },
    { dest: "Saputara", mode: "Road", time: "5.5 Hours", cost: "₹4,100–5,900" },
    { dest: "Girnar", mode: "Train (Junagadh)", time: "6.5 Hours", cost: "₹880–2,500" },
  ];

  // --- HELPER COMPONENTS ---
  const TableHeader = ({ cols }) => (
    <thead>
      <tr style={{ backgroundColor: '#f3f4f6', textAlign: 'left' }}>
        {cols.map((col, i) => <th key={i} style={{ padding: '12px', fontSize: '12px', color: '#4b5563' }}>{col}</th>)}
      </tr>
    </thead>
  );

  const TabButton = ({ id, label, icon: Icon }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        flex: 1,
        padding: '12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        border: 'none',
        borderBottom: activeTab === id ? '3px solid #2563eb' : '3px solid transparent',
        backgroundColor: activeTab === id ? '#eff6ff' : 'transparent',
        color: activeTab === id ? '#2563eb' : '#6b7280',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s'
      }}
    >
      <Icon size={18} /> {label}
    </button>
  );

  const Card = ({ icon: Icon, title, desc, onClick, color }) => (
    <div 
      onClick={onClick}
      style={{
        flex: '1', minWidth: '280px', backgroundColor: 'white', borderRadius: '16px',
        padding: '30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        border: '1px solid #f3f4f6', cursor: 'pointer', transition: 'transform 0.2s',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: color, opacity: 0.1, position: 'absolute' }}></div>
      <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: color }}>
        <Icon size={32} />
      </div>
      <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>{title}</h3>
      <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginBottom: '20px' }}>{desc}</p>
      <span style={{ fontSize: '14px', fontWeight: '600', color: '#1f2937' }}>Explore &rarr;</span>
    </div>
  );

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>Find Your Travel Persona</h2>
        <p style={{ color: '#6b7280' }}>Discover who you are and share your journey.</p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        <Card icon={Compass} title="The Traveller" desc="Soul searchers looking for rejuvenation." onClick={() => { setActiveModal('traveller'); setActiveTab('himalayas'); }} color="#2563eb" />
        <Card icon={Camera} title="The Tourist" desc="Sightseers looking for beauty and comfort." onClick={() => setActiveModal('tourist')} color="#ea580c" />
        <Card icon={ImageIcon} title="Photo Gallery" desc="Share your moments with the community." onClick={() => setActiveModal('gallery')} color="#16a34a" />
      </div>

      {/* --- MODAL --- *}
      {activeModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 100, backdropFilter: 'blur(5px)'
        }}>
          <div style={{
            backgroundColor: 'white', borderRadius: '20px', width: '95%', maxWidth: '1000px',
            height: '90vh', display: 'flex', flexDirection: 'column', overflow: 'hidden',
            position: 'relative', boxShadow: '0 20px 25px rgba(0,0,0,0.2)'
          }}>
            
            {/* Close Button *}
            <button 
              onClick={() => setActiveModal(null)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: '#f3f4f6', border: 'none', borderRadius: '50%', width: '36px', height: '36px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            >
              <X size={20} />
            </button>

            {/* --- TRAVELLER MODAL CONTENT --- *}
            {activeModal === 'traveller' && (
              <>
                {/* Header *}
                <div style={{ padding: '30px 30px 10px 30px', borderBottom: '1px solid #e5e7eb' }}>
                  <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1e40af', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Compass /> The Cartography of Rejuvenation
                  </h2>
                  <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '5px' }}>
                    A comprehensive study of Indian trekking ecosystems and wellness hubs.
                  </p>
                  
                  {/* TABS *}
                  <div style={{ display: 'flex', marginTop: '20px', borderBottom: '1px solid #e5e7eb' }}>
                    <TabButton id="himalayas" label="Himalayan Arc" icon={Mountain} />
                    <TabButton id="western" label="Western Ghats" icon={CloudRain} />
                    <TabButton id="wellness" label="Wellness Hubs" icon={Activity} />
                    <TabButton id="gujarat" label="Gujarat & Offbeat" icon={Map} />
                  </div>
                </div>

                {/* Scrollable Content Area *}
                <div style={{ padding: '30px', overflowY: 'auto', flex: 1 }}>
                  
                  {/* 1. HIMALAYAS TAB *}
                  {activeTab === 'himalayas' && (
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>The Himalayan Arc: Tectonics & Endurance</h3>
                      <p style={{ marginBottom: '20px', color: '#4b5563', lineHeight: '1.6' }}>
                        The Himalayas represent the apex of global adventure. The pursuit of rejuvenation here is rooted in the "sublime"—the psychological state achieved when faced with the overwhelming scale of nature.
                      </p>

                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>Sikkim & Darjeeling: Vertical Biodiversity</h4>
                      <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                          <TableHeader cols={["Trek", "Altitude", "Duration", "Difficulty", "Unique Factor"]} />
                          <tbody>
                            {sikkimTreks.map((t, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '10px', fontWeight: '600' }}>{t.name}</td>
                                <td style={{ padding: '10px' }}>{t.alt}</td>
                                <td style={{ padding: '10px' }}>{t.dur}</td>
                                <td style={{ padding: '10px' }}>{t.diff}</td>
                                <td style={{ padding: '10px', color: '#4b5563' }}>{t.unique}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>Uttarakhand: Sacred Valleys</h4>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                          <TableHeader cols={["Trek", "Altitude", "Best Time", "Highlights"]} />
                          <tbody>
                            {uttarakhandTreks.map((t, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '10px', fontWeight: '600' }}>{t.name}</td>
                                <td style={{ padding: '10px' }}>{t.alt}</td>
                                <td style={{ padding: '10px' }}>{t.time}</td>
                                <td style={{ padding: '10px', color: '#4b5563' }}>{t.highlight}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 2. WESTERN GHATS TAB *}
                  {activeTab === 'western' && (
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>The Sahyadri Range: Monsoon Rebirth</h3>
                      <p style={{ marginBottom: '20px', color: '#4b5563', lineHeight: '1.6' }}>
                        In the Sahyadris, rejuvenation is a seasonal event triggered by the monsoon. The Andharban Trek (The Dark Forest) descends through a canopy so thick that sunlight often fails to reach the floor, offering potent sensory therapy.
                      </p>

                      <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                          <TableHeader cols={["Trek", "Altitude", "Difficulty", "Rejuvenation Feature"]} />
                          <tbody>
                            {sahyadriTreks.map((t, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '10px', fontWeight: '600' }}>{t.name}</td>
                                <td style={{ padding: '10px' }}>{t.alt}</td>
                                <td style={{ padding: '10px' }}>{t.diff}</td>
                                <td style={{ padding: '10px', color: '#4b5563' }}>{t.feature}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '12px', borderLeft: '4px solid #16a34a' }}>
                        <h4 style={{ fontWeight: 'bold', color: '#166534', marginBottom: '5px' }}>Coorg: The Scotland of India</h4>
                        <p style={{ fontSize: '14px', color: '#14532d' }}>
                          Further south, Coorg offers "managed" rejuvenation. Resorts offer forest immersion (Shinrin-yoku) and "Digital Detox" zones where Wi-Fi is intentionally absent to reconnect with circadian rhythms.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* 3. WELLNESS HUBS TAB *}
                  {activeTab === 'wellness' && (
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>Wellness Epicenters: The Science of Rejuvenation</h3>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
                        <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                          <h4 style={{ color: '#ea580c', fontWeight: 'bold', marginBottom: '10px' }}>Rishikesh</h4>
                          <p style={{ fontSize: '13px', color: '#4b5563' }}>
                            The "Yoga Capital of the World." Focuses on the "Sattvic" lifestyle—early rising, vegetarian diet, and sound healing by the Ganges.
                          </p>
                        </div>
                        <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '12px' }}>
                          <h4 style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '10px' }}>Kerala</h4>
                          <p style={{ fontSize: '13px', color: '#4b5563' }}>
                            The cradle of authentic Ayurveda. Treatments like Abhyanga and Pizhichil are clinical processes to remove "Ama" (toxins) from the body.
                          </p>
                        </div>
                      </div>

                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>Typical Wellness Programs</h4>
                      <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                          <TableHeader cols={["Program", "Duration", "Core Focus", "Typical Treatments"]} />
                          <tbody>
                            {wellnessPrograms.map((t, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '10px', fontWeight: '600' }}>{t.type}</td>
                                <td style={{ padding: '10px' }}>{t.dur}</td>
                                <td style={{ padding: '10px' }}>{t.focus}</td>
                                <td style={{ padding: '10px', color: '#4b5563' }}>{t.treat}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* 4. GUJARAT & OFFBEAT TAB *}
                  {activeTab === 'gujarat' && (
                    <div>
                      <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>Gujarat: Heritage & Naturopathy</h3>
                      <p style={{ marginBottom: '20px', color: '#4b5563', lineHeight: '1.6' }}>
                        Gujarat blends rugged endurance with healing. <strong>Girnar</strong> requires climbing 10,000 steps for purification. The <strong>Polo Forest</strong> offers "Body Detox" programs in ancient ruins. The <strong>Rann of Kutch</strong> offers visual rejuvenation through the vast white desert.
                      </p>

                      <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#2563eb', marginBottom: '10px' }}>Transport from Ahmedabad</h4>
                      <div style={{ overflowX: 'auto', marginBottom: '30px' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                          <TableHeader cols={["Destination", "Mode", "Time", "Approx Cost"]} />
                          <tbody>
                            {gujaratTransport.map((t, i) => (
                              <tr key={i} style={{ borderBottom: '1px solid #e5e7eb' }}>
                                <td style={{ padding: '10px', fontWeight: '600' }}>{t.dest}</td>
                                <td style={{ padding: '10px' }}>{t.mode}</td>
                                <td style={{ padding: '10px' }}>{t.time}</td>
                                <td style={{ padding: '10px' }}>{t.cost}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: '20px' }}>
                        <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>Offbeat Solitude</h4>
                        <ul style={{ listStyle: 'none', padding: 0, color: '#4b5563', fontSize: '14px' }}>
                          <li style={{ marginBottom: '10px' }}><strong>🏝️ Gokarna:</strong> Coastal silence. A digital detox alternative to Goa with yoga retreats on beaches like Kudle and Om.</li>
                          <li><strong>🏚️ Dhanushkodi:</strong> The ghost town. Rejuvenation through reflection on transience at the tip of India.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              </>
            )}

            {/* --- OTHER MODALS (Simplified for now) --- *}
            {activeModal === 'tourist' && (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', color: '#ea580c' }}>The Tourist</h2>
                <p>Standard sightseeing content goes here...</p>
              </div>
            )}
            
            {activeModal === 'gallery' && (
              <div style={{ padding: '40px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '28px', color: '#16a34a' }}>Community Gallery</h2>
                <button onClick={() => alert("Upload!")} style={{ marginTop: '20px', padding: '10px 20px', background: '#16a34a', color: 'white', border: 'none', borderRadius: '8px' }}>Upload Photo</button>
              </div>
            )}

          </div>
        </div>
      )}
    </section>
  );
};

export default TravelerTypes;
*/

import React, { useState } from 'react';
import { Compass, Camera, Image as ImageIcon, X, ArrowLeft, Mountain, MapPin, Activity, Shield, Landmark, Scroll, Sprout } from 'lucide-react';

const TravellerTypes = () => {
  const [activeModal, setActiveModal] = useState(null); // 'traveller', 'tourist', 'gallery'
  const [selectedTopic, setSelectedTopic] = useState(null); // The specific topic detail

  // ==========================================
  // 1. DATA: TRAVELLER TOPICS
  // ==========================================
  const travellerTopics = [
    {
      id: 'himalayas',
      title: 'The Himalayan Arc',
      subtitle: 'Tectonics, Transcendence, and High-Altitude Endurance',
      icon: Mountain,
      color: '#2563eb', // Blue
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            The Himalayas represent the apex of global adventure and spiritual tourism. This mountain range, characterized by its young fold mountains and ongoing tectonic activity, provides a landscape that is both physically punishing and mentally liberating.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px', borderLeft: '4px solid #2563eb', paddingLeft: '15px' }}>
            Sikkim & Darjeeling: Vertical Biodiversity
          </h3>
          <p style={{ marginBottom: '20px', color: '#4b5563' }}>
            The Eastern Himalayas offer a unique brand of rejuvenation defined by vertical biodiversity. Unlike the drier western ranges, this region is influenced by the Bay of Bengal, resulting in high humidity and lush landscapes.
          </p>

          {/* TABLE */}
          <div style={{ overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#4b5563' }}>Trek</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#4b5563' }}>Altitude</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#4b5563' }}>Duration</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#4b5563' }}>Difficulty</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Goecha La</td><td style={{ padding: '15px' }}>4,940m</td><td style={{ padding: '15px' }}>10-12 Days</td><td style={{ padding: '15px' }}>Strenuous</td></tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Dzongri La</td><td style={{ padding: '15px' }}>4,170m</td><td style={{ padding: '15px' }}>8 Days</td><td style={{ padding: '15px' }}>Moderate</td></tr>
                <tr><td style={{ padding: '15px', fontWeight: 'bold' }}>Green Lake</td><td style={{ padding: '15px' }}>5,200m</td><td style={{ padding: '15px' }}>14 Days</td><td style={{ padding: '15px' }}>Strenuous</td></tr>
              </tbody>
            </table>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1e40af', marginBottom: '15px', borderLeft: '4px solid #2563eb', paddingLeft: '15px' }}>
            Uttarakhand: Sacred Valleys
          </h3>
          <p style={{ marginBottom: '20px', color: '#4b5563' }}>
            In Uttarakhand, trekking is inextricably linked with Hindu pilgrimage. Sites like the Valley of Flowers and Roopkund offer vast, open spaces that facilitate mental expansion.
          </p>
        </>
      )
    },
    {
      id: 'sahyadris',
      title: 'The Sahyadri Range',
      subtitle: 'Monsoon Rebirth and Ancient Fortifications',
      icon: MapPin,
      color: '#16a34a', // Green
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            While the Himalayas provide vertical grandeur, the Western Ghats (Sahyadris) offer a rejuvenation experience centered on ancient geology and seasonal rebirth. In the Sahyadris, rejuvenation is a seasonal event triggered by the arrival of the southwest monsoon.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#166534', marginBottom: '15px', borderLeft: '4px solid #16a34a', paddingLeft: '15px' }}>
            Monsoon Trekking
          </h3>
          <p style={{ marginBottom: '20px', color: '#4b5563' }}>
            The Andharban Trek (The Dark Forest) descends through a dense canopy so thick that sunlight often fails to reach the forest floor. The Sahyadri forts, such as Rajgad and Harihar, combine this natural beauty with Maratha history.
          </p>

          {/* TABLE */}
          <div style={{ overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead style={{ backgroundColor: '#f0fdf4' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#166534' }}>Trek</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#166534' }}>Altitude</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#166534' }}>Difficulty</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#166534' }}>Feature</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Kalsubai</td><td style={{ padding: '15px' }}>5,400ft</td><td style={{ padding: '15px' }}>Moderate</td><td style={{ padding: '15px' }}>Highest Point</td></tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Harihar Fort</td><td style={{ padding: '15px' }}>3,676ft</td><td style={{ padding: '15px' }}>Hard</td><td style={{ padding: '15px' }}>Vertical Stairs</td></tr>
                <tr><td style={{ padding: '15px', fontWeight: 'bold' }}>Andharban</td><td style={{ padding: '15px' }}>2,160ft</td><td style={{ padding: '15px' }}>Easy</td><td style={{ padding: '15px' }}>Deep Forest</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      id: 'wellness',
      title: 'Wellness Hubs',
      subtitle: 'Rishikesh, Kerala, and the Science of Rejuvenation',
      icon: Activity,
      color: '#9333ea', // Purple
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
             India has established specialized wellness hubs where rejuvenation is approached as a rigorous, ancient science. These hubs utilize structured systems like Yoga, Ayurveda, and Meditation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', backgroundColor: '#faf5ff', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
              <h4 style={{ color: '#6b21a8', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Rishikesh</h4>
              <p style={{ fontSize: '14px', color: '#4b5563' }}>The "Yoga Capital of the World." Rejuvenation is driven by the spiritual energy of the Ganges. Focuses on the "Sattvic" lifestyle.</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#faf5ff', borderRadius: '12px', border: '1px solid #e9d5ff' }}>
              <h4 style={{ color: '#6b21a8', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Kerala</h4>
              <p style={{ fontSize: '14px', color: '#4b5563' }}>The cradle of authentic Ayurveda. The tropical climate is optimal for treatments like Abhyanga and Pizhichil to remove toxins.</p>
            </div>
          </div>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#6b21a8', marginBottom: '15px' }}>Typical Wellness Programs</h3>
          <div style={{ overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead style={{ backgroundColor: '#faf5ff' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#6b21a8' }}>Program</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#6b21a8' }}>Duration</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#6b21a8' }}>Core Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Panchakarma</td><td style={{ padding: '15px' }}>14-21 Days</td><td style={{ padding: '15px' }}>Full-body detox</td></tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Stress Mgmt</td><td style={{ padding: '15px' }}>7 Days</td><td style={{ padding: '15px' }}>Mental clarity</td></tr>
                <tr><td style={{ padding: '15px', fontWeight: 'bold' }}>Metabolic</td><td style={{ padding: '15px' }}>10 Days</td><td style={{ padding: '15px' }}>Lifestyle disorders</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      id: 'gujarat',
      title: 'Gujarat & Offbeat',
      subtitle: 'Heritage, Adventure, and Naturopathy',
      icon: Compass,
      color: '#ea580c', // Orange
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            Gujarat provides a diverse array of traveler sites that blend rugged endurance with the healing power of the forest and the saline desert.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '30px' }}>
            <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ea580c' }}>
              <strong style={{ color: '#c2410c' }}>Girnar:</strong> Ascending 10,000 stone steps to reach the summit shrines is a grueling physical task that serves as a mental purification ritual.
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ea580c' }}>
              <strong style={{ color: '#c2410c' }}>Polo Forest:</strong> A hidden gem for "Body Detox" programs, utilizing the silence of the teak forests as a therapeutic tool.
            </li>
            <li style={{ marginBottom: '15px', paddingLeft: '20px', borderLeft: '3px solid #ea580c' }}>
              <strong style={{ color: '#c2410c' }}>Rann of Kutch:</strong> The vast, flat expanse of white salt under a full moon creates a "zen-like" environment for visual rejuvenation.
            </li>
          </ul>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#c2410c', marginBottom: '15px' }}>Offbeat Solitude</h3>
          <div style={{ backgroundColor: '#fff7ed', padding: '20px', borderRadius: '12px' }}>
            <p style={{ marginBottom: '10px' }}><strong>🏝️ Gokarna:</strong> Coastal silence. A digital detox alternative to Goa with yoga retreats on beaches like Kudle and Om.</p>
            <p><strong>🏚️ Dhanushkodi:</strong> The ghost town. Rejuvenation through reflection on transience at the tip of India.</p>
          </div>
        </>
      )
    }
  ];

  // ==========================================
  // 2. DATA: TOURIST TOPICS
  // ==========================================
  const touristTopics = [
    {
      id: 'ancient',
      title: 'Foundations of Antiquity',
      subtitle: 'Prehistoric and Proto-Historic Urbanism',
      icon: Scroll,
      color: '#b45309', // Amber
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            The genesis of India's cultural trajectory is rooted in the early attempts of human communities to organize space and record experiences.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#92400e', marginBottom: '15px', borderLeft: '4px solid #b45309', paddingLeft: '15px' }}>
            Key Milestones
          </h3>

          <div style={{ overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead style={{ backgroundColor: '#fffbeb' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#92400e' }}>Site</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#92400e' }}>Era</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#92400e' }}>Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Bhimbetka</td><td style={{ padding: '15px' }}>Paleolithic</td><td style={{ padding: '15px' }}>Earliest record of human habitation & art.</td></tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Dholavira</td><td style={{ padding: '15px' }}>3000 BCE</td><td style={{ padding: '15px' }}>Advanced water harvesting in arid land.</td></tr>
                <tr><td style={{ padding: '15px', fontWeight: 'bold' }}>Lothal</td><td style={{ padding: '15px' }}>2400 BCE</td><td style={{ padding: '15px' }}>World's earliest known dockyard.</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )
    },
    {
      id: 'temples',
      title: 'Rock-Cut & Temple Art',
      subtitle: 'Buddhist, Jain, and Dravidian Innovations',
      icon: Landmark,
      color: '#be123c', // Rose
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
             The rise of Buddhism and Jainism sparked a radical shift toward permanent, rock-cut structures. Later, the Classical period saw the crystallization of temple architecture.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={{ marginBottom: '20px', padding: '15px', border: '1px solid #fecdd3', borderRadius: '12px', backgroundColor: '#fff1f2' }}>
               <strong style={{ color: '#9f1239', display: 'block', fontSize: '18px', marginBottom: '5px' }}>Ajanta Caves</strong>
               A canvas of spiritual narrative depicting Jataka tales using mineral pigments.
            </li>
            <li style={{ marginBottom: '20px', padding: '15px', border: '1px solid #fecdd3', borderRadius: '12px', backgroundColor: '#fff1f2' }}>
               <strong style={{ color: '#9f1239', display: 'block', fontSize: '18px', marginBottom: '5px' }}>Ellora Caves</strong>
               A monolithic dialogue of faiths (Hindu, Buddhist, Jain) featuring the massive Kailasa Temple.
            </li>
            <li style={{ marginBottom: '20px', padding: '15px', border: '1px solid #fecdd3', borderRadius: '12px', backgroundColor: '#fff1f2' }}>
               <strong style={{ color: '#9f1239', display: 'block', fontSize: '18px', marginBottom: '5px' }}>Chola Temples</strong>
               The Brihadisvara Temple represents the pinnacle of Dravidian architecture with its massive 66m vimana.
            </li>
          </ul>
        </>
      )
    },
    {
      id: 'medieval',
      title: 'Medieval & Mughal',
      subtitle: 'Forts, Palaces, and the Indo-Islamic Zenith',
      icon: Shield,
      color: '#be123c', // Red
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            The medieval period was defined by the rise of Rajput hill forts and the introduction of the arch and dome by the Delhi Sultanate and Mughals.
          </p>

          <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#9f1239', marginBottom: '15px' }}>Mughal Masterpieces</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
            <div style={{ padding: '20px', backgroundColor: '#fff1f2', borderRadius: '12px', border: '1px solid #fda4af' }}>
              <h4 style={{ color: '#881337', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>The Taj Mahal</h4>
              <p style={{ fontSize: '14px', color: '#4b5563' }}>A symbol of perfection built using white Makrana marble and Pietra Dura inlay.</p>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#fff1f2', borderRadius: '12px', border: '1px solid #fda4af' }}>
              <h4 style={{ color: '#881337', fontWeight: 'bold', fontSize: '18px', marginBottom: '10px' }}>Fatehpur Sikri</h4>
              <p style={{ fontSize: '14px', color: '#4b5563' }}>A well-preserved red sandstone ghost city demonstrating Akbar's architectural vision.</p>
            </div>
          </div>
        </>
      )
    },
    {
      id: 'living',
      title: 'Living Heritage',
      subtitle: 'Indigenous Traditions and Biodiversity',
      icon: Sprout,
      color: '#047857', // Emerald
      content: (
        <>
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#374151', marginBottom: '30px' }}>
            India's heritage extends to its vast biodiversity and the preservation of indigenous knowledge systems.
          </p>
          
          <div style={{ overflowX: 'auto', marginBottom: '40px', borderRadius: '12px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead style={{ backgroundColor: '#ecfdf5' }}>
                <tr>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#065f46' }}>Site</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#065f46' }}>Region</th>
                  <th style={{ padding: '15px', textAlign: 'left', color: '#065f46' }}>Significance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Living Root Bridges</td><td style={{ padding: '15px' }}>Meghalaya</td><td style={{ padding: '15px' }}>Bio-engineering using Ficus elastica trees.</td></tr>
                <tr style={{ borderBottom: '1px solid #e5e7eb' }}><td style={{ padding: '15px', fontWeight: 'bold' }}>Tawang Monastery</td><td style={{ padding: '15px' }}>Arunachal</td><td style={{ padding: '15px' }}>Largest monastery in India.</td></tr>
                <tr><td style={{ padding: '15px', fontWeight: 'bold' }}>Majuli Island</td><td style={{ padding: '15px' }}>Assam</td><td style={{ padding: '15px' }}>Neo-Vaishnavite cultural landscape.</td></tr>
              </tbody>
            </table>
          </div>
        </>
      )
    }
  ];

  // --- HELPERS ---
  const currentTopics = activeModal === 'traveller' ? travellerTopics : touristTopics;
  const modalColor = activeModal === 'traveller' ? '#2563eb' : '#ea580c';

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
      
      {/* SECTION HEADER */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>Find Your Travel Persona</h2>
        <p style={{ color: '#6b7280' }}>Discover who you are and share your journey.</p>
      </div>

      {/* MAIN CARDS */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
        <div onClick={() => setActiveModal('traveller')} style={{ flex: '1', minWidth: '280px', backgroundColor: 'white', borderRadius: '16px', padding: '30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6', cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#2563eb' }}><Compass size={32} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>The Traveller</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>Soul searchers looking for rejuvenation in the unknown.</p>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>Explore &rarr;</span>
        </div>

        <div onClick={() => setActiveModal('tourist')} style={{ flex: '1', minWidth: '280px', backgroundColor: 'white', borderRadius: '16px', padding: '30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6', cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#fff7ed', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#ea580c' }}><Camera size={32} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>The Tourist</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>Exploring heritage, architecture, and national identity.</p>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>Explore &rarr;</span>
        </div>

        <div onClick={() => setActiveModal('gallery')} style={{ flex: '1', minWidth: '280px', backgroundColor: 'white', borderRadius: '16px', padding: '30px', textAlign: 'center', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', border: '1px solid #f3f4f6', cursor: 'pointer', transition: 'transform 0.2s', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: '#16a34a' }}><ImageIcon size={32} /></div>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '10px' }}>Photo Gallery</h3>
          <p style={{ color: '#6b7280', fontSize: '14px', marginBottom: '20px' }}>Share your moments with the community.</p>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#111827' }}>Explore &rarr;</span>
        </div>
      </div>

      {/* --- MODAL --- */}
      {activeModal && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, backdropFilter: 'blur(5px)' }}>
          <div style={{ backgroundColor: 'white', width: '90%', maxWidth: '1100px', height: '90vh', borderRadius: '24px', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            
            {/* Close Button */}
            <button onClick={() => { setActiveModal(null); setSelectedTopic(null); }} style={{ position: 'absolute', top: '20px', right: '20px', width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#f3f4f6', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 50 }}>
              <X size={20} color="#374151" />
            </button>

            {/* --- GALLERY MODAL --- */}
            {activeModal === 'gallery' ? (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#16a34a', marginBottom: '20px' }}>Community Gallery</h2>
                <p style={{ color: '#6b7280' }}>Upload and share your travel memories.</p>
              </div>
            ) : (
              // --- TRAVELLER / TOURIST MODAL ---
              <>
                {/* 1. VIEW: TOPIC GRID (If nothing selected) */}
                {!selectedTopic && (
                  <div style={{ padding: '40px', overflowY: 'auto', flex: 1 }}>
                    <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                      <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: modalColor, marginBottom: '10px' }}>
                        {activeModal === 'traveller' ? 'The Cartography of Rejuvenation' : 'The Cultural Landscape'}
                      </h2>
                      <p style={{ color: '#6b7280', fontSize: '18px' }}>
                        {activeModal === 'traveller' ? 'Indian trekking ecosystems and wellness hubs.' : 'Heritage, architecture, and national identity.'}
                      </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
                      {currentTopics.map((topic) => (
                        <div 
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic)}
                          style={{ border: '1px solid #e5e7eb', borderRadius: '16px', padding: '30px', cursor: 'pointer', transition: 'all 0.3s', backgroundColor: 'white', position: 'relative', overflow: 'hidden' }}
                          onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)'; }}
                          onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                            <div style={{ width: '50px', height: '50px', borderRadius: '12px', backgroundColor: `${topic.color}15`, color: topic.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <topic.icon size={24} />
                            </div>
                            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937' }}>{topic.title}</h3>
                          </div>
                          <p style={{ color: '#6b7280', lineHeight: '1.6' }}>{topic.desc}</p>
                          <span style={{ display: 'inline-block', marginTop: '20px', fontSize: '14px', fontWeight: '600', color: topic.color }}>Read Full Article &rarr;</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 2. VIEW: DETAIL PAGE (If topic selected) */}
                {selectedTopic && (
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Header Bar */}
                    <div style={{ padding: '20px 40px', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'center', gap: '20px', backgroundColor: 'white' }}>
                      <button onClick={() => setSelectedTopic(null)} style={{ display: 'flex', alignItems: 'center', gap: '8px', border: 'none', background: 'none', fontSize: '14px', fontWeight: '600', color: '#6b7280', cursor: 'pointer' }}>
                        <ArrowLeft size={18} /> Back to Topics
                      </button>
                    </div>

                    {/* Content Scroll Area */}
                    <div style={{ flex: 1, overflowY: 'auto', padding: '40px' }}>
                      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        
                        {/* Hero Header for Article */}
                        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
                          <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: selectedTopic.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                            <selectedTopic.icon size={32} />
                          </div>
                          <h2 style={{ fontSize: '42px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>{selectedTopic.title}</h2>
                          <p style={{ fontSize: '20px', color: '#6b7280' }}>{selectedTopic.subtitle}</p>
                        </div>

                        {/* The Actual Content */}
                        <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151' }}>
                          {selectedTopic.content}
                        </div>
                        
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default TravellerTypes;