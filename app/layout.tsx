import { fontBold, fontMedium, fontThin } from '#styles/fonts';
import '#styles/globals.css';
import React from 'react';
import { Providers } from './providers';

interface RootLayoutProps {
  children: React.ReactNode;
}

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
