'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
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
  }, [pathname]);

  return (
    <AnimatePresence initial mode="wait">
      <ChildRouter key={pathname} variants={variants ?? defaultVariants}>
        {children}
      </ChildRouter>
    </AnimatePresence>
  );
}
