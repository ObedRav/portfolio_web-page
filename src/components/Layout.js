import React from 'react';

const Layout = ({ children, className = '' }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark xl:p-24 lg:16 md:12 sm:8 ${className}`}>
      {children}
    </div>
  );
};

export default Layout;
