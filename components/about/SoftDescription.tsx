import React from 'react';

const SoftDescription = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="font-sansT text-sm text-gray-400 dark:text-gray-400">
      {children}
    </span>
  );
};

export default SoftDescription;
