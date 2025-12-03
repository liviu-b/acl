import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react'; 
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll către elementul cu hash
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClasses =
    "text-gray-100 text-lg font-medium transition-all duration-300 hover:text-white hover:shadow-glow";

  const handleNavClick = (hash) => {
    toggleMenu(); // închide meniul mobil
    if (isHomePage) {
      const element = document.querySelector(hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(`/${hash}`);
    }
  };

  const sections = ['home', 'about', 'services', 'faq', 'contact'];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-gray-900/80 backdrop-blur-sm border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Code className="h-8 w-8 text-gray-100" />
            <span className="ml-2 text-xl font-bold text-gray-100 font-tech">
              ACL-Smart Software
            </span>
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(`#${section}`)}
                className={navLinkClasses}
              >
                {t(`nav.${section}`)}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-100">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/80 backdrop-blur-sm border-t border-white/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {sections.map(section => (
              <button
                key={section}
                onClick={() => handleNavClick(`#${section}`)}
                className={navLinkClasses}
              >
                {t(`nav.${section}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
