export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="w h-1 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
        <div className="w h-1 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
        <div className="w h-1 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
      </div>
    </div>
  );
}
