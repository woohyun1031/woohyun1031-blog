'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { notoSansKrBold } from 'styles/fonts';

interface LayoutProps {
  children: React.ReactNode;
}

const Header = () => {
  const [isShow, setIsShow] = React.useState(false);
  return (
    <header className="sticky top-0 z-50 flex justify-center border-b-2 border-gray-200 p-6 backdrop-blur-md">
      <div className="mx-10 flex w-full max-w-container flex-wrap items-center justify-between">
        <Link
          href="/blog"
          className="mr-6 flex flex-shrink-0 cursor-pointer items-center"
        >
          <span className="font-sansM text-xl text-blue-600">COPY</span>
          <span className="font-sansM text-xl text-gray-900">TECH</span>
        </Link>

        <div className="block lg:hidden">
          <button
            className="flex items-center rounded  px-3 py-2 text-gray-900  hover:text-blue-600"
            onClick={() => setIsShow((prev) => !prev)}
          >
            {isShow ? (
              <svg
                className="fill-current"
                viewBox="0 96 960 960"
                height="20"
                width="20"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            ) : (
              <svg
                className="fill-current"
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
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
              >
                채용
              </Link>
              <Link
                href="/blog"
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
              >
                블로그
              </Link>
              <Link
                target="_blank"
                href="https://woo1031.notion.site/Back-to-Back-a43f5fe01a5d46efac38f0c6cc0893c5"
                className="mt-4 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
              >
                LOG
              </Link>
            </div>
          </div>
        )}
        <div className="hidden w-full lg:flex lg:w-auto lg:items-center ">
          <div className="text-sm lg:flex-grow">
            <Link
              target="_blank"
              href="https://woo1031.notion.site/WooHyun-975fd291ae324dfb87663e2bd9aa35ca"
              className="mt-4 mr-8 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
            >
              채용
            </Link>
            <Link
              href="/blog"
              className="mt-4 mr-8 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
            >
              블로그
            </Link>
            <Link
              target="_blank"
              href="https://woo1031.notion.site/Back-to-Back-a43f5fe01a5d46efac38f0c6cc0893c5"
              className="mt-4 mr-8 block cursor-pointer text-stone-600 hover:text-black lg:mt-0 lg:inline-block"
            >
              LOG
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="flex justify-center border-t-2 border-gray-200 p-6 backdrop-blur-md"></footer>
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
