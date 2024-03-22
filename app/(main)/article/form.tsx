'use client';

import React, { Fragment } from 'react';
import { IPage } from '@apis/notion';
import { SkeletonComponent, Tag } from '@components/common';
import useScrollForm from '@hooks/useScrollForm';
import dayjs from 'dayjs';
import Link from 'next/link';

export default function Form(props: {
  array: (Partial<IPage> & { path: string })[];
  hasMore: boolean;
  searchParams: any;
}) {
  const { array, hasMore, searchParams } = props;
  const results = React.useMemo(
    () => array?.filter((item) => !!item) ?? [],
    [array],
  );
  const { onSubmit } = useScrollForm();
  const hasNextPage = hasMore ?? false;

  const observer = React.useRef<IntersectionObserver>();
  const lastBookElementRef = React.useCallback(
    (node: any) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          onSubmit({
            ...searchParams,
            page: (results.length += 10),
          });
        }
      });
      if (node) observer.current.observe(node);
    },
    [hasNextPage],
  );

  return (
    <Fragment>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-4">
          <div className="mb-8 mt-36">
            <span className="font-sansM text-5xl text-gray-900 dark:text-white">
              {searchParams.type ? searchParams.type : ''}
            </span>
            {searchParams.type ? (
              <hr className="mt-4 border-t-1 duration-300 ease-in-out dark:border-gray-600" />
            ) : (
              ''
            )}
          </div>
          {results?.map(
            (item: Partial<IPage> & { path: string }, index: number) => {
              return (
                <>
                  <Link
                    className="group flex w-full cursor-pointer flex-col align-middle lg:flex-row "
                    key={item.id}
                    href={`/article/${item.path}`}
                    {...(index + 1 === results.filter((item) => !!item)?.length
                      ? { ref: lastBookElementRef }
                      : {})}
                  >
                    {/* {(item.cover?.file?.url || item.cover?.external?.url) && (
                    <img
                      src={
                        item.cover?.file?.url ??
                        item.cover?.external?.url ??
                        'https://toss.tech/wp-content/uploads/2023/03/00017-3291509353.png'
                      }
                      className="mr-12 h-56 w-full rounded-xl object-cover transition delay-75 duration-300 ease-in-out group-hover:z-0 group-hover:shadow-lg lg:w-56"
                    />
                  )} */}
                    <div className="flex w-full flex-col justify-center">
                      <span className="mb-4 mt-4 inline-block w-full break-keep text-center font-sansT text-2xl text-gray-900 transition delay-75 duration-500 ease-in-out group-hover:text-red-500 dark:text-white dark:group-hover:text-gray-400 sm:text-left sm:text-3xl lg:mt-0">
                        {item?.properties?.Name?.title[0].text.content}
                      </span>
                      <span className="mb-4 inline-block break-keep font-sansT text-base text-gray-700 delay-75 duration-500 group-hover:text-red-500 dark:text-gray-200 dark:group-hover:text-gray-400">
                        {item?.properties?.Subtitle.rich_text[0]?.plain_text}
                      </span>
                    </div>
                  </Link>
                  <div className="mb-24 flex w-full flex-row flex-wrap gap-x-4 gap-y-2 align-middle">
                    <div className="text-center">
                      <span className="align-middle font-sansT text-xs text-gray-500 dark:text-gray-400">
                        {dayjs(item?.created_time).format('MMMM DD, YYYY')}
                      </span>
                    </div>
                    {item?.properties?.Type?.multi_select?.length ? (
                      <div>
                        <span className="font-sansT text-xs text-gray-500 dark:text-gray-400">
                          |
                        </span>
                      </div>
                    ) : null}
                    {item?.properties?.Type?.multi_select?.map(
                      (
                        type: { id: string; name: string; color: string },
                        idx: number,
                      ) => {
                        return (
                          <>
                            <div>
                              <Link href={`/article?type=${type.name}`}>
                                <Tag title={type.name} />
                              </Link>
                            </div>
                            {item?.properties?.Type?.multi_select?.length !==
                              idx + 1 && (
                              <div>
                                <span className="font-sansT text-xs text-gray-500 dark:text-gray-400">
                                  |
                                </span>
                              </div>
                            )}
                          </>
                        );
                      },
                    )}
                  </div>
                </>
              );
            },
          )}
          {!!hasNextPage && <SkeletonComponent count={2} />}
        </div>
      </div>
    </Fragment>
  );
}
