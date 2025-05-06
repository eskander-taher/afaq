import React, { useState } from 'react';
import { destinations } from '../../data/destinations';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

const Destinations: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="container-custom">
        <SectionTitle 
          title="وجهاتنا المميزة"
          subtitle="استكشف أجمل وجهات روسيا مع باقات سفر مصممة خصيصًا لتناسب اهتماماتك."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <div 
              key={destination.id}
              className="relative overflow-hidden rounded-lg shadow-card h-96 group"
              onMouseEnter={() => setHoveredId(destination.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-blue/90 via-royal-blue/60 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 translate-y-0">
                <h3 className="text-2xl font-bold mb-2 font-bukra">{destination.name}</h3>
                <p className={`text-white/90 transition-all duration-500 ${
                  hoveredId === destination.id ? 'opacity-100 max-h-32' : 'opacity-0 max-h-0'
                }`}>
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;