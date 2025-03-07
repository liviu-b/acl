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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center relative">
          {/* Logo */}
          <div 
            onClick={scrollToTop}
            className="inline-flex justify-center mb-12 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-purple-500/50 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transform group-hover:scale-110 transition-all duration-500">
                <Code className="h-16 w-16 text-white group-hover:text-blue-300 transition-colors duration-500" />
              </div>
            </div>
          </div>

          {/* Title */}
          <div className="relative mb-8">
            <h1 className="font-tech text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tech-gradient-text relative z-10 tracking-tight">
              {t('hero.title')}
            </h1>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl -z-10 transform scale-150"></div>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto text-gray-300 font-light leading-relaxed">
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <a 
            href="#services" 
            className="group relative inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl transition-all duration-500 hover:bg-white/15 hover:scale-105 overflow-hidden"
          >
            {/* Button Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
            
            <span className="relative font-tech text-lg">
              {t('hero.cta')}
            </span>
            <ArrowDown className="relative ml-3 h-5 w-5 transform group-hover:translate-y-1 transition-transform duration-500" />
          </a>

          {/* Decorative Elements */}
          <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2">
            <div className="w-px h-24 bg-gradient-to-b from-white/0 via-white/20 to-white/0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;