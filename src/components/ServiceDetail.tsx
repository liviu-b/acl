import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code, Wrench, Globe, Headset as HeadsetHelp } from 'lucide-react';
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
      icon: <Code className="h-12 w-12 text-gray-700" />,
      title: t('services.software.title'),
      description: t('services.software.description'),
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: currentLanguage === 'en' ? "Java" : "Java", description: currentLanguage === 'en' ? "Enterprise-grade backend development" : "Dezvoltare backend de nivel enterprise" },
        { name: currentLanguage === 'en' ? "Python" : "Python", description: currentLanguage === 'en' ? "Data processing and automation" : "Procesare date și automatizare" },
        { name: currentLanguage === 'en' ? "C#/.NET" : "C#/.NET", description: currentLanguage === 'en' ? "Windows applications and services" : "Aplicații și servicii Windows" },
        { name: currentLanguage === 'en' ? "Node.js" : "Node.js", description: currentLanguage === 'en' ? "Scalable web applications" : "Aplicații web scalabile" },
        { name: currentLanguage === 'en' ? "React/Angular/Vue" : "React/Angular/Vue", description: currentLanguage === 'en' ? "Modern frontend frameworks" : "Framework-uri moderne pentru frontend" }
      ],
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
      icon: <Wrench className="h-12 w-12 text-gray-700" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: currentLanguage === 'en' ? "Cloud Architecture" : "Arhitectură Cloud", description: currentLanguage === 'en' ? "AWS, Azure, Google Cloud design and migration" : "Design și migrare AWS, Azure, Google Cloud" },
        { name: currentLanguage === 'en' ? "Microservices" : "Microservicii", description: currentLanguage === 'en' ? "Distributed system architecture" : "Arhitectură de sistem distribuită" },
        { name: currentLanguage === 'en' ? "DevOps" : "DevOps", description: currentLanguage === 'en' ? "CI/CD pipelines and infrastructure as code" : "Pipeline-uri CI/CD și infrastructură ca și cod" },
        { name: currentLanguage === 'en' ? "Database Design" : "Design Baze de Date", description: currentLanguage === 'en' ? "SQL and NoSQL database architecture" : "Arhitectură baze de date SQL și NoSQL" },
        { name: currentLanguage === 'en' ? "Security Architecture" : "Arhitectură de Securitate", description: currentLanguage === 'en' ? "Secure system design and implementation" : "Design și implementare de sisteme securizate" }
      ],
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
      icon: <Globe className="h-12 w-12 text-gray-700" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: currentLanguage === 'en' ? "React.js" : "React.js", description: currentLanguage === 'en' ? "Dynamic, responsive user interfaces" : "Interfețe utilizator dinamice și responsive" },
        { name: currentLanguage === 'en' ? "Next.js" : "Next.js", description: currentLanguage === 'en' ? "Server-side rendering and static site generation" : "Randare server-side și generare de site-uri statice" },
        { name: currentLanguage === 'en' ? "Node.js" : "Node.js", description: currentLanguage === 'en' ? "Scalable backend services" : "Servicii backend scalabile" },
        { name: currentLanguage === 'en' ? "WordPress" : "WordPress", description: currentLanguage === 'en' ? "Content management systems" : "Sisteme de management al conținutului" },
        { name: currentLanguage === 'en' ? "Shopify/WooCommerce" : "Shopify/WooCommerce", description: currentLanguage === 'en' ? "E-commerce platforms" : "Platforme de e-commerce" }
      ],
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
    },
    'support-maintenance': {
      icon: <HeadsetHelp className="h-12 w-12 text-gray-700" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: currentLanguage === 'en' ? "Monitoring Tools" : "Instrumente de Monitorizare", description: currentLanguage === 'en' ? "Proactive system monitoring and alerting" : "Monitorizare proactivă a sistemului și alertare" },
        { name: currentLanguage === 'en' ? "Backup Solutions" : "Soluții de Backup", description: currentLanguage === 'en' ? "Secure data backup and recovery" : "Backup și recuperare securizată a datelor" },
        { name: currentLanguage === 'en' ? "Security Tools" : "Instrumente de Securitate", description: currentLanguage === 'en' ? "Vulnerability scanning and protection" : "Scanare vulnerabilități și protecție" },
        { name: currentLanguage === 'en' ? "Performance Optimization" : "Optimizare Performanță", description: currentLanguage === 'en' ? "System tuning and enhancement" : "Reglare și îmbunătățire sistem" },
        { name: currentLanguage === 'en' ? "Help Desk Systems" : "Sisteme Help Desk", description: currentLanguage === 'en' ? "Ticket management and resolution tracking" : "Managementul tichetelor și urmărirea rezoluțiilor" }
      ],
      process: [
        { step: currentLanguage === 'en' ? "Service Level Agreement" : "Acord de Nivel al Serviciilor", description: currentLanguage === 'en' ? "We establish clear expectations for support and response times." : "Stabilim așteptări clare pentru suport și timpii de răspuns." },
        { step: currentLanguage === 'en' ? "Monitoring Setup" : "Configurare Monitorizare", description: currentLanguage === 'en' ? "We implement proactive monitoring to identify issues before they impact users." : "Implementăm monitorizare proactivă pentru a identifica problemele înainte de a afecta utilizatorii." },
        { step: currentLanguage === 'en' ? "Regular Maintenance" : "Mentenanță Regulată", description: currentLanguage === 'en' ? "We perform scheduled updates and optimizations to keep systems running smoothly." : "Efectuăm actualizări și optimizări programate pentru a menține sistemele funcționând fără probleme." },
        { step: currentLanguage === 'en' ? "Issue Resolution" : "Rezolvarea Problemelor", description: currentLanguage === 'en' ? "Our team quickly addresses and resolves any problems that arise." : "Echipa noastră abordează și rezolvă rapid orice probleme care apar." },
        { step: currentLanguage === 'en' ? "Security Updates" : "Actualizări de Securitate", description: currentLanguage === 'en' ? "We ensure your systems are protected against the latest threats." : "Ne asigurăm că sistemele dumneavoastră sunt protejate împotriva celor mai recente amenințări." },
        { step: currentLanguage === 'en' ? "Performance Reviews" : "Revizuiri de Performanță", description: currentLanguage === 'en' ? "We regularly review system performance and recommend improvements." : "Revizuim în mod regulat performanța sistemului și recomandăm îmbunătățiri." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Reduced downtime and system interruptions",
        "Proactive issue identification and resolution",
        "Regular updates and security patches",
        "Technical expertise on demand",
        "Peace of mind knowing your systems are monitored 24/7"
      ] : [
        "Timp de nefuncționare și întreruperi de sistem reduse",
        "Identificarea și rezolvarea proactivă a problemelor",
        "Actualizări regulate și patch-uri de securitate",
        "Expertiză tehnică la cerere",
        "Liniște știind că sistemele dumneavoastră sunt monitorizate 24/7"
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
    <div className="pt-24 pb-20 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">{currentLanguage === 'en' ? 'Overview' : 'Prezentare generală'}</h2>
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">{currentLanguage === 'en' ? 'Key Benefits' : 'Beneficii cheie'}</h3>
              <ul className="list-disc pl-5 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">{currentLanguage === 'en' ? 'Technologies' : 'Tehnologii'}</h3>
              <div className="space-y-3">
                {service.technologies.map((tech, index) => (
                  <div key={index} className="border-b border-gray-200 pb-2">
                    <h4 className="font-medium">{tech.name}</h4>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">{currentLanguage === 'en' ? 'Our Process' : 'Procesul nostru'}</h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div key={index} className="flex">
                <div className="mr-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-white font-bold">
                    {index + 1}
                  </div>
                  {index < service.process.length - 1 && (
                    <div className="w-0.5 h-16 bg-gray-300 mx-auto my-2"></div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{step.step}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">{currentLanguage === 'en' ? 'Ready to get started?' : 'Gata să începem?'}</h2>
          <p className="text-gray-700 mb-6">
            {currentLanguage === 'en' 
              ? `Contact us today to discuss how we can help with your ${service.title.toLowerCase()} needs.`
              : `Contactați-ne astăzi pentru a discuta cum vă putem ajuta cu nevoile dumneavoastră de ${service.title.toLowerCase()}.`
            }
          </p>
          <a 
            href="#contact" 
            onClick={() => {
              navigate('/');
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            className="inline-flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors duration-300"
          >
            {currentLanguage === 'en' ? 'Contact Us' : 'Contactați-ne'}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;