import { getNotionPageListData } from '#pages/api/notion';
import { IDefaultPageProps } from '#types/types';
import Form from './form';

interface ISearchParams {
  page: number;
}

export default async function Page(props: IDefaultPageProps<ISearchParams>) {
  const data = await getNotionPageListData(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
  );
  if (!data) return;
  return <Form data={data} />;
}
