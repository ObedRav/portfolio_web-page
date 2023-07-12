import Layout from '@/components/Layout';
import React from 'react';
import WorkSVG from '../../public/svgs/working.svg';
import Image from 'next/image';
import AnimatedText from '@/components/AnimatedText';

const articles = () => {
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center mb-20">
          <AnimatedText text="Working on it..." className="text-8xl" />
        </div>

        <div className="flex justify-center">
          <Image src={WorkSVG} alt="Working" />
        </div>
      </Layout>
    </>
  );
};

export default articles;
