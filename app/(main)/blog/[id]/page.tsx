import { getNotionPage, getNotionPageDetail } from '#pages/api/notion';
import Tag from '#components/Tag';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Block from '#components/Block';
import Test from './client';

export default async function Page(props: any) {
  const page = await getNotionPage(props.params.id);
  const data = await getNotionPageDetail(props.params.id);
  if (!page) return;

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-8">
          <div className="flex flex-col items-center">
            {(page.cover?.file?.url || page.cover?.external?.url) && (
              <div className="relative my-6 h-64 w-full font-sansB text-4xl text-gray-800 dark:text-white">
                <Image
                  src={
                    page.cover?.file?.url ??
                    page.cover?.external?.url ??
                    'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png'
                  }
                  style={{ objectFit: 'cover' }}
                  alt="blog image"
                  fill
                />
              </div>
            )}
            <div className="my-6 w-full font-sansB text-4xl leading-relaxed text-gray-800 dark:text-white">
              <span>{page.properties.Name.title[0].plain_text}</span>
            </div>
            <div className="my-6 flex w-full flex-col justify-start sm:flex-row">
              <span className="mr-4 mb-4 inline-block font-sansM text-xl text-gray-600 dark:text-gray-400">
                {dayjs(page.created_time).format('YYYY-MM-DD')}
              </span>
              <div>
                {page.properties.Type.multi_select.map(
                  (type: { id: string; name: string; color: string }) => {
                    return (
                      <Link href={`/blog?type=${type.name}`}>
                        <Tag title={type.name} />
                      </Link>
                    );
                  },
                )}
              </div>
            </div>
            <Test test={data} />
            <div
              className="
                mt-8 
                w-full 
                max-w-container 
                dark:prose-dark                                
                "
            >
              {data &&
                data.map((item) => {
                  if (
                    item.type === 'paragraph' ||
                    item.type === 'bulleted_list_item' ||
                    item.type === 'numbered_list_item'
                  ) {
                    return (
                      <div>
                        paragragh or bulleted_list_item or numbered_list_item
                      </div>
                    );
                  }
                  return <Block block={item} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
