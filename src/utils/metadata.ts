// Page-specific metadata generation utility

import type { Metadata } from 'next';

interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

/**
 * Generate metadata for a specific page
 * @param options Page-specific metadata options
 * @returns Metadata object for Next.js head
 */
export function generateMetadata(options: PageMetadata): Metadata {
  const { 
    title = 'Konserve',
    description = 'Konserve connects Organizations, Collection Agencies, and Waste Buyers for efficient waste management and recycling.',
    keywords = ['waste management', 'recycling', 'environmental impact'],
    image = '/placeholder-logo.svg',
    url = 'https://konserve.example.com'
  } = options;
  
  const fullTitle = title === 'Konserve' ? title : `${title} | Konserve`;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    openGraph: {
      title: fullTitle,
      description,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

// Example usage:
// export const metadata = generateMetadata({ 
//   title: 'Blog', 
//   description: 'Konserve knowledge center and blog'
// });
