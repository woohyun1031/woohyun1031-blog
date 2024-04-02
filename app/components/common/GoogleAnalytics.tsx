'use client';

import React from 'react';
import Script from 'next/script';

export default function GoogleAnalytics() {
  const traceId = 'G-VJN31ZVJJS';

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${traceId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${traceId}');
        `}
      </Script>
    </>
  );
}
