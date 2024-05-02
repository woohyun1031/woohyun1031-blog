import Link from 'next/link';
import React from 'react';

export function Description({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="break-keep font-sansT text-xs text-description-firm duration-300 ease-in-out 
    dark:text-description-dark_firm sm:text-sm"
    >
      {children}
    </span>
  );
}

export function BordDescription({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="break-keep font-sansM text-xs text-description-hard duration-300 ease-in-out 
    dark:text-description-dark_hard sm:text-sm"
    >
      {children}
    </span>
  );
}

export function SoftDescription({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="break-keep font-sansT text-xs text-description-soft duration-300 ease-in-out 
    dark:text-description-dark_soft"
    >
      {children}
    </span>
  );
}

export function LinkDescription({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) {
  return (
    <span
      className={`cursor-pointer break-keep font-sansT text-xs text-red-400 duration-300 ease-in-out hover:text-gray-800 dark:text-red-400 dark:hover:text-gray-300 sm:text-sm ${className}`}
    >
      <Link href={href} target="_blank">
        {children}
      </Link>
    </span>
  );
}
