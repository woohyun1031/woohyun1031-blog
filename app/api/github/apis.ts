export default async function getContributionList(
  username?: string,
): Promise<Response> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/github?username=${username}`,
  );

  return response;
}
