import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';
import getAnnotations from '#utils/notions/getAnnotations';
import CodeBlock from './CodeBlock';
import Image from 'next/image';
import { RichTextItemResponse } from '@notionhq/client/build/src/api-endpoints';

export const TextBlock = ({ text }: { text: RichTextItemResponse[] }) => {
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

export default function Block({ block }: { block: IConvertBlock }) {
  switch (block.type) {
    case 'heading_1':
      return (
        <h1 className="border-b py-4 pb-2 text-5xl">
          <TextBlock text={block.text ?? []} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="border-b pt-3 pb-1 text-3xl">
          <TextBlock text={block.text ?? []} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="border-b pt-2 pb-1 text-2xl">
          <TextBlock text={block.text ?? []} />
        </h3>
      );
    case 'quote':
      return (
        <blockquote
          className="mt-4 mb-4 border-l-4 border-l-gray-800 pl-5 font-bold text-gray-800
          dark:border-l-gray-100
          dark:text-gray-100
        "
        >
          <TextBlock text={block.text ?? []} />
        </blockquote>
      );
    case 'image':
      return (
        <div className="pt-3 pb-1">
          <img
            src={block.url ?? ''}
            alt="test"
            style={{ objectFit: 'cover', width: '100%' }}
          />
          {block.caption && <TextBlock text={block.caption ?? []} />}
        </div>
      );
    case 'paragraph':
      return (
        <p className="pt-1 pb-0.5">{block.text && block.text.join(' ')}</p>
      );
    case 'code':
      return <CodeBlock {...block} />;
    default:
      return <p>another block</p>;
  }
}
