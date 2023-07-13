import React from 'react';
import { motion } from 'framer-motion';

const quote = {
  initial: {
    opacity: 1
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08
    }
  }
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1
    }
  }
};

/**
 * The `AnimatedText` component is a JavaScript function that takes in a `text` and `className` prop
 * and returns a div containing a motion-based animated heading element. The heading element splits the
 * `text` prop into individual words and animates them using the `quote` and `singleWord` variants.
 * @returns The `AnimatedText` component is returning a div element with a class name of 'w-full
 * mx-auto py-2 flex items-center justify-center text-center overflow-hidden'. Inside the div, there is
 * a motion.h1 element with a class name of 'inline-block w-full text-dark font-bold capitalize' and a
 * variants prop set to the `quote` variable. The motion.h1 element also has
 */
const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center overflow-hidden sm:py-0'>
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize ${className}  dark:text-light`}
        variants={ quote }
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) =>
          <motion.span
            key={`${ word }-${ index }`}
            className='inline-block'
            variants={ singleWord }
          >
            { word }&nbsp;
          </motion.span>
        )}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
