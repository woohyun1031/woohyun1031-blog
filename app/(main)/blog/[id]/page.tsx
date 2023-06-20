import { getNotionPage, getNotionPageDetail } from '#pages/api/notion';
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

export default async function Page(props: any) {
  const page = await getNotionPage(props.params.id);
  const data = await getNotionPageDetail(props.params.id);
  if (!page) return;
  const tagList = page?.properties?.Type?.multi_select ?? [];
  return (
    <>
      <div className="mt-36 flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-4">
          <div className="flex flex-col items-center">
            {/* {(page.cover?.file?.url || page.cover?.external?.url) && (
              <div className="relative mb-6 h-64 w-full font-sansB text-4xl text-gray-800 dark:text-white sm:mb-12">
                <Image
                  src={
                    page.cover?.file?.url ??
                    page.cover?.external?.url ??
                    'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png'
                  }
                  style={{ objectFit: 'cover', borderRadius: 10 }}
                  alt="blog image"
                  fill
                />
              </div>
            )} */}
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
