'use client';

import {
  BookIcon,
  BooksIcon,
  AlbumIcon,
  AlbumsIcon,
  PhotoIcon,
  MacIcon,
  PhotosIcon,
  DeskIcon,
} from '@components/icons';
import Image from 'next/image';
import React from 'react';

export default function Desk() {
  const componentSizes = {
    photoGroup: 'lg:max-w-[550px] sm:max-w-[350px]',
    photos: 'lg:w-[100px] sm:w-[63px] w-[63px]',
    photo:
      'lg:bottom-[-20px] lg:right-[30px] lg:h-[22px] lg:w-[16px] sm:bottom-[-12px] sm:right-[19px] sm:h-[14px] sm:w-[10px] bottom-[-12px] right-[19px] w-[10px] h-[14px]',
    deskGroup: 'lg:w-[550px] sm:w-[350px] w-[350px]',
    books: 'lg:w-[170px] sm:w-[108px] w-[108px]',
    book: 'lg:bottom-[-18px] lg:left-12 lg:h-full lg:w-[15px] sm:bottom-[-13px] sm:left-[30.5px] sm:h-full sm:w-[9px] bottom-[-13px] left-[30.5px] h-full w-[9px]',
    mac: 'lg:w-[180px] sm:w-[114px] w-[114px]',
    screen:
      'lg:bottom-[6px] lg:left-[50%] lg:z-10 lg:h-[100px] lg:w-[164px] lg:translate-x-[-50%] sm:bottom-[3px] sm:left-[50%] sm:z-10 sm:h-[64px] sm:w-[104px] sm:translate-x-[-50%] bottom-[3px] left-[50%] z-10 h-[64px] w-[104px] translate-x-[-50%]',
    cds: 'lg:w-[75px] sm:w-[48px] w-[48px]',
    cd: 'lg:bottom-[23px] lg:left-0 lg:h-full lg:w-[70px] sm:bottom-[14px] sm:left-0 sm:h-full sm:w-[44px] bottom-[14px] left-0 h-full w-[44px]',
    desk: 'lg:max-w-[550px] sm:max-w-[350px] max-w-[350px]',
  };

  return (
    <div className="flex flex-col items-center">
      <div
        className={`mb-5 flex w-full ${componentSizes.photoGroup} flex-row justify-end`}
      >
        <span
          className={`common-animation group relative h-full ${componentSizes.photos} cursor-pointer text-gray-600 dark:text-gray-200`}
        >
          <PhotosIcon />
          <div
            className={`common-animation absolute ${componentSizes.photo} cursor-pointer text-gray-600 group-hover:animate-sway_animation dark:text-gray-200 [&:not(:hover)]:animate-not_sway_animation`}
          >
            <PhotoIcon />
          </div>
        </span>
      </div>
      <div
        className={`flex h-full ${componentSizes.deskGroup} items-end justify-center gap-3`}
      >
        <span
          className={`common-animation group relative h-full ${componentSizes.books} cursor-pointer text-gray-600 dark:text-gray-200`}
        >
          <BooksIcon />
          <div
            className={`common-animation absolute ${componentSizes.book} text-gray-600 group-hover:-translate-y-6 dark:text-gray-200`}
          >
            <BookIcon />
          </div>
        </span>
        <span
          className={`common-animation group relative h-full ${componentSizes.mac} cursor-pointer overflow-hidden text-gray-600 dark:text-gray-200`}
        >
          <div className="relative z-50 overflow-hidden">
            <MacIcon />
          </div>
          <div
            className={`common-animation absolute 
            ${componentSizes.screen}
              overflow-hidden                      
              text-gray-600
              group-hover:visible group-hover:animate-purse_animation dark:text-gray-200 [&:not(:hover)]:animate-not_purse_animation`}
          >
            <Image
              src="/images/notting-hill.jpg"
              fill
              alt="movie"
              className="z-10 object-cover opacity-85 brightness-90 dark:opacity-85 dark:brightness-125 "
            />
          </div>
        </span>
        <span
          className={`common-animation group relative h-full ${componentSizes.cds} cursor-pointer text-gray-600 dark:text-gray-200`}
        >
          <AlbumsIcon />
          <div
            className={`common-animation absolute ${componentSizes.cd} text-gray-600 
            group-hover:-translate-y-5
            group-hover:rotate-[-9deg] dark:text-gray-200`}
          >
            <AlbumIcon />
          </div>
        </span>
      </div>
      <div
        className={`common-animation flex ${componentSizes.desk} justify-center text-gray-600 dark:text-gray-200`}
      >
        <DeskIcon />
      </div>
    </div>
  );
}
