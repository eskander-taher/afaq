import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: number;
  className?: string;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  size = 20,
  className = ''
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      {[...Array(maxRating)].map((_, index) => (
        <Star
          key={index}
          size={size}
          fill={index < rating ? '#C5A572' : 'transparent'}
          stroke={index < rating ? '#C5A572' : '#707070'}
          className={`${index < rating ? 'text-gold' : 'text-dark-gray'} mx-0.5`}
        />
      ))}
    </div>
  );
};

export default StarRating;