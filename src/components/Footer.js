import React from 'react';
import Layout from './Layout';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'
    >
      <Layout
        className='py-8 flex items-center justify-between lg:flex-col lg:py-6'
      >
        <span>{new Date().getFullYear()} &copy;  {t('footer.text')} </span>
      </Layout>
    </footer>
  );
};

export default Footer;
