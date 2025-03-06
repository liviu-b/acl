import React from 'react';
import { Building2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-gray text-white-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Our Team" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-gray-700 p-6 rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 text-gray-300" />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
            <p className="text-gray-600 mb-6">
              {t('about.paragraph1')}
            </p>
            <p className="text-gray-600 mb-6">
              {t('about.paragraph2')}
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.mission.title')}</h3>
                <p className="text-gray-600">
                  {t('about.mission.text')}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{t('about.vision.title')}</h3>
                <p className="text-gray-600">
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