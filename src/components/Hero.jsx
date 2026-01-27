import React from 'react';
import { Users, Hotel, MapPin } from 'lucide-react';

const iconMap = {
  Users: Users,
  Hotel: Hotel,
  MapPin: MapPin
};

const Hero = ({ data, stats }) => {
  return (
    <div id="home" className="relative flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center justify-center text-center px-4">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={data.image} 
            alt="Kashmir Landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-emerald-900/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-white max-w-3xl animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 drop-shadow-lg">
            {data.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light text-gray-100">
            {data.subtitle}
          </p>
          <a className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg ease-in-out"
            href='#destinations'>
            {data.cta_text}
          </a>
        </div>
      </div>

      {/* Floating Stats Section - Overlaps Hero and Next Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const IconComponent = iconMap[stat.icon];
            return (
              <div key={stat.id} className="bg-white p-8 rounded-xl shadow-xl flex items-center gap-6 transform hover:-translate-y-1 transition-transform duration-300">
                <div className="p-4 bg-emerald-100 text-emerald-900 rounded-full">
                  {IconComponent && <IconComponent size={32} />}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-800">{stat.count}</h3>
                  <p className="text-gray-500 font-medium">{stat.name}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
