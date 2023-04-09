'use clientm';

import React from 'react';

export interface ITagProps {
  title?: string;
  color?: string;
}
const Tag = (props: ITagProps) => {
  const bgColor = `bg-${props.color}-500` ?? 'bg-blue-600';
  return (
    <span
      className={`mr-4 inline-block rounded-md px-2 font-sansM text-base 
                text-white  
                dark:text-gray-200 
                ${bgColor}
      }`}
    >
      {props.title ?? ''}
    </span>
  );
};

export default Tag;
