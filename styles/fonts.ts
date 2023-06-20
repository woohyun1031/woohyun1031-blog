import React from 'react';
import { Noto_Sans_KR, Noto_Serif_KR } from 'next/font/google';

// Noto_Sans_KR
export const fontBold = Noto_Serif_KR({
  weight: '700',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-bold',
  fallback: ['system-ui'],
});

export const fontMedium = Noto_Serif_KR({
  weight: '400',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-medium',
  fallback: ['system-ui'],
});

export const fontThin = Noto_Serif_KR({
  weight: '200',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-thin',
  fallback: ['system-ui'],
});
