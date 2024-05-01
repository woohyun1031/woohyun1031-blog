'use client';

import { Footer, Header, SkeletonComponent } from '@components/common';
import { AnimateProvider } from '@components/common/AnimateProvider';
import { ScrollSmooth } from '@components/common/ScrollSmooth';
import {
  DarkModeDispatch,
  darkModeReducer,
  initialDarkModeState,
} from '@contexts/darkModeContext';
import React, { Suspense } from 'react';

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [darkModeState, darkModeDispatch] = React.useReducer(
    darkModeReducer,
    initialDarkModeState,
  );

  React.useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      darkModeDispatch({
        type: 'dark',
      });
    } else {
      document.documentElement.classList.remove('dark');
      darkModeDispatch({
        type: 'light',
      });
    }
  }, []);

  const darkModeContextMemo = React.useMemo(
    () => ({ darkModeState, darkModeDispatch }),
    [darkModeState, darkModeDispatch],
  );

  return (
    <DarkModeDispatch.Provider value={darkModeContextMemo}>
      <Suspense>
        <Header />
      </Suspense>
      <ScrollSmooth>
        <section className="min-h-svh">
          <Suspense
            fallback={
              <div className="flex w-full animate-show_animation justify-center">
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
    </DarkModeDispatch.Provider>
  );
}
