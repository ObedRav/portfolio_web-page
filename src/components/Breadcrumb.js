import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

const Breadcrumb = ({ className = '' }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(Boolean);

  // Generate breadcrumb items
  const breadcrumbItems = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon
    }
  ];

  // Add path segments
  pathSegments.forEach((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/');
    const name = segment.charAt(0).toUpperCase() + segment.slice(1);
    
    breadcrumbItems.push({
      name,
      href,
      icon: null
    });
  });

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.obedrav.dev${item.href === '/' ? '' : item.href}`
    }))
  };

  // Don't show breadcrumbs on home page
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <>
      {/* Structured Data for AI */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      {/* Visual Breadcrumb Navigation */}
      <nav 
        className={`flex items-center space-x-2 text-sm text-dark/60 dark:text-light/60 ${className}`}
        aria-label="Breadcrumb"
        itemScope 
        itemType="https://schema.org/BreadcrumbList"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const Icon = item.icon;
          
          return (
            <React.Fragment key={item.href}>
              <div 
                className="flex items-center"
                itemProp="itemListElement" 
                itemScope 
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={index + 1} />
                
                {isLast ? (
                  <span 
                    className="flex items-center text-dark dark:text-light font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {Icon && <Icon className="w-4 h-4 mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link 
                    href={item.href}
                    className="flex items-center hover:text-dark dark:hover:text-light transition-colors duration-200"
                    itemProp="item"
                  >
                    <span itemProp="name">
                      {Icon && <Icon className="w-4 h-4 mr-1" />}
                      {item.name}
                    </span>
                    <meta itemProp="url" content={`https://www.obedrav.dev${item.href}`} />
                  </Link>
                )}
              </div>
              
              {!isLast && (
                <ChevronRightIcon className="w-4 h-4 text-dark/40 dark:text-light/40" />
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};

export default Breadcrumb;
