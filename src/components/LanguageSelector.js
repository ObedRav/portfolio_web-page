import React from 'react';
import { motion } from 'framer-motion';
import useLanguageSelector from './hooks/useLanguageSelector';

const LanguageSelector = () => {
  const [language, changeLanguage] = useLanguageSelector();

  return (
    <div className='flex items-center justify-end space-x-2'>
      <motion.button
        onClick={() => changeLanguage('en')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`px-3 py-1 rounded-md text-sm font-medium ${language === 'en' ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light'}`}
      >
        English
      </motion.button>
      <motion.button
        onClick={() => changeLanguage('es')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={`px-3 py-1 rounded-md text-sm font-medium ${language === 'es' ? 'bg-dark text-light dark:bg-light dark:text-dark' : 'bg-light text-dark dark:bg-dark dark:text-light'}`}
      >
        Español
      </motion.button>
    </div>
  );
};

export default LanguageSelector;
