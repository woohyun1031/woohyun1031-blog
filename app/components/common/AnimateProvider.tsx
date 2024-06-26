'use client';

import React from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { AnimatePresence, Variant } from 'framer-motion';
import ChildRouter from './ChildRouter';

export function AnimateProvider({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants?: Record<'out' | 'in', Variant>;
}): React.ReactElement {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const typeParams = searchParams.get('type');
  const key = `${pathname}${typeParams ?? ''}`;

  const defaultVariants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.5,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [key]);

  return (
    <AnimatePresence initial mode="wait">
      <ChildRouter key={key} variants={variants ?? defaultVariants}>
        {children}
      </ChildRouter>
    </AnimatePresence>
  );
}
