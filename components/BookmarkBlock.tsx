'use client';

import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';

const BookmarkBlock = (block: IConvertBlock) => {
  return (
    <a
      href={block.url}
      className="flex h-24 w-full justify-between rounded-md border-1 border-gray-300 dark:border-gray-700"
      target="_blank"
    >
      <div className="max-w-full flex-bookmark overflow-hidden py-3 px-4">
        <h3 className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap text-base sm:text-lg">
          {block.title}
        </h3>
        <p className="h-8 overflow-hidden font-sansM text-xs text-gray-500">
          {block.description}
        </p>
        <div className="flex items-center gap-2">
          {block.favicon ? (
            <img src={block.favicon} alt="favicon" width={16} height={16} />
          ) : null}
          <p className="truncate text-xs">{block.url}</p>
        </div>
      </div>
      {block.image ? (
        <div className="block sm:block ">
          <img
            src={block.image ?? ''}
            alt="test"
            style={{
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
              objectFit: 'contain',
              height: '100%',
            }}
          />
        </div>
      ) : null}
    </a>
  );
};

export default BookmarkBlock;
