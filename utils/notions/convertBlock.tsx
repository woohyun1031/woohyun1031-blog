import type {
  BlockObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { v4 as uuid } from 'uuid';

export interface IConvertBlock {
  id: string;
  type: string;
  text?: RichTextItemResponse[];
  hasChildren?: boolean;
  url?: string;
  caption?: RichTextItemResponse[];
  code?: string;
  language?: string;
  children?: IConvertBlock[];
}
export type TBlockListType = 'numbered_list_item' | 'bulleted_list_item';

export default async function convertBlock(
  block: BlockObjectResponse,
): Promise<IConvertBlock> {
  if (
    block.type === 'paragraph' ||
    block.type === 'heading_1' ||
    block.type === 'heading_2' ||
    block.type === 'heading_3' ||
    block.type === 'bulleted_list_item' ||
    block.type === 'numbered_list_item' ||
    block.type === 'quote'
  ) {
    return {
      id: block.id,
      type: block.type,
      // @ts-ignore
      text: block[block.type].rich_text,
      hasChildren: block.has_children,
    };
  }

  if (block.type === 'image') {
    return {
      id: block.id,
      type: 'image',
      caption: block.image.caption,
      ...(block.image.type === 'file' ? { url: block.image.file.url } : {}),
    };
  }

  if (block.type === 'code') {
    return {
      id: block.id,
      type: 'code',
      code: block.code.rich_text.reduce((acc, cur) => acc + cur.plain_text, ''),
      language: block.code.language,
    };
  }
  return {
    id: block.id,
    type: block.type,
  };
}

export function convertList2Block(blocks: IConvertBlock[]) {
  let listTypeArray: IConvertBlock[] = [];
  let listType: TBlockListType | null;

  const result = blocks.reduce((pre: IConvertBlock[], cur: IConvertBlock) => {
    if (['numbered_list_item', 'bulleted_list_item'].includes(cur.type)) {
      if (!!listType && listType !== cur.type) {
        const prevTypeList = [...listTypeArray];
        const prevType = listType;
        listType = cur.type as TBlockListType;
        listTypeArray = [cur];
        return [
          ...pre,
          {
            id: uuid(),
            type: prevType as TBlockListType,
            hasChildren: false,
            children: prevTypeList,
          },
        ];
      }
      listType = cur.type as TBlockListType;
      listTypeArray.push({
        ...cur,
        ...(cur.hasChildren && cur.children
          ? {
              children: convertList2Block(cur.children),
            }
          : {}),
      });
      return [...pre];
    } else {
      const prevTypeList = [...listTypeArray];
      const prevType = listType;
      listTypeArray = [];
      return [
        ...pre,
        ...(prevTypeList.length
          ? [
              {
                id: uuid(),
                type: prevType as TBlockListType,
                hasChildren: false,
                children: prevTypeList,
              },
              cur,
            ]
          : [cur]),
      ];
    }
  }, []);

  if (listTypeArray.length) return [...listTypeArray];
  return result;
}
