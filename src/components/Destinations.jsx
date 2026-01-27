import React, { useState } from 'react';
import Modal from './Modal';

const Destinations = ({ destinations }) => {
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-emerald-900 mb-4">Top Destinations</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Explore the jewels of Kashmir</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedDestination(dest)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">Click to view details</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{dest.name}</h3>
                <p className="text-gray-600 line-clamp-2">{dest.desc}</p>
                <button className="mt-4 text-emerald-700 font-semibold group-hover:text-emerald-900 flex items-center gap-1">
                  Explore More &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedDestination} 
        onClose={() => setSelectedDestination(null)} 
        data={selectedDestination} 
      />
    </section>
  );
};

export default Destinations;