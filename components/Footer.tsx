import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="m-auto mt-36 mb-14 flex h-24 w-full max-w-header justify-center px-6 ease-in-out">
      <div className="flex w-full items-center justify-center ">
        <div>
          <span className="font-sansT text-xs text-gray-400 dark:text-gray-400 sm:text-xs">
            woohyun kim © 2023
          </span>
        </div>
        <div>
          <span className="ml-6 cursor-pointer font-sansT text-xs text-gray-400 hover:text-red-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-xs">
            <Link href="https://github.com/woohyun1031" target="_blank">
              github
            </Link>
          </span>
          <span className="ml-6 cursor-pointer font-sansT text-xs text-gray-400 hover:text-red-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-xs">
            <Link href="mailto:ktkwhms3@gmail.com" target="_blank">
              e-mail
            </Link>
          </span>
          <span className="ml-6 cursor-pointer font-sansT text-xs text-gray-400 hover:text-red-400 dark:text-red-400 dark:hover:text-gray-400 sm:text-xs">
            <Link
              href="https://woo1031.notion.site/woo1031/WooHyun-Kim-69ab520d7e2648d1aec863db6a50a282"
              target="_blank"
            >
              notion
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
