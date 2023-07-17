import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../../public/locales/en.json';
import translationES from '../../public/locales/es.json';

const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language if a translation is missing for the current language
  interpolation: {
    escapeValue: false // React components are safe from XSS
  }
});

export default i18n;
