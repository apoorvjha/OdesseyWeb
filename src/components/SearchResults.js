import React from 'react';
import DestinationCard from './DestinationCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';


const SearchResults = ({ searchQuery, searchResults }) => {
  if (!searchResults || searchResults.length === 0) {
    return null;
  }


  // Mock destination data with images
  const mockDestinations = [
    {
      id: 1,
      name: "Taj Mahal, Agra",
      state: "Uttar Pradesh",
      type: "heritage",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1663918455395-49146be36cbb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxJbmRpYSUyMGxhbmRtYXJrc3xlbnwwfHx8fDE3NTg3Mzc3Njl8MA&ixlib=rb-4.1.0&q=85",
      description: "One of the Seven Wonders of the World, this magnificent white marble mausoleum represents eternal love and architectural brilliance.",
      famousFor: ["Marble Architecture", "UNESCO World Heritage", "Mughal History", "Photography"]
    },
    {
      id: 2,
      name: "Munnar Hills",
      state: "Kerala",
      type: "mountain",
      rating: "4.7",
      image: "https://images.unsplash.com/photo-1667694140865-0afefb32e6e6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwyfHxJbmRpYSUyMGRlc3RpbmF0aW9uc3xlbnwwfHx8fDE3NTg3Mzc3Mzl8MA&ixlib=rb-4.1.0&q=85",
      description: "Rolling tea gardens, misty mountains, and cool climate make Munnar a perfect hill station for nature lovers and eco-tourists.",
      famousFor: ["Tea Plantations", "Cool Climate", "Eco-Tourism", "Trekking"]
    },
    {
      id: 3,
      name: "Gulmarg Valley",
      state: "Kashmir",
      type: "mountain",
      rating: "4.8",
      image: "https://images.unsplash.com/photo-1667694141297-753e5144da35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwzfHxJbmRpYSUyMGRlc3RpbmF0aW9uc3xlbnwwfHx8fDE3NTg3Mzc3Mzl8MA&ixlib=rb-4.1.0&q=85",
      description: "Paradise on Earth with snow-capped mountains, cable car rides, and world-class skiing facilities in pristine natural beauty.",
      famousFor: ["Cable Car", "Skiing", "Mountain Views", "Adventure Sports"]
    },
    {
      id: 4,
      name: "Golden Temple",
      state: "Punjab",
      type: "heritage",
      rating: "4.9",
      image: "https://images.unsplash.com/photo-1580063976019-e7cca58695e0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwyfHxJbmRpYSUyMGxhbmRtYXJrc3xlbnwwfHx8fDE3NTg3Mzc3Njl8MA&ixlib=rb-4.1.0&q=85",
      description: "The holiest Gurudwara and spiritual center for Sikhs, known for its stunning golden architecture and peaceful atmosphere.",
      famousFor: ["Sikh Heritage", "Golden Architecture", "Spirituality", "Community Kitchen"]
    },
    {
      id: 5,
      name: "Kerala Backwaters",
      state: "Kerala",
      type: "beach",
      rating: "4.6",
      image: "https://images.unsplash.com/photo-1604935385675-92bdee60deb2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxJbmRpYSUyMGxhbmRtYXJrc3xlbnwwfHx8fDE3NTg3Mzc3Njl8MA&ixlib=rb-4.1.0&q=85",
      description: "Serene network of waterways, lagoons, and lakes offering houseboat cruises through coconut groves and traditional villages.",
      famousFor: ["Houseboat Cruises", "Coconut Groves", "Ayurvedic Spas", "Traditional Villages"]
    },
    {
      id: 6,
      name: "Shimla Hills",
      state: "Himachal Pradesh",
      type: "mountain",
      rating: "4.5",
      image: "https://images.unsplash.com/photo-1667694140339-aa51181fa672?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxJbmRpYSUyMGRlc3RpbmF0aW9uc3xlbnwwfHx8fDE3NTg3Mzc3Mzl8MA&ixlib=rb-4.1.0&q=85",
      description: "The Queen of Hills with colonial architecture, toy train rides, and stunning mountain vistas perfect for a refreshing getaway.",
      famousFor: ["Toy Train", "Colonial Architecture", "Mall Road", "Mountain Views"]
    }
  ];


  const scrollContainer = (direction) => {
    const container = document.getElementById('carousel-container');
    const scrollAmount = 340;
   
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };


  return (
    <section className="py-16 bg-gradient-to-b from-green-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Amazing Places {searchQuery && `in ${searchQuery}`}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked eco-friendly destinations that showcase India's natural beauty and cultural heritage
          </p>
        </div>


        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scrollContainer('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
         
          <button
            onClick={() => scrollContainer('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>


          {/* Scrollable Container */}
          <div
            id="carousel-container"
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitScrollbar: { display: 'none' }
            }}
          >
            {mockDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>


        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Destinations
          </button>
        </div>
      </div>
    </section>
  );
};


export default SearchResults;