'use client';

import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';

const BookmarkBlock = (block: IConvertBlock) => {
  return (
    <a
      href={block.url}
      className="mt-4 mb-4 flex h-24 w-full justify-between rounded-md border-1 border-gray-300 dark:border-gray-700"
    >
      <div className="max-w-full flex-1 py-3 px-3 md:max-w-70">
        <h3 className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap text-lg">
          {block.title}
        </h3>
        <p className="h-8 overflow-hidden font-sansM text-xs text-gray-500">
          {block.description}
        </p>
      </div>
      <div className="hidden md:block">
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
    </a>
  );
};

export default BookmarkBlock;
