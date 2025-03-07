import React from 'react';
import { Building2, Target, Eye, Users, BarChart as ChartBar, Shield } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const StatCard = ({ icon: Icon, title, value }) => (
  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center space-x-4">
      <div className="p-3 rounded-xl bg-white/10">
        <Icon className="h-6 w-6 text-white" />
      </div>
      <div>
        <h4 className="text-white text-lg font-semibold">{value}</h4>
        <p className="text-gray-400">{title}</p>
      </div>
    </div>
  </div>
);

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Users, title: "Happy Clients", value: "200+" },
    { icon: ChartBar, title: "Projects Completed", value: "500+" },
    { icon: Shield, title: "Years Experience", value: "10+" }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-30"></div>
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                  alt="Our Team" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-white">
              {t('about.title')}
            </h2>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              {t('about.paragraph1')}
            </p>
            
            <p className="text-gray-300 mb-10 leading-relaxed">
              {t('about.paragraph2')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-blue-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {t('about.mission.title')}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {t('about.mission.text')}
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Eye className="h-8 w-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">
                    {t('about.vision.title')}
                  </h3>
                </div>
                <p className="text-gray-300">
                  {t('about.vision.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;