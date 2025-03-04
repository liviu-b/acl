import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Code, Wrench, Globe, Headset as HeadsetHelp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServiceDetail = () => {
  const { serviceSlug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
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
        { name: "Java", description: "Enterprise-grade backend development" },
        { name: "Python", description: "Data processing and automation" },
        { name: "C#/.NET", description: "Windows applications and services" },
        { name: "Node.js", description: "Scalable web applications" },
        { name: "React/Angular/Vue", description: "Modern frontend frameworks" }
      ],
      process: [
        { step: "Requirements Analysis", description: "We work closely with you to understand your business needs and define clear requirements." },
        { step: "Design & Architecture", description: "Our architects design scalable, maintainable software solutions tailored to your needs." },
        { step: "Development", description: "Using agile methodologies, we develop your solution with regular feedback cycles." },
        { step: "Testing & QA", description: "Rigorous testing ensures your software meets the highest quality standards." },
        { step: "Deployment", description: "We handle deployment to your preferred environment, ensuring smooth transitions." },
        { step: "Maintenance & Support", description: "Ongoing support and updates keep your software running optimally." }
      ],
      benefits: [
        "Custom solutions tailored to your specific business needs",
        "Scalable architecture that grows with your business",
        "Modern, user-friendly interfaces",
        "Secure, reliable performance",
        "Integration with existing systems"
      ]
    },
    'consulting-architecture': {
      icon: <Wrench className="h-12 w-12 text-gray-700" />,
      title: t('services.consulting.title'),
      description: t('services.consulting.description'),
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: "Cloud Architecture", description: "AWS, Azure, Google Cloud design and migration" },
        { name: "Microservices", description: "Distributed system architecture" },
        { name: "DevOps", description: "CI/CD pipelines and infrastructure as code" },
        { name: "Database Design", description: "SQL and NoSQL database architecture" },
        { name: "Security Architecture", description: "Secure system design and implementation" }
      ],
      process: [
        { step: "Assessment", description: "We evaluate your current systems, processes, and challenges." },
        { step: "Strategy Development", description: "We create a tailored technology strategy aligned with your business goals." },
        { step: "Architecture Design", description: "Our experts design optimal system architectures for your needs." },
        { step: "Implementation Planning", description: "We develop detailed roadmaps for implementing recommended solutions." },
        { step: "Knowledge Transfer", description: "We ensure your team understands the architecture and can maintain it." },
        { step: "Ongoing Support", description: "We provide continued guidance as your business evolves." }
      ],
      benefits: [
        "Expert guidance from experienced architects",
        "Optimized system performance and scalability",
        "Reduced technical debt",
        "Future-proof technology decisions",
        "Cost-effective solutions"
      ]
    },
    'web-solutions': {
      icon: <Globe className="h-12 w-12 text-gray-700" />,
      title: t('services.web.title'),
      description: t('services.web.description'),
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: "React.js", description: "Dynamic, responsive user interfaces" },
        { name: "Next.js", description: "Server-side rendering and static site generation" },
        { name: "Node.js", description: "Scalable backend services" },
        { name: "WordPress", description: "Content management systems" },
        { name: "Shopify/WooCommerce", description: "E-commerce platforms" }
      ],
      process: [
        { step: "Discovery", description: "We understand your brand, audience, and business objectives." },
        { step: "UX/UI Design", description: "Our designers create intuitive, engaging user experiences." },
        { step: "Development", description: "We build responsive, accessible web solutions using modern technologies." },
        { step: "Content Integration", description: "We integrate your content and ensure it's optimized for search engines." },
        { step: "Testing", description: "We test across devices and browsers to ensure consistent performance." },
        { step: "Launch & Optimization", description: "We deploy your solution and provide ongoing optimization." }
      ],
      benefits: [
        "Mobile-responsive designs that work on all devices",
        "SEO-optimized for better visibility",
        "Fast-loading pages for improved user experience",
        "Secure, reliable hosting",
        "Analytics integration for data-driven decisions"
      ]
    },
    'support-maintenance': {
      icon: <HeadsetHelp className="h-12 w-12 text-gray-700" />,
      title: t('services.support.title'),
      description: t('services.support.description'),
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      technologies: [
        { name: "Monitoring Tools", description: "Proactive system monitoring and alerting" },
        { name: "Backup Solutions", description: "Secure data backup and recovery" },
        { name: "Security Tools", description: "Vulnerability scanning and protection" },
        { name: "Performance Optimization", description: "System tuning and enhancement" },
        { name: "Help Desk Systems", description: "Ticket management and resolution tracking" }
      ],
      process: [
        { step: "Service Level Agreement", description: "We establish clear expectations for support and response times." },
        { step: "Monitoring Setup", description: "We implement proactive monitoring to identify issues before they impact users." },
        { step: "Regular Maintenance", description: "We perform scheduled updates and optimizations to keep systems running smoothly." },
        { step: "Issue Resolution", description: "Our team quickly addresses and resolves any problems that arise." },
        { step: "Security Updates", description: "We ensure your systems are protected against the latest threats." },
        { step: "Performance Reviews", description: "We regularly review system performance and recommend improvements." }
      ],
      benefits: [
        "Reduced downtime and system interruptions",
        "Proactive issue identification and resolution",
        "Regular updates and security patches",
        "Technical expertise on demand",
        "Peace of mind knowing your systems are monitored 24/7"
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
          <h2 className="text-2xl font-bold mb-4">Overview</h2>
          <p className="text-gray-700 mb-6">{service.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
              <ul className="list-disc pl-5 space-y-2">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="text-gray-700">{benefit}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Technologies</h3>
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
          <h2 className="text-2xl font-bold mb-6">Our Process</h2>
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
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-700 mb-6">Contact us today to discuss how we can help with your {service.title.toLowerCase()} needs.</p>
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
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;