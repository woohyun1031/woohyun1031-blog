export interface IDefaultPageProps<
  TSearchParams = Record<string, any>,
  TParams = Record<string, any>,
> {
  params: TParams;
  searchParams: TSearchParams;
}
