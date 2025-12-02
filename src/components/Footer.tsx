import React from 'react';
import { Code, MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  
  const navigateToService = (serviceSlug) => {
    navigate(`/services/${serviceSlug}`);
    window.scrollTo(0, 0);
  };

  // Lista cu noile servicii pentru a le mapa usor
  const footerServices = [
    { key: 'footer.apps', slug: 'custom-web-mobile-apps' },
    { key: 'footer.custom', slug: 'custom-software-development' },
    { key: 'footer.saas', slug: 'saas-development' },
    { key: 'footer.ai', slug: 'ai-automation' },
    { key: 'footer.api', slug: 'api-integrations' },
    { key: 'footer.consulting', slug: 'software-consulting' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-purple-500/10 to-transparent opacity-50"></div>
        <div className="absolute inset-0 pattern-grid opacity-20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-white" />
              <span className="ml-3 text-xl font-tech font-bold text-white">{t('footer.company')}</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-sm">
              {t('footer.tagline')}
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center group">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  Romania, Hunedoara, Petrosani, 332014
                </span>
              </div>
              <div className="flex items-center justify-center group">
                <Phone className="h-5 w-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {t('footer.phone')}
                </span>
              </div>
              <div className="flex items-center justify-center group">
                <Mail className="h-5 w-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {t('footer.email')}
                </span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-tech font-semibold mb-6 tech-gradient-text">
              {t('footer.services')}
            </h3>
            <ul className="space-y-3">
              {footerServices.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => navigateToService(service.slug)} 
                    className="text-gray-300 hover:text-blue-300 transform transition-all duration-300 inline-block hover:translate-x-2"
                  >
                    {t(service.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social Media */}
          <div className="flex flex-col items-center">
            {/* Legal Section */}
            <div className="mb-8">
                <h3 className="text-xl font-tech font-semibold mb-6 tech-gradient-text">
                {t('footer.legal')}
                </h3>
                <ul className="space-y-3">
                <li>
                    <Link 
                    to="/privacy-policy" 
                    className="text-gray-300 hover:text-blue-300 transform transition-all duration-300 inline-block hover:translate-x-2"
                    >
                    {t('footer.privacy')}
                    </Link>
                </li>
                <li>
                    <Link 
                    to="/gdpr-policy" 
                    className="text-gray-300 hover:text-blue-300 transform transition-all duration-300 inline-block hover:translate-x-2"
                    >
                    {t('footer.gdpr')}
                    </Link>
                </li>
                <li>
                    <a 
                    href="https://anpc.ro/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 hover:text-blue-300 transform transition-all duration-300 inline-block hover:translate-x-2"
                    >
                    {t('footer.anpc')}
                    </a>
                </li>
                </ul>
            </div>

            {/* Social Media Section - NEW */}
            <div>
                <h3 className="text-xl font-tech font-semibold mb-4 tech-gradient-text">
                    {t('footer.social') || 'Social Media'}
                </h3>
                <div className="flex justify-center">
                    <a 
                        href="https://www.linkedin.com/company/acl-smart-software" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-3 rounded-full bg-white/5 hover:bg-blue-600 transition-all duration-300 group"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    </a>
                </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} {t('footer.company')}. {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;