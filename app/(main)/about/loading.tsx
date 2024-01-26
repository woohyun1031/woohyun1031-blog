import { SkeletonComponent } from '#components/common';

export default function Loading() {
  const items = 3;
  return (
    <div className="flex w-full animate-pulse justify-center">
      <div className="min-h-screen w-full max-w-container px-8">
        <div className="mt-36 flex w-full flex-col justify-center px-12" />
        <SkeletonComponent count={items} />
      </div>
    </div>
  );
}
