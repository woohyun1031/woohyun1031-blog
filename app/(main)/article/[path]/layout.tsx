import { getArticlesFromDB, getPageDetail, IPage } from '@api/notion';
import { Metadata } from 'next';
import React from 'react';
import getPathFromTitle from '@utils/notion/formatTitleToPath';

interface LayoutProps {
  children: React.ReactNode;
}

async function getArticles(pages: number) {
  const originData = await getArticlesFromDB({
    page_size: pages,
    filter: {
      property: 'isBlog',
      checkbox: {
        equals: true,
      },
    },
  });

  const articles = originData?.results.map((item) => {
    const path = getPathFromTitle(
      item.properties?.Name?.title?.[0]?.plain_text ?? '',
    );
    return { ...item, path };
  });

  return articles;
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const articles = await getArticles(100);
  const target = articles?.find((item) => encodeURI(item.path) === params.path);
  if (target?.id) {
    const page = await getPageDetail<IPage>(target?.id).then((res) => res.data);
    return {
      title: page?.properties?.Name?.title?.[0]?.plain_text,
      description: page?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
      openGraph: {
        title: page?.properties?.Name?.title?.[0]?.plain_text,
        description: page?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
        type: 'article',
        url: `https://woo1031.vercel.app/article/${target?.path ?? ''}`,
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
        title: page?.properties?.Name?.title?.[0]?.plain_text,
        description: page?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
        card: 'summary',
        creator: '@nextjs',
        images: ['/images/image.png'],
      },
      robots: {
        index: true,
        googleBot: {
          index: true,
        },
      },
      keywords: [
        'Next.js',
        'React',
        'JavaScript',
        'FrondEnd',
        ...page?.properties?.Type?.multi_select?.map((item: any) => item.name),
      ],
    };
  }
  return {};
}

export async function generateStaticParams() {
  const articles = await getArticles(100);
  return articles
    ? articles
        .map((res) => res?.path)
        .map((path) => ({
          path,
        }))
    : [];
}

export default function Layout({ children }: LayoutProps): React.ReactElement {
  return <>{children}</>;
}
