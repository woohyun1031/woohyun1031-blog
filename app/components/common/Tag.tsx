'use clientm';

import React from 'react';

export interface ITagProps {
  title?: string;
  onClick?: () => void;
}
export default function Tag(props: ITagProps) {
  return (
    <span
      className={`
                font-sansT
                text-xs                
                text-gray-500
                duration-300
                ease-in-out                 
                hover:text-red-400
                active:text-red-600
                
                dark:text-red-400                
                dark:hover:text-gray-100                
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
}
