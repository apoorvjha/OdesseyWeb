import React from 'react';
import { Leaf } from 'lucide-react';


const Header = () => {
  const navLinks = [
    { name: 'Our Lodges', href: '/lodges' },
    { name: 'Experiences', href: '/experiences' },
    { name: 'Our Mission', href: '/mission' }
  ];


  const leftNavLinks = [
    { name: 'Plan your trip', href: '/plan' },
    { name: 'Story', href: '/story' },
    { name: 'Itinerary', href: '/itinerary' }
  ];


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between">
            {/* Left side: Logo + Left Navigation */}
            <div className="flex items-center space-x-8">
              <a href="/" className="flex items-center space-x-2 text-white hover:text-green-300 transition-colors">
                <Leaf className="h-7 w-7 text-green-400" />
                <span className="text-xl font-bold">EcoJourney</span>
              </a>
             
              <nav className="hidden md:flex items-center space-x-6">
                {leftNavLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
           
            {/* Right side: Right Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/90 hover:text-white text-sm font-medium transition-colors duration-200 hover:bg-white/10 px-3 py-2 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
            </nav>


            {/* Mobile menu button */}
            <button className="md:hidden text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};


export default Header;