'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { notoSansKrBold } from 'styles/fonts';
import { DarkModeThemeContext } from 'app/providers';

interface LayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const [isShow, setIsShow] = React.useState(false);
  const { theme, setTheme } = React.useContext(DarkModeThemeContext);

  const changeTheme = React.useCallback(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      if (localTheme === 'dark') {
        localStorage.removeItem('theme');
        document.documentElement.classList.remove('dark');
        return setTheme(false);
      }
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      setTheme(true);
    }
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center border-b-2 border-gray-200 p-6 backdrop-blur-md dark:border-gray-500">
      <div className="mx-10 flex w-full max-w-container flex-wrap items-center justify-between">
        <Link
          href="/blog"
          className="mr-6 flex flex-shrink-0 cursor-pointer items-center"
        >
          <span className="font-sansM text-xl text-blue-600">COPY</span>
          <span className="font-sansM text-xl text-gray-900 dark:text-white">
            TECH
          </span>
        </Link>

        <div className="flex lg:hidden ">
          <button
            className="text-gray-900 dark:text-white"
            onClick={() => changeTheme()}
          >
            {theme ? '다크모드' : '라이트모드'}
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
        {isShow && (
          <div className="w-full lg:hidden">
            <div className="text-sm">
              <Link
                target="_blank"
                href="https://woo1031.notion.site/WooHyun-975fd291ae324dfb87663e2bd9aa35ca"
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                채용
              </Link>
              <Link
                href="/blog"
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                블로그
              </Link>
              <Link
                target="_blank"
                href="https://woo1031.notion.site/Back-to-Back-a43f5fe01a5d46efac38f0c6cc0893c5"
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                LOG
              </Link>
            </div>
          </div>
        )}
        <div className="hidden w-full lg:flex lg:w-auto lg:items-center ">
          <div className="flex text-sm lg:flex-grow">
            <button
              className="mr-8 text-gray-900 dark:text-white"
              onClick={() => changeTheme()}
            >
              {theme ? (
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              )}
            </button>
            <button>
              <Link
                target="_blank"
                href="https://woo1031.notion.site/WooHyun-975fd291ae324dfb87663e2bd9aa35ca"
                className="mt-4 mr-8 block cursor-pointer  text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                채용
              </Link>
            </button>
            <button>
              <Link
                href="/blog"
                className="mt-4 mr-8 block cursor-pointer text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                블로그
              </Link>
            </button>
            <button>
              <Link
                target="_blank"
                href="https://woo1031.notion.site/Back-to-Back-a43f5fe01a5d46efac38f0c6cc0893c5"
                className="mt-4 mr-8 block cursor-pointer text-stone-600 hover:text-black dark:text-white lg:mt-0 lg:inline-block"
              >
                LOG
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="mt-14 flex justify-center border-t-2 border-gray-200 p-6 backdrop-blur-md dark:border-gray-500"></footer>
  );
};

export default function AdminLayout({ children }: LayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
