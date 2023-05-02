import { notionApi } from '#apis/index';
import { Client } from '@notionhq/client';
import axios from 'axios';

export interface IPageFile {
  expiry_time: string;
  url: string;
}
export interface IPage {
  archived: boolean;
  cover: { type: string; external?: any; file?: IPageFile } | null;
  created_by: { object: string; id: string };
  created_time: string;
  icon: { type: string; emoji: string } | null;
  id: string;
  last_edited_by: {
    object: string;
    id: string;
  };
  last_edited_time: string;
  object: string;
  parent: {
    type: string;
    database_id: string;
  };
  properties: Record<string, Record<string, any>>;
  url: string;
}
export interface INotionPageList {
  has_more: boolean;
  next_cursor: any;
  object: string;
  page: {};
  results: IPage[];
  type: 'page';
}

export const notionClient = new Client({ auth: `${process.env.NOTION_TOKEN}` });

export const getNotionPages = async (pages: number) => {
  if (!pages) return;
  try {
    return await notionApi
      .post<INotionPageList>(
        `/databases/${process.env.NOTION_DATABASE}/query`,
        {
          page_size: pages ?? 0,
        },
      )
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionPageListData = async ({
  pages,
  start_cursor,
  type,
}: {
  pages: number;
  start_cursor?: string;
  type?: string;
}) => {
  if (!pages) return;
  const options = type
    ? {
        and: [
          {
            property: 'isBlog',
            checkbox: {
              equals: true,
            },
          },
          {
            property: 'Type',
            multi_select: {
              contains: type,
            },
          },
        ],
      }
    : {
        property: 'isBlog',
        checkbox: {
          equals: true,
        },
      };
  try {
    return await notionApi
      .post<INotionPageList>(
        `/databases/${process.env.NOTION_DATABASE}/query`,
        {
          page_size: pages ?? 0,
          start_cursor: start_cursor ?? undefined,
          filter: options,
        },
      )
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionPageData = async (id: string) => {
  if (!id) return;
  try {
    return await notionApi
      .get<IPage>(`/pages/${id}`)
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
