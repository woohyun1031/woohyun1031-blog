import { notoSansKrBold, notoSansKrMedium } from '#styles/fonts';
import '#styles/globals.css';
import React from 'react';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps): React.ReactElement {
  return (
    <html
      lang="ko"
      className={`${notoSansKrBold.variable} ${notoSansKrMedium.variable}`}
    >
      <body>
        <main>
          {/* <Providers> */}
          {children}
          {/* </Providers> */}
        </main>
      </body>
    </html>
  );
}
