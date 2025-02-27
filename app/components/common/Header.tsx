'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname, useSearchParams } from 'next/navigation';
import { DarkModeDispatch } from '@contexts/darkModeContext';
import { ModalDispatch } from '@contexts/modalContext';
import NextLink from './NextLink';

export function Header() {
  const [isShow, setIsShow] = React.useState(false);
  const { darkModeDispatch } = React.useContext(DarkModeDispatch);
  const { openModal } = React.useContext(ModalDispatch);

  const pathName = usePathname();
  const searchParams = useSearchParams();
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
        return darkModeDispatch({ type: 'light' });
      }
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
      darkModeDispatch({ type: 'dark' });
    }
  }, [darkModeDispatch]);

  function openNoAccessModal() {
    return openModal(
      <div className="flex h-full w-full items-center justify-center">
        <div
          role="button"
          tabIndex={0}
          onClick={(e) => {
            e.stopPropagation();
          }}
          onKeyDown={(e) => e.key === 'Enter' && e.stopPropagation()}
          onKeyPress={(e) =>
            (e.key === 'Enter' || e.key === ' ') && e.stopPropagation()
          }
        >
          <div className="mt-2 text-lg text-white dark:text-white">
            This service is currently undergoing maintenance 😢
          </div>
        </div>
      </div>,
    );
  }

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-white bg-opacity-75 backdrop-blur-md duration-300 ease-in-out ${
        isShow ? 'h-44 lg:h-14' : 'h-14'
      } dark:bg-black dark:bg-opacity-70`}
    >
      <div className="relative z-30 flex w-full justify-center px-6 py-2">
        <div className="mx-2 flex w-full max-w-header flex-wrap items-center justify-between">
          <NextLink
            src="/article"
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
            {}
          </NextLink>

          <div className="flex gap-1">
            <button
              type="button"
              className="
              group relative flex h-8 w-8 flex-row items-center justify-center
              overflow-hidden rounded-md text-gray-800 duration-300
              hover:bg-gray-100
              dark:text-white dark:hover:bg-gray-800"
              onClick={() => changeTheme()}
            >
              <div
                className="invisible absolute h-5 w-5 translate-x-2  opacity-0 duration-300 
              dark:visible dark:relative dark:translate-x-0 dark:opacity-[1]"
              >
                <Image
                  src="/images/sun.svg"
                  alt="me"
                  fill
                  className="fill-current"
                />
              </div>
              <div
                className="visible h-5 w-5 translate-x-0  opacity-[1] duration-300
                  dark:invisible dark:absolute dark:-translate-x-2 dark:opacity-0"
              >
                <Image src="/images/moon.svg" alt="me" fill />
              </div>
            </button>

            <button
              type="button"
              className="
              group relative flex h-8 w-8 flex-row items-center justify-center
              overflow-hidden rounded-md text-gray-800 duration-300
              hover:bg-gray-100
              dark:text-white dark:hover:bg-gray-800 lg:hidden"
              onClick={() => setIsShow((prev) => !prev)}
            >
              <svg
                className={`h-5 w-5 dark:text-white ${
                  isShow
                    ? 'visible h-5 w-5 rotate-0 scale-100 opacity-[1] duration-300'
                    : 'invisible absolute h-5 w-5 rotate-180 scale-0 opacity-0 duration-300'
                }`}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 96 960 960"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>

              <svg
                className={`h-5 w-5 dark:text-white ${
                  isShow
                    ? 'invisible absolute h-5 w-5 -rotate-180 scale-0 opacity-0 duration-300'
                    : 'visible h-5 w-5 rotate-0 scale-100 opacity-[1] duration-300'
                }`}
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                height="20"
                width="20"
                viewBox="0 96 960 960"
              >
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </button>

            <div className="ml-3 hidden gap-6 lg:flex">
              <NextLink
                src="/about"
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
                about
              </NextLink>
              <NextLink
                src="/article"
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
                article
              </NextLink>
              <NextLink
                src="/article"
                className={`m-auto w-full cursor-pointer text-xs duration-300
                ease-in-out hover:text-red-400 active:text-red-600 dark:hover:text-red-400 dark:active:text-red-600 ${
                  pathName?.includes('instagram')
                    ? 'text-red-400 dark:text-red-400'
                    : 'text-stone-600 dark:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  openNoAccessModal();
                }}
              >
                instagram
              </NextLink>
            </div>
          </div>
        </div>
      </div>
      <div className="m-0 h-full w-full overflow-hidden">
        <div
          className={`flex h-full transform flex-col text-sm duration-300 ease-in-out lg:hidden ${
            isShow ? 'translate-y-0' : '-translate-y-28'
          }`}
        >
          <NextLink
            src="/about"
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
            about
          </NextLink>
          <NextLink
            src="/article"
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
            article
          </NextLink>
          <NextLink
            src="/article"
            className={`mt-4 w-full cursor-pointer py-2 pl-8 text-xs duration-300
            ease-in-out hover:text-red-400 active:text-red-600 dark:hover:text-red-400 dark:active:text-red-600 lg:mt-0 lg:inline-block ${
              pathName?.includes('instagram')
                ? 'text-red-400 dark:text-red-400'
                : 'text-stone-600 dark:text-white'
            }`}
            onClick={(e) => {
              e.preventDefault();
              openNoAccessModal();
            }}
          >
            instagram
          </NextLink>
        </div>
      </div>
    </header>
  );
}
