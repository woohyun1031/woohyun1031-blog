import { Metadata } from 'next';
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: '김우현 프론트엔드 엔지니어 이력서',
  description:
    '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
  openGraph: {
    title: '김우현 프론트엔드 엔지니어 이력서',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    type: 'profile',
    url: 'https://woo1031.vercel.app/about',
    images: [
      {
        url: '/images/image.png',
        alt: 'article image',
      },
    ],
    siteName: 'WooHyun Devlog',
    locale: 'en_US',
  },
  twitter: {
    title: '김우현 프론트엔드 엔지니어 이력서',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    card: 'summary',
    creator: '@nextjs',
    images: ['/images/image.png'],
  },
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'FrondEnd',
    'Portfolio',
    'Resume',
  ],
};

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return <>{children}</>;
}
