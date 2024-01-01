import LoadingComponent from 'app/components/Loading';

export default function Loading() {
  return (
    <div className="mt-36 flex w-full animate-pulse justify-center">
      <div className="min-h-screen w-full max-w-innerContainer px-4">
        <div className="flex flex-col items-center">
          <div className="mb-3 h-10 w-full rounded-full bg-gray-200 px-4 opacity-40 dark:bg-gray-700"></div>
          <div className="mb-3 h-10 w-full rounded-full bg-gray-200 px-4 opacity-40 dark:bg-gray-700"></div>
          <div className="mb-6 h-10 w-full rounded-full bg-gray-200 px-4 opacity-40 dark:bg-gray-700"></div>
          <div className="mb-24 h-5 w-2/4 rounded-full bg-gray-300 opacity-40 dark:bg-gray-600"></div>
        </div>
      </div>
    </div>
  );
}
