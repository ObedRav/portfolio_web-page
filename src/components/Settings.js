import React from 'react';
import LanguageSelector from './LanguageSelector';
import settingsIcon from '../../public/images/setting.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Settings = ({ handleLanguageSelector, isLanguageSelectorOpen, isOpen, className = '' }) => {
  return (
    <div className={className}>
      {/* Settings Icon */}
      <motion.button
        onClick={handleLanguageSelector}
        className='ml-3 flex items-center justify-center rounded-full p-1 text-light bg-light'
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.8 }}
      >
        <Image src={settingsIcon} alt='Settings Icon' className='w-6 h-6 fill-dark' style={{ transform: isLanguageSelectorOpen ? 'rotate(90deg)' : 'rotate(0deg)' }} />
      </motion.button>

      {/* Language Selector */}
      {isLanguageSelectorOpen && (
        <motion.div
          className={`w-32 h-16 absolute bg-transparent flex flex-col ${isOpen ? 'items-center mt-24' : 'right-14 items-end'} rounded-md p-2`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <LanguageSelector />
        </motion.div>
      )}
    </div>
  );
};

export default Settings;
