/* eslint-disable react/no-unescaped-entities */
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePicture from '../../public/images/profile_picture.png'
import AnimatedNumbers from '@/components/AnimatedNumbers'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
  return (
    <>
        <Head>
            <title>ObedRav | About</title>
            <meta name='description' content='about developer page' />
        </Head>

        <TransitionEffect />

        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Code Crafted with Heart and Mind!' className='text-8xl mb-16 lg:text-7xl sm:text-6xl xs:text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

                    { /** About me and text */ }
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About me</h2>

                        <p  className='font-medium'>
                            Hi, I'm <b>Obed Rayo</b>, a passionate software developer with expertise in full-stack
                            web development and a specialization in backend technologies. With experience in
                            the field, I have honed my skills in creating robust and scalable solutions.
                        </p>

                        <p className='my-4 font-medium'>
                            When it comes to backend development, I believe it goes beyond building fast and
                            functional systems. It's about solving problems and making a positive impact on
                            people's lives. I view backend development as a means to create innovative and
                            user-centric experiences that address real-world challenges.
                        </p>

                        <p className='my-4 font-medium'>
                            I thrive on challenges and constantly seek opportunities to push the boundaries of
                            what's possible in backend development. I'm always eager to explore new technologies,
                            frameworks, and methodologies to enhance my skills and deliver even better solutions.
                        </p>
                    </div>

                    { /** PROFILE PICTURE */ }
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-sapn-4 md:order-1 md:col-span-8 lg:col-span-4 xl:col-span-4'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePicture} alt='profile picture' className='w-full h-auto rounded-2xl' priority sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' />
                    </div>

                    { /** Numbers */ }
                    <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>

                        <div className='flex flex-col items-end justify-center xl:items-center '>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={3000} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Development Hours</h2>
                        </div> 

                        <div className='flex flex-col items-end justify-center xl:items-center '>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={70} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects Completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center '>
                            <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                <AnimatedNumbers value={1} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Years of Experience</h2>
                        </div>

                    </div>
                </div>

                <Skills />

            </Layout>
        </main>
    </>
  )
}

export default about