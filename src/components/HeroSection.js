import React from 'react';
import SearchBox from './SearchBox';


const HeroSection = ({ onSearch }) => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 69, 52, 0.3), rgba(0, 69, 52, 0.4)), url(\'https://images.unsplash.com/photo-1583878594798-c31409c8ab4a\')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
     
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="display-large text-white mb-8 font-bold leading-tight">
          Reconnect With Yourself
        </h1>
       
        <p className="body-large text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discover pristine landscapes, authentic experiences, and sustainable lodges
          that bring you closer to nature\'s untouched beauty.
        </p>
       
        <div className="max-w-3xl mx-auto">
          <SearchBox onSearch={onSearch} />
        </div>
       
        <div className="mt-16 text-white/80 text-sm">
          <p>✨ Handpicked eco-friendly destinations across India</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
