import React from 'react';
import CircularText from '../../public/images/circularImage.png';
import Link from 'next/link';
import Image from 'next/image';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <Image
          src={CircularText}
          alt='CircularText'
          className='fill-dark animate-spin-slow'
        />
        <Link
          href='mailto:rayovianamiltonobed@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark'
        >
          Hire me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
