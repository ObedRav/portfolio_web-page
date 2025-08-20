// schema.js - Comprehensive Schema Markup for AI Optimization
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.obedrav.dev/#person',
  name: 'Obed Rayo',
  alternateName: 'ObedRav',
  url: 'https://www.obedrav.dev/',
  image: {
    '@type': 'ImageObject',
    url: 'https://www.obedrav.dev/images/developer-pic-1.webp',
    width: '800',
    height: '600',
    caption: 'Obed Rayo - Backend Software Engineer'
  },
  jobTitle: 'Backend Software Engineer',
  description: 'Experienced backend software engineer with 3+ years of professional experience specializing in microservices architecture, API development, and system optimization. Currently pursuing a Master\'s degree in Artificial Intelligence.',
  knowsAbout: [
    'Golang',
    'Kotlin',
    'Python',
    'Java',
    'TypeScript',
    'JavaScript',
    'Django',
    'Flask',
    'Node.js',
    'Express',
    'Spring Boot',
    'FastAPI',
    'Echo',
    'Microservices Architecture',
    'Backend Development',
    'API Development',
    'System Design',
    'Artificial Intelligence',
    'Database Optimization',
    'DevOps',
    'System Optimization'
  ],
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Backend Software Engineer',
    occupationLocation: {
      '@type': 'Country',
      name: 'Remote'
    },
    skills: [
      'Backend Development',
      'Microservices Architecture',
      'API Design and Development',
      'Database Optimization',
      'System Design',
      'Artificial Intelligence Integration',
      'Performance Optimization',
      'DevOps Practices'
    ]
  },
  educationalBackground: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Master\'s in Artificial Intelligence',
    description: 'Currently pursuing advanced studies in Artificial Intelligence'
  },
  alumniOf: {
    '@type': 'Organization',
    name: 'University (AI Masters Program)'
  },
  sameAs: [
    'https://github.com/ObedRav',
    'https://linkedin.com/in/obed-rayo',
    'https://www.obedrav.dev'
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'rayovianamiltonobed@gmail.com',
    contactType: 'Professional Inquiry',
    availableLanguage: ['English', 'Spanish']
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://www.obedrav.dev/'
  }
};

// Professional Profile Schema
export const professionalProfileSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Obed Rayo Backend Development Services',
  provider: {
    '@type': 'Person',
    name: 'Obed Rayo',
    '@id': 'https://www.obedrav.dev/#person'
  },
  serviceType: 'Backend Software Development',
  areaServed: 'Worldwide',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Backend Development Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Microservices Architecture',
          description: 'Design and implementation of scalable microservices using Go, Kotlin, and Spring Boot'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'API Development',
          description: 'RESTful API development and optimization using various backend frameworks'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'System Optimization',
          description: 'Performance optimization and system architecture improvements'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'AI Integration',
          description: 'Integration of AI models and machine learning solutions into backend systems'
        }
      }
    ]
  }
};

// Portfolio Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.obedrav.dev/#website',
  url: 'https://www.obedrav.dev/',
  name: 'Obed Rayo - Backend Software Engineer Portfolio',
  description: 'Professional portfolio showcasing backend engineering projects, microservices architecture, and AI integration expertise',
  inLanguage: ['en', 'es'],
  isAccessibleForFree: true,
  creator: {
    '@type': 'Person',
    '@id': 'https://www.obedrav.dev/#person'
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://www.obedrav.dev/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  }
};

// Breadcrumb Schema for Navigation (Single Route)
export const breadcrumbSchema = (path) => {
  const pathSegments = path.split('/').filter(Boolean);
  const breadcrumbList = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.obedrav.dev/'
    }
  ];

  pathSegments.forEach((segment, index) => {
    breadcrumbList.push({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      item: `https://www.obedrav.dev/${pathSegments.slice(0, index + 1).join('/')}/`
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbList
  };
};

export default schemaMarkup;
