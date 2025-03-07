import React from 'react';
import { Code, Wrench, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug, features }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl"
      aria-labelledby={`service-title-${index}`}
    >
      <div className="relative bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 transition-all duration-500 group-hover:border-white/20">
        {/* Image Container */}
        <div className="relative h-36 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative p-4">
          {/* Icon and Title */}
          <div className="flex items-center mb-2">
            <div className="p-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 group-hover:bg-white/15 transition-colors duration-300">
              {icon}
            </div>
            <h3 
              id={`service-title-${index}`}
              className="text-base font-semibold ml-2 text-white group-hover:text-blue-300 transition-colors duration-300"
            >
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-2 group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
          
          {/* Features Grid */}
          {features && (
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300"
                >
                  <div className="w-1 h-1 rounded-full bg-blue-400 mr-1.5 group-hover:bg-blue-300 transition-colors duration-300"></div>
                  <span className="truncate">{feature}</span>
                </div>
              ))}
            </div>
          )}

          {/* Learn More Link */}
          <div className="flex items-center text-blue-400 text-xs font-medium group-hover:text-blue-300 transition-all duration-300">
            <span className="mr-1.5">Learn more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3.5 w-3.5 transform transition-all duration-500 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Code className="h-4 w-4 text-blue-400" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "software-development",
      features: [
        "Custom Enterprise Solutions",
        "Cloud-Native Applications",
        "API Development",
        "System Modernization"
      ]
    },
    {
      icon: <Wrench className="h-4 w-4 text-emerald-400" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "consulting-architecture",
      features: [
        "Tech Architecture",
        "Cloud Strategy",
        "Security Review",
        "Performance Tuning"
      ]
    },
    {
      icon: <Globe className="h-4 w-4 text-amber-400" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "web-solutions",
      features: [
        "Responsive Design",
        "E-commerce",
        "Progressive Apps",
        "CMS Solutions"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
              slug={service.slug}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;