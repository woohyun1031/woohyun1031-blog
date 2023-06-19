import React, { StyleHTMLAttributes } from 'react';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';
import { Annotations } from 'notion-to-md/build/types';

const TextBlock = ({
  text,
  className,
}: {
  text: RichTextItemResponse[];
  className?: string;
}) => {
  return (
    <>
      <span className={className}>
        {text?.map(({ plain_text, annotations, href }, index) => {
          if (href)
            return (
              <a
                href={href}
                className="'font-sansT leading-6 text-red-400 underline underline-offset-2"
                target="_blank"
              >
                {plain_text}
              </a>
            );
          if (annotations) {
            const className: {
              [key: string]: React.ComponentProps<'span'>['className'];
            } = {
              code: 'rounded bg-gray-100 px-1 text-red-500 text-xs sm:text-sm transition-colors dark:bg-gray-700 border-gray-400 border-1 dark:border-0',
              bold: 'font-bold',
              italic: 'italic',
              strikethrough: 'line-through',
              underline: 'underline underline-offset-2',
            };
            const annotationss = [
              'font-sansT',
              'leading-6',
              'text-gray-700',
              'dark:text-gray-400',
              ...Object.entries(annotations)
                .filter(([, value]) => !!value)
                .map(([key]) => className[key] ?? ''),
            ].join(' ');
            return <span className={annotationss}>{plain_text}</span>;
          }
          return (
            <p className="text-gray-700, font-sansT leading-8">{plain_text}</p>
          );
        })}
      </span>
    </>
  );
};

export default TextBlock;
