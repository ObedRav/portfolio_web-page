import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document () {
  return (
    <Html lang='en'>
      <Head>
        {/* Enhanced Meta Tags for AI Understanding */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        
        {/* Theme and Color Scheme */}
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/images/favicon.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/images/favicon.webp" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Author and Copyright */}
        <meta name="author" content="Obed Rayo" />
        <meta name="copyright" content="Obed Rayo" />
        
        {/* AI and Voice Search Optimization */}
        <meta name="description" content="Obed Rayo is an experienced software engineer specializing in full-stack web development, backend systems, and modern technologies. Discover innovative projects and professional expertise." />
        <meta name="keywords" content="Obed Rayo, ObedRav, Software Engineer, Full-Stack Developer, Backend Developer, Web Development, JavaScript, Python, React, Next.js, Software Development Services" />
        
        {/* Structured Data for AI */}
        <meta name="subject" content="Software Engineering Portfolio" />
        <meta name="topic" content="Web Development and Software Engineering" />
        <meta name="summary" content="Professional portfolio showcasing software engineering expertise, projects, and development services by Obed Rayo" />
        
        {/* Language and Localization - Single route with dynamic language switching */}
        <meta name="language" content="English" />
        <meta name="content-language" content="en,es" />
        <link rel="alternate" hrefLang="en" href="https://www.obedrav.dev/" />
        <link rel="alternate" hrefLang="es" href="https://www.obedrav.dev/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.obedrav.dev/" />
        
        {/* Security */}
        <meta name="referrer" content="origin-when-cross-origin" />
        
        {/* Performance Hints */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      </Head>
      <body>
        <Script id='theme-switcher' strategy='beforeInteractive'>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }
          `}
        </Script>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
