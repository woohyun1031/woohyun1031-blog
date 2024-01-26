export default function Loading() {
  return (
    <div className="flex w-full animate-pulse justify-center">
      <div className="min-h-screen w-full max-w-container px-8">
        <div className="mt-36 flex w-full flex-col justify-center px-12" />

        <div className="flex flex-col items-start ">
          <div className="h-12 w-3/4 rounded-full bg-gray-300 opacity-50 dark:bg-gray-600"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-5 w-1/3 rounded-full bg-gray-300 opacity-50 dark:bg-gray-700"></div>
        </div>

        <div className="mt-36 flex flex-col items-start">
          <div className="h-6 w-1/4 rounded-full bg-gray-300 opacity-50 dark:bg-gray-600"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-8 w-2/4 rounded-full bg-gray-200 opacity-50 dark:bg-gray-700"></div>
          <div className="mt-6 h-5 w-1/3 rounded-full bg-gray-300 opacity-50 dark:bg-gray-700"></div>
        </div>
      </div>
    </div>
  );
}
