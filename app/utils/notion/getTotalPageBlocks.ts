import { getBlockChildren } from '@apis/notion';
import { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';
import {
  convertToCustomBlock,
  convertListBlock,
  IConvertBlock,
} from './convertBlock';

interface IBlockChildrenResponse {
  object: string;
  results: BlockObjectResponse[];
  next_cursor?: string;
  has_more: boolean;
}

export async function getAllBlocksFromId(
  _start_cursor: string | null,
  _id: string,
  _array: BlockObjectResponse[],
): Promise<BlockObjectResponse[]> {
  if (!_id) return [];

  const blockChildren = await getBlockChildren<IBlockChildrenResponse>(_id, {
    params: { start_cursor: _start_cursor ?? undefined },
  }).then((res) => res.data);

  const newArray = [..._array, ...blockChildren.results];

  if (blockChildren?.next_cursor && blockChildren.has_more) {
    return getAllBlocksFromId(blockChildren?.next_cursor, _id, newArray);
  }
  return newArray;
}

export async function getAllChildrenFromId(
  _id: string,
): Promise<IConvertBlock[]> {
  const blocks = await getAllBlocksFromId(null, _id, []);
  if (!blocks || !blocks.length) return [];
  const totalBlocks = await Promise.all(
    blocks?.map(async (item) => {
      const customBlock = await convertToCustomBlock(item);
      if (customBlock?.hasChildren) {
        const result = await getAllChildrenFromId(customBlock.id);
        customBlock.children = result;
      }
      return customBlock;
    }),
  );
  return totalBlocks;
}

const getTotalPageBlocks = async (id: string) => {
  if (!id) return;
  try {
    const response = await getAllChildrenFromId(id);
    if (!response?.length) return;
    const result = convertListBlock(response);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default getTotalPageBlocks;
