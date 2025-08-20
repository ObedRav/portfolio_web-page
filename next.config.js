/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  
  // Enhanced images configuration for AI crawlers
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Enhanced headers for performance and AI crawlers
  async headers() {
    return [
      {
        source: '/_next/image/:all*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=2592000, stale-while-revalidate=86400, stale-if-error=2592000',
          },
        ]
      },
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          }
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-cache, no-store, must-revalidate',
          },
        ],
      }
    ]
  },
  
  // Enhanced redirects for better AI understanding
  async redirects() {
    return [
      {
        source: '/portfolio',
        destination: '/projects',
        permanent: true,
      }
    ]
  },
  
  // Optimize for search engines and AI crawlers
  experimental: {
    scrollRestoration: true,
  },
  
  // Webpack configuration for better Cloudflare Workers compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Improve chunk loading for client-side
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          ...config.optimization.splitChunks,
          cacheGroups: {
            ...config.optimization.splitChunks.cacheGroups,
            commons: {
              name: 'commons',
              chunks: 'all',
              minChunks: 2,
              priority: 0,
            },
          },
        },
      };
    }
    return config;
  },
  
  // Environment variables for AI optimization
  env: {
    SITE_URL: 'https://www.obedrav.dev',
    SITE_NAME: 'Obed Rayo - Software Engineer',
    SITE_DESCRIPTION: 'Expert Software Engineer specializing in full-stack web development and modern technologies',
  }
};

if (process.env.NODE_ENV === 'development') {
  (async () => {
    const { setupDevPlatform } = await import('@cloudflare/next-on-pages/next-dev');
    await setupDevPlatform();
  })();
}

module.exports = nextConfig;
