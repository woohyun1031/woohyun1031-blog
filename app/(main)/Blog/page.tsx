import { getNotionData } from '#pages/api/notion';
import Form from './form';

export default async function Page() {
  const data = await getNotionData();

  return <Form data={data} />;
}
