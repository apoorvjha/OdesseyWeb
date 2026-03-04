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


import React, { useState, useEffect, useRef } from 'react';
import { User, Users, Heart, Backpack, Camera, Coffee, Compass, Briefcase, Smile, Loader2, X, MapPin, ArrowRight, ArrowLeft, Search, BookOpen, Edit3, Send, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// --- DEFAULT STORIES ---
const defaultStories = [
  { id: 1, author: "Rahul M.", type: "The Traveller", location: "Spiti Valley, HP", title: "Finding Peace in the Barren Himalayas", content: "The drive from Manali to Kaza is not for the faint-hearted. Navigating the treacherous, rocky terrains of the Rohtang and Kunzum passes tested every ounce of my driving skills. But the moment the landscape shifted from lush green to a stark, lunar-like brown, I knew I had entered a different world entirely.\n\nReaching the Key Monastery at an altitude of over 13,000 feet was a spiritual reset. The monks welcomed me with yak butter tea, and we sat in absolute silence overlooking the Spiti River. \n\nThat night, with zero light pollution, I saw the Milky Way stretch across the sky. Disconnecting from the cellular network and the chaos of city life was exactly what my soul needed. Spiti isn't just a destination; it's a profound realization of how small we are in the grand scheme of nature.", date: "Oct 12, 2025" },
  { id: 2, author: "Priya & Rohan", type: "The Tourist", location: "Udaipur, RJ", title: "A Royal Weekend Getaway", content: "We decided to celebrate our anniversary in the 'City of Lakes,' and Udaipur delivered a truly royal experience. We checked into a beautifully restored heritage haveli right on the banks of Lake Pichola. Waking up to the view of the water shimmering under the morning sun was breathtaking.\n\nThe highlight of our trip was exploring the massive City Palace. The intricate mirror work, the colorful frescoes, and the sheer scale of the architecture left us speechless. We hired a local guide who brought the history of the Mewar dynasty to life.\n\nWe ended our weekend with a romantic sunset boat ride on the lake, watching the Jag Mandir and the city skyline glow gold in the twilight, followed by an incredible dinner of authentic, spicy Laal Maas. It was straight out of a fairy tale!", date: "Nov 04, 2025" },
  { id: 3, author: "Aman S.", type: "The Traveller", location: "Gokarna, KA", title: "Beach Trekking Magic", content: "I wanted the beach vibe without the commercialized crowds of Goa, and Gokarna was the perfect answer. Instead of just lounging on the sand, I decided to do the famous Gokarna Beach Trek. \n\nStarting early from Kudle Beach, I navigated the rocky, forested cliffs that separate the town's pristine coastlines. Hiking over the hills to suddenly reveal the perfect 'Om' shape of Om Beach from above is a sight I'll never forget. \n\nBy afternoon, I made my way to the secluded Half Moon and Paradise beaches. There are no roads here—you can only arrive by foot or boat. I set up my hammock between two palm trees, read a book to the sound of crashing waves, and eventually witnessed the magical bioluminescent phytoplankton lighting up the shoreline at night.", date: "Dec 21, 2025" },
  { id: 4, author: "The Sharma Family", type: "The Tourist", location: "Agra, UP", title: "A Walk Through History", content: "Traveling with two young kids requires careful planning, so we made sure to wake everyone up at 5:00 AM to beat the massive crowds at the Taj Mahal. The early wake-up call was entirely worth it.\n\nWalking through the main gate as the sun began to rise, bathing the white marble mausoleum in soft pink and golden hues, was a magical moment for the whole family. The kids were fascinated by the optical illusions of the architecture and the intricate floral inlay work made of semi-precious stones.\n\nAfter spending hours exploring the gardens and taking hundreds of photos, we headed into the bustling local markets. We couldn't leave without buying several boxes of the famous, syrupy Agra Petha to take back home to our relatives.", date: "Jan 15, 2026" },
  { id: 5, author: "Nisha T.", type: "The Traveller", location: "Cherrapunji, ML", title: "Living Roots and Endless Rain", content: "Meghalaya translates to 'The Abode of Clouds,' and it absolutely lives up to its name. The incessant, heavy rain gives the landscape a vibrant, almost neon-green lushness that I have never seen anywhere else in India.\n\nThe real test of the trip was descending the 3,000+ steep concrete steps down to the village of Nongriat. My legs were shaking by the time I reached the bottom, but standing on the legendary Double-Decker Living Root Bridge made the pain vanish. \n\nSeeing how the indigenous Khasi people patiently guided the roots of rubber fig trees across the river over decades is a testament to sustainable living. I took a freezing but incredibly refreshing dip in the crystal-clear blue natural pools below the bridge, washing away the fatigue of the grueling trek.", date: "Feb 02, 2026" },
  { id: 6, author: "Vikram & Team", type: "The Tourist", location: "Alleppey, KL", title: "Floating on the Backwaters", content: "Every year, our startup organizes an offsite to de-stress. This year, we swapped our office desks for a traditional Kettuvallam (houseboat) in Kerala. \n\nFor two days, we gently cruised through the massive, palm-fringed canal network of Vembanad Lake. It was incredibly peaceful to sit on the upper deck, waving to locals washing clothes on the banks and watching kingfishers dive into the water.\n\nThe onboard chef was the real star of the trip. We were treated to a massive feast served on banana leaves, featuring Karimeen Pollichathu (pearl spot fish marinated in spices and roasted in plantain leaves) and fresh tapioca. Watching the sunset over the endless paddy fields with the team was the ultimate bonding experience.", date: "Feb 18, 2026" },
  { id: 7, author: "Kabir D.", type: "The Traveller", location: "Varanasi, UP", title: "Chaos and Calm at the Ghats", content: "Varanasi is an overwhelming assault on the senses. The moment you step into the labyrinthine galis (alleys), you are hit with the intense smells of burning incense, cow dung, and freshly frying kachoris.\n\nI spent my days walking the continuous stretch of ghats along the Ganges. The juxtaposition of life and death is stark—children playing cricket near Assi Ghat while pyres burn relentlessly a few hundred meters away at Manikarnika Ghat. It forces you to confront mortality in a very raw way.\n\nSecuring a spot on a wooden rowboat just before dusk was the best decision I made. Watching the mesmerising Ganga Aarti from the water—thousands of oil lamps flickering, the rhythmic, hypnotic chanting of priests, and the heavy scent of marigolds floating on the sacred river—left a lasting, spiritual impact on me.", date: "Feb 25, 2026" },
  { id: 8, author: "Ananya & Friends", type: "The Tourist", location: "Jaipur, RJ", title: "Shopping and Forts in the Pink City", content: "We planned a whirlwind girls' trip to the Pink City, and it was a perfect mix of culture and retail therapy! We spent our first morning hiking up the cobbled, elephant-lined paths of Amber Fort. Getting lost in the mirror palace (Sheesh Mahal) and taking endless group photos against the intricate yellow and pink walls took up half our day.\n\nThe afternoons were strictly dedicated to hardcore bargaining. We scoured Bapu Bazaar and Johari Bazaar, filling our bags with bright bandhani dupattas, oxidized silver jewelry, and traditional mojari shoes. \n\nWe ended every evening sitting at a rooftop cafe, sipping hot kulhad chai and eating spicy pyaaz kachoris while looking out over the beautifully illuminated facade of the Hawa Mahal. A brilliant, colorful escape!", date: "Mar 01, 2026" }
];

const TravelerTypes = () => {
  const navigate = useNavigate();

  // --- STATE ---
  const [selectedMainSection, setSelectedMainSection] = useState(null);
  const [selectedSubPersona, setSelectedSubPersona] = useState(null);
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // --- COMMUNITY STORIES STATE ---
  const [isWritingStory, setIsWritingStory] = useState(false);
  const [newStory, setNewStory] = useState({ author: '', location: '', type: 'The Traveller', title: '', content: '' });
  
  const [communityStories, setCommunityStories] = useState(() => {
    const savedStories = localStorage.getItem('odessey_stories');
    if (savedStories) return JSON.parse(savedStories);
    return defaultStories;
  });

  // --- 1. COMPREHENSIVE DESTINATION DATABASE ---
  const personaDatabase = {
    "t1": [ "Kasol", "Rishikesh", "Hampi", "Gokarna", "Varkala", "Pushkar", "Manali", "McLeod Ganj", "Spiti Valley", "Jibhi", "Tirthan Valley", "Ziro", "Dharamkot", "Old Manali", "Parvati Valley", "Tosh", "Kheerganga", "Triund", "Bir Billing", "Kodaikanal", "Munnar", "Wayanad", "Majuli", "Tawang", "Cherrapunji", "Shillong", "Dalhousie", "Auli", "Chopta", "Almora", "Jog Falls", "Dudhsagar Falls", "Athirappilly Waterfalls", "Nohkalikai Falls" ],
    "t2": [ "Chandni Chowk", "Amritsar", "Lucknow", "Indore", "Surat", "Kolkata", "Hyderabad", "Chennai", "Madurai", "Jaipur", "Ahmedabad", "Mumbai", "Pune", "Kochi", "Mysore", "Agra", "Varanasi" ],
    "t3": [ "Rohtang Pass", "Solang Valley", "Auli", "Gulmarg", "Rishikesh", "Dandeli", "Kolad", "Andaman Islands", "Meghalaya", "Chadar Trek", "Sandhan Valley", "Bandhavgarh National Park", "Ranthambore National Park", "Jim Corbett National Park", "Kaziranga National Park" ],
    "t4": [ "Landour", "Khajjiar", "Chikmagalur", "Coonoor", "Gurez Valley", "Dzukou Valley", "Shoja", "Chitkul", "Narkanda", "Pangot", "Munsiyari", "Mukteshwar", "Chaukori", "Kausani", "Binsar" ],
    "t5": [ "Varanasi", "Bodh Gaya", "Auroville", "Haridwar", "Gangotri", "Kedarnath", "Badrinath", "Yamunotri", "Tiruvannamalai", "Sarnath", "Hemkund Sahib", "Golden Temple", "Shravanabelagola" ],
    "tr1": [ "Jaipur", "Udaipur", "Jodhpur", "Jaisalmer", "Agra", "New Delhi", "Mumbai", "Bengaluru", "Mysore", "Ooty", "Munnar", "Kodaikanal", "Darjeeling", "Gangtok", "Shimla", "Manali" ],
    "tr2": [ "Goa", "Gokarna", "Varkala", "Pondicherry", "Alibaug", "Daman", "Diu", "Tarkarli", "Murud Janjira", "Ganpatipule", "Diveagar", "Guhagar", "Harihareshwar" ],
    "tr3": [ "Alleppey", "Kumarakom", "Havelock Island", "Neil Island", "Radhanagar Beach", "Munnar", "Wayanad", "Kovalam", "Poovar", "Bekal", "Marari Beach", "Cherai Beach", "Gulmarg" ],
    "tr4": [ "Qutub Minar", "Red Fort", "Hawa Mahal", "City Palace, Udaipur", "Victoria Memorial, Kolkata", "Charminar", "Meenakshi Temple", "Konark Sun Temple", "Ajanta Caves", "Ellora Caves", "Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Elephanta Caves" ],
    "tr5": [ "Gurugram", "Pune", "Hyderabad", "Chennai", "Noida", "Navi Mumbai", "Chandigarh", "Ahmedabad", "Kochi", "Indore", "Vadodara", "Surat", "Nagpur", "Visakhapatnam", "Coimbatore" ]
  };

  // --- 2. MAIN SECTIONS DATA ---
  const mainSections = [
    {
      id: "traveller", title: "The Traveller", icon: Compass, color: "#e0f2fe", iconColor: "#0284c7",
      desc: "Soul searchers looking for adventure and rejuvenation in the unknown.",
      subSections: [
        { id: "t1", title: "Backpackers & Treks", icon: Backpack }, { id: "t2", title: "Foodies", icon: Coffee },
        { id: "t3", title: "Friends (Adventure)", icon: Users }, { id: "t4", title: "Couples (Offbeat)", icon: Heart },
        { id: "t5", title: "Soul Searchers", icon: User }, { id: "comm_traveller", title: "Traveller Stories", icon: BookOpen, isCommunityTab: true, typeFilter: "The Traveller" }
      ]
    },
    {
      id: "tourist", title: "The Tourist", icon: Camera, color: "#ffedd5", iconColor: "#ea580c",
      desc: "Exploring heritage, architecture, and famous landmarks.",
      subSections: [
        { id: "tr1", title: "Family & Kids", icon: Smile }, { id: "tr2", title: "Friends (Leisure)", icon: Users },
        { id: "tr3", title: "Couples (Honeymoon)", icon: Heart }, { id: "tr4", title: "Solo Sightseeing", icon: User },
        { id: "tr5", title: "Office / Corporate", icon: Briefcase }, { id: "comm_tourist", title: "Tourist Stories", icon: BookOpen, isCommunityTab: true, typeFilter: "The Tourist" }
      ]
    },
    {
      id: "community", title: "All Community Stories", icon: BookOpen, color: "#f3e8ff", iconColor: "#6d28d9",
      desc: "Read real travel diaries and share your own adventures with the world.", isCommunity: true 
    }
  ];

  // --- 3. SEQUENTIAL DYNAMIC PHOTO GALLERY LOGIC ---
  const allCollageImages = [
    "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80", 
    "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
    "https://www.indiantempletour.com/wp-content/uploads/2022/08/Andaman-and-Nicobar-Islands-Package-1.jpg", 
    "https://etimg.etb2bimg.com/photo/89314482.cms", 
    "https://static.toiimg.com/thumb/91692790/Arunachal-Dirang-Monastery.jpg?width=1200&height=900", 
    "https://www.kaziranganationalpark-india.com/blog/wp-content/uploads/2025/04/majuli-island.jpg", 
    "https://upload.wikimedia.org/wikipedia/commons/d/dd/Temple_No.-_3%2C_Nalanda_Archaeological_Site.jpg", 
    "https://chandigarhtourism.in/images/places-to-vist/headers/chandigarh-local-sightseeing-tour-packages-header-chandigarh-tourism.jpg.jpg", 
    "https://portal-tourism.cgstate.gov.in/files/Chitrakote%20Waterfall(1).JPG", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-diu-fort-diu-attr-hero-1?qlt=82&ts=1726737809175", 
    "https://static.toiimg.com/photo/msid-88070906,width-96,height-65.cms", 
    "https://images.financialexpressdigital.com/2024/01/goa-tourism.jpg", 
    "https://www.gujarattourism.com/content/dam/gujrattourism/images/home_page/SOU.jpg", 
    "https://haryanatourism.gov.in/wp-content/uploads/2024/06/KURUKSHETRA.jpg", 
    "https://www.naturetravelagency.com/uploads/1724499766best%20time%20to%20visit%20himachal%20Pradesh%20for%20snowfall.png", 
    "https://www.peakadventuretour.com/assets/imgs/kashmir-tourism-01.webp", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/jonha-falls-ranchi-jharkhand-new?qlt=82&ts=1727010871094", 
    "https://www.delhitourism.com/images/destination/5e5f7e1a005ce1.jpg", 
    "https://www.ekeralatourism.net/wp-content/uploads/2018/03/Alleppey.jpg", 
    "https://etimg.etb2bimg.com/photo/77779116.cms", 
    "https://www.lakshadweeptoursandtravels.com/images/banner-slide-2.jpg", 
    "https://www.bandhavgarh-national-park.com/images/Khajuraho_2.jpg", 
    "https://www.clubmahindra.com/blog/media/section_images/shuttersto-2b0161eaf6ec9f1.jpg", 
    "https://manipurtourism.gov.in/wp-content/uploads/2020/08/Pakhangba.jpg", 
    "https://chalotravellers.com/wp-content/uploads/2024/08/Dawki-Shnongpdeng-meghalaya.jpg", 
    "https://mizoramtourism.com/post_images/673ac0a2656b5_627debbb4e724_DD-1808.jpg", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/dimapur-nagaland-travel-masthead-hero?qlt=82&ts=1727368339099", 
    "https://www.transformingtravels.com/wp-content/uploads/2025/10/Odisha-tourism-1920x960.jpg", 
    "https://media.assettype.com/outlooktraveller%2F2024-02%2F10e4c7c9-ca10-4359-87c0-925664bf69b9%2Fshutterstock_1967101996.jpg?rect=1079%2C0%2C1688%2C2250", 
    "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?auto=format&fit=crop&w=600&q=80", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514", 
    "https://www.indianholiday.com/wordpress/wp-content/uploads/2025/09/Best-Places-to-Visit-in-Sikkim.jpg", 
    "https://s7ap1.scene7.com/is/image/incredibleindia/1-meenakshi-amman-temple-madurai-tamil-nadu-attr-hero?qlt=82&ts=1726654442664", 
    "https://www.fabhotels.com/blog/wp-content/uploads/2019/02/Golconda-Fort.jpg", 
    "https://tripuratourism.gov.in/images/tour/1661759345/80.jpg", 
    "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80", 
    "https://upload.wikimedia.org/wikipedia/commons/8/83/Auli_Himalayas.jpg",  
    "https://hblimg.mmtcdn.com/content/hubble/img/dest_img/mmt/activities/m_Kolkata_dest_landscape_l_956_1435.jpg"  
  ];

  // We maintain exactly 4 visible slots. We initialize them with images 0, 1, 2, and 3.
  const [galleryIndices, setGalleryIndices] = useState([0, 1, 2, 3]);
  const slotToUpdateRef = useRef(0);
  const nextImageIndexRef = useRef(4);

  // Update exactly one slot every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGalleryIndices(prev => {
        const nextIndices = [...prev];
        nextIndices[slotToUpdateRef.current] = nextImageIndexRef.current;
        return nextIndices;
      });
      
      slotToUpdateRef.current = (slotToUpdateRef.current + 1) % 4; // Move to the next slot (0 to 3)
      nextImageIndexRef.current = (nextImageIndexRef.current + 1) % allCollageImages.length; // Grab the next fresh image
    }, 3000); 

    return () => clearInterval(interval);
  }, [allCollageImages.length]);

  // --- 4. SMART FETCH LOGIC ---
  const fetchFromAPI = async (baseUrl, queryParams) => {
    try {
      const response = await fetch(`${baseUrl}?${queryParams}`);
      const data = await response.json();
      return data.query && data.query.pages ? Object.values(data.query.pages) : [];
    } catch (e) { return []; }
  };

  const performSearchQuery = async (safeQuery, enforceLocation = "") => {
    const queryParams = `action=query&generator=search&gsrsearch=${encodeURIComponent(safeQuery)}&gsrlimit=40&prop=pageimages|extracts&pithumbsize=600&exintro&explaintext&exsentences=3&format=json&origin=*`;
    const [wikiResults, voyageResults] = await Promise.all([
      fetchFromAPI('https://en.wikipedia.org/w/api.php', queryParams),
      fetchFromAPI('https://en.wikivoyage.org/w/api.php', queryParams)
    ]);
    const combinedResults = [...wikiResults, ...voyageResults];
    const uniqueResultsMap = new Map();
    combinedResults.forEach(item => { if (!uniqueResultsMap.has(item.title)) uniqueResultsMap.set(item.title, item); });
    let results = Array.from(uniqueResultsMap.values());
    
    return results.filter(item => {
      if (!item.thumbnail || !item.thumbnail.source || !item.extract) return false;
      const title = item.title.toLowerCase(); const text = item.extract.toLowerCase();
      if (enforceLocation) {
        const locWord = enforceLocation.split(' ')[0].toLowerCase().trim();
        if (!title.includes(locWord) && !text.includes(locWord)) return false;
      }
      const badTitles = ["culture of", "history of", "politics of", "economy of", "timeline", "list of", "demographics"];
      if (badTitles.some(t => title.includes(t))) return false;
      const badKeywords = ["pakistan", "china", "mexico", "usa", "nepal", "bangladesh", "sri lanka", "political party", "ministry", "association", "bjp", "congress"];
      if (badKeywords.some(kw => text.includes(kw))) return false;
      if (text.includes("born") || text.includes("died") || text.includes("politician") || text.includes("cricketer") || text.includes("actress") || text.includes("singer")) return false;
      return true;
    }).map(item => ({ name: item.title.replace(" (India)", ""), desc: item.extract, img: item.thumbnail.source }));
  };

  const fetchDestinations = async (subId, userSearch = "") => {
    setLoading(true); setDestinations([]);
    try {
      if (userSearch) {
        const searchContext = {
          "t1": "waterfall OR trek OR hill OR forest OR nature OR valley", "t2": "street food OR cuisine OR restaurant OR dish OR sweet OR thali",
          "t3": "waterfall OR adventure OR camp OR wildlife OR national park OR safari", "t4": "valley OR nature OR resort OR hill station OR offbeat OR village",
          "t5": "temple OR spiritual OR ashram OR yoga OR river OR shrine", "tr1": "tourist OR family OR sightseeing OR park OR palace OR lake",
          "tr2": "beach OR lake OR resort OR waterfall OR chill", "tr3": "romantic OR resort OR hill station OR view OR lake OR palace",
          "tr4": "monument OR heritage OR fort OR palace OR museum OR cave OR architecture", "tr5": "hotel OR resort OR corporate OR convention OR city"
        };
        const contextStr = searchContext[subId] || "tourist OR nature";
        const query1 = `+"${userSearch}" (${contextStr}) India -person -biography -election`;
        let formatted = await performSearchQuery(query1, userSearch);
        if (formatted.length === 0) formatted = await performSearchQuery(`+"${userSearch}" (tourist OR attraction OR place OR city OR nature) India -person`, userSearch);
        if (formatted.length === 0) formatted = await performSearchQuery(`"${userSearch}" India -person -biography`, ""); 
        setDestinations(formatted.slice(0, 20));
      } else {
        const list = personaDatabase[subId] || ["India Gate", "Taj Mahal"]; 
        const shuffled = [...list].sort(() => 0.5 - Math.random());
        const selectedPlaces = shuffled.slice(0, 25);
        const titlesQuery = selectedPlaces.join('|');
        const queryParams = `action=query&titles=${encodeURIComponent(titlesQuery)}&prop=pageimages|extracts&pithumbsize=600&exintro&explaintext&exsentences=3&format=json&origin=*`;
        const [wikiResults, voyageResults] = await Promise.all([
          fetchFromAPI('https://en.wikipedia.org/w/api.php', queryParams), fetchFromAPI('https://en.wikivoyage.org/w/api.php', queryParams)
        ]);
        const combinedResults = [...wikiResults, ...voyageResults];
        const uniqueResultsMap = new Map();
        combinedResults.forEach(item => { if (!uniqueResultsMap.has(item.title)) uniqueResultsMap.set(item.title, item); });
        let results = Array.from(uniqueResultsMap.values());
        results = results.filter(item => {
          if (!item.thumbnail || !item.thumbnail.source || !item.extract) return false;
          const text = (item.extract + " " + item.title).toLowerCase();
          return !["pakistan", "china", "ministry", "election", "politician"].some(kw => text.includes(kw));
        });
        const formatted = results.map(item => ({ name: item.title.replace(", Himachal Pradesh", "").replace(", India", ""), desc: item.extract, img: item.thumbnail.source }));
        setDestinations(formatted);
      }
    } catch (error) { console.error("Fetch Error:", error); } finally { setLoading(false); }
  };

  // --- 5. HANDLERS ---
  const handleMainSectionClick = (section) => {
    setSelectedMainSection(section);
    setSelectedSubPersona(null); 
    setDestinations([]); 
    setSearchTerm("");
    setIsWritingStory(false);
    if(section.isCommunity) {
      setNewStory(prev => ({...prev, type: 'The Traveller'})); 
    }
  };

  const handleSubPersonaClick = (subPersona) => {
    setSelectedSubPersona(subPersona);
    setSearchTerm(""); 
    setIsWritingStory(false);
    if (subPersona.isCommunityTab) {
      setNewStory(prev => ({...prev, type: subPersona.typeFilter}));
    } else {
      fetchDestinations(subPersona.id, "");
    }
  };

  const handleManualSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() && selectedSubPersona) {
      fetchDestinations(selectedSubPersona.id, searchTerm);
    }
  };

  const closeModal = () => {
    setSelectedMainSection(null); setSelectedSubPersona(null);
    setDestinations([]); setSearchTerm(""); setIsWritingStory(false);
  };

  const goBackToSubMenu = () => {
    setSelectedSubPersona(null);
    setDestinations([]);
    setSearchTerm("");
    setIsWritingStory(false);
  };

  const submitStory = (e) => {
    e.preventDefault();
    if(!newStory.author || !newStory.title || !newStory.content) return;
    
    const submittedStory = {
      ...newStory,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
    
    const updatedStories = [submittedStory, ...communityStories];
    setCommunityStories(updatedStories);
    localStorage.setItem('odessey_stories', JSON.stringify(updatedStories));
    
    setIsWritingStory(false);
    setNewStory({ author: '', location: '', type: selectedSubPersona?.isCommunityTab ? selectedSubPersona.typeFilter : 'The Traveller', title: '', content: '' });
  };

  const handleDeleteStory = (id) => {
    const updatedStories = communityStories.filter(story => story.id !== id);
    setCommunityStories(updatedStories);
    localStorage.setItem('odessey_stories', JSON.stringify(updatedStories));
  };

  const isCommunityView = selectedMainSection?.isCommunity || selectedSubPersona?.isCommunityTab;
  const storiesToShow = selectedSubPersona?.isCommunityTab 
    ? communityStories.filter(s => s.type === selectedSubPersona.typeFilter)
    : communityStories;

  return (
    <section style={{ padding: '0px', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* --- HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 'bold', color: '#111827', marginBottom: '10px' }}>
            Choose Your <span style={{ color: '#16a34a' }}>Travel Persona</span>
          </h2>
          <p style={{ fontSize: '16px', color: '#6b7280' }}>
            Discover destinations tailored to your travel style, or read stories from fellow explorers.
          </p>
        </div>

        {/* --- PERSONA CARDS --- */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
          {mainSections.map((section) => (
            <div 
              key={section.id}
              onClick={() => handleMainSectionClick(section)}
              style={{
                backgroundColor: 'white', borderRadius: '20px', padding: '25px 30px',
                textAlign: 'center', cursor: 'pointer',
                border: '1px solid #e5e7eb', transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.08)'; e.currentTarget.style.borderColor = section.iconColor; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e5e7eb'; }}
            >
              <div style={{ width: '60px', height: '60px', marginBottom: '15px', backgroundColor: section.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: section.iconColor }}>
                <section.icon size={28} strokeWidth={2} />
              </div>
              <h3 style={{ fontSize: '22px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px' }}>{section.title}</h3>
              <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.5', marginBottom: '15px' }}>{section.desc}</p>
              <div style={{ fontSize: '14px', fontWeight: '600', color: section.iconColor, display: 'flex', alignItems: 'center', gap: '5px' }}>
                {section.isCommunity ? "Read & Share" : "Explore styles"} <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>

        {/* --- STAGGERED DYNAMIC PHOTO GALLERY COLLAGE --- */}
        <div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '20px', borderBottom: '2px solid #e5e7eb', paddingBottom: '10px', display: 'inline-block' }}>
            Photo Gallery
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '200px', gap: '15px' }}>
            
            {[
              { col: 'span 2', row: 'span 2' },
              { col: 'span 1', row: 'span 1' },
              { col: 'span 1', row: 'span 1' },
              { col: 'span 2', row: 'span 1' }
            ].map((styleProps, idx) => {
              const imageSrc = allCollageImages[galleryIndices[idx]];
              return (
                <div key={`gallery-slot-${idx}`} style={{ gridColumn: styleProps.col, gridRow: styleProps.row, borderRadius: '16px', overflow: 'hidden', position: 'relative', backgroundColor: '#111827' }}>
                  <img 
                    key={imageSrc} /* The key forces React to replay the animation when the image swaps! */
                    src={imageSrc} 
                    alt={`Travel Inspiration ${idx + 1}`} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s', animation: 'fadeSwap 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards' }} 
                    onMouseEnter={(e)=>e.currentTarget.style.transform='scale(1.05)'} 
                    onMouseLeave={(e)=>e.currentTarget.style.transform='scale(1)'}
                  />
                </div>
              );
            })}
            
          </div>
        </div>

      </div>

      {/* --- MODAL SYSTEM --- */}
      {selectedMainSection && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 100, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ backgroundColor: 'white', width: '100%', maxWidth: '1000px', borderRadius: '24px', overflow: 'hidden', position: 'relative', height: '85vh', display: 'flex', flexDirection: 'column', boxShadow: '0 20px 50px rgba(0,0,0,0.2)' }}>

            {/* Modal Header */}
            <div style={{ padding: '20px 30px', borderBottom: '1px solid #e5e7eb', backgroundColor: 'white' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: (selectedSubPersona && !isCommunityView) ? '15px' : '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  {(selectedSubPersona || isWritingStory) && (
                    <button 
                      onClick={() => {
                        if(isWritingStory) setIsWritingStory(false);
                        else goBackToSubMenu(); 
                      }} 
                      style={{ border: 'none', background: 'none', cursor: 'pointer', marginRight: '5px' }}
                    >
                      <ArrowLeft size={24} color="#374151" />
                    </button>
                  )}
                  <div style={{ padding: '10px', backgroundColor: selectedMainSection.color, borderRadius: '12px', color: selectedMainSection.iconColor }}>
                    <selectedMainSection.icon size={24} />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827' }}>
                      {isWritingStory ? "Write a Story" : selectedSubPersona ? selectedSubPersona.title : selectedMainSection.title}
                    </h2>
                    <p style={{ fontSize: '13px', color: '#6b7280' }}>
                      {isCommunityView ? "Odessey Traveler Community" : selectedSubPersona ? "Curated suggestions" : "Select your travel style"}
                    </p>
                  </div>
                </div>
                <button onClick={closeModal} style={{ background: '#f3f4f6', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                  <X size={20} color="#374151" />
                </button>
              </div>

              {/* SEARCH BAR */}
              {selectedSubPersona && !isCommunityView && (
                <form onSubmit={handleManualSearch} style={{ position: 'relative' }}>
                  <input type="text" placeholder={`Search a place, city, or state for ${selectedSubPersona.title.toLowerCase()}... (e.g. Vadodara)`} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} style={{ width: '100%', padding: '12px 15px 12px 45px', borderRadius: '12px', border: '1px solid #e5e7eb', fontSize: '14px', outline: 'none', backgroundColor: '#f9fafb' }} />
                  <Search size={18} color="#9ca3af" style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)' }} />
                </form>
              )}
            </div>

            {/* --- MODAL CONTENT AREA --- */}
            <div style={{ padding: '30px', overflowY: 'auto', backgroundColor: '#f9fafb', flex: 1 }} className="hide-scrollbar">
              
              {/* VIEW 1: COMMUNITY STORIES & WRITING */}
              {isCommunityView ? (
                isWritingStory ? (
                  <form onSubmit={submitStory} style={{ maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Your Name</label>
                      <input required type="text" placeholder="John Doe" value={newStory.author} onChange={e=>setNewStory({...newStory, author: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Location / Destination</label>
                        <input required type="text" placeholder="e.g. Manali, HP" value={newStory.location} onChange={e=>setNewStory({...newStory, location: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', boxSizing: 'border-box' }} />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Travel Persona</label>
                        <select value={newStory.type} onChange={e=>setNewStory({...newStory, type: e.target.value})} disabled={selectedSubPersona?.isCommunityTab} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', boxSizing: 'border-box', backgroundColor: selectedSubPersona?.isCommunityTab ? '#f3f4f6' : 'white', cursor: selectedSubPersona?.isCommunityTab ? 'not-allowed' : 'pointer', color: selectedSubPersona?.isCommunityTab ? '#9ca3af' : '#111827' }}>
                          <option>The Traveller</option>
                          <option>The Tourist</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Story Title</label>
                      <input required type="text" placeholder="A magical weekend in the mountains..." value={newStory.title} onChange={e=>setNewStory({...newStory, title: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '14px', fontWeight: 'bold', color: '#374151', marginBottom: '8px' }}>Your Experience</label>
                      <textarea required rows="6" placeholder="Tell us about the hidden spots, local food, or funny mishaps..." value={newStory.content} onChange={e=>setNewStory({...newStory, content: e.target.value})} style={{ width: '100%', padding: '14px', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', boxSizing: 'border-box', resize: 'vertical' }}></textarea>
                    </div>
                    <button type="submit" style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#6d28d9', color: 'white', fontWeight: 'bold', fontSize: '16px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', transition: 'background 0.2s', marginTop: '10px' }} onMouseEnter={e=>e.currentTarget.style.backgroundColor='#5b21b6'} onMouseLeave={e=>e.currentTarget.style.backgroundColor='#6d28d9'}><Send size={20} /> Publish Story</button>
                  </form>
                ) : (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
                      <p style={{ color: '#6b7280', fontSize: '15px' }}>{selectedSubPersona?.isCommunityTab ? `Stories published by ${selectedSubPersona.typeFilter}s.` : `Discover experiences shared by other travelers.`}</p>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => navigate('/story')} style={{ padding: '12px 20px', borderRadius: '12px', backgroundColor: '#f3f4f6', color: '#374151', fontWeight: 'bold', fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }} onMouseEnter={e=>e.currentTarget.style.backgroundColor='#e5e7eb'} onMouseLeave={e=>e.currentTarget.style.backgroundColor='#f3f4f6'}><BookOpen size={16} /> View Travel Diaries</button>
                        <button onClick={() => setIsWritingStory(true)} style={{ padding: '12px 20px', borderRadius: '12px', backgroundColor: '#6d28d9', color: 'white', fontWeight: 'bold', fontSize: '14px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', transition: 'background 0.2s' }} onMouseEnter={e=>e.currentTarget.style.backgroundColor='#5b21b6'} onMouseLeave={e=>e.currentTarget.style.backgroundColor='#6d28d9'}><Edit3 size={16} /> Share Your Story</button>
                      </div>
                    </div>
                    
                    {storiesToShow.length > 0 ? (
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
                        {storiesToShow.map((story) => (
                          <div key={story.id} style={{ backgroundColor: 'white', borderRadius: '16px', padding: '25px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '15px' }}>
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: story.type === 'The Traveller' ? '#0284c7' : '#ea580c', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '5px' }}>{story.type === 'The Traveller' ? <Compass size={14}/> : <Camera size={14}/>} {story.type}</div>
                                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#111827', margin: 0 }}>{story.title}</h3>
                              </div>
                              <button onClick={() => handleDeleteStory(story.id)} style={{ background: '#fee2e2', border: 'none', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ef4444', cursor: 'pointer', transition: 'all 0.2s' }} title="Delete Story"><Trash2 size={16} /></button>
                            </div>
                            <p style={{ fontSize: '14px', color: '#4b5563', lineHeight: '1.6', marginBottom: '20px', fontStyle: 'italic', whiteSpace: 'pre-line' }}>"{story.content}"</p>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f3f4f6', paddingTop: '15px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#f3f4f6', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9ca3af' }}><User size={16}/></div>
                                <div>
                                  <div style={{ fontSize: '13px', fontWeight: 'bold', color: '#374151' }}>{story.author}</div>
                                  <div style={{ fontSize: '11px', color: '#9ca3af' }}>{story.date}</div>
                                </div>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontWeight: '600', color: '#6b7280', backgroundColor: '#f9fafb', padding: '6px 10px', borderRadius: '8px' }}><MapPin size={12} /> {story.location}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af', border: '1px dashed #d1d5db', borderRadius: '16px' }}><p style={{ marginBottom: '10px' }}>No stories have been shared in this category yet.</p><p style={{ fontWeight: 'bold', color: '#6b7280' }}>Be the first to share yours!</p></div>
                    )}
                  </>
                )
              ) : 
              
              /* VIEW 2: SUB-SECTION SELECTOR */
              !selectedSubPersona ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  {selectedMainSection.subSections.map((sub) => (
                    <div 
                      key={sub.id} onClick={() => handleSubPersonaClick(sub)}
                      style={{ backgroundColor: 'white', padding: '25px', borderRadius: '16px', border: '1px solid #e5e7eb', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', transition: 'all 0.2s', boxShadow: sub.isCommunityTab ? 'inset 0 0 0 2px #f3e8ff' : 'none' }}
                      onMouseEnter={(e) => { e.currentTarget.style.borderColor = selectedMainSection.iconColor; e.currentTarget.style.transform = 'translateY(-3px)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      <div style={{ color: sub.isCommunityTab ? '#6d28d9' : selectedMainSection.iconColor, marginBottom: '15px' }}><sub.icon size={32} /></div>
                      <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#1f2937' }}>{sub.title}</h4>
                      {sub.isCommunityTab && <span style={{ fontSize: '11px', color: '#6d28d9', fontWeight: 'bold', marginTop: '5px', textTransform: 'uppercase' }}>Read & Share</span>}
                    </div>
                  ))}
                </div>
              ) : 
              
              /* VIEW 3: DESTINATION RESULTS */
              (
                <>
                  {loading ? (
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}><Loader2 className="animate-spin" size={40} color={selectedMainSection.iconColor} /><p style={{ marginTop: '15px', color: '#6b7280', fontWeight: '500' }}>{searchTerm ? "Searching locations..." : "Curating the best spots..."}</p></div>
                  ) : destinations.length > 0 ? (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '25px' }}>
                      {destinations.map((dest, idx) => (
                        <div 
                          key={idx} onClick={() => navigate(`/place/${dest.name}`)}
                          style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', cursor: 'pointer', transition: 'transform 0.2s' }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                          <div style={{ height: '180px', overflow: 'hidden', backgroundColor: '#e5e7eb' }}><img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /></div>
                          <div style={{ padding: '20px' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#1f2937', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{dest.name}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '12px', color: selectedMainSection.iconColor, marginBottom: '10px', fontWeight: '600' }}><MapPin size={12} /> India</div>
                            <p style={{ fontSize: '13px', color: '#6b7280', lineHeight: '1.5', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{dest.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ textAlign: 'center', padding: '40px', color: '#9ca3af' }}><p>No destinations found for "{searchTerm || selectedSubPersona.title}". Please try again.</p></div>
                  )}
                </>
              )}

            </div>
          </div>
        </div>
      )}
      
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .animate-spin { animation: spin 1s linear infinite; }
        @keyframes spin { 100% { transform: rotate(360deg); } }
        
        /* 👇 NEW STAGGERED ANIMATION FOR THE GALLERY 👇 */
        @keyframes fadeSwap {
          0% { opacity: 0.2; filter: blur(8px); transform: scale(1.1); }
          100% { opacity: 1; filter: blur(0px); transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default TravelerTypes;