import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import { Helmet } from 'react-helmet';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
// Images
import VipTop10 from '../../public/images/projects/VipTop10.webp';
import Techium from '../../public/images/projects/Techium.webp';
import CLI from '../../public/images/projects/CLI.webp';
import MERNFronted from '../../public/images/projects/MERNFronted.webp';
import MERNBackend from '../../public/images/projects/MERNBackend.webp';
import JovianCarrers from '../../public/images/projects/JovianCarrers.webp';
import ChatGptClone from '../../public/images/projects/chatgptClone.webp';
import LowLevel from '../../public/images/projects/LowLevel.svg';
import HigherLevel from '../../public/images/projects/HigherLevel.webp';
import BankCore from '../../public/images/projects/BankCore.webp'
import TransitionEffect from '@/components/TransitionEffect';
import schemaMarkup from '@/components/schema';

const PrincipalProject = ({ type, title, summary, image, link = '', github = '' }) => {
  const { t } = useTranslation();

  return (
    <motion.article
      className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark shadow-2xl bg-light p-12 dark:bg-dark dark:border-light dark:shadow-white lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Link href={link} target='_blank' className='flex justify-center items-center w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' rel='noreferrer'>
        <Image src={image} alt={title} className='w-auto h-48' priority placeholder='blur' />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2' rel='noreferrer'>
          <h2 className='my-2 w.full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} className='w-10'> <GithubIcon /> </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark  sm:px-4 sm:text-base' rel='noreferrer'>{t('projects.link.visitProject')}</Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ type, title, image, link = '', github = '' }) => {
  const { t } = useTranslation();


  return (
    <motion.article
      className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl dark:bg-dark dark:border-light dark:shadow-white xs:p-4'
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0}}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
    <Link href={link} target='_blank' className='flex justify-center items-center w-full cursor-pointer overflow-hidden rounded-lg' rel='noreferrer'>
        <Image src={image} alt={title} className='w-auto h-48' priority />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2' rel='noreferrer'>
          <h2 className='my-2 w.full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base' rel='noreferrer'>{t('projects.link.visit')}</Link>
          <Link href={github} className='w-8 md:w-6'> <GithubIcon /> </Link>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Obed Rayo - Software Engineer | projects</title>
        <meta name='description' content='Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more.' />
        <link rel="canonical" href="https://www.obedrav.dev/projects" />
        <meta property="og:title" content="Obed Rayo - Software Engineer | projects" />
        <meta property="og:description" content="Explore the portfolio of Obed Rayo, a skilled Software Engineer. Discover projects, skills, and expertise in web development and more." />
        <meta property="og:image" content="https://www.obedrav.dev/images/developer-pic-1.png" />
        <meta property="og:url" content="https://www.obedrav.dev/projects" />
        <meta property="og:type" content="website" />
        <script type='application/ld+json'>{JSON.stringify(schemaMarkup)}</script>
      </Helmet>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text={t('projects.header')} className='text-8xl mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <PrincipalProject
                type={t('projects.projects.backend')}
                title={t('projects.projects.vipTop10Title')}
                summary={t('projects.projects.vipTop10Summary')}
                image={VipTop10}
                link='https://github.com/ObedRav/VipTop10'
                github='https://github.com/ObedRav/VipTop10'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.frontend')}
                title={t('projects.projects.mernFrontendTitle')}
                image={MERNFronted}
                link='https://github.com/ObedRav/MERN-fronted'
                github='https://github.com/ObedRav/MERN-fronted'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.backend')}
                title={t('projects.projects.mernBackendTitle')}
                image={MERNBackend}
                link='https://github.com/ObedRav/MERN-backend'
                github='https://github.com/ObedRav/MERN-backend'
              />
            </div>

            <div className='col-span-12'>
              <PrincipalProject
                type={t('projects.projects.cli')}
                title={t('projects.projects.cliTitle')}
                summary={t('projects.projects.cliSummary')}
                image={CLI}
                link='https://github.com/ObedRav/LIFO-FIFO_CMD'
                github='https://github.com/ObedRav/LIFO-FIFO_CMD'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.frontend')}
                title={t('projects.projects.webFrontendTitle')}
                image={Techium}
                link='https://github.com/ObedRav/holbertonschool-web_front_end'
                github='https://github.com/ObedRav/holbertonschool-web_front_end'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.fullStack')}
                title={t('projects.projects.jovianCareersTitle')}
                image={JovianCarrers}
                link='https://github.com/ObedRav/jovian-carrers-website'
                github='https://github.com/ObedRav/jovian-carrers-website'
              />
            </div>

            <div className='col-span-12'>
              <PrincipalProject
                type={t('projects.projects.fullStack')}
                title={t('projects.projects.chatGptCloneTitle')}
                summary={t('projects.projects.chatGptCloneSummary')}
                image={ChatGptClone}
                link='https://github.com/ObedRav/Text_completions'
                github='https://github.com/ObedRav/Text_completions'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.lowLevelType')}
                title={t('projects.projects.lowLevelTitle')}
                image={LowLevel}
                link='https://github.com/ObedRav/Low_level_programming'
                github='https://github.com/ObedRav/Low_level_programming'
              />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project
                type={t('projects.projects.higherLevelType')}
                title={t('projects.projects.higherLevelTitle')}
                image={HigherLevel}
                link='https://github.com/ObedRav/Higher_level_programming'
              />
            </div>
          </div>

          <AnimatedText text={t('projects.progress')} className='text-8xl mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl pt-12' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <PrincipalProject
                  type={t('projects.projects.backend')}
                  title={t('projects.projects.BankCoreTitle')}
                  summary={t('projects.projects.BankCoreSummary')}
                  image={BankCore}
                  link='https://github.com/ObedRav/BankCore'
                  github='https://github.com/ObedRav/BankCore'
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
