import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

const DynamicMeta = ({ 
  titleKey = 'index.title',
  descriptionKey = 'meta.description',
  customTitle,
  customDescription,
  ogImage = '/images/developer-pic-1.webp',
  path = '/'
}) => {
  const { t, i18n } = useTranslation();
  
  const currentLanguage = i18n.language || 'en';
  const isSpanish = currentLanguage === 'es';
  
  // Dynamic title and description based on current language
  const title = customTitle || t(titleKey) || 'Obed Rayo - Software Engineer';
  const description = customDescription || t(descriptionKey) || 'Expert Software Engineer specializing in full-stack web development';
  
  const currentUrl = `https://www.obedrav.dev${path}`;
  
  // Language-specific keywords
  const keywords = isSpanish 
    ? 'Obed Rayo, ObedRav, Ingeniero de Software, Desarrollador Full-Stack, Desarrollo Web, JavaScript, Python, React, Next.js, Servicios de Desarrollo de Software'
    : 'Obed Rayo, ObedRav, Software Engineer, Full-Stack Developer, Web Development, JavaScript, Python, React, Next.js, Software Development Services';

  return (
    <Helmet>
      {/* Dynamic Language Meta */}
      <html lang={currentLanguage} />
      <meta name="language" content={isSpanish ? 'Spanish' : 'English'} />
      <meta name="content-language" content={currentLanguage} />
      
      {/* Dynamic Title & Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Dynamic Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={isSpanish ? 'es_ES' : 'en_US'} />
      <meta property="og:locale:alternate" content={isSpanish ? 'en_US' : 'es_ES'} />
      
      {/* Language Alternatives (same URL with language switching) */}
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="es" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />
      
      {/* Structured Data for Current Language */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${currentUrl}#page`,
          url: currentUrl,
          name: title,
          description: description,
          inLanguage: currentLanguage,
          isPartOf: {
            '@type': 'WebSite',
            name: 'Obed Rayo Portfolio',
            url: 'https://www.obedrav.dev',
            inLanguage: ['en', 'es']
          },
          author: {
            '@type': 'Person',
            name: 'Obed Rayo',
            jobTitle: isSpanish ? 'Ingeniero de Software' : 'Software Engineer',
            description: isSpanish 
              ? 'Ingeniero de software experto especializado en desarrollo web full-stack y sistemas backend'
              : 'Expert software engineer specializing in full-stack web development and backend systems'
          }
        })}
      </script>
    </Helmet>
  );
};

export default DynamicMeta;
