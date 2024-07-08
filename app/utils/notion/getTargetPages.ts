import { getArticlesFromDB, IPage } from '@api/notion';
import getPathFromTitle from '@utils/notion/formatTitleToPath';

export async function recursiveFetching(
  _start_cursor: string | null,
  _array: (Partial<IPage> & { path: string })[] = [],
  _type?: string,
): Promise<any> {
  const originData = await getArticlesFromDB({
    page_size: 100,
    filter: _type
      ? {
          and: [
            {
              property: 'upload',
              checkbox: {
                equals: true,
              },
            },
            {
              property: 'tag',
              multi_select: {
                contains: _type,
              },
            },
          ],
        }
      : {
          property: 'upload',
          checkbox: {
            equals: true,
          },
        },
    ...(_start_cursor ? { start_cursor: _start_cursor } : {}),
  });

  const articles = originData?.results.map((item) => {
    const path = getPathFromTitle(
      item.properties?.title?.title?.[0]?.plain_text ?? '',
    );
    return { ...item, path };
  });

  const newArray = [..._array, ...(articles ?? [])];

  if (originData?.has_more) {
    const response = await recursiveFetching(
      originData?.next_cursor,
      newArray,
      _type,
    );
    return response;
  }

  return { array: newArray, has_more: originData?.has_more ?? false };
}

export default async function getAllPages(type?: string) {
  const { array } = await recursiveFetching(null, [], type);

  return { array };
}
