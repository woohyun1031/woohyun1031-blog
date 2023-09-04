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
