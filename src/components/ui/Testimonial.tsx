import React from 'react';
import Card from './Card';
import StarRating from './StarRating';
import { TestimonialType } from '../../types';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: TestimonialType;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ testimonial, className = '' }) => {
  return (
    <Card className={`p-6 ${className}`}>
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-14 h-14 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-bold text-lg text-royal-blue">{testimonial.name}</h4>
            <p className="text-dark-gray text-sm">{testimonial.location}</p>
          </div>
        </div>
        <Quote className="text-gold opacity-40" size={32} />
      </div>
      
      <StarRating rating={testimonial.rating} className="mb-4" />
      
      <p className="text-charcoal leading-relaxed">{testimonial.text}</p>
    </Card>
  );
};

export default Testimonial;