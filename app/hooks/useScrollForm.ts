import React from 'react';
import queryString from 'querystring';
import { usePathname, useRouter } from 'next/navigation';

export interface SearchFormProps<TParams = Record<string, any>> {
  params?: TParams;
}

export type UseSearchFormReturn = {
  onSubmit: (values: Record<string, any>) => void;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useScrollForm(): UseSearchFormReturn {
  const [loading, setLoading] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const onSubmit = React.useCallback(
    (values: Record<string, any>) => {
      setLoading(true);
      router.replace(
        `${pathname}?${queryString.stringify(
          Object.entries({
            ...values,
          }).reduce<Record<string, any>>((p, [key, value]) => {
            // eslint-disable-next-line @typescript-eslint/no-shadow
            function handleFormat(value: any): any {
              if (Array.isArray(value)) {
                return value.map(handleFormat);
              }
              return value;
            }
            return { ...p, [key]: handleFormat(value) };
          }, {}),
        )}`,
        {
          scroll: false,
        },
      );
    },
    [pathname, router],
  );

  return { onSubmit, loading, setLoading };
}
