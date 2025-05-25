'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';

// This component will add Google Analytics to the site
// It uses the GA4 measurement ID format: G-XXXXXXXXXX
// You should replace the placeholder ID with your actual GA4 Measurement ID

interface AnalyticsProps {
  measurementId: string;  // Google Analytics Measurement ID
}

const Analytics = ({ measurementId }: AnalyticsProps) => {
  // Only include analytics in production
  const isDevelopment = process.env.NODE_ENV === 'development';

  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Don't track in development
    if (isDevelopment) {
      console.log('Analytics tracking disabled in development environment');
      return;
    }

    // Track page views when the path changes
    if (pathname && window.gtag) {
      window.gtag('config', measurementId, {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ''),
      });
    }
  }, [pathname, searchParams, measurementId, isDevelopment]);

  if (isDevelopment) {
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

// Export a function to track custom events
export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  // Skip if gtag doesn't exist (development or not yet loaded)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export default Analytics;
