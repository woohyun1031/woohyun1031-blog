'use client';

import { Footer, Header, SkeletonComponent } from '@components/common';
import { AnimateProvider } from '@components/common/AnimateProvider';
import { ScrollSmooth } from '@components/common/ScrollSmooth';
import React, { createContext, Suspense } from 'react';

export const DarkModeThemeContext = createContext({
  isDark: false,
  setIsDark: (value: any) => {
    console.log(value);
  },
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

  const contextMemo = React.useMemo(
    () => ({ isDark: isDarkMode, setIsDark: setIsDarkMode }),
    [isDarkMode, setIsDarkMode],
  );

  return (
    <DarkModeThemeContext.Provider value={contextMemo}>
      <Suspense>
        <Header />
      </Suspense>
      <ScrollSmooth>
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
      </ScrollSmooth>
    </DarkModeThemeContext.Provider>
  );
}
