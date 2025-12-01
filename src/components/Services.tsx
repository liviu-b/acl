import React from 'react';
import { Code, Wrench, Smartphone, Globe, Cloud, Cpu, Network, Zap } from 'lucide-react'; 
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug, features }) => {
  return (
    <Link 
      to={`/services/${slug}`} 
      className="group block relative focus:outline-none overflow-hidden
                w-full max-w-md mx-auto bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10
                transition-all duration-300 hover:bg-white/10 shadow-md hover:shadow-xl"
      aria-labelledby={`service-title-${index}`}
    >
      {/* Card header with image */}
      <div className="relative">
        {/* Background image */}
        <div className="relative h-48 overflow-hidden rounded-t-2xl">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover brightness-50 transition-transform duration-700 group-hover:scale-110" 
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60"></div>
          
          {/* Title overlaid on image */}
          <h2 
            id={`service-title-${index}`}
            className="absolute bottom-4 left-4 right-4 font-bold text-xl text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text z-20
                        transition-transform duration-300 group-hover:translate-y-[-4px]"
          >
            {title}
          </h2>
        </div>

        {/* Overlapping icon */}
        <div className="absolute -bottom-6 right-8 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/30
                        flex items-center justify-center shadow-lg group-hover:bg-blue-500/30 transition-colors duration-300">
          <div className="text-blue-400">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Card body */}
      <div className="pt-10 px-6 pb-6">
        {/* Description */}
        <p className="text-gray-300 text-sm leading-relaxed mb-6 group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>
        
        {/* Arrow Button */}
        <div className="flex items-center justify-end">
          <span className="inline-flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-[300ms]">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-[18px] w-[18px] transform transition-transform duration-[300ms] group-hover:translate-x-[4px]" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};


const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Smartphone className="h-5 w-5 text-blue-400" />,
      title: t('services.apps.title'),
      description: t('services.apps.description'),
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "custom-web-mobile-apps",
      features: [t('services.apps.f1'), t('services.apps.f2'), t('services.apps.f3'), t('services.apps.f4')]
    },
    {
      icon: <Code className="h-5 w-5 text-emerald-400" />,
      title: t('services.custom.title'),
      description: t('services.custom.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "custom-software-development",
      features: [t('services.custom.f1'), t('services.custom.f2'), t('services.custom.f3'), t('services.custom.f4')]
    },
    {
      icon: <Cloud className="h-5 w-5 text-sky-400" />,
      title: t('services.saas.title'),
      description: t('services.saas.description'),
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "saas-development",
      features: [t('services.saas.f1'), t('services.saas.f2'), t('services.saas.f3'), t('services.saas.f4')]
    },
    {
      icon: <Cpu className="h-5 w-5 text-purple-400" />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "ai-automation",
      features: [t('services.ai.f1'), t('services.ai.f2'), t('services.ai.f3'), t('services.ai.f4')]
    },
    {
      icon: <Network className="h-5 w-5 text-amber-400" />, 
      title: t('services.api.title'),
      description: t('services.api.description'),
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "api-integrations",
      features: [t('services.api.f1'), t('services.api.f2'), t('services.api.f3'), t('services.api.f4')]
    },
    {
      icon: <Wrench className="h-5 w-5 text-rose-400" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      slug: "software-consulting",
      features: [t('services.consulting.f1'), t('services.consulting.f2'), t('services.consulting.f3'), t('services.consulting.f4')]
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
        
        <div className="grid gap-8 max-w-7xl mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
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