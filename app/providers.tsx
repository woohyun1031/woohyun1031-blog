'use client';

import Footer from '#components/Footer';
import Header from '#components/Header';
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

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <DarkModeThemeContext.Provider
      value={{ isDark: isDarkMode, setIsDark: setIsDarkMode }}
    >
      <Header />
      {children}
      <Footer />
    </DarkModeThemeContext.Provider>
  );
}
