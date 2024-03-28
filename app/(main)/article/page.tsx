import { IDefaultPageProps } from '#types/types';
import Form from './form';
import getAllPages from '@utils/notion/getTargetPages';

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
