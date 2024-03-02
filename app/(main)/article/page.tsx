import { getArticlesDataFromDB, getPathFromTitle, IPage } from 'app/api/notion';
import { IDefaultPageProps } from 'app/types/types';
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
    const resultArray: (Partial<IPage> & { path: string })[] = [];
    const requestCount = Math.floor(pages / 100);
    const lastRequestCount = pages % 100;

    async function getArticlesWithOrigin({
      start_cursor,
      page_size,
      type,
    }: {
      start_cursor?: string;
      page_size: number;
      type?: string;
    }) {
      const originData = await getArticlesDataFromDB({
        page_size,
        ...(start_cursor ? { start_cursor } : {}),
        ...(type
          ? {
              filter: {
                and: [
                  {
                    property: 'isBlog',
                    checkbox: {
                      equals: true,
                    },
                  },
                  {
                    property: 'Type',
                    multi_select: {
                      contains: type,
                    },
                  },
                ],
              },
            }
          : {
              property: 'isBlog',
              checkbox: {
                equals: true,
              },
            }),
      });

      const articles = originData?.results.map((item) => {
        const path = getPathFromTitle(
          item.properties?.Name?.title?.[0]?.plain_text ?? '',
        );
        return { ...item, path };
      });

      return { originData, articles };
    }

    async function recursiveFetch(start_cursor: string | null, limit: number) {
      if (limit) {
        const count = limit - 1;
        const { originData, articles } = await getArticlesWithOrigin({
          page_size: 100,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        resultArray.push(...(articles ?? []));
        await recursiveFetch(originData?.next_cursor, count);
        return originData?.has_more ?? false;
      } else {
        const { originData, articles } = await getArticlesWithOrigin({
          page_size: lastRequestCount,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        resultArray.push(...(articles ?? []));
        return originData?.has_more ?? false;
      }
    }
    const hasMore = await recursiveFetch(null, requestCount);
    return { array: resultArray, hasMore };
  }

  const { array, hasMore } = await getPages(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
  );
  if (!array.length) return;
  return (
    <Form array={array} hasMore={hasMore} searchParams={props.searchParams} />
  );
}
