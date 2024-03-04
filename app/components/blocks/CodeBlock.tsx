'use client';

import React from 'react';
import { IConvertBlock } from '@utils/notion/convertBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (block: IConvertBlock) => {
  return (
    <SyntaxHighlighter
      language={block.language}
      style={vscDarkPlus}
      className="border-1 dark:border-gray-700"
    >
      {block.code || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
