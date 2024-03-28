import React from 'react';
import Link from 'next/link';

const NextLink = (
  {
    children,
    src,
    className,
    onClick,
  }: {
    children: React.ReactNode;
    src: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  },
  props?: any,
) => {
  return (
    <>
      <Link
        href={src}
        scroll={false}
        className={className}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    </>
  );
};

export default NextLink;
