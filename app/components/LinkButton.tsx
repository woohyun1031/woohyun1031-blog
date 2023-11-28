import Link from 'next/link';

export const LinkButton = ({ url }: { url: string }) => {
  return (
    <span className="ml-2 cursor-pointer font-sansT text-base text-red-400 hover:text-gray-400 dark:text-red-400 dark:hover:text-gray-400">
      <Link href={url ?? ''} target="_blank">
        +
      </Link>
    </span>
  );
};
