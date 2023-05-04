import type { BlockObjectResponse } from '@notionhq/client/build/src/api-endpoints';

export interface IBlockText {
  type: 'text';
  text: {
    content: string;
    link: string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string;
}
export interface IConvertBlock {
  id: string;
  type: string;
  text?: IBlockText[];
  hasChildren?: boolean;
  url?: string;
  caption?: string;
  code?: string;
  language?: string;
  children?: IConvertBlock[];
}

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
      caption: block.image.caption?.at(0)?.plain_text || '',
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
  // if (block.type === 'bookmark') {
  //   // const ogs = require('open-graph-scraper');
  //   // const { result } = await ogs({ url: block.bookmark.url });
  //   // return {
  //   //   id: block.id,
  //   //   type: 'bookmark',
  //   //   title: result.ogTitle || result.twitterTitle || '',
  //   //   description: result.ogDescription || result.twitterDescription || '',
  //   //   image: (typeof result.ogImage === 'object' && !Array.isArray(result.ogImage) && result.ogImage.url) || '',
  //   //   favicon: result.favicon.startsWith('https://')
  //   //     ? result.favicon
  //   //     : 'https://' + result.requestUrl.split('/').slice(2, 3).join('') + result.favicon,
  //   //   url: result.requestUrl,
  //   // };
  // }
}
