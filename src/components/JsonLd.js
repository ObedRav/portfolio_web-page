import { useRouter } from 'next/router';
import { useMemo } from 'react';

const JsonLd = ({ type = 'Person', data = {} }) => {
  const router = useRouter();
  const currentUrl = `https://www.obedrav.dev${router.asPath}`;

  const generateSchema = useMemo(() => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      '@id': `${currentUrl}#${type.toLowerCase()}`,
      url: currentUrl,
    };

    switch (type) {
      case 'Person':
        return {
          ...baseSchema,
          name: 'Obed Rayo',
          alternateName: 'ObedRav',
          jobTitle: 'Software Engineer',
          description: 'Expert software engineer specializing in full-stack web development, backend systems, and modern technologies',
          image: {
            '@type': 'ImageObject',
            url: 'https://www.obedrav.dev/images/developer-pic-1.webp',
            width: '800',
            height: '600'
          },
          sameAs: [
            'https://github.com/ObedRav',
            'https://linkedin.com/in/obed-rayo',
            'https://www.obedrav.dev'
          ],
          knowsAbout: [
            'JavaScript', 'Python', 'React', 'Next.js', 'Node.js',
            'Full-Stack Development', 'Backend Development', 'Web Development',
            'Software Engineering', 'Database Design', 'API Development'
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            email: 'rayovianamiltonobed@gmail.com',
            contactType: 'Professional'
          },
          hasOccupation: {
            '@type': 'Occupation',
            name: 'Software Engineer',
            occupationLocation: 'Global Remote',
            skills: [
              'JavaScript Programming',
              'Python Development', 
              'React Framework',
              'Backend Architecture',
              'Database Management',
              'API Design'
            ]
          },
          ...data
        };

      case 'WebSite':
        return {
          ...baseSchema,
          name: 'Obed Rayo - Software Engineer Portfolio',
          description: 'Professional portfolio showcasing software engineering projects, skills, and expertise',
          inLanguage: ['en', 'es'],
          creator: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: `${currentUrl}search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          },
          ...data
        };

      case 'WebPage':
        return {
          ...baseSchema,
          name: data.title || 'Obed Rayo Portfolio Page',
          description: data.description || 'Professional software engineering portfolio page',
          isPartOf: {
            '@type': 'WebSite',
            name: 'Obed Rayo Portfolio',
            url: 'https://www.obedrav.dev'
          },
          mainEntity: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          breadcrumb: data.breadcrumb || {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.obedrav.dev'
              }
            ]
          },
          ...data
        };

      case 'ProfessionalService':
        return {
          ...baseSchema,
          name: 'Obed Rayo Software Development Services',
          serviceType: 'Software Development',
          provider: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Software Development Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Full-Stack Web Development',
                  description: 'Complete web application development using modern technologies'
                }
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Backend Development',
                  description: 'Robust and scalable backend systems and APIs'
                }
              }
            ]
          },
          ...data
        };

      case 'Portfolio':
        return {
          ...baseSchema,
          '@type': 'CreativeWork',
          name: 'Obed Rayo Software Engineering Portfolio',
          description: 'Professional portfolio showcasing software development projects and technical expertise',
          creator: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          about: {
            '@type': 'Thing',
            name: 'Software Engineering'
          },
          workExample: data.projects || [],
          ...data
        };

      case 'Article':
        return {
          ...baseSchema,
          headline: data.title,
          description: data.description,
          author: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          publisher: {
            '@type': 'Person',
            name: 'Obed Rayo'
          },
          datePublished: data.datePublished,
          dateModified: data.dateModified || data.datePublished,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': currentUrl
          },
          image: data.image || 'https://www.obedrav.dev/images/developer-pic-1.webp',
          ...data
        };

      default:
        return {
          ...baseSchema,
          ...data
        };
    }
  }, [type, data, currentUrl]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema) }}
    />
  );
};

export default JsonLd;
