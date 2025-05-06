import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Destinations from './components/sections/Destinations';
import Testimonials from './components/sections/Testimonials';
import About from './components/sections/About';
import BookingForm from './components/sections/BookingForm';
import { Analytics } from "@vercel/analytics/react";

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'آفاق روسيا | تجارب سفر فاخرة';
    
    // Set up intersection observer for animation-on-scroll elements
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Clean up
      document.querySelectorAll('.animate-on-scroll').forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
		<>
			<Toaster position="top-center" />
			<Layout>
				<Hero />
				<Services />
				<Stats />
				<Destinations />
				<About />
				<Testimonials />
				<BookingForm />
			</Layout>
			<Analytics />
		</>
  );
}

export default App;