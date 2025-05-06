import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '',
  hoverEffect = true
}) => {
  const baseStyles = 'bg-white rounded-lg shadow-card overflow-hidden';
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-card-hover hover:transform hover:scale-[1.03]' 
    : '';
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;