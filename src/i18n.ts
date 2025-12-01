import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './i18n/locales/en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      }
    },
    lng: 'en', // Forțăm limba engleză
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;