import React from 'react';
import { IConvertBlock } from '@utils/notion/convertBlock';
import { Tweet } from 'react-tweet';
import { ListTag } from '@components/common';
import CodeBlock from './CodeBlock';
import TextBlock from './TextBlock';
import BookmarkBlock from './BookmarkBlock';

export default function Block({ block }: { block: IConvertBlock }) {
  function rc(blockList: IConvertBlock[]) {
    return (
      <div className="pb-1 pl-4 pt-2">
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
        <div className="mb-6 mt-2 text-xs sm:text-sm">
          <TextBlock text={block.text ?? []} />
          {block.hasChildren && rc(block.children ?? [])}
        </div>
      );
    },
    numbered_list_item: () => {
      return (
        <ul className="mb-2 mt-6 list-decimal">
          {block.children?.map((item) => (
            <>
              <ListTag className="text-xs marker:text-xs marker:text-gray-700 dark:marker:text-gray-400 sm:text-sm sm:marker:text-sm">
                <TextBlock text={item.text ?? []} className="!font-sansM" />
              </ListTag>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    bulleted_list_item: () => {
      return (
        <ul className="mb-2 mt-6 list-disc">
          {block.children?.map((item) => (
            <>
              <ListTag className="text-xs marker:text-gray-700 sm:text-sm">
                <TextBlock text={item.text ?? []} />
              </ListTag>
              {item.hasChildren && rc(item.children ?? [])}
            </>
          ))}
        </ul>
      );
    },
    heading_1: () => (
      <h1 className="mb-6 mt-6 border-spacing-y-10 border-b text-4xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h1>
    ),
    heading_2: () => (
      <h2 className="mb-6 mt-12 border-spacing-y-10 border-b text-2xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h2>
    ),
    heading_3: () => (
      <h3 className="mb-6 mt-12 border-spacing-y-10 border-b text-xl dark:border-gray-600">
        <TextBlock text={block.text ?? []} />
      </h3>
    ),
    quote: () => (
      <blockquote
        className="mb-6 mt-2 border-l-4 border-l-gray-800 bg-gray-100 py-2 pl-5 pr-2 text-xs font-bold text-gray-800
        duration-300 ease-in-out  
        dark:border-l-gray-100
          dark:bg-gray-900
          dark:text-gray-200
          sm:text-sm
        "
      >
        <TextBlock text={block.text ?? []} />
      </blockquote>
    ),
    image: () => (
      <div className="mb-6 mt-2">
        <img
          src={block.url ?? ''}
          alt="test"
          className="w-full border-1 border-gray-400 object-cover dark:border-gray-700"
        />
        <p className="text-xs text-gray-600">
          {block.caption && <TextBlock text={block.caption ?? []} />}
        </p>
      </div>
    ),
    code: () => (
      <div className="mb-6 mt-2">
        <CodeBlock {...block} />
      </div>
    ),
    divider: () => <hr className="border-t pb-1 pt-1 dark:border-gray-600" />,
    bookmark: () => (
      <div className="pb-1 pt-2">
        <BookmarkBlock {...block} />
      </div>
    ),
    link_preview: () => (
      <div className="pb-1 pt-2">
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
          <div className="flex justify-center pb-1 pt-2">
            <Tweet id={tweetId} />
          </div>
        );
      }
    },
  };
  // @ts-ignore
  return blocksObj[block.type]?.() ?? null;
}
