'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { notoSansKrBold } from 'styles/fonts';
import { DarkModeThemeContext } from 'app/providers';

const Header = () => {
  const [isShow, setIsShow] = React.useState(false);
  const { isDark, setIsDark } = React.useContext(DarkModeThemeContext);

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
    <header className="sticky top-0 z-50 duration-300 ease-in-out">
      <div className="flex w-full justify-center bg-white bg-opacity-75 py-3 px-6 backdrop-blur-md duration-300 ease-in-out dark:bg-gray-900">
        <div className="mx-2 flex w-full max-w-header flex-wrap items-center justify-between">
          <Link
            href="/resume"
            className="mr-6 flex flex-shrink-0 cursor-pointer items-center"
            onClick={() => setIsShow(false)}
          >
            <span className="text-xl font-extralight text-gray-800 dark:text-white">
              woohyun.kim
            </span>
          </Link>

          <div className="flex lg:hidden">
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
              className="flex items-center rounded  px-3 py-2 text-gray-900  hover:text-blue-600"
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
          </div>
        </div>
      </div>
      <div className="m-0 h-full w-full overflow-hidden">
        <div
          className={`h-full transform bg-white bg-opacity-75 text-sm backdrop-blur-md duration-300 ease-in-out dark:border-gray-600 dark:bg-gray-900 lg:hidden ${
            isShow ? 'translate-y-0' : '-translate-y-16'
          }`}
        >
          <Link
            href="./resume"
            className="h-full cursor-pointer pl-8 text-xs text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
            onClick={() => setIsShow(false)}
          >
            ABOUT
          </Link>
          <Link
            href="/blog"
            className="mt-4 block h-full cursor-pointer py-2 pl-8 text-xs text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
            onClick={() => setIsShow(false)}
          >
            DEVLOG
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
