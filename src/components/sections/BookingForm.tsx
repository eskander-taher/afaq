import React, { useState } from 'react';
import Button from '../ui/Button';
import SectionTitle from '../ui/SectionTitle';
import { MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  phone: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mkgrrnlr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
        setFormData({
          name: '',
          phone: '',
        });
      } else {
        toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      toast.error('حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-royal-blue/5 relative overflow-hidden">
        <div className="container-custom">
          <SectionTitle 
            title="احجز رحلتك الآن"
            subtitle="دعنا نساعدك في تخطيط رحلة فاخرة إلى روسيا تناسب تطلعاتك واحتياجاتك الخاصة."
          />
          
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <form onSubmit={handleSubmit} className="p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                      الاسم الكريم
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-right"
                      placeholder="أدخل اسمك"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-medium-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold text-right"
                      placeholder="+966 5x xxx xxxx"
                    />
                  </div>
                  
                  <Button 
                    variant="primary" 
                    type="submit"
                    className="w-full"
                    icon={<MessageCircle size={18} />}
                    iconPosition="right"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الطلب'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/79932771169"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-colors duration-300 z-50"
      >
        <MessageCircle size={32} />
      </a>
    </>
  );
};

export default BookingForm;