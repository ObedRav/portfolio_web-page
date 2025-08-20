import React from 'react';
import SEOAnalysis from './SEOAnalysis';

const Layout = ({ children, className = '' }) => {
  return (
    <>
      <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:16 md:12 sm:8 ${className}`}>
        {children}
      </div>
      {/* SEO Analysis Tool (Development Only) */}
      {process.env.NODE_ENV === 'development' && <SEOAnalysis />}
    </>
  );
};

export default Layout;
