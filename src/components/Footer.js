/*
import React from 'react';
import { Leaf, MapPin, Phone, Mail } from 'lucide-react';


const Footer = () => {
  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Lodges', href: '/lodges' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Our Vision', href: '/vision' },
    { name: 'Our Mission', href: '/mission' }
  ];


  return (
    <footer className="bg-gradient-to-r from-teal-700 to-green-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section *}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Leaf className="h-8 w-8 text-green-300" />
              <span className="text-2xl font-bold">Odessey</span>
            </div>
            <p className="text-green-100 text-lg leading-relaxed mb-6 max-w-md">
              Discover pristine landscapes and authentic experiences through sustainable travel.
              We connect you with nature's untouched beauty across India.
            </p>
            <div className="space-y-3 text-green-100">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-300" />
                <span>Eco-friendly destinations across India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-300" />
                <span>+91 9353520020</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-300" />
                <span>hello@odessey.in</span>
              </div>
            </div>
          </div>


          {/* Quick Links *}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Newsletter *}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-white">Stay Connected</h3>
            <p className="text-green-100 mb-4">
              Get updates on new eco-friendly destinations and sustainable travel tips.
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>


        {/* Bottom Section *}
        <div className="border-t border-green-600/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-200 text-sm">
            © 2024 Odessey. All rights reserved. Travel sustainably, explore responsibly.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="text-green-200 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-green-200 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="/sustainability" className="text-green-200 hover:text-white text-sm transition-colors">Sustainability</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: '#111827', color: '#f9fafb', paddingTop: '80px', paddingBottom: '30px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* TOP SECTION: 4 COLUMNS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
          
          {/* Brand Col */}
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '20px' }}>Odessey</h2>
            <p style={{ color: '#9ca3af', lineHeight: '1.7', marginBottom: '25px', fontSize: '15px' }}>
              Redefining travel through immersive, sustainable, and unforgettable experiences across the diverse landscapes of India.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#9ca3af'}><Instagram size={20} /></a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#9ca3af'}><Facebook size={20} /></a>
              <a href="#" style={{ color: '#9ca3af', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='white'} onMouseLeave={e=>e.target.style.color='#9ca3af'}><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '25px' }}>Explore</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <Link to="/itinerary" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Ready Itineraries</Link>
              <Link to="/lodges" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Premium Lodges</Link>
              <Link to="/experiences" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Unique Experiences</Link>
              <Link to="/story" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Travel Diaries</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '25px' }}>Company</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {/* 👇 HERE IS THE LINK CONNECTING TO THE ABOUT US PAGE */}
              <Link to="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>About Us</Link>
              
              <Link to="/plan" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Plan Your Trip</Link>
              <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Privacy Policy</a>
              <a href="#" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '15px', transition: 'color 0.2s' }} onMouseEnter={e=>e.target.style.color='#16a34a'} onMouseLeave={e=>e.target.style.color='#9ca3af'}>Terms of Service</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '25px' }}>Get in Touch</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9ca3af', fontSize: '15px' }}>
                <Phone size={18} color="#16a34a" /> +91 93535 20020
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9ca3af', fontSize: '15px' }}>
                <Mail size={18} color="#16a34a" /> founders@odessey.com
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#9ca3af', fontSize: '15px', lineHeight: '1.5' }}>
                <MapPin size={18} color="#16a34a" style={{ flexShrink: 0, marginTop: '2px' }} /> 
                42, Goyal Complex, <br/>Ahmedabad, Gujarat, India
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM DIVIDER */}
        <div style={{ borderTop: '1px solid #374151', paddingTop: '30px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', color: '#6b7280', fontSize: '14px' }}>
          <div>© {currentYear} Odessey Travel. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            Built with <Heart size={14} color="#ef4444" fill="#ef4444" /> for modern explorers.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;