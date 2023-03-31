import { getNotionPageListData } from '#pages/api/notion';
import Form from './form';

export default async function Page(props: any) {
  console.log(props);
  return <Form />;
}
