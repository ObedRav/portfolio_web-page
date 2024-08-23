import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import DevPicture from '../../public/images/developer-pic-1.png';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import lightBulb from '../../public/svgs/lightBulb.svg';
import TransitionEffect from '@/components/TransitionEffect';
import { useTranslation } from 'react-i18next';
import schemaMarkup from '@/components/schema';

export default function Home () {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Obed Rayo - Software Engineer</title>
        <meta name='description' content='Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more.' />
        <link rel="canonical" href="https://www.obedrav.dev/" />
        <meta property="og:title" content="Obed Rayo - Software Engineer" />
        <meta property="og:description" content="Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more." />
        <meta property="og:image" content="https://www.obedrav.dev/images/developer-pic-1.png" />
        <meta property="og:url" content="https://www.obedrav.dev/" />
        <meta property="og:type" content="website" />
        <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <TransitionEffect />

      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            {/** Picture */}
            <AnimatePresence>
              <motion.div
                key='picture'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                exit={{ y: 100, opacity: 0 }}
                className='w-1/2 mr-10 md:w-full'
              >
                <Image 
                  src={DevPicture}
                  alt='Software Engineer Obed Rayo Recrated Picture'
                  className='w-full h-auto lg:hidden md:inline-block md:w-full'
                  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' 
                  placeholder='blur'
                />
              </motion.div>
            </AnimatePresence>

            {/** Texts */}
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:mt-10'>
              <AnimatedText text={t('index.heading')} className='!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl' />
              <AnimatePresence>
                <motion.p
                  key='paragraph'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  exit={{ y: 100, opacity: 0 }}
                  className='my-4 text-base font-medium md:text-sm sm:text-xs'
                >
                  {t('index.description')}
                </motion.p>
              </AnimatePresence>

              {/** Buttons */}
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <AnimatePresence>
                  <motion.div
                    key='resume'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    exit={{ y: 100, opacity: 0 }}
                  >
                    <Link
                      href='https://drive.google.com/drive/folders/1hYrW3IAV-0B7t0ZI14OGOq6L9dGy219q?usp=sharing'
                      target='_blank'
                      className='bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light md:p-2 md:px-4 md:text-base' rel='noreferrer'
                    >
                      {t('index.resume')} <LinkArrow className='w-6 ml-1' />
                    </Link>
                  </motion.div>
                </AnimatePresence>
                <AnimatePresence>
                  <motion.div
                    key='contact'
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    exit={{ y: 100, opacity: 0 }}
                    className='ml-4 text-lg font-medium text-dark underline dark:text-light md:text-base'
                  >
                    <Link href='mailto:rayovianamiltonobed@gmail.com' rel='noreferrer' target='_blank'>
                      {t('index.contact')}
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Layout>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          exit={{ y: 100, opacity: 0 }}
          className='absolute right-8 bottom-8 inline-block w-24 md:hidden'
        >
          <motion.div
            initial={{ y: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='relative'
          >
            <Image src={lightBulb} alt='Light' className='w-full h-auto' />
          </motion.div>
        </motion.div>

      </main>
    </>
  );
}
