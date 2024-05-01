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
    photoGroup: 'max-w-[350px]',
    photos: 'w-[63px]',
    photo: 'bottom-[-12px] right-[19px] h-[14px] w-[10px] ',
    deskGroup: 'w-[350px]',
    books: 'w-[108px]',
    book: 'bottom-[-13px] left-[30.5px] h-full w-[9px]',
    mac: 'w-[114px]',
    screen:
      'bottom-[3px] left-[50%] z-10 h-[64px] w-[104px] translate-x-[-50%]',
    cds: 'w-[48px]',
    cd: 'bottom-[14px] left-0 h-full w-[44px]',
    desk: 'max-w-[350px]',
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
