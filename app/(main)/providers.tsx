'use client';

import { Footer, HeaderWapper, SkeletonComponent } from '@components/common';
import { AnimateProvider } from '@components/common/AnimateProvider';
import { usePathname } from 'next/navigation';
import React, { createContext, Suspense } from 'react';

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
      <section className="min-h-svh">
        <Suspense
          fallback={
            <div className="flex w-full justify-center">
              <div className="min-h-screen w-full max-w-container px-4">
                <div className="mb-8 mt-36">
                  <SkeletonComponent count={1} />
                </div>
              </div>
            </div>
          }
        >
          <AnimateProvider>{children}</AnimateProvider>
        </Suspense>
      </section>
      <Footer />
    </DarkModeThemeContext.Provider>
  );
}
