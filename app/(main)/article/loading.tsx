import { SkeletonComponent } from '@components/common';

export default function Loading() {
  const items = 1;

  return (
    <div className="flex w-full animate-pulse justify-center">
      <div className="min-h-screen w-full max-w-container px-4">
        <div className="mb-8 mt-36" />
        <SkeletonComponent count={items} />
      </div>
    </div>
  );
}
