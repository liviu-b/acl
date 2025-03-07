import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code, Wrench, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = {
    'software-development': {
      icon: <Code className="h-12 w-12 text-blue-400" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Requirements Analysis" : "Analiza Cerințelor", description: currentLanguage === 'en' ? "We work closely with you to understand your business needs and define clear requirements." : "Lucrăm îndeaproape cu dumneavoastră pentru a înțelege nevoile afacerii și a defini cerințe clare." },
        { step: currentLanguage === 'en' ? "Design & Architecture" : "Design și Arhitectură", description: currentLanguage === 'en' ? "Our architects design scalable, maintainable software solutions tailored to your needs." : "Arhitecții noștri proiectează soluții software scalabile și mentenabile, adaptate nevoilor dumneavoastră." },
        { step: currentLanguage === 'en' ? "Development" : "Dezvoltare", description: currentLanguage === 'en' ? "Using agile methodologies, we develop your solution with regular feedback cycles." : "Folosind metodologii agile, dezvoltăm soluția dumneavoastră cu cicluri regulate de feedback." },
        { step: currentLanguage === 'en' ? "Testing & QA" : "Testare și QA", description: currentLanguage === 'en' ? "Rigorous testing ensures your software meets the highest quality standards." : "Testarea riguroasă asigură că software-ul dumneavoastră îndeplinește cele mai înalte standarde de calitate." },
        { step: currentLanguage === 'en' ? "Deployment" : "Implementare", description: currentLanguage === 'en' ? "We handle deployment to your preferred environment, ensuring smooth transitions." : "Gestionăm implementarea în mediul preferat, asigurând tranziții line." },
        { step: currentLanguage === 'en' ? "Maintenance & Support" : "Mentenanță și Suport", description: currentLanguage === 'en' ? "Ongoing support and updates keep your software running optimally." : "Suportul și actualizările continue mențin software-ul dumneavoastră funcționând optim." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Custom solutions tailored to your specific business needs",
        "Scalable architecture that grows with your business",
        "Modern, user-friendly interfaces",
        "Secure, reliable performance",
        "Integration with existing systems"
      ] : [
        "Soluții personalizate adaptate nevoilor specifice ale afacerii dumneavoastră",
        "Arhitectură scalabilă care crește odată cu afacerea dumneavoastră",
        "Interfețe moderne, ușor de utilizat",
        "Performanță sigură și fiabilă",
        "Integrare cu sistemele existente"
      ]
    },
    'consulting-architecture': {
      icon: <Wrench className="h-12 w-12 text-emerald-400" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Assessment" : "Evaluare", description: currentLanguage === 'en' ? "We evaluate your current systems, processes, and challenges." : "Evaluăm sistemele, procesele și provocările dumneavoastră actuale." },
        { step: currentLanguage === 'en' ? "Strategy Development" : "Dezvoltarea Strategiei", description: currentLanguage === 'en' ? "We create a tailored technology strategy aligned with your business goals." : "Creăm o strategie tehnologică personalizată, aliniată cu obiectivele dumneavoastră de afaceri." },
        { step: currentLanguage === 'en' ? "Architecture Design" : "Design Arhitectural", description: currentLanguage === 'en' ? "Our experts design optimal system architectures for your needs." : "Experții noștri proiectează arhitecturi de sistem optime pentru nevoile dumneavoastră." },
        { step: currentLanguage === 'en' ? "Implementation Planning" : "Planificarea Implementării", description: currentLanguage === 'en' ? "We develop detailed roadmaps for implementing recommended solutions." : "Dezvoltăm foi de parcurs detaliate pentru implementarea soluțiilor recomandate." },
        { step: currentLanguage === 'en' ? "Knowledge Transfer" : "Transfer de Cunoștințe", description: currentLanguage === 'en' ? "We ensure your team understands the architecture and can maintain it." : "Ne asigurăm că echipa dumneavoastră înțelege arhitectura și o poate menține." },
        { step: currentLanguage === 'en' ? "Ongoing Support" : "Suport Continuu", description: currentLanguage === 'en' ? "We provide continued guidance as your business evolves." : "Oferim îndrumare continuă pe măsură ce afacerea dumneavoastră evoluează." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Expert guidance from experienced architects",
        "Optimized system performance and scalability",
        "Reduced technical debt",
        "Future-proof technology decisions",
        "Cost-effective solutions"
      ] : [
        "Îndrumare expertă de la arhitecți cu experiență",
        "Performanță și scalabilitate optimizate ale sistemului",
        "Reducerea datoriei tehnice",
        "Decizii tehnologice pregătite pentru viitor",
        "Soluții rentabile"
      ]
    },
    'web-solutions': {
      icon: <Globe className="h-12 w-12 text-amber-400" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Discovery" : "Descoperire", description: currentLanguage === 'en' ? "We understand your brand, audience, and business objectives." : "Înțelegem marca, audiența și obiectivele dumneavoastră de afaceri." },
        { step: currentLanguage === 'en' ? "UX/UI Design" : "Design UX/UI", description: currentLanguage === 'en' ? "Our designers create intuitive, engaging user experiences." : "Designerii noștri creează experiențe de utilizator intuitive și atractive." },
        { step: currentLanguage === 'en' ? "Development" : "Dezvoltare", description: currentLanguage === 'en' ? "We build responsive, accessible web solutions using modern technologies." : "Construim soluții web responsive și accesibile folosind tehnologii moderne." },
        { step: currentLanguage === 'en' ? "Content Integration" : "Integrare Conținut", description: currentLanguage === 'en' ? "We integrate your content and ensure it's optimized for search engines." : "Integrăm conținutul dumneavoastră și ne asigurăm că este optimizat pentru motoarele de căutare." },
        { step: currentLanguage === 'en' ? "Testing" : "Testare", description: currentLanguage === 'en' ? "We test across devices and browsers to ensure consistent performance." : "Testăm pe diverse dispozitive și browsere pentru a asigura o performanță consistentă." },
        { step: currentLanguage === 'en' ? "Launch & Optimization" : "Lansare și Optimizare", description: currentLanguage === 'en' ? "We deploy your solution and provide ongoing optimization." : "Implementăm soluția dumneavoastră și oferim optimizare continuă." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Mobile-responsive designs that work on all devices",
        "SEO-optimized for better visibility",
        "Fast-loading pages for improved user experience",
        "Secure, reliable hosting",
        "Analytics integration for data-driven decisions"
      ] : [
        "Design-uri responsive pentru mobil care funcționează pe toate dispozitivele",
        "Optimizate SEO pentru vizibilitate mai bună",
        "Pagini cu încărcare rapidă pentru o experiență îmbunătățită a utilizatorului",
        "Găzduire sigură și fiabilă",
        "Integrare de analize pentru decizii bazate pe date"
      ]
    }
  };

  const service = services[serviceSlug];

  if (!service) {
    useEffect(() => {
      navigate('/');
    }, [navigate]);
    return null;
  }

  return (
    <div className="pt-24 relative min-h-screen">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative pb-20">
        {/* Hero Section */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-4xl">
              <div className="flex justify-center mb-8">
                <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h1 className="font-tech text-4xl md:text-5xl lg:text-6xl font-bold mb-8 tech-gradient-text">
                {service.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 mb-12 hover:bg-white/10 transition-colors duration-300">
          <h2 className="font-tech text-3xl font-bold mb-10 tech-gradient-text">
            {currentLanguage === 'en' ? 'Key Benefits' : 'Beneficii cheie'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400 mr-4 group-hover:bg-blue-300 transition-colors duration-300"></div>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 hover:bg-white/10 transition-colors duration-300">
          <h2 className="font-tech text-3xl font-bold mb-12 tech-gradient-text text-center">
            {currentLanguage === 'en' ? 'Our Process' : 'Procesul nostru'}
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="flex group hover:bg-white/5 p-6 rounded-xl transition-all duration-300"
              >
                <div className="mr-8 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 font-tech text-xl font-bold group-hover:bg-blue-500/30 transition-all duration-300">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="absolute left-1/2 top-16 bottom-0 w-0.5 bg-blue-400/20 transform -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-tech text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.step}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;