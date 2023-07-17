import { useEffect, useState } from 'react';
import i18n from '../i18n';

const useLanguageSelector = () => {
  const [language, setLanguage] = useState('');
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const userLanguage = window.localStorage.getItem('language');
    const defaultLanguage = i18n.language;

    const checkLanguage = userLanguage || defaultLanguage;
    setLanguage(checkLanguage);
    i18n.changeLanguage(checkLanguage);
    window.localStorage.setItem('language', checkLanguage);

    setInitialized(true);
  }, []);

  const changeLanguage = (language) => {
    setLanguage(language);
    i18n.changeLanguage(language);
    window.localStorage.setItem('language', language);
  };

  return [language, changeLanguage, initialized];
};

export default useLanguageSelector;
