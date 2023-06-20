import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="m-auto mt-24 mb-14 flex h-24 w-full max-w-header justify-center px-6 ease-in-out">
      <div className="flex w-full items-center justify-end ">
        <div>
          <span className="cursor-pointer font-sansT text-xs text-gray-400 hover:text-red-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-sm">
            <Link href="https://github.com/woohyun1031" target="_blank">
              github
            </Link>
          </span>
          <span className="ml-6 cursor-pointer font-sansT text-xs text-gray-400 hover:text-red-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-sm">
            <Link href="mailto:ktkwhms3@gmail.com" target="_blank">
              e-mail
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
