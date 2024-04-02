import React from 'react';
import { IDefaultPageProps } from '#types/types';
import getAllPages from '@utils/notion/getTargetPages';
import Form from './form';

export const dynamic = 'force-dynamic';

interface ISearchParams {
  page: number;
  type: string;
}

export default async function Page({
  searchParams,
}: IDefaultPageProps<ISearchParams>) {
  const { array } = await getAllPages(searchParams.type);
  if (!array.length) return;
  return <Form array={array} searchParams={searchParams} />;
}
