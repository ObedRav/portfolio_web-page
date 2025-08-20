import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import DevPicture from '../../public/images/developer-pic-1.webp';
import AnimatedText from '@/components/AnimatedText';
import Link from 'next/link';
import { LinkArrow } from '@/components/icons';
import lightBulb from '../../public/svgs/lightBulb.svg';
import TransitionEffect from '@/components/TransitionEffect';
import { useTranslation } from 'react-i18next';
import DynamicMeta from '@/components/DynamicMeta';
import schemaMarkup, { professionalProfileSchema, websiteSchema } from '@/components/schema';

export default function Home () {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'en';
  const isSpanish = currentLanguage === 'es';

  // Base schema for the homepage
  const homepageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      schemaMarkup,
      professionalProfileSchema,
      websiteSchema
    ]
  };

  // Dynamic title and description based on language
  const dynamicTitle = isSpanish 
    ? 'Obed Rayo - Ingeniero de Software Experto | Desarrollador Full-Stack | Soluciones Web Modernas'
    : 'Obed Rayo - Expert Software Engineer | Full-Stack Developer | Modern Web Solutions';
    
  const dynamicDescription = isSpanish
    ? 'Obed Rayo es un ingeniero de software experto especializado en desarrollo web full-stack, sistemas backend y tecnologías modernas. Descubre proyectos innovadores, experiencia profesional y servicios de desarrollo. Contacta para consultoría e ingeniería de software.'
    : 'Obed Rayo is an expert software engineer specializing in full-stack web development, backend systems, and modern technologies. Discover innovative projects, professional expertise, and development services. Contact for software engineering consultation and development projects.';

  return (
    <>
      {/* Dynamic Meta Tags based on current language */}
      <DynamicMeta 
        customTitle={dynamicTitle}
        customDescription={dynamicDescription}
        path="/"
      />
      
      <Helmet>
        {/* Additional SEO for homepage */}
        <link rel="canonical" href="https://www.obedrav.dev/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:image" content="https://www.obedrav.dev/images/developer-pic-1.webp" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="600" />
        <meta property="og:image:alt" content="Obed Rayo - Professional Software Engineer" />
        <meta property="og:url" content="https://www.obedrav.dev/" />
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Obed Rayo Portfolio" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://www.obedrav.dev/images/developer-pic-1.webp" />
        <meta name="twitter:image:alt" content="Obed Rayo - Professional Software Engineer" />
        
        {/* AI-Specific Meta Tags */}
        <meta name="subject" content="Professional Software Engineering Services" />
        <meta name="topic" content="Full-Stack Web Development and Software Engineering" />
        <meta name="Classification" content="Technology, Software Development, Web Development" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        
        {/* Comprehensive Structured Data */}
        <script type='application/ld+json'>{JSON.stringify(homepageSchema)}</script>
      </Helmet>

      <TransitionEffect />

      {/* Enhanced Semantic HTML for AI Parsing */}
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light' role="main" itemScope itemType="https://schema.org/Person">
        <Layout className='pt-0 md:p-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            {/** Professional Image with Enhanced SEO */}
            <AnimatePresence>
              <motion.figure
                key='picture'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                exit={{ y: 100, opacity: 0 }}
                className='w-1/2 mr-10 md:w-full'
                itemProp="image"
              >
                <Image 
                  src={DevPicture}
                  alt='Obed Rayo - Professional Software Engineer and Full-Stack Developer specializing in modern web technologies'
                  className='w-full h-auto lg:hidden md:inline-block md:w-full'
                  priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw' 
                  placeholder='blur'
                  itemProp="image"
                />
              </motion.figure>
            </AnimatePresence>

            {/** Enhanced Content Section for AI Understanding */}
            <section className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center md:mt-10' itemScope itemType="https://schema.org/AboutPage">
              <header>
                <h1 itemProp="name" className="sr-only">Obed Rayo - Expert Software Engineer</h1>
                <AnimatedText text={t('index.heading')} className='!text-6xl !text-left xl:!text-5xl lg:!text-center md:!text-5xl sm:!text-3xl' />
              </header>
              
              <AnimatePresence>
                <motion.div
                  key='description'
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  exit={{ y: 100, opacity: 0 }}
                  className='my-4'
                >
                  <p 
                    className='text-base font-medium md:text-sm sm:text-xs'
                    itemProp="description"
                  >
                    {t('index.description')}
                  </p>
                  
                  {/* Hidden content for AI understanding */}
                  <div className="sr-only" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                    <meta itemProp="name" content="expertise" />
                    <meta itemProp="value" content="Full-Stack Web Development, Backend Systems, JavaScript, Python, React, Next.js, Node.js, Database Design, API Development, Software Architecture" />
                  </div>
                  
                  <div className="sr-only" itemProp="additionalProperty" itemScope itemType="https://schema.org/PropertyValue">
                    <meta itemProp="name" content="services" />
                    <meta itemProp="value" content="Web Application Development, Software Consulting, Backend Development, API Integration, Database Optimization, Performance Tuning" />
                  </div>
                </motion.div>
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
            </section>
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
