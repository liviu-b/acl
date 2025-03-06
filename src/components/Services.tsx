import React from 'react';
import { Code, Wrench, Globe, Headset as HeadsetHelp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="block h-full group focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg"
      aria-labelledby={`service-title-${index}`}
    >
      <div 
        className={`
          service-card bg-white rounded-lg overflow-hidden 
          transition-all duration-500 h-full flex flex-col
          transform hover:scale-102
          group-hover:shadow-2xl group-focus:shadow-2xl
          relative before:absolute before:inset-0 before:bg-gradient-to-r 
          before:from-transparent before:via-white/5 before:to-transparent
          before:translate-x-[-200%] hover:before:translate-x-[200%]
          before:transition-transform before:duration-1000
          border-2 border-transparent hover:border-gray-200
        `} 
        data-service-index={index}
      >
        <div className="relative h-48 overflow-hidden group">
          <div className="absolute inset-0 bg-gray-900 opacity-20 group-hover:opacity-0 transition-opacity duration-300"></div>
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-100">
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center text-white">
                <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm">
                  {icon}
                </div>
                <h3 
                  id={`service-title-${index}`}
                  className="text-xl font-semibold ml-3 drop-shadow-lg"
                >
                  {title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-gray-50">
          <p className="text-gray-600 flex-grow leading-relaxed">
            {description}
          </p>
          <div className="mt-6 flex items-center text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
            <span className="mr-2">Learn more</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" 
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
      icon: <Code className="h-6 w-6 text-white" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "software-development"
    },
    {
      icon: <Wrench className="h-6 w-6 text-white" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "consulting-architecture"
    },
    {
      icon: <Globe className="h-6 w-6 text-white" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "web-solutions"
    },
    {
      icon: <HeadsetHelp className="h-6 w-6 text-white" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "support-maintenance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-800 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-white">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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