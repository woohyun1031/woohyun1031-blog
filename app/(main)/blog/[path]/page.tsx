import {
  getNotionPage,
  getNotionPageDetail,
  getNotionPageList,
} from '#pages/api/notion';
import { Metadata } from 'next';
import Tag from '#components/Tag';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Block from '#components/Block';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const product = await getNotionPage(params.id);
  return {
    title: product?.properties?.metaTitle?.rich_text?.[0]?.plain_text,
    description:
      product?.properties?.metaDescription?.rich_text?.[0]?.plain_text,
  };
}

export async function generateStaticParams() {
  const pageList = await getNotionPageList({
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
  const pages = await getNotionPageList({
    pages: 100,
  });
  const target = pages?.results.find(
    (item) => encodeURI(item.path) === props.params.path,
  );
  if (!target)
    return (
      <div className="mt-36 flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-4">
          <div className="flex flex-col items-center">
            <div>404 페이지를 찾을 수 없습니다</div>
          </div>
        </div>
      </div>
    );

  const page = await getNotionPage(target.id as string);
  const data = await getNotionPageDetail(target.id as string);
  if (!page) return;
  const tagList = page?.properties?.Type?.multi_select ?? [];
  return (
    <>
      <div className="mt-36 flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-4">
          <div className="flex flex-col items-center">
            <div className="mb-3 w-full break-keep px-4 text-center font-sansT text-3xl leading-relaxed text-gray-900 dark:text-white sm:mb-6 sm:text-4xl sm:leading-relaxed">
              <span>{page.properties.Name.title[0].plain_text}</span>
            </div>

            <div className="mb-24 flex w-full flex-row flex-wrap justify-center gap-y-2 gap-x-4 align-middle">
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
                        <Link href={`/blog?type=${type.name}`}>
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
