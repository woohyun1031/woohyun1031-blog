import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import BookmarkBlock from './BookmarkBlock';

export default function Block({ block }: { block: IConvertBlock }) {
  function rc(blockList: IConvertBlock[]) {
    return (
      <div className="pt-2 pb-1 pl-10">
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
        <div className="pt-2 pb-1">
          <TextBlock text={block.text ?? []} />
          {block.hasChildren && rc(block.children ?? [])}
        </div>
      );
    },
    numbered_list_item: () => {
      return (
        <ul className="list-inside list-decimal pt-2 pb-1">
          {block.children?.map((item) => (
            <>
              <li>
                <TextBlock text={item.text ?? []} />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    bulleted_list_item: () => {
      return (
        <ul className="list-inside list-disc pt-2 pb-1">
          {block.children?.map((item) => (
            <>
              <li>
                <TextBlock text={item.text ?? []} />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    heading_1: () => (
      <h1 className="border-b pt-4 pb-2 text-5xl">
        <TextBlock text={block.text ?? []} />
      </h1>
    ),
    heading_2: () => (
      <h2 className="border-b pt-3 pb-1 text-3xl">
        <TextBlock text={block.text ?? []} />
      </h2>
    ),
    heading_3: () => (
      <h3 className="border-b pt-2 pb-1 text-2xl">
        <TextBlock text={block.text ?? []} />
      </h3>
    ),
    quote: () => (
      <blockquote
        className="mt-4 mb-4 border-l-4 border-l-gray-800 bg-gray-100 py-2 pl-5 font-bold text-gray-800
          dark:border-l-gray-100
          dark:bg-gray-900
          dark:text-gray-200
        "
      >
        <TextBlock text={block.text ?? []} />
      </blockquote>
    ),
    image: () => (
      <div className="pt-3 pb-1">
        <img
          src={block.url ?? ''}
          alt="test"
          style={{ objectFit: 'cover', width: '100%' }}
        />
        {block.caption && <TextBlock text={block.caption ?? []} />}
      </div>
    ),
    code: () => <CodeBlock {...block} />,
    divider: () => <hr className="mt-4 mb-4 border-t" />,
    bookmark: () => <BookmarkBlock {...block} />,
  };
  // @ts-ignore
  return blocksObj[block.type]?.() ?? 'not matching block';
}
