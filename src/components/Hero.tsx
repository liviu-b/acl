import React from 'react';
import { ArrowDown, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 opacity-90"></div>
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Technology Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div 
          onClick={scrollToTop}
          className="inline-flex justify-center mb-8 cursor-pointer transform hover:scale-110 transition-all duration-300"
        >
          <Code className="h-20 w-20 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <a 
          href="#services" 
          className="inline-flex items-center px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-300"
        >
          {t('hero.cta')}
          <ArrowDown className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;