'use client';

import React from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('error:::', error);
  }, [error]);

  return (
    <div className="flex w-full justify-center">
      <div className="min-h-max w-full max-w-container px-4">
        <div className="mt-36" />
        <div className="flex flex-col items-center justify-center">
          <p className="mb-9 font-sansT text-5xl text-gray-800 dark:text-gray-400">
            Something went wrong!
          </p>
          <p className="font-sansT">Sorry, This page does not exist :(</p>
          {/* <button onClick={() => reset()}>Try again</button> */}
        </div>
      </div>
    </div>
  );
}
