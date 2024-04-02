'use client';

import React from 'react';
import { IConvertBlock } from '@utils/notion/convertBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DarkModeThemeContext } from 'app/(main)/providers';

export default function CodeBlock({ language, code }: IConvertBlock) {
  const { isDark } = React.useContext(DarkModeThemeContext);
  return (
    <SyntaxHighlighter language={language} style={isDark ? vscDarkPlus : vs}>
      {code || ''}
    </SyntaxHighlighter>
  );
}
