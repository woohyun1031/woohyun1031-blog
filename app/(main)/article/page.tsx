import { IDefaultPageProps } from '#types/types';
import Form from './form';
import getTargetPages from '@utils/notion/getTargetPages';

export const dynamic = 'force-dynamic';

interface ISearchParams {
  page: number;
  type: string;
}

export default async function Page({
  searchParams,
}: IDefaultPageProps<ISearchParams>) {
  const { array, has_more } = await getTargetPages(
    searchParams.page ? Number(searchParams.page) : 10,
    searchParams.type,
  );
  if (!array.length) return;
  return <Form array={array} hasMore={has_more} searchParams={searchParams} />;
}
