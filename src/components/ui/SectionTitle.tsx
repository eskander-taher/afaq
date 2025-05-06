import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = ''
}) => {
  const alignment = centered ? 'text-center' : 'text-right';
  
  return (
    <div className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-royal-blue mb-4 font-bukra">
        {title}
      </h2>
      {subtitle && (
        <p className="text-dark-gray text-lg max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={`h-1 bg-gold w-24 mt-6 rounded ${centered ? 'mx-auto' : 'mr-0 ml-auto'}`}></div>
    </div>
  );
};

export default SectionTitle;