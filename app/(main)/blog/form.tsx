'use client';

import Tag from '#components/Tag';
import useScrollForm from '#hooks/useScrollForm';
import { INotionPageList, IPage } from '#pages/api/notion';
import dayjs from 'dayjs';
import Link from 'next/link';
import React from 'react';

export default function Form(props: {
  results: (Partial<IPage> & { path: string })[];
  hasMore: boolean;
  searchParams: any;
}) {
  const { results, hasMore, searchParams } = props;
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
    <>
      <div className="flex w-full justify-center">
        <div className="min-h-screen w-full max-w-container px-4">
          <div className="mt-36 mb-8">
            <span className="font-sansT text-4xl text-gray-900 dark:text-white">
              {searchParams.type ? searchParams.type : ''}
            </span>
          </div>
          {results?.map(
            (item: Partial<IPage> & { path: string }, index: number) => {
              return (
                <>
                  <Link
                    className="group flex w-full cursor-pointer flex-col align-middle lg:flex-row "
                    key={item.id}
                    href={`/blog/${item.path}`}
                    {...(index + 1 === results?.length
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
                      <span className="mt-4 mb-4 inline-block w-full break-keep text-center font-sansT text-2xl text-gray-900 transition delay-75 duration-500 ease-in-out group-hover:text-red-500 dark:text-white dark:group-hover:text-gray-400 sm:text-left sm:text-3xl lg:mt-0">
                        {item?.properties?.Name?.title[0].text.content}
                      </span>
                      <span className="mb-4 inline-block break-keep font-sansT text-base text-gray-700 dark:text-gray-200">
                        {item?.properties?.Subtitle.rich_text[0]?.plain_text}
                      </span>
                    </div>
                  </Link>
                  <div className="mb-24 flex w-full flex-row flex-wrap gap-y-2 gap-x-4 align-middle">
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
                              <Link href={`/blog?type=${type.name}`}>
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
        </div>
      </div>
    </>
  );
}
