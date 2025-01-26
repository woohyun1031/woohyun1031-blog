'use client';

import React from 'react';
import { ModalDispatch } from '@contexts/modalContext';

export default function CustomModal({
  content,
}: {
  content: React.ReactElement;
}) {
  const { modalState, closeModal } = React.useContext(ModalDispatch);

  return (
    <div
      role="button"
      tabIndex={0}
      className={`${
        modalState.isShow ? 'opacity-1 visible' : 'invisible opacity-0'
      } fixed left-0 top-0 z-[60] flex h-full w-full items-center justify-center 
           bg-[rgba(0,0,0,0.4)] p-20 backdrop-blur-md duration-300`}
      onClick={() => closeModal()}
      onKeyDown={(e) => e.key === 'Enter' && closeModal()}
      onKeyPress={(e) => (e.key === 'Enter' || e.key === ' ') && closeModal()}
    >
      {content}
    </div>
  );
}
