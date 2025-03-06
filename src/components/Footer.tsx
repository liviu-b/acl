import React from 'react';
import { Code, MapPin, Phone, Mail } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const navigateToService = (serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white-900 text-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-4">
              <Code className="h-8 w-8 text-gray-300" />
              <span className="ml-2 text-xl font-bold">{t('footer.company')}</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.tagline')}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-center">
                <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">{t('footer.address')}</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400">{t('footer.email')}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToService('software-development')} 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.software')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('consulting-architecture')} 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.consulting')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('web-solutions')} 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.web')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToService('support-maintenance')} 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.support')}
                </button>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link 
                  to="/gdpr-policy" 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.gdpr')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://anpc.ro/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white hover:scale-110 transform transition-all duration-300 inline-block"
                >
                  {t('footer.anpc')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;