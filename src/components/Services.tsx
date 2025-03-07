import React from 'react';
import { Code, Wrench, Globe, Headset as HeadsetHelp, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="group relative h-full"
      aria-labelledby={`service-title-${index}`}
    >
      <div className="service-card h-full transform transition-all duration-500 group-hover:scale-102">
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center">
              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transform transition-transform duration-500 group-hover:scale-110">
                {icon}
              </div>
              <h3 
                id={`service-title-${index}`}
                className="text-xl font-bold ml-4 text-white drop-shadow-lg"
              >
                {title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white rounded-b-2xl">
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
            <span className="mr-2">Learn more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-2" 
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
      icon: <Code className="h-6 w-6 text-blue-500" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "software-development"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-purple-500" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "mobile-development"
    },
    {
      icon: <Wrench className="h-6 w-6 text-emerald-500" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "consulting-architecture"
    },
    {
      icon: <Globe className="h-6 w-6 text-amber-500" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "web-solutions"
    },
    {
      icon: <HeadsetHelp className="h-6 w-6 text-rose-500" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "support-maintenance"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              index={index}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;