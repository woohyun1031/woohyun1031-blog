export default async function getContributionList(
  username?: string,
): Promise<Response> {
  const response = await fetch(`/api/github?username=${username}`);

  return response;
}
