import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Innovative Software Solutions</h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
          ACL-Smart Software delivers cutting-edge technology solutions tailored to your business needs.
        </p>
        <a 
          href="#services" 
          className="inline-flex items-center px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-300"
        >
          Explore Our Services
          <ArrowDown className="ml-2 h-5 w-5" />
        </a>
      </div>
    </section>
  );
};

export default Hero;