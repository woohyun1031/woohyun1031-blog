import React from 'react';

export default function Title({
  children,
  value,
}: {
  children?: React.ReactNode;
  value?: string;
}) {
  return (
    <span className="break-keep font-sansB text-lg text-gray-900 duration-300 ease-in-out dark:text-white sm:text-xl">
      {children ?? value}
    </span>
  );
}
