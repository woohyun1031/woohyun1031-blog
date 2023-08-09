import { fontBold, fontMedium, fontThin } from '#styles/fonts';
import '#styles/globals.css';
import React from 'react';
import { Providers } from './providers';
import { Analytics } from '@vercel/analytics/react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: 'WooHyun Devlog',
    template: 'WooHyun Devlog | %s',
  },
  description:
    '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
  verification: {
    google: '90EmFVCMTeGYYS2aGd49tpMpiU39e2D4Ggqi-R0ULl0',
  },
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
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://woo1031.vercel.app" />
        <meta property="og:title" content="WooHyun Devlog" />
        <meta property="og:image" content="/image.png" />
        <meta property="og:image:alt" content="image" />
        <meta
          property="og:description"
          content="2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다."
        />
        <meta property="og:site_name" content="WooHyun Devlog" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:image" content="/image.png" />
        <meta name="twitter:image:type" content="image/png" />
      </head>
      <body className="duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300">
        <main>
          <Providers>{children}</Providers>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
