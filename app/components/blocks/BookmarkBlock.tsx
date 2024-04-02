'use client';

import React from 'react';
import { IConvertBlock } from '@utils/notion/convertBlock';

export default function BookmarkBlock({
  url,
  title,
  description,
  favicon,
  image,
}: IConvertBlock) {
  return (
    <a
      href={url}
      className="flex h-28 w-full justify-between rounded-md border-1 
      border-gray-300 duration-300 hover:border-red-300 dark:border-gray-700 dark:hover:border-red-300"
      target="_blank"
      rel="noreferrer"
    >
      <div className="max-w-full flex-bookmark overflow-hidden px-4 py-3">
        <h3 className="mt-0 overflow-hidden text-ellipsis whitespace-nowrap text-base sm:text-lg">
          {title}
        </h3>
        <p className="h-8 overflow-hidden font-sansM text-xs text-gray-500">
          {description}
        </p>
        <div className="flex items-center gap-2">
          {favicon ? (
            <img src={favicon} alt="favicon" width={16} height={16} />
          ) : null}
          <p className="truncate text-xs">{url}</p>
        </div>
      </div>
      {image ? (
        <div className="block sm:block ">
          <img
            src={image ?? ''}
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
}
