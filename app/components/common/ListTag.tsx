import React from 'react';

export default function ListTag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <li
      className={`mb-2 ml-5 pl-2 marker:align-middle marker:text-xs marker:text-gray-400 ${className}`}
    >
      {children}
    </li>
  );
}
