import { IPage } from '@apis/notion/notion';

export const getNotionPage = async (
  id?: string,
): Promise<IPage | undefined> => {
  try {
    if (!id) return;
    const response = await fetch(
      `${process.env.NOTION_PUBLIC_URL}/pages/${id}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
          Accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'Content-Type': 'application/json',
        },
      },
    );
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};
