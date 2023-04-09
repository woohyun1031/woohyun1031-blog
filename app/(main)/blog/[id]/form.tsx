'use client';

import Tag from '#components/Tag';
import { IPage } from '#pages/api/notion';
import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';
import { VFile } from 'VFile';

const mock1 = {
  imageId1: 'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
  content:
    'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
};

export default function Form({
  contents,
  page,
}: {
  contents: VFile;
  page: IPage;
}) {
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
                    mock1.imageId1
                  }
                  style={{ objectFit: 'contain' }}
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
                    return <Tag title={type.name} />;
                  },
                )}
              </div>
            </div>
            <article
              className="
                prose  
                prose-gray 
                mt-8 
                w-full 
                max-w-container 
                dark:prose-dark                
                md:prose-lg 
                lg:prose-xl 
                prose-img:w-full 
                "
              dangerouslySetInnerHTML={{ __html: contents.value as string }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
