import { getNotionPageListData } from '#pages/api/notion';
import Form from './form';

export default async function Page(props: any) {
  const data = await getNotionPageListData(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
  );

  return <Form data={data} />;
}
