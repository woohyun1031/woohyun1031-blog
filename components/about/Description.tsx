import React from 'react';

export const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansT text-sm text-gray-600 dark:text-gray-400 sm:text-base">
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
    <span className="break-keep font-sansM text-sm text-gray-700 dark:text-gray-300 sm:text-base">
      {children}
    </span>
  );
};
