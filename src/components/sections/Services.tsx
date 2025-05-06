import React, { useState } from 'react';
import { services } from '../../data/services';
import SectionTitle from '../ui/SectionTitle';
import { Hotel, Compass, Ticket, Star, Palmtree as PalmTree, HelpingHand, ChevronDown, ChevronUp } from 'lucide-react';

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      hotel: <Hotel size={24} />,
      compass: <Compass size={24} />,
      ticket: <Ticket size={24} />,
      star: <Star size={24} />,
      palmtree: <PalmTree size={24} />,
      'helping-hand': <HelpingHand size={24} />
    };
    return icons[iconName] || <Star size={24} />;
  };

  return (
    <section id="services" className="py-20 bg-light-gray">
      <div className="container-custom">
        <SectionTitle 
          title="خدماتنا الفاخرة"
          subtitle="نقدم مجموعة متنوعة من الخدمات الحصرية المصممة خصيصًا لتلبية احتياجات المسافرين الخليجيين الباحثين عن تجارب فريدة في روسيا."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-card overflow-hidden transition-all duration-300 hover:shadow-card-hover"
            >
              <div className="relative h-48">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-white">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="font-bold text-xl text-royal-blue mr-3 font-bukra">{service.title}</h3>
                </div>
                
                <p className="text-dark-gray mb-4">{service.description}</p>
                
                {service.details && (
                  <button
                    onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                    className="flex items-center justify-between w-full text-gold hover:text-gold-hover transition-colors duration-300"
                  >
                    <span>عرض التفاصيل</span>
                    {expandedService === service.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                )}
                
                {expandedService === service.id && service.details && (
                  <div className="mt-4 border-t pt-4">
                    {service.details.categories?.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        <h4 className="font-bold text-royal-blue mb-2">{category.name}</h4>
                        <ul className="list-disc list-inside space-y-1 text-dark-gray">
                          {category.items.map((item, itemIdx) => (
                            <li key={itemIdx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    
                    {service.details.activities && (
                      <ul className="list-disc list-inside space-y-1 text-dark-gray">
                        {service.details.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    )}
                    
                    {service.details.shows && (
                      <ul className="list-disc list-inside space-y-1 text-dark-gray">
                        {service.details.shows.map((show, idx) => (
                          <li key={idx}>{show}</li>
                        ))}
                      </ul>
                    )}
                    
                    {service.details.experiences && (
                      <ul className="list-disc list-inside space-y-1 text-dark-gray">
                        {service.details.experiences.map((exp, idx) => (
                          <li key={idx}>{exp}</li>
                        ))}
                      </ul>
                    )}
                    
                    {service.details.attractions && (
                      <ul className="list-disc list-inside space-y-1 text-dark-gray">
                        {service.details.attractions.map((attraction, idx) => (
                          <li key={idx}>{attraction}</li>
                        ))}
                      </ul>
                    )}
                    
                    {service.details.services && (
                      <ul className="list-disc list-inside space-y-1 text-dark-gray">
                        {service.details.services.map((service, idx) => (
                          <li key={idx}>{service}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;