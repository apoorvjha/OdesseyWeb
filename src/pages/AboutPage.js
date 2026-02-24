import React from 'react';
import { Leaf, Map, Heart, Globe, User, CheckCircle2, Mail, Instagram, MapPin, Compass } from 'lucide-react';
import logoSrc from '../Odesseylogo/logo_odessey.png';

const AboutPage = () => {
  return (
    <div style={{ backgroundColor: '#f9fafb', minHeight: '100vh', paddingBottom: '80px', fontFamily: 'system-ui, -apple-system, sans-serif', overflowX: 'hidden' }}>
      
      {/* 1. HERO SECTION */}
      <div style={{ position: 'relative', height: '50vh', minHeight: '450px', backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(17, 24, 39, 0.6), rgba(17, 24, 39, 0.95))' }} />
        
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', width: '100%', padding: '0 20px', boxSizing: 'border-box' }}>
          <img src={logoSrc} alt="Odessey" style={{ height: '70px', marginBottom: '25px', filter: 'brightness(0) invert(1)' }} />
          <h1 style={{ fontSize: '56px', fontWeight: '800', color: 'white', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.4)', letterSpacing: '-1px' }}>
            About Odessey
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.9)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
            Odessey is a modern travel experience company dedicated to curating journeys that feel personal, effortless, and meaningful. 
            We believe travel is more than movement—it’s a story.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 10 }}>
        
        {/* 2. FOUNDERS SECTION */}
        <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '50px', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', border: '1px solid #e5e7eb', marginTop: '-60px', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '40px', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Compass color="#16a34a" size={28} /> Meet The Founders
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            {/* Amrita */}
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9fafb', borderRadius: '20px', border: '1px solid #f3f4f6', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ width: '100px', height: '100px', backgroundColor: '#dcfce7', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(22, 163, 74, 0.15)' }}>
                <User size={45} color="#15803d" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '5px' }}>Amrita Pandey</h3>
              <p style={{ color: '#16a34a', fontWeight: '700', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>Founder</p>
            </div>
            
            {/* Sahil */}
            <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f9fafb', borderRadius: '20px', border: '1px solid #f3f4f6', transition: 'transform 0.3s' }} onMouseEnter={(e)=>e.currentTarget.style.transform='translateY(-5px)'} onMouseLeave={(e)=>e.currentTarget.style.transform='translateY(0)'}>
              <div style={{ width: '100px', height: '100px', backgroundColor: '#e0f2fe', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 20px rgba(2, 132, 199, 0.15)' }}>
                <User size={45} color="#0369a1" />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827', marginBottom: '5px' }}>Sahil Gupta</h3>
              <p style={{ color: '#0284c7', fontWeight: '700', textTransform: 'uppercase', fontSize: '13px', letterSpacing: '1px' }}>Co-Founder</p>
            </div>
          </div>
          
          <p style={{ marginTop: '40px', textAlign: 'center', color: '#4b5563', lineHeight: '1.8', fontSize: '18px', maxWidth: '800px', margin: '40px auto 0' }}>
            Together, Sahil and Amrita bring a shared passion for travel, storytelling, and curated experiences. 
            With complementary expertise in strategy, creativity, and traveller engagement, they lead Odessey with a unified vision — 
            to redefine how people experience travel by making every journey smooth, personal, and memorable.
          </p>
        </div>

        {/* 3. WHAT WE DO */}
        <div style={{ marginBottom: '80px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#111827', marginBottom: '40px', textAlign: 'center' }}>What We Do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '30px' }}>
            {[
              { title: "Curated Experiences", desc: "Tailor-made itineraries designed around your interests, pace, and budget.", icon: Heart, color: '#ef4444', bg: '#fee2e2' },
              { title: "Destination Planning", desc: "Expert recommendations for domestic & off-beat locations with on-ground insights.", icon: Map, color: '#0284c7', bg: '#e0f2fe' },
              { title: "Stays & Experiences", desc: "Handpicked boutique stays, luxury camps, immersive activities, and scenic escapes.", icon: Leaf, color: '#16a34a', bg: '#dcfce7' },
              { title: "End-to-End Management", desc: "We handle travel, stay, transport, and activities so you don't have to.", icon: CheckCircle2, color: '#9333ea', bg: '#f3e8ff' }
            ].map((item, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '35px 25px', borderRadius: '20px', border: '1px solid #e5e7eb', boxShadow: '0 4px 6px rgba(0,0,0,0.02)', transition: 'all 0.3s ease', cursor: 'default' }} onMouseEnter={(e)=>{e.currentTarget.style.transform='translateY(-8px)'; e.currentTarget.style.boxShadow='0 15px 30px rgba(0,0,0,0.08)';}} onMouseLeave={(e)=>{e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='0 4px 6px rgba(0,0,0,0.02)';}}>
                <div style={{ width: '60px', height: '60px', borderRadius: '16px', backgroundColor: item.bg, color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <item.icon size={30} />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '15px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 4. WHY ODESSEY & VISION (Edge-to-Edge Dark Section) */}
      <div style={{ backgroundColor: '#111827', color: 'white', padding: '100px 20px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-50px', right: '-50px', opacity: 0.05 }}><Globe size={300} /></div>
        
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', position: 'relative', zIndex: 10 }}>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '25px', color: 'white' }}>Why Odessey?</h2>
            <ul style={{ listStyle: 'none', padding: 0, fontSize: '16px', lineHeight: '1.8', margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ color: '#d1d5db' }}>Personalised like a friend, professional like a brand</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ color: '#d1d5db' }}>Transparent pricing with no hidden charges</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ color: '#d1d5db' }}>Strong local partnerships for smooth travel</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ color: '#d1d5db' }}>24×7 support throughout the journey</span></li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}><CheckCircle2 size={20} color="#4ade80" style={{ flexShrink: 0, marginTop: '4px' }} /> <span style={{ color: '#d1d5db' }}>Travel insights & storytelling that elevate your experience</span></li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '25px' }}>Our Shared Vision</h2>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#9ca3af', marginBottom: '30px' }}>
              To inspire people to explore deeply, travel meaningfully, and celebrate life through experiences crafted with intention, creativity, and care.
            </p>
            <div style={{ borderLeft: '4px solid #16a34a', paddingLeft: '25px' }}>
              <p style={{ fontSize: '22px', fontWeight: 'bold', color: '#4ade80', fontStyle: 'italic', lineHeight: '1.5', margin: 0 }}>
                "At Odessey, we believe every journey has a story – and our mission is to help travellers discover it."
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 5. CLIENTS & DESTINATIONS */}
      <div style={{ maxWidth: '1100px', margin: '80px auto', padding: '0 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '30px' }}>Who Travels With Us?</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginBottom: '80px' }}>
          {["Friends & Groups", "Families", "Solo Travellers", "Corporate Retreats", "Couples & Honeymooners"].map((client, idx) => (
            <span key={idx} style={{ padding: '12px 24px', backgroundColor: 'white', borderRadius: '100px', color: '#374151', fontWeight: '600', fontSize: '15px', border: '1px solid #e5e7eb', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
              {client}
            </span>
          ))}
        </div>

        <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#111827', marginBottom: '30px' }}>Popular Destinations</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
          {["Rann of Kutch", "Meghalaya", "Himachal", "Rajasthan", "Kerala", "Goa", "Andaman", "Hong Kong", "Thailand"].map((dest, idx) => (
             <span key={idx} style={{ padding: '10px 20px', backgroundColor: '#f0fdf4', color: '#166534', fontWeight: 'bold', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
               {dest}
             </span>
          ))}
        </div>
      </div>

      {/* 6. CONTACT & TAGLINE */}
      <div style={{ backgroundColor: '#111827', margin: '0 20px', borderRadius: '30px', padding: '60px 20px', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800', color: '#4ade80', marginBottom: '30px', fontStyle: 'italic', lineHeight: '1.4' }}>
            “Aap kahi bhi jao, phasoge nahi! <br/>Odessey is here with you.”
          </h2>
          
          <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.1)', width: '60%', margin: '0 auto 30px' }} />
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
            <a href="https://instagram.com/odesseytravelstories" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='#f472b6'} onMouseLeave={e=>e.currentTarget.style.color='white'}>
              <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Instagram size={20} color="#E1306C" /></div>
              @odesseytravelstories
            </a>
            <a href="mailto:founders@odessey.in" style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', textDecoration: 'none', fontWeight: '600', transition: 'color 0.2s' }} onMouseEnter={e=>e.currentTarget.style.color='#4ade80'} onMouseLeave={e=>e.currentTarget.style.color='white'}>
              <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><Mail size={20} color="#4ade80" /></div>
              founders@odessey.in
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'white', fontWeight: '600' }}>
              <div style={{ padding: '10px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: '50%' }}><MapPin size={20} color="#60a5fa" /></div>
              PAN-India Travel Planning
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AboutPage;