'use client';

import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DarkModeThemeContext } from 'app/(main)/providers';
import { usePathname, useSearchParams } from 'next/navigation';

export const Header = () => {
  const [isShow, setIsShow] = React.useState(false);
  const { isDark, setIsDark } = React.useContext(DarkModeThemeContext);
  const pathName = usePathname();
  const searchParams = useSearchParams();
  // const searchParams = new URLSearchParams(
  //   typeof window !== 'undefined' ? window.location.search : '',
  // );
  const pathNames = pathName?.split('/') ?? [];

  const isArticleListPage =
    pathNames?.length <= 2 &&
    pathNames?.includes('article') &&
    !searchParams?.has('type');

  const isAboutPage = pathNames?.includes('about');

  const changeTheme = React.useCallback(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      if (localTheme === 'dark') {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
        return setIsDark(false);
      }
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  return (
    <Suspense>
      <header
        className={`fixed top-0 z-50 w-full bg-white bg-opacity-75 backdrop-blur-md duration-300 ease-in-out ${
          isShow ? 'h-32 lg:h-14' : 'h-14'
        } dark:bg-black dark:bg-opacity-70`}
      >
        <div className="flex w-full justify-center px-6 py-3">
          <div className="mx-2 flex w-full max-w-header flex-wrap items-center justify-between">
            <Link
              href="/article"
              className="mr-6 flex flex-shrink-0 cursor-pointer items-center"
              onClick={(event) => {
                if (isArticleListPage) {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }
                setIsShow(false);
              }}
            >
              <span className="text-xl font-extralight text-gray-800 duration-300 ease-in-out hover:text-red-400 active:text-red-600 dark:text-white dark:hover:text-red-400 dark:active:text-red-600">
                woohyun.kim
              </span>
            </Link>

            <div className="flex">
              <button
                className="text-gray-800 dark:text-white"
                onClick={() => changeTheme()}
              >
                {isDark ? (
                  <div>
                    <Image
                      src="/sun.svg"
                      alt="me"
                      width="25"
                      height="25"
                      className="fill-current"
                    />
                  </div>
                ) : (
                  <div>
                    <Image src="/moon.svg" alt="me" width="25" height="25" />
                  </div>
                )}
              </button>
              <button
                className="flex items-center rounded px-3 py-2 text-gray-900 hover:text-blue-600 lg:hidden"
                onClick={() => setIsShow((prev) => !prev)}
              >
                {isShow ? (
                  <svg
                    className="fill-current dark:text-white"
                    viewBox="0 96 960 960"
                    height="20"
                    width="20"
                  >
                    <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
                  </svg>
                ) : (
                  <svg
                    className="fill-current dark:text-white"
                    viewBox="0 96 960 960"
                    height="20"
                    width="20"
                  >
                    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
                  </svg>
                )}
              </button>
              <div className="ml-6 hidden gap-6 lg:flex">
                <Link
                  href="/about"
                  className={`cursor-pointe m-auto text-xs duration-300
                ease-in-out hover:text-red-400 active:text-red-600 dark:hover:text-red-400 dark:active:text-red-600 ${
                  pathName?.includes('about')
                    ? 'text-red-400 dark:text-red-400'
                    : 'text-stone-600 dark:text-white'
                }`}
                  onClick={(event) => {
                    if (isAboutPage) {
                      event.preventDefault();
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                      });
                    }
                    setIsShow(false);
                  }}
                >
                  ABOUT
                </Link>
                <Link
                  href="/article"
                  className={`m-auto w-full cursor-pointer text-xs duration-300
                ease-in-out hover:text-red-400 active:text-red-600 dark:hover:text-red-400 dark:active:text-red-600 ${
                  pathName?.includes('article')
                    ? 'text-red-400 dark:text-red-400'
                    : 'text-stone-600 dark:text-white'
                }`}
                  onClick={(event) => {
                    if (isArticleListPage) {
                      event.preventDefault();
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth',
                      });
                    }
                  }}
                >
                  ARTICLE
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="m-0 h-full w-full overflow-hidden">
          <div
            className={`flex h-full transform flex-col text-sm duration-300 ease-in-out lg:hidden ${
              isShow ? 'translate-y-0' : '-translate-y-16'
            }`}
          >
            <Link
              href="/about"
              className={`w-full cursor-pointer pl-8 text-xs  duration-300
            ease-in-out hover:text-red-400 active:text-red-600  dark:hover:text-red-400 dark:active:text-red-600 lg:mt-0 lg:inline-block ${
              pathName?.includes('about')
                ? 'text-red-400 dark:text-red-400'
                : 'text-stone-600 dark:text-white'
            }`}
              onClick={(event) => {
                if (isAboutPage) {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }
                setIsShow(false);
              }}
            >
              ABOUT
            </Link>
            <Link
              href="/article"
              className={`mt-4 w-full cursor-pointer py-2 pl-8 text-xs duration-300
            ease-in-out hover:text-red-400 active:text-red-600 dark:hover:text-red-400 dark:active:text-red-600 lg:mt-0 lg:inline-block ${
              pathName?.includes('article')
                ? 'text-red-400 dark:text-red-400'
                : 'text-stone-600 dark:text-white'
            }`}
              onClick={(event) => {
                if (isArticleListPage) {
                  event.preventDefault();
                  window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth',
                  });
                }
                setIsShow(false);
              }}
            >
              ARTICLE
            </Link>
          </div>
        </div>
      </header>
    </Suspense>
  );
};

export const HeaderWapper = () => {
  return (
    <Suspense>
      <Header />
    </Suspense>
  );
};
