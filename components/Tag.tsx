'use clientm';

import React from 'react';

export interface ITagProps {
  title?: string;
  onClick?: () => void;
}
const Tag = (props: ITagProps) => {
  const bgColor = 'bg-gray-800';
  // React.MouseEvent<HTMLSpanElement, MouseEvent>
  return (
    <span
      // onClick={(event) => {
      //   event.stopPropagation();
      //   event.preventDefault();

      //   if (props.onClick) props.onClick();
      // }}
      className={`mr-4 inline-block rounded-xl bg-blue-100 px-3 py-1 
                font-sansM  
                text-xs                
                text-blue-600
                duration-300
                ease-in-out 
                hover:bg-blue-500
                hover:text-blue-100
                active:bg-blue-700
                dark:bg-gray-800
                dark:text-blue-500
                dark:hover:bg-blue-500
                dark:hover:text-blue-100
                dark:active:bg-blue-700
                                                
      `}
      {...(!!props.onClick && {
        onClick(event) {
          event.stopPropagation();
          event.preventDefault();

          if (props.onClick) props.onClick();
        },
      })}
    >
      {props.title ?? ''}
    </span>
  );
};

export default Tag;
