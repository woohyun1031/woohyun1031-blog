import React from 'react';
import getAnnotations from '#utils/notions/getAnnotations';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

const TextBlock = ({ text }: { text: RichTextItemResponse[] }) => {
  return (
    <>
      {text?.map(({ plain_text, annotations, href }, index) => {
        if (href) return <a href={href}>{plain_text}</a>;
        if (annotations) {
          const className = getAnnotations(annotations);
          return <span className={className}>{plain_text}</span>;
        }
        return <p>{plain_text}</p>;
      })}
    </>
  );
};

export default TextBlock;
