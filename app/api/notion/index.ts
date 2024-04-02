import { notionApi } from '@api/index';
import { AxiosResponse } from 'axios';

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
  public_url: string;
}
export interface INotionPageList<T> {
  has_more: boolean;
  next_cursor: any;
  object: string;
  page: {};
  results: T[];
  type: 'page';
}

export const getPageDetail = <T>(
  id: string,
  params?: Record<string, any>,
): Promise<AxiosResponse<T>> =>
  notionApi.get(`/pages/${id}`, {
    ...params,
  });

export const getDatabase = <T>(
  body: Record<string, any>,
): Promise<AxiosResponse<T>> =>
  notionApi.post(`/databases/${process.env.NOTION_DATABASE}/query`, {
    ...body,
  });

export const getBlockChildren = <T>(
  id: string,
  params: Record<string, any>,
): Promise<AxiosResponse<T>> =>
  notionApi.get(`/blocks/${id}/children`, {
    ...params,
  });

export const getArticlesFromDB = async ({
  page_size,
  start_cursor,
  filter,
}: {
  page_size: number;
  start_cursor?: string;
  filter?: any;
}) => {
  try {
    if (!page_size) return;
    return await getDatabase<INotionPageList<IPage>>({
      page_size: page_size ?? 0,
      start_cursor: start_cursor ?? undefined,
      filter,
    }).then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};
