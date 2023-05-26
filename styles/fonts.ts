import React from 'react';
import { Noto_Sans_KR } from 'next/font/google';

// Noto_Sans_KR
export const notoSansKrBold = Noto_Sans_KR({
  weight: '700',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-bold',
  fallback: ['system-ui'],
});

export const notoSansKrMedium = Noto_Sans_KR({
  weight: '500',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-medium',
  fallback: ['system-ui'],
});

export const notoSansKrThin = Noto_Sans_KR({
  weight: '300',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--noto-sans_KR-thin',
  fallback: ['system-ui'],
});
