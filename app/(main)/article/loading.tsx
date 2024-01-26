export default function Loading() {
  const items = 3;

  return (
    <div className="flex w-full animate-pulse justify-center">
      <div className="min-h-screen w-full max-w-container px-4">
        <div className="mb-8 mt-36" />
        {[...new Array(items)].map((_, idx) => (
          <div
            className={`flex flex-col items-start ${idx == 0 ? '' : 'mt-24'}`}
          >
            <div className="mb-4 h-10 w-full rounded-full bg-gray-300 opacity-40 dark:bg-gray-600"></div>
            <div className="mb-4 h-5 w-3/4 rounded-full bg-gray-200 opacity-40 dark:bg-gray-700"></div>
            <div className="h-4 w-1/3 rounded-full bg-gray-300 opacity-40 dark:bg-gray-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
