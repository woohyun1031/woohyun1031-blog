import React from 'react';
import { Noto_Sans_KR, Noto_Serif_KR, Gothic_A1 } from 'next/font/google';

// Gothic_A1
export const fontBold = Gothic_A1({
  weight: '700',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-bold',
  fallback: ['system-ui'],
});

export const fontMedium = Gothic_A1({
  weight: '400',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-medium',
  fallback: ['system-ui'],
});

export const fontThin = Gothic_A1({
  weight: '200',
  display: 'fallback',
  subsets: ['latin'],
  style: 'normal',
  variable: '--font-thin',
  fallback: ['system-ui'],
});
