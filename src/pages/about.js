/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';
import profilePicture from '../../public/images/profile_picture.webp';
import AnimatedNumbers from '@/components/AnimatedNumbers';
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import schemaMarkup from '@/components/schema';

const about = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Obed Rayo - Software Engineer | about</title>
        <meta name='description' content='Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more.' />
        <link rel="canonical" href="https://www.obedrav.dev/about" />
        <meta property="og:title" content="Obed Rayo - Software Engineer | about" />
        <meta property="og:description" content="Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more." />
        <meta property="og:image" content="https://www.obedrav.dev/images/developer-pic-1.png" />
        <meta property="og:url" content="https://www.obedrav.dev/about" />
        <meta property="og:type" content="website" />
        <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <TransitionEffect />

      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={t('about.header')} className='text-8xl mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

            {/** About me and text */}
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>{t('about.aboutMe')}</h2>
              <p className='font-medium'>{t('about.paragraph1')}</p>
              <p className='my-4 font-medium'>{t('about.paragraph2')}</p>
              <p className='my-4 font-medium'>{t('about.paragraph3')}</p>
            </div>

            {/** PROFILE PICTURE */}
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-sapn-4 md:order-1 md:col-span-8 lg:col-span-4 xl:col-span-4'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={profilePicture} alt='Obed Rayo - Software Engineer' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' placeholder='blur' />
            </div>

            {/** Numbers */}
            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3000} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{t('about.numbersText1')}</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={70} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{t('about.numbersText2')}</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center '>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>{t('about.numbersText3')}</h2>
              </div>

            </div>
          </div>

          <Skills />

        </Layout>
      </main>
    </>
  );
};

export default about;
