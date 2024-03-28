import { getArticlesFromDB, IPage } from '@apis/notion';
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

  if (originData?.has_more) {
    return await recursiveFetching(originData?.next_cursor, newArray, _type);
  }

  return { array: newArray, has_more: originData?.has_more ?? false };
}

export default async function getAllPages(type?: string) {
  const { array } = await recursiveFetching(null, [], type);

  return { array };
}
