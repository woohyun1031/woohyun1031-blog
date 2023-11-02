import Link from 'next/link';
import React from 'react';

export const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansT text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
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
    <span className="break-keep font-sansM text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
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
    <span className="break-keep font-sansT text-xs text-gray-400 dark:text-gray-400">
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
    <span className="cursor-pointer break-keep font-sansT text-xs text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-sm">
      <Link href={href} target="_blank">
        {children}
      </Link>
    </span>
  );
};
