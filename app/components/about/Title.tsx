import React from 'react';

const Title = ({ value }: { value: string }) => {
  return (
    <span className="break-keep font-sansB text-lg text-gray-900 dark:text-white sm:text-xl">
      {value}
    </span>
  );
};

export default Title;
