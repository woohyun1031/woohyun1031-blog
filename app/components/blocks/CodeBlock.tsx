'use client';

import React from 'react';
import { IConvertBlock } from 'app/utils/notions/convertBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CodeBlock = (block: IConvertBlock) => {
  return (
    <SyntaxHighlighter language={block.language} style={vscDarkPlus}>
      {block.code || ''}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
