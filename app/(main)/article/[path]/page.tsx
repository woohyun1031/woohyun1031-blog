import {
  getNotionPageInfo,
  getNotionPageDetail,
  getNotionBlogPageList,
} from 'app/api/notion';
import { Metadata } from 'next';
import { Tag } from '#components/common';
import dayjs from 'dayjs';
import React from 'react';
import Link from 'next/link';
import { Block } from '#components/blocks';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const pages = await getNotionBlogPageList({
    pages: 100,
  });
  const target = pages?.results?.find(
    (item) => encodeURI(item.path) === params.path,
  );
  if (target?.id) {
    const product = await getNotionPageInfo(target?.id);
    return {
      title: product?.properties?.Name?.title?.[0]?.plain_text,
      description: product?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
      openGraph: {
        title: product?.properties?.Name?.title?.[0]?.plain_text,
        description: product?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
        type: 'article',
        url: `https://woo1031.vercel.app/article/${target?.path ?? ''}`,
        images: [
          {
            url: '/image.png',
            alt: 'article image',
          },
        ],
        siteName: 'WooHyun Devlog',
        locale: 'en_US',
      },
      twitter: {
        title: product?.properties?.Name?.title?.[0]?.plain_text,
        description: product?.properties?.Subtitle?.rich_text?.[0]?.plain_text,
        card: 'summary',
        creator: '@nextjs',
        images: ['/image.png'],
      },
      ...[
        product?.id !== 'df27adbd-36c8-4e7a-b355-1e4ef88f02d6'
          ? {
              robots: {
                index: true,
                googleBot: {
                  index: true,
                },
              },
            }
          : {},
      ],
      keywords: [
        'Next.js',
        'React',
        'JavaScript',
        'FrondEnd',
        ...product?.properties?.Type?.multi_select?.map(
          (item: any) => item.name,
        ),
      ],
    };
  }
  return {};
}

export async function generateStaticParams() {
  const pageList = await getNotionBlogPageList({
    pages: 100,
  });
  return pageList?.results
    ? pageList?.results
        .map((res) => res?.path)
        .map((path) => ({
          path,
        }))
    : [];
}

export default async function Page(props: any) {
  const pages = await getNotionBlogPageList({
    pages: 100,
  });
  const target = pages?.results.find(
    (item) => encodeURI(item.path) === props.params.path,
  );
  if (!target) {
    notFound();
  }
  const page = await getNotionPageInfo(target.id as string);
  const data = await getNotionPageDetail(target.id as string);
  if (!page) {
    notFound();
  }
  const tagList = page?.properties?.Type?.multi_select ?? [];
  return (
    <>
      <div className="mt-36 flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-4">
          <div className="flex flex-col items-center">
            <div className="mb-3 w-full break-keep px-4 text-center font-sansT text-3xl leading-relaxed text-gray-900 dark:text-white sm:mb-6 sm:text-4xl sm:leading-relaxed">
              <span>{page.properties.Name.title[0].plain_text}</span>
            </div>

            <div className="mb-24 flex w-full flex-row flex-wrap justify-center gap-x-4 gap-y-2 align-middle">
              <div className="text-center">
                <span className="align-middle font-sansT text-xs text-gray-500 dark:text-gray-400">
                  {dayjs(page.created_time).format('MMMM DD, YYYY')}
                </span>
              </div>
              {tagList.length ? (
                <div>
                  <span className="font-sansT text-xs text-gray-500 dark:text-gray-400">
                    |
                  </span>
                </div>
              ) : null}
              {tagList?.map(
                (
                  type: { id: string; name: string; color: string },
                  index: number,
                ) => {
                  return (
                    <>
                      <div>
                        <Link href={`/article?type=${type.name}`}>
                          <Tag title={type.name} />
                        </Link>
                      </div>
                      {tagList.length !== index + 1 && (
                        <div>
                          <span className="font-sansT text-xs text-gray-500 dark:text-gray-400">
                            |
                          </span>
                        </div>
                      )}
                    </>
                  );
                },
              )}
            </div>

            <div
              className="
                dark:prose-dark                 
                w-full 
                max-w-container                                
                "
            >
              {data &&
                data.map((item) => {
                  return <Block block={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
