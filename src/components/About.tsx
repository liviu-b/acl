import React from 'react';
import { Building2, Target, Eye } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10px] opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20">
              <img 
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
  alt="Our Team" 
  className="w-full h-[500px] md:h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
/>

                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent"></div>
                
                {/* Floating Icon */}
                <div className="absolute bottom-6 right-6 p-4 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 transform group-hover:translate-y-[-8px] transition-all duration-500">
                  <Building2 className="h-8 w-8 text-blue-400" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2">
            <h2 className="font-tech text-4xl font-bold mb-8 tech-gradient-text tracking-tight">
              {t('about.title')}
            </h2>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-300 leading-relaxed text-lg tracking-wide font-light">
                {t('about.paragraph1')}
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg tracking-wide font-light">
                {t('about.paragraph2')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="group bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-blue-500/20 border border-blue-400/30 group-hover:bg-blue-500/30 transition-colors duration-300">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="font-tech text-xl font-semibold text-white ml-3 group-hover:text-blue-400 transition-colors duration-300">
                    {t('about.mission.title')}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                  {t('about.mission.text')}
                </p>
              </div>
              
              {/* Vision Card */}
              <div className="group bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-purple-500/20 border border-purple-400/30 group-hover:bg-purple-500/30 transition-colors duration-300">
                    <Eye className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="font-tech text-xl font-semibold text-white ml-3 group-hover:text-purple-400 transition-colors duration-300">
                    {t('about.vision.title')}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed tracking-wide group-hover:text-gray-200 transition-colors duration-300">
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