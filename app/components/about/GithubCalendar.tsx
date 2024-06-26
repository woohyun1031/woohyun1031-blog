'use client';

import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { DarkModeDispatch } from '@contexts/darkModeContext';

export default function GithubCalendar() {
  const { darkModeState } = React.useContext(DarkModeDispatch);
  const isDark = React.useMemo(
    () => darkModeState.isDark,
    [darkModeState.isDark],
  );

  const gitHubCalendar = React.useCallback(() => {
    return (
      <>
        <GitHubCalendar
          username="woohyun1031"
          colorScheme={isDark ? 'dark' : 'light'}
          style={{
            width: '100%',
            margin: 'auto',
            marginTop: 12,
            color: isDark ? 'white' : 'black',
            transitionDuration: '300ms',
            transitionTimingFunction: 'ease-in-out',
          }}
          theme={{
            light: ['#efefef', '47e000'],
            dark: ['#333', '67c63b'],
          }}
          renderBlock={(block, activity) =>
            React.cloneElement(block, {
              'data-tooltip-id': 'react-tooltip',
              'data-tooltip-html': `${activity.count} activities on ${activity.date}`,
            })
          }
        />
        <Tooltip id="react-tooltip" />
      </>
    );
  }, [isDark]);

  return (
    <div>
      {gitHubCalendar()}
      {/* <img
        src="https://ghchart.rshah.org/219138/woohyun1031"
        className="h-full w-full"
        alt='image'
      /> */}
    </div>
  );
}
