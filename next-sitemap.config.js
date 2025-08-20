/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.obedrav.dev',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Enhanced robots.txt for AI crawlers
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'CCBot',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/admin/*']
      }
    ],
    additionalSitemaps: [
      'https://www.obedrav.dev/sitemap.xml'
    ]
  },
  
  // Simple transform for single-route i18n
  transform: async (config, path) => {
    const mainPages = ['/', '/about', '/projects', '/articles'];
    const isMainPage = mainPages.includes(path);
    
    return {
      loc: path,
      changefreq: isMainPage ? 'weekly' : 'monthly',
      priority: isMainPage ? 0.9 : 0.7,
      lastmod: new Date().toISOString(),
      // No alternate language URLs since we use single route with dynamic language switching
    };
  }
};
  