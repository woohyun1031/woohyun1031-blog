'use client';

import React from 'react';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  React.useEffect(() => {
    console.error('error:::', error);
  }, [error]);

  return (
    <div className="mt-36 flex w-full justify-center">
      <div className="min-h-0 w-full max-w-innerContainer px-4">
        <div className="flex flex-col items-center justify-center">
          <p className="mb-9 font-sansT text-3xl text-gray-800  dark:text-gray-400 sm:text-5xl">
            HTTP 404 - Not Found
          </p>
          <p className="font-sansT">Sorry, This page does not exist :(</p>
        </div>
      </div>
    </div>
  );
}
