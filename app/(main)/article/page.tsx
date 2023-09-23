import { getNotionPageList, IPage } from '#pages/api/notion';
import { IDefaultPageProps } from '#types/types';
import { Metadata } from 'next';
import Form from './form';

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
  async function getPages(pages: number) {
    const array: (Partial<IPage> & { path: string })[] = [];
    const requestCount = Math.floor(pages / 100);
    const lastRequestCount = pages % 100;

    async function rc(start_cursor: string | null, limit: number) {
      if (limit) {
        const count = limit - 1;
        const data = await getNotionPageList({
          pages: 100,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        array.push(...(data?.results ? data?.results : []));
        await rc(data?.next_cursor, count);
        return data?.has_more ?? false;
      } else {
        const data = await getNotionPageList({
          pages: lastRequestCount,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        array.push(...(data?.results.length ? data?.results : []));
        return data?.has_more ?? false;
      }
    }
    const hasMore = await rc(null, requestCount);
    return { array, hasMore };
  }
  const { array, hasMore } = await getPages(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
  );
  if (!array.length) return;
  return (
    <Form results={array} hasMore={hasMore} searchParams={props.searchParams} />
  );
}
