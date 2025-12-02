import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom'; // Am adaugat Link
import { Code, Wrench, Globe, Smartphone, Cloud, Cpu, Network, ChevronRight, Home } from 'lucide-react'; // Am adaugat ChevronRight si Home
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceSlug]);

  const services = {
    // 1. Custom Web & Mobile Apps
    'custom-web-mobile-apps': {
      icon: <Smartphone className="h-12 w-12 text-blue-400" />,
      title: "Custom Web & Mobile Apps",
      description: currentLanguage === 'en' 
        ? "We design and develop tailored applications that fit your business needs perfectly — fast, intuitive, secure, and ready to scale."
        : "Proiectăm și dezvoltăm aplicații personalizate care se potrivesc perfect nevoilor afacerii tale — rapide, intuitive, sigure și gata de scalare.",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Discovery & Strategy" : "Descoperire și Strategie", description: currentLanguage === 'en' ? "We define user personas, core features, and the technical roadmap." : "Definim profilul utilizatorilor, funcționalitățile de bază și foaia de parcurs tehnică." },
        { step: currentLanguage === 'en' ? "UI/UX Design" : "Design UI/UX", description: currentLanguage === 'en' ? "Creating intuitive wireframes and high-fidelity prototypes." : "Crearea de wireframe-uri intuitive și prototipuri de înaltă fidelitate." },
        { step: currentLanguage === 'en' ? "Cross-Platform Dev" : "Dezvoltare Multi-Platformă", description: currentLanguage === 'en' ? "Building for Web, iOS, and Android using unified technologies." : "Construim pentru Web, iOS și Android folosind tehnologii unificate." },
        { step: currentLanguage === 'en' ? "Testing & QA" : "Testare și QA", description: currentLanguage === 'en' ? "Rigorous testing on multiple devices to ensure a bug-free experience." : "Testare riguroasă pe mai multe dispozitive pentru a asigura o experiență fără erori." },
        { step: currentLanguage === 'en' ? "App Store Launch" : "Lansare în Store", description: currentLanguage === 'en' ? "Handling the submission process to Apple App Store and Google Play." : "Gestionarea procesului de publicare în Apple App Store și Google Play." },
        { step: currentLanguage === 'en' ? "Growth & Updates" : "Creștere și Actualizări", description: currentLanguage === 'en' ? "Monitoring analytics and pushing feature updates." : "Monitorizarea analizelor și lansarea actualizărilor de funcționalități." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Native performance with cross-platform efficiency",
        "Seamless user experience across all devices",
        "Scalable backend architecture",
        "Offline capabilities and data synchronization",
        "Push notifications for higher engagement",
        "Secure data handling and compliance"
      ] : [
        "Performanță nativă cu eficiență multi-platformă",
        "Experiență de utilizare fluidă pe toate dispozitivele",
        "Arhitectură backend scalabilă",
        "Capabilități offline și sincronizare date",
        "Notificări push pentru implicare crescută",
        "Gestionarea securizată a datelor și conformitate"
      ]
    },

    // 2. Custom Software Development
    'custom-software-development': {
      icon: <Code className="h-12 w-12 text-emerald-400" />,
      title: "Custom Software Development",
      description: currentLanguage === 'en' 
        ? "From internal tools to enterprise-grade systems, we build software engineered around your processes, not the other way around."
        : "De la instrumente interne la sisteme enterprise, construim software proiectat în jurul proceselor tale, nu invers.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Requirement Analysis" : "Analiza Cerințelor", description: currentLanguage === 'en' ? "Mapping out your complex business logic and workflows." : "Maparea logicii complexe de afaceri și a fluxurilor de lucru." },
        { step: currentLanguage === 'en' ? "System Architecture" : "Arhitectura Sistemului", description: currentLanguage === 'en' ? "Designing a robust database and server structure." : "Proiectarea unei structuri robuste de baze de date și servere." },
        { step: currentLanguage === 'en' ? "Agile Development" : "Dezvoltare Agile", description: currentLanguage === 'en' ? "Iterative coding sprints with regular demos and feedback." : "Sprint-uri iterative de codare cu demo-uri regulate și feedback." },
        { step: currentLanguage === 'en' ? "Integration" : "Integrare", description: currentLanguage === 'en' ? "Connecting the new software with your existing legacy systems." : "Conectarea noului software cu sistemele vechi existente." },
        { step: currentLanguage === 'en' ? "Deployment" : "Implementare", description: currentLanguage === 'en' ? "Secure rollout to your infrastructure (On-premise or Cloud)." : "Lansare securizată pe infrastructura ta (On-premise sau Cloud)." },
        { step: currentLanguage === 'en' ? "Long-term Support" : "Suport pe termen lung", description: currentLanguage === 'en' ? "SLA-based maintenance and rapid bug fixing." : "Mentenanță bazată pe SLA și rezolvare rapidă a erorilor." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Software aimed 100% at your specific business problems",
        "Full ownership of the source code and IP",
        "Elimination of manual errors through automation",
        "High security standards for sensitive corporate data",
        "Integration with existing ERP/CRM systems",
        "Scalability to handle enterprise-level loads"
      ] : [
        "Software orientat 100% spre problemele specifice afacerii",
        "Proprietate completă asupra codului sursă și IP-ului",
        "Eliminarea erorilor manuale prin automatizare",
        "Standarde înalte de securitate pentru date corporative sensibile",
        "Integrare cu sistemele ERP/CRM existente",
        "Scalabilitate pentru a gestiona volume enterprise"
      ]
    },

    // 3. SaaS Development
    'saas-development': {
      icon: <Cloud className="h-12 w-12 text-sky-400" />,
      title: "SaaS Development",
      description: currentLanguage === 'en' 
        ? "We transform concepts into full SaaS products — architecture, multi-tenancy, subscription logic, deployment, and long-term scalability."
        : "Transformăm conceptele în produse SaaS complete — arhitectură, multi-tenancy, logică de abonament, implementare și scalabilitate.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "MVP Definition" : "Definire MVP", description: currentLanguage === 'en' ? "Identifying the core features to launch fast and validate the market." : "Identificarea funcționalităților de bază pentru lansare rapidă și validare." },
        { step: currentLanguage === 'en' ? "Multi-tenant Arch" : "Arhitectură Multi-tenant", description: currentLanguage === 'en' ? "Structuring data so clients are securely separated but share resources." : "Structurarea datelor astfel încât clienții să fie separați sigur, dar să partajeze resurse." },
        { step: currentLanguage === 'en' ? "Billing Integration" : "Integrare Plăți", description: currentLanguage === 'en' ? "Setting up Stripe/PayPal for recurring subscriptions." : "Configurarea Stripe/PayPal pentru abonamente recurente." },
        { step: currentLanguage === 'en' ? "Cloud DevOps" : "Cloud DevOps", description: currentLanguage === 'en' ? "Setting up CI/CD pipelines and auto-scaling infrastructure." : "Configurarea pipeline-urilor CI/CD și a infrastructurii auto-scalabile." },
        { step: currentLanguage === 'en' ? "API Development" : "Dezvoltare API", description: currentLanguage === 'en' ? "Creating public APIs for your SaaS users to consume." : "Crearea de API-uri publice pentru utilizatorii SaaS." },
        { step: currentLanguage === 'en' ? "Monitoring" : "Monitorizare", description: currentLanguage === 'en' ? "Real-time dashboards for system health and user behavior." : "Dashboard-uri în timp real pentru sănătatea sistemului și comportamentul utilizatorilor." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Rapid time-to-market with MVP approach",
        "Secure multi-tenancy architecture",
        "Automated subscription management and billing",
        "Infinite scalability using Cloud Native tech",
        "Global availability (CDN & Edge Computing)",
        "Reduced infrastructure costs through optimization"
      ] : [
        "Timp rapid de lansare cu abordarea MVP",
        "Arhitectură multi-tenancy sigură",
        "Management automat al abonamentelor și plăților",
        "Scalabilitate infinită folosind tehnologii Cloud Native",
        "Disponibilitate globală (CDN & Edge Computing)",
        "Costuri reduse de infrastructură prin optimizare"
      ]
    },

    // 4. AI & Automation
    'ai-automation': {
      icon: <Cpu className="h-12 w-12 text-purple-400" />,
      title: "AI & Automation",
      description: currentLanguage === 'en' 
        ? "We integrate intelligent automation and AI-driven workflows that unlock efficiency, reduce manual effort, and enhance decision-making."
        : "Integrăm automatizări inteligente și fluxuri de lucru bazate pe AI care deblochează eficiența, reduc efortul manual și îmbunătățesc deciziile.",
      imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Process Audit" : "Audit Procese", description: currentLanguage === 'en' ? "Identifying bottlenecks suitable for AI or automation." : "Identificarea blocajelor potrivite pentru AI sau automatizare." },
        { step: currentLanguage === 'en' ? "Data Prep" : "Pregătire Date", description: currentLanguage === 'en' ? "Cleaning and structuring data for machine learning models." : "Curățarea și structurarea datelor pentru modelele de machine learning." },
        { step: currentLanguage === 'en' ? "Model Selection" : "Selecție Modele", description: currentLanguage === 'en' ? "Choosing between OpenAI, custom ML models, or RPA bots." : "Alegerea între OpenAI, modele ML personalizate sau boți RPA." },
        { step: currentLanguage === 'en' ? "Integration" : "Integrare", description: currentLanguage === 'en' ? "Embedding the AI solution into your existing dashboard." : "Încorporarea soluției AI în dashboard-ul existent." },
        { step: currentLanguage === 'en' ? "Testing & Tuning" : "Testare și Ajustare", description: currentLanguage === 'en' ? "Refining the model accuracy and reducing hallucinations/errors." : "Rafinarea acurateței modelului și reducerea erorilor." },
        { step: currentLanguage === 'en' ? "Deployment" : "Lansare", description: currentLanguage === 'en' ? "Live implementation with monitoring for drift." : "Implementare live cu monitorizare pentru deviații." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Drastic reduction in manual data entry work",
        "24/7 operations with Chatbots and Auto-responders",
        "Predictive insights for better business decisions",
        "Error reduction in repetitive tasks",
        "Personalized user experiences at scale",
        "Competitive advantage through latest tech"
      ] : [
        "Reducere drastică a introducerii manuale de date",
        "Operațiuni 24/7 cu Chatboți și Răspunsuri Automate",
        "Perspective predictive pentru decizii de afaceri mai bune",
        "Reducerea erorilor în sarcini repetitive",
        "Experiențe personalizate pentru utilizatori la scară",
        "Avantaj competitiv prin tehnologie de ultimă oră"
      ]
    },

    // 5. API Integrations
    'api-integrations': {
      icon: <Network className="h-12 w-12 text-amber-400" />,
      title: "API Integrations & Automation",
      description: currentLanguage === 'en' 
        ? "Seamless system-to-system communication: we connect platforms, streamline operations, and build reliable automation pipelines."
        : "Comunicare perfectă între sisteme: conectăm platforme, eficientizăm operațiunile și construim fluxuri de automatizare fiabile.",
      imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "System Audit" : "Audit Sisteme", description: currentLanguage === 'en' ? "Reviewing endpoints and documentation of all tools involved." : "Revizuirea endpoint-urilor și documentației tuturor uneltelor implicate." },
        { step: currentLanguage === 'en' ? "Data Mapping" : "Maparea Datelor", description: currentLanguage === 'en' ? "Defining how data fields translate between System A and System B." : "Definirea modului în care câmpurile de date se traduc între Sistemul A și B." },
        { step: currentLanguage === 'en' ? "Middleware Dev" : "Dezvoltare Middleware", description: currentLanguage === 'en' ? "Building the secure bridge that handles the data transfer." : "Construirea punții securizate care gestionează transferul de date." },
        { step: currentLanguage === 'en' ? "Error Handling" : "Gestionare Erori", description: currentLanguage === 'en' ? "Creating retry logic for when APIs are down or rate-limited." : "Crearea logicii de reîncercare pentru când API-urile sunt jos sau limitate." },
        { step: currentLanguage === 'en' ? "Security Check" : "Verificare Securitate", description: currentLanguage === 'en' ? "Implementing OAuth, Keys, and encryption." : "Implementarea OAuth, Chei și criptare." },
        { step: currentLanguage === 'en' ? "Live Sync" : "Sincronizare Live", description: currentLanguage === 'en' ? "Launching the automated pipeline." : "Lansarea pipeline-ului automatizat." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Real-time data synchronization across platforms",
        "Elimination of double data entry",
        "Unified view of customer data (Single Source of Truth)",
        "Automated workflows (e.g., Lead -> CRM -> Email)",
        "Legacy system connectivity with modern tools",
        "Robust error handling and logging"
      ] : [
        "Sincronizare de date în timp real între platforme",
        "Eliminarea introducerii duble a datelor",
        "Vedere unificată a datelor clienților (Sursă Unică de Adevăr)",
        "Fluxuri automate (ex: Lead -> CRM -> Email)",
        "Conectivitate sisteme vechi cu instrumente moderne",
        "Gestionare robustă a erorilor și jurnalizare"
      ]
    },

    // 6. Software Consulting
    'software-consulting': {
      icon: <Wrench className="h-12 w-12 text-rose-400" />,
      title: "Software Consulting & Architecture",
      description: currentLanguage === 'en'
        ? "We provide strategic technical guidance, system architecture, and technology roadmaps that help companies build future-proof solutions."
        : "Oferim ghidare tehnică strategică, arhitectură de sistem și foi de parcurs tehnologice care ajută companiile să construiască soluții de viitor.",
      imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      process: [
        { step: currentLanguage === 'en' ? "Tech Audit" : "Audit Tehnic", description: currentLanguage === 'en' ? "Analyzing your current code, security, and infrastructure." : "Analiza codului actual, a securității și a infrastructurii." },
        { step: currentLanguage === 'en' ? "Gap Analysis" : "Analiza Lipsurilor", description: currentLanguage === 'en' ? "Identifying where your tech stack fails to meet business goals." : "Identificarea zonelor unde stiva tehnică nu îndeplinește obiectivele." },
        { step: currentLanguage === 'en' ? "Architecture Design" : "Design Arhitectural", description: currentLanguage === 'en' ? "Blueprinting the ideal Microservices or Monolith structure." : "Schițarea structurii ideale de Microservicii sau Monolit." },
        { step: currentLanguage === 'en' ? "Tech Selection" : "Selecție Tehnologie", description: currentLanguage === 'en' ? "Recommending the best languages and clouds for your budget." : "Recomandarea celor mai bune limbaje și cloud-uri pentru bugetul tău." },
        { step: currentLanguage === 'en' ? "Team Guidance" : "Ghidare Echipă", description: currentLanguage === 'en' ? "Mentoring your internal developers on best practices." : "Mentorarea dezvoltatorilor interni privind cele mai bune practici." },
        { step: currentLanguage === 'en' ? "Roadmap" : "Foaie de Parcurs", description: currentLanguage === 'en' ? "Delivering a clear step-by-step plan for modernization." : "Livrarea unui plan clar pas cu pas pentru modernizare." }
      ],
      benefits: currentLanguage === 'en' ? [
        "Clear technical roadmap aligned with business goals",
        "Reduced technical debt and maintenance costs",
        "Objective third-party opinion on technology choices",
        "Enhanced security and compliance posture",
        "Scalable architecture prepared for high growth",
        "Improved team velocity and code quality"
      ] : [
        "Foaie de parcurs tehnică clară aliniată cu afacerea",
        "Reducerea datoriei tehnice și a costurilor de mentenanță",
        "Opinie obiectivă externă privind alegerile tehnologice",
        "Securitate și conformitate îmbunătățite",
        "Arhitectură scalabilă pregătită pentru creștere rapidă",
        "Viteză îmbunătățită a echipei și calitate a codului"
      ]
    }
  };

  const service = services[serviceSlug];

  // Redirectionare daca slug-ul nu exista
  if (!service) {
    useEffect(() => {
      navigate('/#services');
    }, [navigate]);
    return null;
  }

  return (
    <div className="pt-24 relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative pb-20">
        
        {/* === NEW: Breadcrumbs Implementation === */}
        <nav className="flex mb-8 text-gray-400 text-sm md:text-base" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link to="/" className="inline-flex items-center hover:text-blue-400 transition-colors duration-200">
                <Home className="w-4 h-4 mr-2" />
                {currentLanguage === 'en' ? 'Home' : 'Acasă'}
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <Link to="/#services" className="hover:text-blue-400 transition-colors duration-200">
                  {currentLanguage === 'en' ? 'Services' : 'Servicii'}
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 mx-1" />
                <span className="text-gray-100 font-medium truncate max-w-[150px] md:max-w-none">
                  {service.title}
                </span>
              </div>
            </li>
          </ol>
        </nav>
        {/* === END Breadcrumbs === */}

        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12 shadow-2xl border border-white/10">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/90"></div>
          <img 
            src={service.imageUrl} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="text-center max-w-3xl">
              <div className="flex justify-center mb-6">
                <div className="p-6 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg transform hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              <h1 className="font-tech text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tech-gradient-text tracking-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
                {service.description}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 mb-12 hover:bg-white/10 transition-colors duration-300 shadow-xl">
          <h2 className="font-tech text-3xl font-bold mb-10 tech-gradient-text">
            {currentLanguage === 'en' ? 'Key Benefits' : 'Beneficii Cheie'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-2 h-2 mt-2.5 rounded-full bg-blue-400 mr-4 group-hover:bg-blue-300 group-hover:scale-125 transition-all duration-300"></div>
                <p className="text-gray-300 group-hover:text-gray-100 transition-colors duration-300 text-lg">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10 hover:bg-white/10 transition-colors duration-300 shadow-xl">
          <h2 className="font-tech text-3xl font-bold mb-12 tech-gradient-text text-center">
            {currentLanguage === 'en' ? 'Our Process' : 'Procesul Nostru'}
          </h2>
          <div className="space-y-8">
            {service.process.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row group hover:bg-white/5 p-6 rounded-xl transition-all duration-300 border border-transparent hover:border-white/5"
              >
                <div className="mr-0 md:mr-8 mb-4 md:mb-0 relative">
                  <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 font-tech text-xl font-bold group-hover:bg-blue-500/30 group-hover:scale-110 transition-all duration-300 shadow-lg">
                    {index + 1}
                  </div>
                  {/* Linie verticala intre pasi, vizibila doar pe desktop */}
                  {index < service.process.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-16 bottom-[-32px] w-0.5 bg-blue-400/20 transform -translate-x-1/2"></div>
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-tech text-2xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                    {step.step}
                  </h3>
                  <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 text-lg">
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