'use client';

import React from 'react';

export function ScrollSmooth({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const scrollWrapperRef = React.useRef<HTMLDivElement>(null);
  const offsetRef = React.useRef(0);
  const speed = 0.07;

  const scrollAnimate = () => {
    offsetRef.current += (window.scrollY - offsetRef.current) * speed;
    const scroll = `translate3d(0,${-offsetRef.current}px,0`;
    if (scrollWrapperRef.current?.style) {
      scrollWrapperRef.current.style.transform = scroll;
      requestAnimationFrame(scrollAnimate);
    }
  };

  React.useEffect(() => {
    const requestId = requestAnimationFrame(scrollAnimate);
    return () => cancelAnimationFrame(requestId);
  }, []);

  return (
    <section className="h-screen">
      <main ref={scrollWrapperRef}>{children}</main>{' '}
    </section>
  );
}
