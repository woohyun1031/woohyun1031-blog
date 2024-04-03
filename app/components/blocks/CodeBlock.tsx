'use client';

import React from 'react';
import { IConvertBlock } from '@utils/notion/convertBlock';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  vscDarkPlus,
  vs,
} from 'react-syntax-highlighter/dist/esm/styles/prism';
import { DarkModeDispatch } from '@contexts/darkModeContext';

export default function CodeBlock({ language, code }: IConvertBlock) {
  const { darkModeState } = React.useContext(DarkModeDispatch);
  const isDark = React.useMemo(
    () => darkModeState.isDark,
    [darkModeState.isDark],
  );
  return (
    <SyntaxHighlighter language={language} style={isDark ? vscDarkPlus : vs}>
      {code || ''}
    </SyntaxHighlighter>
  );
}
