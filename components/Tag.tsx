'use clientm';

import React from 'react';

export interface ITagProps {
  title?: string;
  onClick?: () => void;
}
const Tag = (props: ITagProps) => {
  const bgColor = 'bg-gray-800';
  return (
    <span
      onClick={(event) => {
        event.stopPropagation();
        event.preventDefault();

        if (props.onClick) props.onClick();
      }}
      className={`} mr-4 inline-block rounded-xl bg-blue-100 px-3 py-1 
                font-sansM  
                text-xs                
                text-blue-600
                duration-300
                ease-in-out
                dark:bg-gray-800 dark:text-blue-500                
      `}
    >
      {props.title ?? ''}
    </span>
  );
};

export default Tag;
