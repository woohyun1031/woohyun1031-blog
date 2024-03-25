import { getArticlesFromDB, IPage } from '@apis/notion';
import getPathFromTitle from '@utils/notion/formatTitleToPath';

export async function recursiveFetching(
  _start_cursor: string | null,
  _array: (Partial<IPage> & { path: string })[] = [],
  {
    limit,
    lastRequestCount,
  }: {
    limit: number;
    lastRequestCount: number;
  },
  _type?: string,
): Promise<any> {
  const originData = await getArticlesFromDB({
    page_size: limit ? 100 : lastRequestCount,
    filter: _type
      ? {
          and: [
            {
              property: 'isBlog',
              checkbox: {
                equals: true,
              },
            },
            {
              property: 'Type',
              multi_select: {
                contains: _type,
              },
            },
          ],
        }
      : {
          property: 'isBlog',
          checkbox: {
            equals: true,
          },
        },
    ...(_start_cursor ? { start_cursor: _start_cursor } : {}),
  });

  const articles = originData?.results.map((item) => {
    const path = getPathFromTitle(
      item.properties?.Name?.title?.[0]?.plain_text ?? '',
    );
    return { ...item, path };
  });

  const newArray = [..._array, ...(articles ?? [])];

  if (limit) {
    return await recursiveFetching(
      originData?.next_cursor,
      newArray,
      {
        limit: limit - 1,
        lastRequestCount,
      },
      _type,
    );
  }

  return { array: newArray, has_more: originData?.has_more ?? false };
}

export default async function getTargetPages(pages: number, type?: string) {
  const requestCount = Math.floor(pages / 100);
  const lastRequestCount = pages % 100;

  const { array, has_more } = await recursiveFetching(
    null,
    [],
    {
      limit: requestCount,
      lastRequestCount,
    },
    type,
  );

  return { array, has_more };
}
