import React from 'react';
import Card from './Card';
import { ServiceType } from '../../types';
import { Compass, Snowflake, Anchor, Utensils, Landmark, ShoppingBag, Crown, Heart, Mountain } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceType;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, className = '' }) => {
  // Map of icon names to icon components
  const iconMap: Record<string, React.ReactNode> = {
    'compass': <Compass size={24} />,
    'snowflake': <Snowflake size={24} />,
    'anchor': <Anchor size={24} />,
    'utensils': <Utensils size={24} />,
    'landmark': <Landmark size={24} />,
    'shopping-bag': <ShoppingBag size={24} />,
    'crown': <Crown size={24} />,
    'heart': <Heart size={24} />,
    'mountain': <Mountain size={24} />
  };

  return (
    <Card className={`h-full ${className}`}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white">
            {iconMap[service.icon]}
          </div>
          <h3 className="font-bold text-xl text-royal-blue mr-3 font-bukra">{service.title}</h3>
        </div>
        <p className="text-dark-gray">{service.description}</p>
      </div>
    </Card>
  );
};

export default ServiceCard;