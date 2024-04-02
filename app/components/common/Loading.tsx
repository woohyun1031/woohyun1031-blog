import React, { Fragment } from 'react';

export function LoadingComponent() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500" />
      </div>
    </div>
  );
}

export function SkeletonComponent({ count = 0 }: { count: number }) {
  return (
    <Fragment>
      {[...new Array(count)].map((_, idx) => (
        <div
          className={`flex flex-col items-start ${idx === 0 ? '' : 'mt-24'}`}
        >
          <div className="mb-4 h-8 w-full rounded-full bg-gray-300 opacity-40 dark:bg-gray-600" />
          <div className="mb-4 h-5 w-3/4 rounded-full bg-gray-200 opacity-40 dark:bg-gray-700" />
          <div className="mb-2 h-3 w-1/3 rounded-full bg-gray-300 opacity-40 dark:bg-gray-700" />
          <div className="h-3 w-1/3 rounded-full bg-gray-300 opacity-40 dark:bg-gray-700" />
        </div>
      ))}
    </Fragment>
  );
}
