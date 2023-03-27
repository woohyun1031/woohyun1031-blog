import Link from 'next/link';
import React from 'react';

export default function Page(): React.ReactElement {
  return (
    <div>
      <button>
        <Link href="./Blog">blog</Link>
      </button>
    </div>
  );
}
