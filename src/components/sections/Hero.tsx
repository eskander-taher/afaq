import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import { ChevronLeft, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          transform: `translateY(${offsetY * 0.5}px)`,
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-royal-blue via-royal-blue/70 to-royal-blue/50"></div>
      
      {/* Content */}
      <div className="container-custom relative z-10 mt-16 animate-fadeIn">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-bukra leading-tight text-shadow">
            اكتشف <span className="text-gold">روسيا</span> بأسلوب فاخر يناسب ذوقك
          </h1>
          <p className="text-xl text-white mb-8 text-shadow max-w-2xl">
            تجارب سفر حصرية مصممة خصيصًا للمسافرين من دول الخليج، مع خدمات استثنائية ورفاهية لا مثيل لها.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="primary" 
              size="lg"
              icon={<ChevronLeft size={20} />}
              iconPosition="left"
              onClick={() => {
                const servicesSection = document.getElementById('services');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              استكشف خدماتنا
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white bg-opacity-10 border-white text-white hover:bg-white hover:bg-opacity-20"
              onClick={() => window.open('https://wa.me/79932771169', '_blank')}
              icon={<MessageCircle size={20} />}
              iconPosition="right"
            >
              اتصل بنا
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white opacity-80 hover:opacity-100 transition-opacity duration-300">
          <span className="mb-2 text-sm">اكتشف المزيد</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;