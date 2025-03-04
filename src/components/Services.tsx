import React from 'react';
import { Code, Wrench, Globe, Headset as HeadsetHelp } from 'lucide-react';

const ServiceCard = ({ icon, title, description, imageUrl, index }) => {
  return (
    <div className={`service-card bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:transform hover:scale-105`} data-service-index={index}>
      <div className="h-48 overflow-hidden">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className="text-xl font-semibold ml-2">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-gray-700" />,
      title: "Software Development",
      description: "We create custom applications tailored to your specific requirements. Our development team excels in building scalable, robust software solutions using modern technologies and methodologies. From concept to deployment, we ensure your software meets the highest quality standards.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Wrench className="h-6 w-6 text-gray-700" />,
      title: "Consulting and Architecture",
      description: "Our expert consultants provide strategic guidance on software architecture and technology decisions. We analyze your business needs and design optimal system structures that align with your goals. Our architectural solutions focus on scalability, performance, and maintainability.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <Globe className="h-6 w-6 text-gray-700" />,
      title: "Web Solutions",
      description: "We develop responsive, user-friendly web applications and platforms that enhance your online presence. Our web solutions integrate seamlessly with existing systems and APIs, providing a cohesive digital experience. From corporate websites to complex e-commerce platforms, we deliver web solutions that drive results.",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      icon: <HeadsetHelp className="h-6 w-6 text-gray-700" />,
      title: "Support and Maintenance",
      description: "We provide comprehensive technical support and maintenance services to ensure your software remains operational and up-to-date. Our team monitors systems continuously, implements updates, and resolves issues promptly. We also offer data backup and recovery services to protect your valuable information.",
      imageUrl: "https://images.unsplash.com/photo-1560264280-88b68371db39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800 text-grey">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We offer a comprehensive range of IT services designed to help your business thrive in the digital age.
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;