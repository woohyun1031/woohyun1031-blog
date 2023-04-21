import { getGithubCommitList } from '#pages/api/github';
import Form from './form';

export default async function Page(props: any) {
  const result = await getGithubCommitList('woohyun1031');
  return <Form data={result} />;
}
