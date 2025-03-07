import React from 'react';
import { ArrowDown, Code } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div 
          onClick={scrollToTop}
          className="inline-flex justify-center mb-8 cursor-pointer transform hover:scale-110 transition-all duration-300"
        >
          <div className="p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <Code className="h-12 w-12 text-white" />
          </div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-gray-300">
          {t('hero.subtitle')}
        </p>
        <a 
          href="#services" 
          className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl transition-all duration-300 hover:bg-white/20"
        >
          {t('hero.cta')}
          <ArrowDown className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;