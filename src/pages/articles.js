import Layout from '@/components/Layout';
import React from 'react';
import WorkSVG from '../../public/svgs/working.svg';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import { useTranslation } from 'react-i18next';

const articles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>ObedRav | Articles</title>
        <meta name='description' content='Portfolio for ObedRav' />
      </Head>

      <TransitionEffect />

      <Layout>
        <div className='flex flex-col items-center justify-center mb-20'>
          <AnimatedText text={t('articles.work')} className='text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
        </div>

        <div className='flex justify-center'>
          <Image src={WorkSVG} alt='Working' />
        </div>
      </Layout>
    </>
  );
};

export default articles;
