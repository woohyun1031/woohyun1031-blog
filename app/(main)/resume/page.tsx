import { getGithubCommitList } from '#pages/api/github';
import Form from './form';

export default async function Page(props: any) {
  const commitList = await getGithubCommitList('woohyun1031');
  return <Form commitList={commitList ?? []} />;
}
