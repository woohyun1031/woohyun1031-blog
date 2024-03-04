import '#styles/globals.css';
import { fontBold, fontMedium, fontThin } from '#styles/fonts';
import React from 'react';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';
import { GoogleAnalytics } from '#components/common';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: '김우현 프론트엔드 엔지니어 블로그',
    template: '김우현 프론트엔드 엔지니어 블로그 | %s',
  },
  description:
    '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
  verification: {
    google: '90EmFVCMTeGYYS2aGd49tpMpiU39e2D4Ggqi-R0ULl0',
  },
  openGraph: {
    title: '김우현 프론트엔드 엔지니어 블로그',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    type: 'profile',
    url: 'https://woo1031.vercel.app',
    images: [
      {
        url: '/image.png',
        alt: 'article image',
      },
    ],
    siteName: '김우현 프론트엔드 엔지니어 블로그',
    locale: 'en_US',
  },
  twitter: {
    title: '김우현 프론트엔드 엔지니어 블로그',
    type: 'image/png',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    card: 'summary',
    creator: '@nextjs',
    images: ['/image.png'],
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'FrondEnd',
    'Portfolio',
    'Article',
  ],
};

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html
      lang="ko"
      className={`${fontBold.variable} ${fontMedium.variable} ${fontThin.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="duration-300 ease-in-out dark:bg-black dark:text-gray-300">
        <main>
          <Providers>{children}</Providers>
        </main>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
