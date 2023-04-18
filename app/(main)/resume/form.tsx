'use client';

import dayjs from 'dayjs';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { DarkModeThemeContext } from 'app/providers';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const mock1 = {
  imageId1: 'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png',
  content:
    'REST Docs 를 최소한의 코드로 작성하면서 변화에도 더 유연하게 대처할 수 있는 tosspayments-restdocs 라이브러리와, 라이브러리에 녹인 기술들을 소개합니다.',
};

export default function Form() {
  const { isDark } = React.useContext(DarkModeThemeContext);

  const gitHubCalendar = React.useCallback(() => {
    console.log(isDark);
    return (
      <>
        <GitHubCalendar
          username="woohyun1031"
          colorScheme={isDark ? 'dark' : 'light'}
          style={{
            width: '100%',
            marginTop: 12,
            color: isDark ? 'white' : 'black',
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
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-8">
          <div className="mt-14 flex w-full flex-col justify-center px-12">
            <div className="mt-4">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  회사 프로젝트 기록
                </span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test01
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test02
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test03
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  개인 프로젝트 기록
                </span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test01
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test02
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test03
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  공부 기록
                </span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test01
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test02
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test03
                </span>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  커밋 기록
                </span>
              </div>
              <div className="mt-4 flex flex-col">
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test01
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test02
                </span>
                <span className="font-sansM text-2xl text-gray-700 dark:text-white">
                  * Test03
                </span>
              </div>
            </div>
            <div className="mt-4">{gitHubCalendar()}</div>
          </div>
        </div>
      </div>
    </>
  );
}
