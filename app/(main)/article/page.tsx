import { IDefaultPageProps } from '#types/types';
import { Metadata } from 'next';
import Form from './form';
import getTargetPages from '@utils/notion/getTargetPages';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: '김우현 프론트엔드 엔지니어 블로그',
  description:
    '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
  openGraph: {
    title: '김우현 프론트엔드 엔지니어 블로그',
    description:
      '2년차 프론트엔드 엔지니어로 활동하고 있는 김우현입니다. 요즘 일도 개발, 취미도 개발로, 공부하고 문제 해결하는 재미로 살고 있습니다.',
    type: 'profile',
    url: 'https://woo1031.vercel.app/about',
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

interface ISearchParams {
  page: number;
  type: string;
}

export default async function Page(props: IDefaultPageProps<ISearchParams>) {
  const { array, has_more } = await getTargetPages(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
    props.searchParams.type,
  );
  if (!array.length) return;
  return (
    <Form array={array} hasMore={has_more} searchParams={props.searchParams} />
  );
}
