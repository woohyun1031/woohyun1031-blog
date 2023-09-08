import { getNotionPageList, IPage } from '#pages/api/notion';
import { IDefaultPageProps } from '#types/types';
import Form from './form';

export const dynamic = 'force-dynamic';

interface ISearchParams {
  page: number;
  type: string;
}

export default async function Page(props: IDefaultPageProps<ISearchParams>) {
  async function getPages(pages: number) {
    const array: (Partial<IPage> & { path: string })[] = [];
    const requestCount = Math.floor(pages / 100);
    const lastRequestCount = pages % 100;

    async function rc(start_cursor: string | null, limit: number) {
      if (limit) {
        const count = limit - 1;
        const data = await getNotionPageList({
          pages: 100,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        array.push(...(data?.results ? data?.results : []));
        await rc(data?.next_cursor, count);
        return data?.has_more ?? false;
      } else {
        const data = await getNotionPageList({
          pages: lastRequestCount,
          ...(start_cursor ? { start_cursor } : {}),
          ...(props.searchParams.type ? { type: props.searchParams.type } : {}),
        });
        array.push(...(data?.results.length ? data?.results : []));
        return data?.has_more ?? false;
      }
    }
    const hasMore = await rc(null, requestCount);
    return { array, hasMore };
  }
  const { array, hasMore } = await getPages(
    props.searchParams.page ? Number(props.searchParams.page) : 10,
  );
  if (!array.length) return;
  return (
    <Form results={array} hasMore={hasMore} searchParams={props.searchParams} />
  );
}
