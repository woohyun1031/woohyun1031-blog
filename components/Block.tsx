import React from 'react';
import { IConvertBlock } from '#utils/notions/convertBlock';
import getAnnotations from '#utils/notions/getAnnotations';

// export const CodeBlock = (block: IConvertBlock) => {
//   return (
//     <SyntaxHighlighte
//       language={block.language}
//       style={monokai}
//       customStyle={{
//         borderRadius: '0.2rem',
//       }}
//       className="my-4"
//     >
//       {block.code || ''}
//     </SyntaxHighlighter>
//   );
// };
export const TextBlock = (block: IConvertBlock) => {
  return (
    <>
      {block.text?.map(({ plain_text, annotations, href }, index) => {
        if (href) return <a href={href}>{plain_text}</a>;
        if (annotations) {
          const className = getAnnotations(annotations);
          <span className={className}>{plain_text}</span>;
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
          <TextBlock {...block} />
        </h1>
      );
    case 'heading_2':
      return (
        <h2 className="border-b pt-3 pb-1 text-3xl">
          <TextBlock {...block} />
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="border-b pt-2 pb-1 text-2xl">
          <TextBlock {...block} />
        </h3>
      );
    case 'paragraph':
      return (
        <p className="pt-1 pb-0.5">{block.text && block.text.join(' ')}</p>
      );
    default:
      return <p>another block</p>;
  }
}
