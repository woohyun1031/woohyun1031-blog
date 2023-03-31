import { getNotionPageListData } from '#pages/api/notion';
import Form from './form';

export default async function Page(props: any) {
  return <Form />;
}
