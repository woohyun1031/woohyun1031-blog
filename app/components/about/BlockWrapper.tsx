import React from 'react';

export default function BlockWrapper({
  children,
  keyword,
}: {
  children: any;
  keyword?: string;
}) {
  return (
    <div id={keyword} className="mt-36">
      {children}
    </div>
  );
}
