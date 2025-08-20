import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SEOAnalysis = ({ showInProduction = false }) => {
  const [seoData, setSeoData] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV === 'production' && !showInProduction) {
      return;
    }

    const analyzePage = () => {
      const analysis = {
        // Page Info
        title: document.title,
        url: window.location.href,
        
        // Meta Tags
        description: document.querySelector('meta[name="description"]')?.content,
        keywords: document.querySelector('meta[name="keywords"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        
        // Open Graph
        ogTitle: document.querySelector('meta[property="og:title"]')?.content,
        ogDescription: document.querySelector('meta[property="og:description"]')?.content,
        ogImage: document.querySelector('meta[property="og:image"]')?.content,
        ogUrl: document.querySelector('meta[property="og:url"]')?.content,
        
        // Twitter Card
        twitterCard: document.querySelector('meta[name="twitter:card"]')?.content,
        twitterTitle: document.querySelector('meta[name="twitter:title"]')?.content,
        
        // Structured Data
        structuredData: Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map(script => {
          try {
            return JSON.parse(script.textContent);
          } catch (e) {
            return null;
          }
        }).filter(Boolean),
        
        // Images
        images: Array.from(document.querySelectorAll('img')).map(img => ({
          src: img.src,
          alt: img.alt,
          hasAlt: !!img.alt,
          loading: img.loading
        })),
        
        // Headings Structure
        headings: Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(heading => ({
          level: heading.tagName,
          text: heading.textContent,
          id: heading.id
        })),
        
        // Links
        links: Array.from(document.querySelectorAll('a')).map(link => ({
          href: link.href,
          text: link.textContent,
          hasTitle: !!link.title,
          isExternal: link.href && !link.href.includes(window.location.hostname),
          hasNofollow: link.rel?.includes('nofollow')
        })),
        
        // Language
        lang: document.documentElement.lang,
        
        // Performance Metrics (simplified)
        performance: {
          imagesWithoutAlt: document.querySelectorAll('img:not([alt])').length,
          externalLinks: document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])').length,
          internalLinks: document.querySelectorAll('a[href^="/"], a[href*="' + window.location.hostname + '"]').length
        }
      };
      
      setSeoData(analysis);
    };

    // Wait for page to load completely
    const timer = setTimeout(analyzePage, 1000);
    return () => clearTimeout(timer);
  }, [router.asPath, showInProduction]);

  if (process.env.NODE_ENV === 'production' && !showInProduction) {
    return null;
  }

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const calculateSEOScore = () => {
    let score = 0;
    let maxScore = 0;

    // Title (10 points)
    maxScore += 10;
    if (seoData.title && seoData.title.length >= 30 && seoData.title.length <= 60) {
      score += 10;
    } else if (seoData.title) {
      score += 5;
    }

    // Meta Description (10 points)
    maxScore += 10;
    if (seoData.description && seoData.description.length >= 120 && seoData.description.length <= 160) {
      score += 10;
    } else if (seoData.description) {
      score += 5;
    }

    // Canonical URL (5 points)
    maxScore += 5;
    if (seoData.canonical) score += 5;

    // Open Graph (15 points)
    maxScore += 15;
    if (seoData.ogTitle) score += 5;
    if (seoData.ogDescription) score += 5;
    if (seoData.ogImage) score += 5;

    // Structured Data (20 points)
    maxScore += 20;
    if (seoData.structuredData?.length > 0) {
      score += Math.min(20, seoData.structuredData.length * 5);
    }

    // Images with Alt Text (15 points)
    maxScore += 15;
    if (seoData.images) {
      const imagesWithAlt = seoData.images.filter(img => img.hasAlt).length;
      const totalImages = seoData.images.length;
      if (totalImages > 0) {
        score += Math.round((imagesWithAlt / totalImages) * 15);
      }
    }

    // Heading Structure (10 points)
    maxScore += 10;
    if (seoData.headings) {
      const hasH1 = seoData.headings.some(h => h.level === 'H1');
      const hasProperStructure = seoData.headings.length > 1;
      if (hasH1 && hasProperStructure) score += 10;
      else if (hasH1) score += 5;
    }

    // Language (5 points)
    maxScore += 5;
    if (seoData.lang) score += 5;

    // Keywords (10 points)
    maxScore += 10;
    if (seoData.keywords) score += 10;

    return Math.round((score / maxScore) * 100);
  };

  const seoScore = calculateSEOScore();

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 max-w-md max-h-96 overflow-y-auto border border-gray-200 dark:border-gray-700 z-50">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          SEO Analysis
        </h3>
        <div className={`text-2xl font-bold ${getScoreColor(seoScore)}`}>
          {seoScore}%
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div>
          <strong>Title:</strong> {seoData.title?.length || 0} chars
          <div className={seoData.title?.length >= 30 && seoData.title?.length <= 60 ? 'text-green-600' : 'text-yellow-600'}>
            {seoData.title?.length >= 30 && seoData.title?.length <= 60 ? '✓' : '⚠'} Optimal: 30-60 chars
          </div>
        </div>
        
        <div>
          <strong>Description:</strong> {seoData.description?.length || 0} chars
          <div className={seoData.description?.length >= 120 && seoData.description?.length <= 160 ? 'text-green-600' : 'text-yellow-600'}>
            {seoData.description?.length >= 120 && seoData.description?.length <= 160 ? '✓' : '⚠'} Optimal: 120-160 chars
          </div>
        </div>
        
        <div>
          <strong>Structured Data:</strong> {seoData.structuredData?.length || 0} schemas
          <div className={seoData.structuredData?.length > 0 ? 'text-green-600' : 'text-red-600'}>
            {seoData.structuredData?.length > 0 ? '✓' : '✗'} AI-ready markup
          </div>
        </div>
        
        <div>
          <strong>Images:</strong> {seoData.images?.filter(img => img.hasAlt).length || 0}/{seoData.images?.length || 0} with alt text
          <div className={seoData.performance?.imagesWithoutAlt === 0 ? 'text-green-600' : 'text-yellow-600'}>
            {seoData.performance?.imagesWithoutAlt === 0 ? '✓' : '⚠'} All images have alt text
          </div>
        </div>
        
        <div>
          <strong>Headings:</strong> {seoData.headings?.length || 0} total
          <div className={seoData.headings?.some(h => h.level === 'H1') ? 'text-green-600' : 'text-red-600'}>
            {seoData.headings?.some(h => h.level === 'H1') ? '✓' : '✗'} Has H1 tag
          </div>
        </div>
        
        <div>
          <strong>Open Graph:</strong>
          <div className={seoData.ogTitle && seoData.ogDescription && seoData.ogImage ? 'text-green-600' : 'text-yellow-600'}>
            {seoData.ogTitle && seoData.ogDescription && seoData.ogImage ? '✓' : '⚠'} Complete OG tags
          </div>
        </div>
        
        <div>
          <strong>Canonical URL:</strong>
          <div className={seoData.canonical ? 'text-green-600' : 'text-red-600'}>
            {seoData.canonical ? '✓' : '✗'} Canonical set
          </div>
        </div>
        
        <div>
          <strong>Language:</strong>
          <div className={seoData.lang ? 'text-green-600' : 'text-red-600'}>
            {seoData.lang ? '✓' : '✗'} Language declared
          </div>
        </div>
      </div>
    </div>
  );
};

export default SEOAnalysis;
