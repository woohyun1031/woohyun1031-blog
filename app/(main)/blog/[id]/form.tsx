'use client';

import dayjs from 'dayjs';
import Image from 'next/image';
import React from 'react';

const mock1 = {
  imageId1: 'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
  content:
    'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
};

export default function Form({ contents, page }: { contents: any; page: any }) {
  console.log(page);
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-innerContainer px-8">
          <div className="flex flex-col items-center">
            <div className="relative my-6 h-64 w-full font-sansB text-4xl text-gray-800">
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
            <div className="my-6 w-full font-sansB text-4xl leading-relaxed text-gray-800">
              {page.icon?.emoji && (
                <span className="mr-4">{page.icon.emoji}</span>
              )}
              <span>{page.properties.Name.title[0].plain_text}</span>
            </div>
            <div className="my-6 w-full  font-sansM text-xl text-gray-600">
              {dayjs(page.created_time).format('YYYY-MM-DD')}
            </div>

            <article
              className="
                prose 
                prose-gray 
                mt-8 
                w-full 
                max-w-container                
                md:prose-lg 
                lg:prose-xl 
                prose-img:w-full 
                "
              dangerouslySetInnerHTML={{ __html: contents.value }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
