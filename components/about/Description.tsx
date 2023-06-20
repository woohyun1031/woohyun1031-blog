import React from 'react';

const Description = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansT text-sm text-gray-700 dark:text-gray-400 sm:text-base">
      {children}
    </span>
  );
};

export default Description;
