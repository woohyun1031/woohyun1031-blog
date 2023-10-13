import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import BookmarkBlock from './BookmarkBlock';

export default function Block({ block }: { block: IConvertBlock }) {
  function rc(blockList: IConvertBlock[]) {
    return (
      <div className="pt-2 pb-1 pl-4">
        {blockList.map((blo) => (
          <>
            <Block block={blo} />
            {blo.hasChildren && rc(blo.children ?? [])}
          </>
        ))}
      </div>
    );
  }

  const blocksObj = {
    paragraph: () => {
      return (
        <div className="pt-4 pb-3 text-sm sm:text-base">
          <TextBlock text={block.text ?? []} />
          {block.hasChildren && rc(block.children ?? [])}
        </div>
      );
    },
    numbered_list_item: () => {
      return (
        <ul className="list-inside list-decimal pt-4 pb-3">
          {block.children?.map((item) => (
            <>
              <li className="pb-1 text-sm sm:text-base">
                <TextBlock text={item.text ?? []} className="pl-1" />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    bulleted_list_item: () => {
      return (
        <ul className="list-inside list-disc pt-4 pb-3">
          {block.children?.map((item) => (
            <>
              <li className="pb-1 text-sm sm:text-base">
                <TextBlock text={item.text ?? []} className="pl-1" />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    heading_1: () => (
      <h1 className="border-b pt-4 pb-3 text-5xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h1>
    ),
    heading_2: () => (
      <h2 className="border-b pt-4 pb-3 text-3xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h2>
    ),
    heading_3: () => (
      <h3 className="border-b pt-4 pb-3 text-2xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h3>
    ),
    quote: () => (
      <blockquote
        className="border-l-4 border-l-gray-800 bg-gray-100 py-2 pt-4 pb-3 pl-5 text-sm font-bold text-gray-800
        duration-300 ease-in-out  
        dark:border-l-gray-100
          dark:bg-gray-900
          dark:text-gray-200
          sm:text-base
        "
      >
        <TextBlock text={block.text ?? []} />
      </blockquote>
    ),
    image: () => (
      <div className="pt-4 pb-3">
        <img
          src={block.url ?? ''}
          alt="test"
          style={{ objectFit: 'cover', width: '100%' }}
        />
        <p className="text-xs text-gray-600">
          {block.caption && <TextBlock text={block.caption ?? []} />}
        </p>
      </div>
    ),
    code: () => (
      <div className="pt-4 pb-3">
        <CodeBlock {...block} />
      </div>
    ),
    divider: () => <hr className="border-t pt-4 pb-3 dark:border-gray-600" />,
    bookmark: () => (
      <div className="pt-2 pb-1">
        <BookmarkBlock {...block} />
      </div>
    ),
    link_preview: () => (
      <div className="pt-2 pb-1">
        <BookmarkBlock {...block} />
      </div>
    ),
  };
  // @ts-ignore
  return blocksObj[block.type]?.() ?? null;
}
