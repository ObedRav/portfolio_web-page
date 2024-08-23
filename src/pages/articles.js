import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import React from 'react';
import WorkSVG from '../../public/svgs/working.svg';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';
import TransitionEffect from '@/components/TransitionEffect';
import { useTranslation } from 'react-i18next';
import schemaMarkup from '@/components/schema';

const articles = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Obed Rayo - Software Engineer | articles</title>
        <meta name='description' content='Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more.' />
        <link rel="canonical" href="https://www.obedrav.dev/articles" />
        <meta property="og:title" content="Obed Rayo - Software Engineer | articles" />
        <meta property="og:description" content="Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more." />
        <meta property="og:image" content="https://www.obedrav.dev/images/developer-pic-1.png" />
        <meta property="og:url" content="https://www.obedrav.dev/articles" />
        <meta property="og:type" content="website" />
        <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <TransitionEffect />

      <Layout>
        <div className='flex flex-col items-center justify-center mb-20'>
          <AnimatedText text={t('articles.work')} className='text-8xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
        </div>

        <div className='flex justify-center'>
          <Image src={WorkSVG} alt='Working' placeholder='blur' />
        </div>
      </Layout>
    </>
  );
};

export default articles;
