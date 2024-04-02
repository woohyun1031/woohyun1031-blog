import React from 'react';

export default function SubTitle({ children }: { children: React.ReactNode }) {
  return (
    <span className="break-keep font-sansB text-sm text-gray-800 duration-300 ease-in-out dark:text-gray-200 sm:text-base">
      {children}
    </span>
  );
}
