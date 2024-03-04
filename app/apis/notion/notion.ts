import { notionApi } from '@apis/index';
import convertBlock, {
  convertList2Block,
  IConvertBlock,
} from '@utils/notion/convertBlock';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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

export const getArticlesDataFromDB = async ({
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
    return await notionApi
      .post<INotionPageList<IPage>>(
        `/databases/${process.env.NOTION_DATABASE}/query`,
        {
          page_size: page_size ?? 0,
          start_cursor: start_cursor ?? undefined,
          filter: filter,
        },
      )
      .then((response): INotionPageList<IPage> => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionPageInfo = async (id?: string) => {
  if (!id) return;
  try {
    return await notionApi
      .get<IPage>(`/pages/${id}`)
      .then((response) => response.data);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionBlockChildren = async (id: string) => {
  if (!id) return;
  async function rc(
    _start_cursor: string | null,
    _id: string,
    _array: BlockObjectResponse[],
  ): Promise<BlockObjectResponse[]> {
    const blockChildren = await notionApi.get<{
      object: string;
      results: BlockObjectResponse[];
      next_cursor?: string;
      has_more: boolean;
    }>(`/blocks/${id}/children`, {
      params: { start_cursor: _start_cursor ?? undefined },
    });

    const resultArr = [..._array, ...blockChildren.data.results];
    if (blockChildren.data?.next_cursor && blockChildren.data.has_more) {
      return rc(blockChildren.data?.next_cursor, id, resultArr);
    }
    return resultArr;
  }
  try {
    return await rc(null, id, []);
  } catch (error) {
    console.error(error);
  }
};

export const getNotionPageDetail = async (id: string) => {
  if (!id) return;
  async function rc(id: string): Promise<IConvertBlock[]> {
    const blockChildren = await getNotionBlockChildren(id);
    if (!blockChildren) return [];
    const blockChildrenList = await Promise.all(
      blockChildren?.map(async (item) => {
        const block = await convertBlock(item);
        if (block?.hasChildren) {
          const result = await rc(block.id);
          block['children'] = result;
        }
        return block;
      }),
    );
    return blockChildrenList;
  }
  try {
    const response = await rc(id);
    const result = convertList2Block(response);
    return result;
  } catch (error) {
    console.error(error);
  }
};
