import React from 'react';
import { IConvertBlock } from 'app/utils/notions/convertBlock';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import BookmarkBlock from './BookmarkBlock';
import { Tweet } from 'react-tweet';

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
        <div className="mt-6 mb-2 text-sm sm:text-base">
          <TextBlock text={block.text ?? []} />
          {block.hasChildren && rc(block.children ?? [])}
        </div>
      );
    },
    numbered_list_item: () => {
      return (
        <ul className="mt-6 mb-2 list-decimal">
          {block.children?.map((item) => (
            <>
              <li className="mb-2 ml-5 pl-2 text-sm sm:text-base">
                <TextBlock text={item.text ?? []} className="pl-6" />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    bulleted_list_item: () => {
      return (
        <ul className="mt-6 mb-2 list-disc">
          {block.children?.map((item) => (
            <>
              <li className="mb-2 ml-5 pl-2 text-sm sm:text-base">
                <TextBlock text={item.text ?? []} />
              </li>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    heading_1: () => (
      <h1 className="mt-6 mb-2 border-b text-5xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h1>
    ),
    heading_2: () => (
      <h2 className="mt-6 mb-2 border-b text-3xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h2>
    ),
    heading_3: () => (
      <h3 className="mt-6 mb-2 border-b text-2xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h3>
    ),
    quote: () => (
      <blockquote
        className="mt-6 mb-2 border-l-4 border-l-gray-800 bg-gray-100 py-2 pl-5 text-sm font-bold text-gray-800
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
      <div className="mt-6 mb-2">
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
      <div className="mt-6 mb-2">
        <CodeBlock {...block} />
      </div>
    ),
    divider: () => <hr className="border-t pt-1 pb-1 dark:border-gray-600" />,
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
    embed: () => {
      const extractTweetIDFromURL = (url: string) => {
        const parts = url.split('/');
        const tweetID = parts[parts.length - 1];
        return tweetID;
      };

      if (block?.url && block?.url?.includes('twitter.com')) {
        const tweetId = extractTweetIDFromURL(block.url);
        return (
          <div className="flex justify-center pt-2 pb-1">
            <Tweet id={tweetId} />
          </div>
        );
      }
    },
  };
  // @ts-ignore
  return blocksObj[block.type]?.() ?? null;
}
