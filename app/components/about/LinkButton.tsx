import Link from 'next/link';

const LinkButton = ({
  url,
  className,
}: {
  url: string;
  className?: string;
}) => {
  return (
    <span
      className={`cursor-pointer font-sansT  text-base text-red-400  hover:text-gray-700 dark:text-red-400 dark:hover:text-gray-300 ${className}`}
    >
      <Link href={url ?? ''} target="_blank">
        +
      </Link>
    </span>
  );
};

export default LinkButton;
