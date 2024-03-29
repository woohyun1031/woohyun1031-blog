import React from 'react';

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="break-keep font-sansB text-sm text-gray-800 duration-300 ease-in-out dark:text-gray-200 sm:text-base">
      {children}
    </span>
  );
};

export default SubTitle;
