'use client';

import { Footer, HeaderWapper } from '@components/common';
import { AnimateProvider } from '@components/common/AnimateProvider';
import { usePathname } from 'next/navigation';
import React, { createContext } from 'react';

export const DarkModeThemeContext = createContext({
  isDark: false,
  setIsDark: (value: any) => {},
});

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);
  const pathname = usePathname();

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
      value={{ isDark: isDarkMode, setIsDark: setIsDarkMode }}
    >
      <HeaderWapper />
      <AnimateProvider>{children}</AnimateProvider>
      <Footer />
    </DarkModeThemeContext.Provider>
  );
}
