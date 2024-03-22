import { IPage } from '@apis/notion/notion';

export const getNotionPage = async (
  id?: string,
): Promise<IPage | undefined> => {
  if (!id) return;
  const response = await fetch(
    `${process.env.NEXT_API_URL}/api/notion/pages?id=${id}`,
  );
  const data = await response.json();
  return data;
};
