import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import { GithubIcon } from '@/components/icons';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Images
import VipTop10 from '../../public/images/projects/VipTop10.png';
import Techium from '../../public/images/projects/Techium.png';
import CLI from '../../public/images/projects/CLI.png';
import MERNFronted from '../../public/images/projects/MERNFronted.png';
import MERNBackend from '../../public/images/projects/MERNBackend.png';
import JovianCarrers from '../../public/images/projects/JovianCarrers.png';
import chatgptClone from '../../public/images/projects/chatgptClone.png';
import LowLevel from '../../public/images/projects/LowLevel.svg';
import HigherLevel from '../../public/images/projects/HigherLevel.png';
import TransitionEffect from '@/components/TransitionEffect';

const PrincipalProject = ({ type, title, summary, image, link = '', github = '' }) => {
  const [ref, inView] = useInView();
  const [showDiv, setShowDiv] = useState(false);

  const handleAnimationStart = () => {
    setShowDiv(false);
  };

  const handleAnimationComplete = () => {
    setShowDiv(true);
  };

  return (
    <motion.article
      ref={ref}
      className='w-full flex items-center justify-between relative rounded-br-2xl rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
      onAnimationStart={handleAnimationStart}
    >
      {showDiv && (<div className='absolute top-0 -right-3 -z-10 w-[100.5%] h-[103.5%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />)}
      <Link href={link} target='_blank' className='flex justify-center items-center w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full' rel='noreferrer'>
        <Image src={image} alt={title} className='w-auto h-48' priority />
      </Link>

      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark xs:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2' rel='noreferrer'>
          <h2 className='my-2 w.full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
        </Link>
        <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
        <div className='mt-2 flex items-center'>
          <Link href={github} className='w-10'> <GithubIcon /> </Link>
          <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark sm:px-4 sm:text-base' rel='noreferrer'>Visit Project</Link>
        </div>
      </div>
    </motion.article>
  );
};

const Project = ({ type, title, image, link = '', github = '' }) => {
  const [ref, inView] = useInView();
  const [showDiv, setShowDiv] = useState(false);

  const handleAnimationStart = () => {
    setShowDiv(false);
  };

  const handleAnimationComplete = () => {
    setShowDiv(true);
  };

  return (
    <motion.article
      ref={ref}
      className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={handleAnimationComplete}
      onAnimationStart={handleAnimationStart}
    >
      {showDiv && (<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103.5%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />)}
      <Link href={link} target='_blank' className='flex justify-center items-center w-full cursor-pointer overflow-hidden rounded-lg' rel='noreferrer'>
        <Image src={image} alt={title} className='w-auto h-48' priority />
      </Link>

      <div className='w-full flex flex-col items-start justify-between mt-4'>
        <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2' rel='noreferrer'>
          <h2 className='my-2 w.full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
        </Link>
        <div className='w-full mt-2 flex items-center justify-between'>
          <Link href={link} target='_blank' className='text-lg font-semibold underline md:text-base' rel='noreferrer'>Visit</Link>
          <Link href={github} className='w-8 md:w-6'> <GithubIcon /> </Link>
        </div>
      </div>
    </motion.article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>ObedRav | Projects Page</title>
        <meta name='description' content='projects developer page' />
      </Head>

      <TransitionEffect />

      <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text='Unleashing the Creative Spark!' className='text-8xl mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <div className='col-span-12'>
              <PrincipalProject type='Backend' title='VipTop10' summary='The VipTop10 API allows you to retrieve information about categories, countries, cities, and places, and provides filtering and recommendation features.' image={VipTop10} link='https://github.com/ObedRav/VipTop10' github='https://github.com/ObedRav/VipTop10' priority />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Fronted' title='Mern Fronted' image={MERNFronted} link='https://github.com/ObedRav/MERN-fronted' github='https://github.com/ObedRav/MERN-fronted' />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Backend' title='Mern Backend' image={MERNBackend} link='https://github.com/ObedRav/MERN-backend' github='https://github.com/ObedRav/MERN-backend' />
            </div>

            <div className='col-span-12'>
              <PrincipalProject type='CLI' title='Stacks - LIFO, FIFO' summary='Command-line interface (CLI) to manage two different data structures: stack and queue.' image={CLI} link='https://github.com/ObedRav/LIFO-FIFO_CMD' github='https://github.com/ObedRav/LIFO-FIFO_CMD' />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Fronted' title='Web Fronted' image={Techium} link='https://github.com/ObedRav/holbertonschool-web_front_end' github='https://github.com/ObedRav/holbertonschool-web_front_end' />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Web Full Stack' title='Jovian Carrers' image={JovianCarrers} link='https://github.com/ObedRav/jovian-carrers-website' github='https://github.com/ObedRav/jovian-carrers-website' />
            </div>

            <div className='col-span-12'>
              <PrincipalProject type='Web Full Stack' title='ChatGPT Clone' summary='Text completions using the get-3.5 OpenAI model' image={chatgptClone} link='https://github.com/ObedRav/Text_completions' github='https://github.com/ObedRav/Text_completions' />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Low Level' title='Low Level Programming' image={LowLevel} link='https://github.com/ObedRav/Low_level_programming' github='https://github.com/ObedRav/Low_level_programming' />
            </div>
            <div className='col-span-6 sm:col-span-12'>
              <Project type='Higher Level' title='Higher Level Programming' image={HigherLevel} link='https://github.com/ObedRav/Higher_level_programming' />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
