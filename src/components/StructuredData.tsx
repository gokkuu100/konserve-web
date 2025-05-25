'use client';

import Script from 'next/script';
import { siteConfig } from '@/config/site';

// Structured data for SEO
const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    description: siteConfig.description,
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.instagram
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'Kenya',
      addressLocality: 'Nairobi'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contacts.phone,
      email: siteConfig.contacts.email,
      contactType: 'customer service',
      areaServed: ['Kenya', 'East Africa'],
      availableLanguage: ['English', 'Swahili']
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://konserve.example.com'
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: '-1.292066',
        longitude: '36.821945'
      },
      geoRadius: '300000'
    }
  };

  return (
    <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default StructuredData;
