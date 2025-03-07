import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const navLinkClasses = "text-gray-100 text-lg font-medium transition-all duration-300 hover:text-white hover:shadow-glow";

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || !isHomePage ? 'bg-gray-900/80 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code className="h-8 w-8 text-gray-100" />
              <span className="ml-2 text-xl font-bold text-gray-100 font-tech">ACL-Smart Software</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {isHomePage ? (
              <>
                <a href="#home" className={navLinkClasses}>{t('nav.home')}</a>
                <a href="#about" className={navLinkClasses}>{t('nav.about')}</a>
                <a href="#services" className={navLinkClasses}>{t('nav.services')}</a>
              </>
            ) : (
              <>
                <Link to="/" className={navLinkClasses}>{t('nav.home')}</Link>
                <Link to="/#about" className={navLinkClasses}>{t('nav.about')}</Link>
                <Link to="/#services" className={navLinkClasses}>{t('nav.services')}</Link>
              </>
            )}
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Change language"
            >
              <Globe className="h-5 w-5 text-gray-100 group-hover:text-white transition-colors" />
              <span className="text-gray-100 group-hover:text-white transition-colors font-medium">
                {i18n.language === 'en' ? 'RO' : 'EN'}
              </span>
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4 text-gray-100 group-hover:text-white transition-colors" />
              <span className="text-gray-100 group-hover:text-white transition-colors text-sm font-medium">
                {i18n.language === 'en' ? 'RO' : 'EN'}
              </span>
            </button>
            
            <button onClick={toggleMenu} className="text-gray-100">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {isHomePage ? (
                <>
                  <a href="#home" className={navLinkClasses} onClick={toggleMenu}>{t('nav.home')}</a>
                  <a href="#about" className={navLinkClasses} onClick={toggleMenu}>{t('nav.about')}</a>
                  <a href="#services" className={navLinkClasses} onClick={toggleMenu}>{t('nav.services')}</a>
                </>
              ) : (
                <>
                  <Link to="/" className={navLinkClasses} onClick={toggleMenu}>{t('nav.home')}</Link>
                  <Link to="/#about" className={navLinkClasses} onClick={toggleMenu}>{t('nav.about')}</Link>
                  <Link to="/#services" className={navLinkClasses} onClick={toggleMenu}>{t('nav.services')}</Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;