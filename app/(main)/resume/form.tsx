'use client';

import useSearchForm from '#hooks/useScrollForm';
import dayjs from 'dayjs';
import React from 'react';

const mock1 = {
  imageId1: 'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
  content:
    'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
};

const mock2 = {
  iamgeId2: 'https://toss.tech/wp-content/uploads/2023/03/declarative.png',
  content: '선언적인 코드, 토스 프론트엔드 챕터는 어떻게 생각을 하고 있을까요?',
};

export default function Form() {
  const { onSubmit } = useSearchForm();

  return (
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-14 mb-8">
            <span className="font-sansM text-3xl text-gray-900">채용</span>
          </div>
        </div>
      </div>
    </>
  );
}
