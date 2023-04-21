'use client';

import dayjs from 'dayjs';
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { DarkModeThemeContext } from 'app/providers';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Image from 'next/image';

export default function Form(props: { data: any }) {
  console.log(props.data);
  const { isDark } = React.useContext(DarkModeThemeContext);

  const gitHubCalendar = React.useCallback(() => {
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
                {/* <Image
                  src={'/images/profile.jpeg'}
                  alt="image"
                  width={150}
                  height={150}
                  className="mt-5 border-r-4 object-fill"
                  style={{ border: '1px solid', borderRadius: 10 }}
                /> */}
                <div className="mt-12">
                  <span className="block font-sansM text-3xl leading-snug text-blue-500 lg:inline">
                    웹 프론트엔드 개발자
                  </span>
                  <span className="block font-sansM text-6xl leading-snug text-gray-700 dark:text-gray-50 lg:inline">
                    {' '}
                    김우현 입니다.
                  </span>
                </div>
              </div>
              <div className="mt-12 flex flex-col">
                <span className="font-sansM text-xl text-gray-700 dark:text-gray-200">
                  I love programming. Since I first came into contact with it
                  around{' '}
                  <span className="text-blue-500">fifteen years ago</span>, I
                  have been fascinated by the possibilities it opens up. So, I
                  decided to study computer science and graduated with a{' '}
                  <span className="text-blue-500">Master of Science.</span>
                </span>
              </div>
            </div>

            <div className="mt-12">
              <div>
                <span className="font-sansM text-4xl text-gray-900 dark:text-white">
                  Work Experience
                </span>
              </div>

              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <p className="dark:text-gray-1z00 font-sansM text-3xl text-gray-800 dark:text-gray-200">
                    Actbase.llc
                  </p>
                  <p className="mt-4 font-sansM text-xl text-gray-700 dark:text-gray-200">
                    Frontend Developer
                  </p>
                  <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-400">
                    2022.08 ~
                  </p>
                </div>

                <div className="lg:min-w-500">
                  <div className="mt-12">
                    <p className="font-sansM text-2xl text-gray-900 dark:text-gray-200">
                      BizPrint-CMS기반 맞춤상품 입점 쇼핑몰 구축
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      Bizprint CMS System 구현
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Listen to the latest
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ any previous podcast episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ List page for episodes of the two categories
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ “Tech Talk” and “Inside Out” Episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Episode detail page with show
                      </p>
                    </div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, React-Query
                    </p>
                  </div>

                  <div className="mt-12">
                    <p className="font-sansM text-2xl text-gray-900 dark:text-gray-200">
                      BizPrint-CMS기반 맞춤상품 입점 쇼핑몰 구축
                    </p>
                    <p className="mt-2 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      Bizprint CMS System 구현
                    </p>
                    <p className="mt-2 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Listen to the latest
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ any previous podcast episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ List page for episodes of the two categories
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ “Tech Talk” and “Inside Out” Episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Episode detail page with show
                      </p>
                    </div>
                    <p className="mt-2 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, React-Query
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  Project
                </span>
              </div>

              <div className="mt-10 lg:flex lg:justify-between">
                <div className="mb-10">
                  <p className="font-sansM text-2xl text-gray-800 dark:text-gray-100">
                    공부 정리 개인 블로그
                  </p>
                  <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:min-w-500">
                  <div>
                    <p className="font-sansM text-2xl text-gray-900 dark:text-gray-200">
                      Notion CMS 기반 블로그 운영
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      Bizprint CMS System 구현
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Listen to the latest
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ any previous podcast episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ List page for episodes of the two categories
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ “Tech Talk” and “Inside Out” Episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Episode detail page with show
                      </p>
                    </div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, React-Query
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 lg:flex lg:justify-between">
                <div className="mb-10">
                  <p className="font-sansM text-2xl text-gray-800 dark:text-gray-100">
                    Que! (부트캠프 팀 프로젝트)
                  </p>
                  <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                    2022.08 ~
                  </p>
                </div>
                <div className="lg:min-w-500">
                  <div>
                    <p className="font-sansM text-2xl text-gray-900 dark:text-gray-200">
                      Socket 활용한 교육 앱
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Description
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      Bizprint CMS System 구현
                    </p>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      What did I do
                    </p>
                    <div className="mt-2">
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Listen to the latest
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ any previous podcast episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ List page for episodes of the two categories
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ “Tech Talk” and “Inside Out” Episode
                      </p>
                      <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                        ✓ Episode detail page with show
                      </p>
                    </div>
                    <p className="mt-4 font-sansM text-xl text-gray-800 dark:text-gray-200">
                      Tech Stack
                    </p>
                    <p className="mt-2 font-sansM text-base text-gray-600 dark:text-gray-200">
                      TypeScript, Next13, React-Query
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  Skill
                </span>
              </div>

              <div className="mt-4">
                <div>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Listen to the latest
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ any previous podcast episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ List page for episodes of the two categories
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ “Tech Talk” and “Inside Out” Episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Episode detail page with show
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <div>
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  Study
                </span>
              </div>

              <div className="mt-4">
                <div>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Listen to the latest
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ any previous podcast episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ List page for episodes of the two categories
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ “Tech Talk” and “Inside Out” Episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Episode detail page with show
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:flex lg:justify-between">
              <div className="mb-10">
                <span className="font-sansM text-3xl text-gray-900 dark:text-white">
                  Commits
                </span>

                <div>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Listen to the latest
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ any previous podcast episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ List page for episodes of the two categories
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ “Tech Talk” and “Inside Out” Episode
                  </p>
                  <p className="font-sansM text-base text-gray-700 dark:text-gray-200">
                    ✓ Episode detail page with show
                  </p>
                </div>
              </div>

              <div className="lg:w-3/5 lg:p-12">
                <div>{gitHubCalendar()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
