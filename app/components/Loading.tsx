export default function LoadingComponent() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex items-center justify-center space-x-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
        <div className="h-2 w-2 animate-pulse rounded-full bg-gray-500 dark:bg-gray-500"></div>
      </div>
    </div>
  );
}
