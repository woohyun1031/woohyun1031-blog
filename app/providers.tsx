'use client';

import React, { createContext } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const DarkModeThemeContext = createContext({
  theme: false,
  setTheme: (value: any) => {},
});

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  return (
    <DarkModeThemeContext.Provider
      value={{ theme: isDarkMode, setTheme: setIsDarkMode }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </DarkModeThemeContext.Provider>
  );
}
