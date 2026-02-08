import React from 'react';
import { MapPin, Camera, Mountain, Waves } from 'lucide-react';


const DestinationCard = ({ destination }) => {
  const getIcon = (type) => {
    switch (type) {
      case 'mountain': return Mountain;
      case 'beach': return Waves;
      case 'heritage': return Camera;
      default: return MapPin;
    }
  };


  const Icon = getIcon(destination.type);


  return (
    <div className="group relative bg-white rounded-3xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer min-w-[320px] max-w-[380px]">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
       
        {/* Type Badge */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <Icon className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-gray-800 capitalize">{destination.type}</span>
        </div>


        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full px-2 py-1 text-sm font-bold">
          ⭐ {destination.rating}
        </div>
      </div>


      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
            {destination.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {destination.state}
          </span>
        </div>


        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {destination.description}
        </p>


        {/* Famous For Section */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-800 mb-2">Famous For:</h4>
          <div className="flex flex-wrap gap-2">
            {destination.famousFor.slice(0, 3).map((item, index) => (
              <span
                key={index}
                className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full border border-green-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>


        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg">
          Explore {destination.name}
        </button>
      </div>
    </div>
  );
};


export default DestinationCard;