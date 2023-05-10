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
                className="leading-8 text-red-500 underline underline-offset-2"
                target="_blank"
              >
                {plain_text}
              </a>
            );
          if (annotations) {
            const className: {
              [key: string]: React.ComponentProps<'span'>['className'];
            } = {
              code: 'rounded bg-gray-200 px-1 py-0.5 text-red-500 transition-colors dark:bg-gray-800',
              bold: 'font-bold',
              italic: 'italic',
              strikethrough: 'line-through',
              underline: 'underline underline-offset-2',
            };
            const annotationss = [
              'leading-8',
              ...Object.entries(annotations)
                .filter(([, value]) => !!value)
                .map(([key]) => className[key] ?? ''),
            ].join(' ');
            return <span className={annotationss}>{plain_text}</span>;
          }
          return <p className="dark: leading-8 text-gray-300">{plain_text}</p>;
        })}
      </span>
    </>
  );
};

export default TextBlock;
