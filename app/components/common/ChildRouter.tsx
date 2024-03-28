'use client';

import React, { ElementRef } from 'react';
import { motion, Variant } from 'framer-motion';
import FrozenRouter from '@components/common/FrozenRouter';

const ChildRouter = React.forwardRef<
  ElementRef<typeof motion.div>,
  { children: React.ReactNode; variants: Record<'out' | 'in', Variant> }
>((props, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={props.variants}
      initial="out"
      animate="in"
      exit="out"
    >
      <FrozenRouter>{props.children}</FrozenRouter>
    </motion.div>
  );
});

export default ChildRouter;
