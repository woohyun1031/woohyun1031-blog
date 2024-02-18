import React, { StyleHTMLAttributes } from 'react';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Annotations } from 'notion-to-md/build/types';

const TextBlock = ({
  text,
  className = '',
}: {
  text: RichTextItemResponse[];
  className?: string;
}) => {
  return (
    <>
      <span>
        {text?.map(({ plain_text, annotations, href }, index) => {
          if (href)
            return (
              <a
                href={href}
                className="break-keep font-sansT leading-6 text-red-400 underline underline-offset-2"
                target="_blank"
              >
                {plain_text}
              </a>
            );
          if (annotations) {
            const annotationClass: {
              [key: string]: React.ComponentProps<'span'>['className'];
            } = {
              code: 'rounded bg-gray-100 p-1 text-red-500 text-xs sm:text-sm transition-colors dark:bg-gray-700 ',
              bold: 'font-bold',
              italic: 'italic',
              strikethrough: 'line-through',
              underline: 'underline underline-offset-2',
            };
            const matchingAnnotation = Object.entries(annotations)
              .filter(([, value]) => !!value)
              .map(([key]) => annotationClass[key] ?? '');

            const resultAnnotations = [
              'break-keep',
              'font-sansT',
              'leading-6',
              'text-gray-600',
              'dark:text-gray-400',
              ...matchingAnnotation,
              className,
            ].join(' ');
            return <span className={resultAnnotations}>{plain_text}</span>;
          }
          return (
            <p
              className={
                `text-gray-700, break-keep font-sansT leading-8` + className
              }
            >
              {plain_text}
            </p>
          );
        })}
      </span>
    </>
  );
};

export default TextBlock;
