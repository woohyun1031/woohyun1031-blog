import React from 'react';
import getAllPages from '@utils/notion/getTargetPages';
import Form from './form';

interface ISearchParams {
  page?: string; // 쿼리스트링은 일반적으로 string (number X)
  type?: string;
}

// (참고) 'params'가 필요하면 같이 사용, 아니면 생략
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<ISearchParams>;
}) {
  const actualSearchParams = await searchParams;
  const { array } = await getAllPages(actualSearchParams?.type ?? '');

  if (!array.length) return null;

  return <Form array={array} searchParams={actualSearchParams} />;
}
