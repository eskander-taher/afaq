import React from 'react';
import { testimonials } from '../../data/testimonials';
import Testimonial from '../ui/Testimonial';
import SectionTitle from '../ui/SectionTitle';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-royal-blue opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container-custom relative z-10">
        <SectionTitle 
          title="ماذا يقول عملاؤنا"
          subtitle="استمع إلى تجارب مسافرينا المميزين من دول الخليج وانطباعاتهم حول خدماتنا الحصرية."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Testimonial 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;