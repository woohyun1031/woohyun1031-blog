import Link from 'next/link';
import React from 'react';

export const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansM text-xs text-gray-600 duration-300 ease-in-out dark:text-gray-400 sm:text-sm">
      {children}
    </span>
  );
};

export const BordDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="break-keep font-sansB text-xs text-gray-700 duration-300 ease-in-out dark:text-gray-300 sm:text-sm">
      {children}
    </span>
  );
};

export const SoftDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="break-keep font-sansT text-xs text-gray-400 duration-300 ease-in-out dark:text-gray-500">
      {children}
    </span>
  );
};

export const LinkDescription = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <span className="cursor-pointer break-keep font-sansM text-xs text-red-400 duration-300 ease-in-out hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 sm:text-sm">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </span>
  );
};
