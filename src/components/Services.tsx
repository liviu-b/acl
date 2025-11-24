import React from 'react';
import { 
  Code, 
  Layers, 
  Cpu, 
  Globe, 
  Cloud, 
  Network, 
  ArrowRight
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, imageUrl, index, slug, color }) => {
  return (
    <Link 
      to={`/services/${slug}`}
      className="group relative block h-full"
      aria-labelledby={`service-title-${index}`}
    >
      {/* Card Container */}
      <div className="relative h-full overflow-hidden rounded-3xl bg-gray-800/40 border border-white/5 p-8 transition-all duration-500 hover:bg-gray-800/60 hover:border-white/10 hover:shadow-2xl hover:shadow-blue-500/10">
        
        {/* Background Gradient Blob (Matches Icon Color) */}
        <div 
          className={`absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-20 ${color}`} 
        />

        {/* Icon Box */}
        <div className="relative mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 shadow-inner ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10">
          <div className={`transition-colors duration-300 ${color.replace('bg-', 'text-')}`}>
            {React.cloneElement(icon, { size: 32 })}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h3 
            id={`service-title-${index}`}
            className="mb-4 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-200 font-tech"
          >
            {title}
          </h3>
          
          <p className="mb-8 text-gray-400 leading-relaxed transition-colors duration-300 group-hover:text-gray-300">
            {description}
          </p>

          {/* 'Learn More' Link visual */}
          <div className="flex items-center text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white">
            <span className="mr-2">Discover Solution</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>

        {/* Hover Bottom Line */}
        <div className={`absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full ${color}`} />
      </div>
    </Link>
  );
};

const Services = () => {
  const { t } = useTranslation();
  
  const services = [
    {
      icon: <Globe />,
      title: t('services.webmobile.title'),
      description: t('services.webmobile.description'),
      slug: "web-mobile-apps",
      color: "bg-blue-500",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80"
    },
    {
      icon: <Code />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      slug: "custom-software",
      color: "bg-indigo-500",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80"
    },
    {
      icon: <Cloud />,
      title: t('services.saas.title'),
      description: t('services.saas.description'),
      slug: "saas-development",
      color: "bg-cyan-500",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
    },
    {
      icon: <Cpu />,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
      slug: "ai-automation",
      color: "bg-purple-500",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80"
    },
    {
      icon: <Network />,
      title: t('services.api.title'),
      description: t('services.api.description'),
      slug: "api-integrations",
      color: "bg-pink-500",
      imageUrl: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80"
    },
    {
      icon: <Layers />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      slug: "consulting-architecture",
      color: "bg-emerald-500",
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden bg-gray-900">
      {/* Ambient Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-tech text-sm font-bold tracking-widest text-blue-400 uppercase mb-4">
            What We Do
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('services.title')}
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              {...service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
