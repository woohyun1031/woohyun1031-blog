'use client';

import { Footer, Header, SkeletonComponent } from '@components/common';
import { AnimateProvider } from '@components/common/AnimateProvider';
import CustomModal from '@components/common/CustomModal';
import { ScrollSmooth } from '@components/common/ScrollSmooth';
import {
  DarkModeDispatch,
  darkModeReducer,
  initialDarkModeState,
} from '@contexts/darkModeContext';
import {
  initialModalState,
  ModalDispatch,
  modalReducer,
} from '@contexts/modalContext';
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
  const [modalState, modalDispatch] = React.useReducer(
    modalReducer,
    initialModalState,
  );

  const [modalContent, setModalContent] = React.useState(
    (<></>) as React.ReactElement,
  );

  const openModal = React.useCallback(
    (value: React.ReactElement) => {
      modalDispatch({ type: 'show' });
      setModalContent(value);
    },
    [modalDispatch],
  );

  const closeModal = React.useCallback(() => {
    modalDispatch({ type: 'close' });
    setModalContent(<></>);
  }, [modalDispatch]);

  const darkModeContextMemo = React.useMemo(
    () => ({ darkModeState, darkModeDispatch }),
    [darkModeState, darkModeDispatch],
  );

  const modalContextMemo = React.useMemo(
    () => ({ modalState, modalDispatch, openModal, closeModal }),
    [modalState, modalDispatch, openModal, closeModal],
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

  React.useEffect(() => {
    if (modalState.isShow) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [modalState.isShow]);

  return (
    <DarkModeDispatch.Provider value={darkModeContextMemo}>
      <ModalDispatch.Provider value={modalContextMemo}>
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
        <CustomModal content={modalContent} />
      </ModalDispatch.Provider>
    </DarkModeDispatch.Provider>
  );
}
