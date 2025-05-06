import React, { useState, useEffect } from 'react';
import { navLinks } from '../../data/navigation';
import { Menu, X, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled
      ? 'bg-white shadow-md py-2'
      : 'bg-transparent py-4'
  }`;

  const logoClasses = `font-bukra font-bold text-2xl ${
    isScrolled ? 'text-royal-blue' : 'text-white'
  }`;

  const navItemClasses = `cursor-pointer px-3 py-2 text-lg font-medium transition-colors duration-300 ${
    isScrolled ? 'text-royal-blue hover:text-gold' : 'text-white hover:text-gold'
  }`;

  const handleBookingClick = () => {
    window.open('https://wa.me/79932771169', '_blank');
  };

  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className={logoClasses}>
            <span className="text-gold">آفاق</span>{" "}
            <span className={isScrolled ? 'text-royal-blue' : 'text-white'}>روسيا</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href} className={navItemClasses}>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <Button 
            variant="primary" 
            size="md"
            icon={<MessageCircle size={18} />}
            iconPosition="right"
            onClick={handleBookingClick}
          >
            احجز الآن
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="text-royal-blue hover:text-gold font-medium py-2 px-4 rounded-md hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="primary" 
                size="md"
                className="mt-4 w-full"
                icon={<MessageCircle size={18} />}
                iconPosition="right"
                onClick={handleBookingClick}
              >
                احجز الآن
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;