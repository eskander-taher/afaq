import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "مرشدون متحدثون باللغة العربية",
    "وسائل نقل فاخرة خاصة",
    "حجوزات في أفخم الفنادق والمطاعم",
    "إجراءات تأشيرة مبسطة",
    "دعم على مدار الساعة طوال الأسبوع",
    "تجارب حصرية غير متاحة للسياح العاديين"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="فريق آفاق روسيا" 
                className="rounded-lg shadow-lg relative z-10"
              />
              <div className="absolute top-12 -left-12 w-64 h-64 bg-gold/10 rounded-lg -z-0 hidden lg:block"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-royal-blue/10 rounded-lg -z-0 hidden lg:block"></div>
            </div>
          </div>
          
          <div>
            <SectionTitle 
              title="من نحن"
              subtitle="شركة سفر متخصصة في تقديم تجارب فاخرة في روسيا مصممة خصيصًا للمسافرين من دول الخليج."
              centered={false}
            />
            
            <p className="text-dark-gray mb-8 leading-relaxed">
              تأسست شركة آفاق روسيا بهدف تقديم تجارب سفر استثنائية للمسافرين من دول الخليج الراغبين في استكشاف روسيا بأسلوب فاخر. نحن نفهم احتياجات المسافر الخليجي ونسعى لتلبيتها بأعلى مستويات الجودة والاحترافية.
            </p>
            
            <h3 className="text-xl font-bold text-royal-blue mb-4 font-bukra">لماذا تختار آفاق روسيا؟</h3>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="text-gold ml-2 flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button variant="primary">تعرف علينا أكثر</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;