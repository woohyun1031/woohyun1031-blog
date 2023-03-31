import { notionApi } from '#apis/index';
import { Client } from '@notionhq/client';
import axios from 'axios';

export const notionClient = new Client({ auth: `${process.env.NOTION_TOKEN}` });

export const getNotionPageListData = async (pages: number) => {
  if (!pages) return;
  try {
    return await notionApi
      .post(`/databases/${process.env.NOTION_DATABASE}/query`, {
        page_size: pages ?? 0,
        filter: {
          property: 'isBlog',
          checkbox: {
            equals: true,
          },
        },
      })
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionPageData = async (id: string) => {
  if (!id) return;
  try {
    return await notionApi
      .get(`/pages/${id}`)
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionBlockChildrenData = async (id: number) => {
  if (!id) return;
  try {
    return await notionApi
      .get(`/blocks/${id}/children`)
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};
