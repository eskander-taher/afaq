import React from 'react';
import { navLinks } from '../../data/navigation';
import { Instagram, Snail as Snapchat, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal-blue text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-4xl font-bold font-bukra">
                <span className="text-gold">آفاق</span> روسيا
              </h2>
            </div>
            <p className="mb-6 text-gray-300">
              نقدم تجارب سفر فاخرة في روسيا مصممة خصيصًا للمسافرين الخليجيين، مع خدمات حصرية وعناية فائقة بالتفاصيل.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="https://www.instagram.com/afaqrussia/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-white hover:text-gold transition-colors duration-300">
                <Snapchat size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gold">روابط سريعة</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-gray-300 hover:text-gold transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 text-gold">اتصل بنا</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPin className="text-gold ml-3" size={20} />
                <span className="text-gray-300">موسكو، روسيا</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-gold ml-3" size={20} />
                <a href="https://wa.me/79932771169" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  +7 993 277 1169
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="text-gold ml-3" size={20} />
                <span className="text-gray-300">afaqrussia@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} آفاق روسيا. جميع الحقوق محفوظة.
          </p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gold text-sm">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-gold text-sm">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;