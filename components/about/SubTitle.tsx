import React from 'react';

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansM text-sm text-gray-800 dark:text-gray-200 sm:text-lg">
      {children}
    </span>
  );
};

export default SubTitle;
