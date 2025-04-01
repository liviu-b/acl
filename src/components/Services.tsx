import React from 'react';
import { Code, Wrench, Smartphone, Globe } from 'lucide-react'; // Added Smartphone icon
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug, features }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="group relative focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-lg overflow-hidden mx-auto 
                 h-[500px] w-[350px] sm:h-[450px] sm:w-[300px] md:h-[480px] md:w-[320px] lg:h-[500px] lg:w-[350px]"
      aria-labelledby={`service-title-${index}`}
    >
      <div className="relative bg-white/10 backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative h-60 sm:h-48 md:h-56 lg:h-60 overflow-hidden rounded-t-lg">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col items-center text-center">
          {/* Icon */}
          <div className="p-3 rounded-full bg-white/20 shadow-inner mb-4">
            {icon}
          </div>

          {/* Title */}
          <h2 
            id={`service-title-${index}`}
            className="font-tech text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2"
          >
            {title}
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-xs md:text-sm lg:text-base leading-relaxed mb-4">
            {description}
          </p>

          {/* Features */}
          {features && (
            <ul className="text-gray-400 text-xs space-y-2 mb-4">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center space-x-2">
                  <span className="w-[6px] h-[6px] bg-blue-400 rounded-full"></span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Learn More Link */}
          <div className="text-blue-400 font-tech text-sm font-medium flex items-center space-x-2 group-hover:text-blue-300 transition-colors duration-300">
            <span>Explore Service</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[14px] w-[14px] transform transition-transform duration-300 group-hover:translate-x-[4px]" 
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
      icon: <Code className="h-5 w-5 text-blue-400" />,
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
      icon: <Wrench className="h-5 w-5 text-emerald-400" />,
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
      icon: <Smartphone className="h-5 w-5 text-purple-400" />,
      title: t('services.mobile.title'),
      description: t('services.mobile.description'),
      imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      slug: "mobile-app-development",
      features: [
        "Native iOS/Android Apps",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "App Maintenance"
      ]
    },

    {
      icon: <Globe className="h-5 w-5 text-amber-400" />,
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
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-tech text-4xl font-bold mb-6 tech-gradient-text">
            {t('services.title')}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid gap-8 max-w-7xl mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>

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