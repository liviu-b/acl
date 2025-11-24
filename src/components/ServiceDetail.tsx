import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Globe, 
  Code, 
  Cloud, 
  Cpu, 
  Network, 
  Layers,
  Zap,
  Shield,
  BarChart
} from 'lucide-react';

const ServiceDetail = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Definim datele detaliate pentru fiecare serviciu.
  // Folosim cheile de traducere existente pentru titlu/descriere,
  // iar pentru liste (features/benefits) definim conținutul aici pentru a evita modificări masive în fișierele locale.
  const getServiceData = (slug: string) => {
    const isRo = i18n.language === 'ro';

    const commonData = {
      'web-mobile-apps': {
        icon: <Globe className="w-12 h-12 text-blue-400" />,
        color: "blue",
        gradient: "from-blue-400 to-cyan-400",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Design Responsive & UI/UX Modern",
          "Aplicații Native iOS & Android",
          "Soluții Cross-Platform (React Native/Flutter)",
          "Progressive Web Apps (PWA)",
          "Panouri de Administrare Personalizate"
        ] : [
          "Responsive Design & Modern UI/UX",
          "Native iOS & Android Apps",
          "Cross-Platform Solutions (React Native/Flutter)",
          "Progressive Web Apps (PWA)",
          "Custom Admin Dashboards"
        ],
        benefits: isRo ? [
          "Experiență de utilizare fluidă",
          "Acoperire maximă a pieței (Web & Mobile)",
          "Performanță și viteză optimizate"
        ] : [
          "Seamless User Experience",
          "Maximum Market Reach (Web & Mobile)",
          "Optimized Performance & Speed"
        ]
      },
      'custom-software': {
        icon: <Code className="w-12 h-12 text-indigo-400" />,
        color: "indigo",
        gradient: "from-indigo-400 to-violet-400",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Dezvoltare Enterprise (ERP, CRM)",
          "Modernizarea Sistemelor Legacy",
          "Arhitectură Microservices",
          "Soluții Cloud-Native",
          "Baze de Date Scalabile"
        ] : [
          "Enterprise Development (ERP, CRM)",
          "Legacy System Modernization",
          "Microservices Architecture",
          "Cloud-Native Solutions",
          "Scalable Databases"
        ],
        benefits: isRo ? [
          "Automatizarea proceselor de business",
          "Securitate sporită a datelor",
          "Scalabilitate pe termen lung"
        ] : [
          "Business Process Automation",
          "Enhanced Data Security",
          "Long-term Scalability"
        ]
      },
      'saas-development': {
        icon: <Cloud className="w-12 h-12 text-cyan-400" />,
        color: "cyan",
        gradient: "from-cyan-400 to-teal-400",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Arhitectură Multi-tenant",
          "Managementul Abonamentelor (Stripe/PayPal)",
          "Dezvoltare MVP Rapidă",
          "API-uri Publice & Documentație",
          "Infrastructură Serverless"
        ] : [
          "Multi-tenant Architecture",
          "Subscription Management (Stripe/PayPal)",
          "Rapid MVP Development",
          "Public APIs & Documentation",
          "Serverless Infrastructure"
        ],
        benefits: isRo ? [
          "Lansare rapidă pe piață",
          "Costuri operaționale reduse",
          "Model de venit recurent"
        ] : [
          "Fast Time-to-Market",
          "Reduced Operational Costs",
          "Recurring Revenue Model"
        ]
      },
      'ai-automation': {
        icon: <Cpu className="w-12 h-12 text-purple-400" />,
        color: "purple",
        gradient: "from-purple-400 to-fuchsia-400",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Chatboți & Asistenți Virtuali",
          "Analiză Predictivă de Date",
          "Automatizarea Fluxurilor de Lucru (RPA)",
          "Procesare de Limbaj Natural (NLP)",
          "Computer Vision"
        ] : [
          "Chatbots & Virtual Assistants",
          "Predictive Data Analytics",
          "Workflow Automation (RPA)",
          "Natural Language Processing (NLP)",
          "Computer Vision"
        ],
        benefits: isRo ? [
          "Eficiență operațională crescută",
          "Reducerea erorilor umane",
          "Insights valoroase din date"
        ] : [
          "Increased Operational Efficiency",
          "Reduced Human Error",
          "Valuable Data Insights"
        ]
      },
      'api-integrations': {
        icon: <Network className="w-12 h-12 text-pink-400" />,
        color: "pink",
        gradient: "from-pink-400 to-rose-400",
        image: "https://images.unsplash.com/photo-1558494949-efc0257bb3af?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Dezvoltare API REST & GraphQL",
          "Integrări Third-party (plăți, social, maps)",
          "API Gateway & Management",
          "Securitate OAuth2 & JWT",
          "Sincronizare Date în Timp Real"
        ] : [
          "REST & GraphQL API Development",
          "Third-party Integrations (payments, social, maps)",
          "API Gateway & Management",
          "OAuth2 & JWT Security",
          "Real-time Data Synchronization"
        ],
        benefits: isRo ? [
          "Conectivitate perfectă între sisteme",
          "Extinderea funcționalităților existente",
          "Schimb sigur de date"
        ] : [
          "Seamless System Connectivity",
          "Extended Functionality",
          "Secure Data Exchange"
        ]
      },
      'consulting-architecture': {
        icon: <Layers className="w-12 h-12 text-emerald-400" />,
        color: "emerald",
        gradient: "from-emerald-400 to-green-400",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80",
        features: isRo ? [
          "Audit Tehnic & Code Review",
          "Design de Arhitectură Scalabilă",
          "Strategie DevOps & CI/CD",
          "Consultanță Transformare Digitală",
          "Selecție Stack Tehnologic"
        ] : [
          "Technical Audit & Code Review",
          "Scalable Architecture Design",
          "DevOps Strategy & CI/CD",
          "Digital Transformation Consulting",
          "Tech Stack Selection"
        ],
        benefits: isRo ? [
          "Decizii tehnice informate",
          "Minimizarea riscurilor tehnice",
          "Planificare strategică clară"
        ] : [
          "Informed Technical Decisions",
          "Minimized Technical Risks",
          "Clear Strategic Planning"
        ]
      }
    };

    // Mapping slugs to translation keys
    const translationMap: Record<string, { title: string, description: string }> = {
      'web-mobile-apps': { title: 'services.webmobile.title', description: 'services.webmobile.description' },
      'custom-software': { title: 'services.software.title', description: 'services.software.description' },
      'saas-development': { title: 'services.saas.title', description: 'services.saas.description' },
      'ai-automation': { title: 'services.ai.title', description: 'services.ai.description' },
      'api-integrations': { title: 'services.api.title', description: 'services.api.description' },
      'consulting-architecture': { title: 'services.consulting.title', description: 'services.consulting.description' }
    };

    if (!slug || !commonData[slug as keyof typeof commonData]) return null;

    const key = slug as keyof typeof commonData;
    const transKey = translationMap[key];

    return {
      ...commonData[key],
      title: t(transKey.title),
      description: t(transKey.description)
    };
  };

  const service = getServiceData(slug || '');

  if (!service) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl text-white mb-4">Service not found</h2>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm"></div>
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900`}></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center pt-20">
          <Link 
            to="/#services" 
            className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors group w-fit"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            {i18n.language === 'ro' ? 'Înapoi la Servicii' : 'Back to Services'}
          </Link>

          <div className="max-w-4xl animate-fade-in-up">
            <div className={`inline-flex p-3 rounded-2xl bg-${service.color}-500/10 border border-${service.color}-500/20 mb-6 backdrop-blur-md`}>
              {service.icon}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-tech tracking-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-20 relative z-10 -mt-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Features Column */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all shadow-2xl">
              <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Zap className={`w-6 h-6 mr-3 text-${service.color}-400`} />
                {i18n.language === 'ro' ? 'Capabilități Cheie' : 'Key Capabilities'}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className={`mt-1 mr-4 w-6 h-6 rounded-full bg-${service.color}-500/20 flex items-center justify-center shrink-0 group-hover:bg-${service.color}-500/30 transition-colors`}>
                      <div className={`w-2 h-2 rounded-full bg-${service.color}-400`}></div>
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart className={`w-6 h-6 mr-3 text-${service.color}-400`} />
                {i18n.language === 'ro' ? 'Impactul asupra Afacerii' : 'Business Impact'}
              </h2>
              <div className="space-y-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle2 className={`w-5 h-5 mr-4 text-${service.color}-400`} />
                    <span className="text-lg text-gray-200">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-1`}>
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-[22px] p-8 text-center h-full">
                  <h3 className="text-xl font-bold text-white mb-4">
                    {i18n.language === 'ro' ? 'Pregătit să începi?' : 'Ready to start?'}
                  </h3>
                  <p className="text-gray-400 mb-8 text-sm">
                    {i18n.language === 'ro' 
                      ? 'Transformă ideea ta în realitate cu expertiza noastră tehnică.' 
                      : 'Transform your idea into reality with our technical expertise.'}
                  </p>
                  <Link 
                    to="/#contact" 
                    className={`block w-full py-4 px-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white font-bold hover:shadow-lg hover:shadow-${service.color}-500/25 transition-all transform hover:-translate-y-1`}
                  >
                    {i18n.language === 'ro' ? 'Contactează-ne' : 'Get in Touch'}
                  </Link>
                </div>
              </div>

              <div className="p-6 rounded-3xl bg-gray-800/30 border border-white/5 backdrop-blur-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                  <div>
                    <h4 className="font-bold text-white">Quality Guarantee</h4>
                    <p className="text-xs text-gray-500">ISO 9001 Certified Standards</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  {i18n.language === 'ro'
                    ? 'Ne angajăm să livrăm cod curat, securizat și scalabil pentru toate proiectele.'
                    : 'We are committed to delivering clean, secure, and scalable code for all projects.'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
