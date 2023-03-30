import { notionApi } from '#apis/index';
import axios from 'axios';

export const getNotionData = async (pages: number) => {
  if (!pages) return;
  try {
    return await notionApi
      .post(`/databases/${process.env.NOTION_DATABASE}/query`, {
        page_size: pages ?? 0,
      })
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};
