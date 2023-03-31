export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="h-4 w-4 animate-pulse rounded-full dark:bg-blue-500"></div>
        <div className="h-4 w-4 animate-pulse rounded-full dark:bg-blue-500"></div>
        <div className="h-4 w-4 animate-pulse rounded-full dark:bg-blue-500"></div>
      </div>
    </div>
  );
}
