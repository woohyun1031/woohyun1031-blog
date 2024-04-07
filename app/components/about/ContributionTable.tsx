'use client';

import React from 'react';
import { DarkModeDispatch } from '@contexts/darkModeContext';
import ContributionWrapper from 'react-contribution-viewer';

export default function ContributionTable() {
  const { darkModeState } = React.useContext(DarkModeDispatch);
  const isDark = React.useMemo(
    () => darkModeState.isDark,
    [darkModeState.isDark],
  );
  return (
    <ContributionWrapper
      username="woohyun1031"
      isDark={isDark}
      isHeader
      renderHeader={(value: number) => (
        <div>
          <span className="font-sansM text-base text-gray-700 duration-300 ease-in-out dark:text-gray-300 sm:text-lg">
            {value}
          </span>
          <span className="font-sansT text-sm text-gray-400 dark:text-gray-400 sm:text-base">
            {' '}
            contributions in the last year
          </span>
        </div>
      )}
    />
  );
}
