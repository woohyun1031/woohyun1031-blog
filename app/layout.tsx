import { fontBold, fontMedium, fontThin } from '#styles/fonts';
import '#styles/globals.css';
import React from 'react';
import { Providers } from './providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: 'WooHyun devlog',
    template: 'WooHyun devlog | %s',
  },
  description: 'WooHyun 블로그',
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
      <body className="duration-300 ease-in-out dark:bg-gray-800 dark:text-gray-300">
        <main>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
