import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-20 right-5 z-40 bg-gray-800 text-white rounded-full p-2 shadow-lg hover:bg-gray-700 transition-all duration-300 flex items-center space-x-2"
      aria-label="Change language"
    >
      <Globe className="h-5 w-5" />
      <span className="pr-2">{currentLanguage === 'en' ? t('language.ro') : t('language.en')}</span>
    </button>
  );
};

export default LanguageSwitcher;