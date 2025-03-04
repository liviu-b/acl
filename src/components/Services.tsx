import React from 'react';
import { Code, Wrench, Globe, Headset as HeadsetHelp } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug }) => {
  return (
    <Link to={`/services/${slug}`} className="block h-full">
      <div className={`service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:transform hover:scale-105 h-full flex flex-col`} data-service-index={index}>
        <div className="h-48 overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-semibold ml-2">{title}</h3>
          </div>
          <p className="text-gray-600 flex-grow">{description}</p>
          <div className="mt-4 text-gray-700 font-medium">
            <span className="flex items-center">
              <span>Learn more</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
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
      icon: <Code className="h-6 w-6 text-gray-700" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "software-development"
    },
    {
      icon: <Wrench className="h-6 w-6 text-gray-700" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "consulting-architecture"
    },
    {
      icon: <Globe className="h-6 w-6 text-gray-700" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "web-solutions"
    },
    {
      icon: <HeadsetHelp className="h-6 w-6 text-gray-700" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "support-maintenance"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">{t('services.title')}</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
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