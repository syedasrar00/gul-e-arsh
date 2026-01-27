import React, { useState } from 'react';
import Modal from './Modal';
import { CheckCircle } from 'lucide-react';

const Packages = ({ packages }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-serif text-emerald-900 mb-4">Popular Packages</h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Curated itineraries for your perfect vacation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:border-emerald-200 transition-all cursor-pointer"
              onClick={() => setSelectedPackage(pkg)}
            >
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden relative">
                 <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
                   Bestseller
                </div>
              </div>
              
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                  <p className="text-emerald-700 font-medium mb-4">{pkg.short_desc}</p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CheckCircle size={16} className="text-emerald-500"/> Includes Hotel & Meals
                    </div>
                     <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CheckCircle size={16} className="text-emerald-500"/> Transport Included
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-between items-center border-t pt-4">
                  <div>
                    <span className="text-xs text-gray-500 uppercase tracking-wide">Starting from</span>
                    <p className="text-2xl font-bold text-emerald-900">{pkg.price}</p>
                  </div>
                  <button className="px-6 py-2 bg-emerald-900 text-white rounded-lg hover:bg-emerald-800 transition-colors">
                    View Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={!!selectedPackage} 
        onClose={() => setSelectedPackage(null)} 
        data={selectedPackage} 
      />
    </section>
  );
};

export default Packages;