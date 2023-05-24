import React from 'react';

const Title = ({ value }: { value: string }) => {
  return (
    <span className="font-sansB text-xl text-gray-900 dark:text-white">
      {value}
    </span>
  );
};

export default Title;
