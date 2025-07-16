import Image from "next/image";
import Link from "next/link";
import { Client } from "@/types/client";

const SingleClient = ({ client }: { client: Client }) => {
  const { title, link, logo } = client;
  return (
    <div className="mb-5 mr-10 flex flex-col items-center">
      <Link
        href={link}
        target="_blank"
        rel="nofollow noopner"
        className="inline-flex flex-col items-center justify-center rounded-lg bg-white px-6 py-4 shadow-md transition-all duration-300 hover:shadow-lg dark:bg-dark-2 dark:shadow-dark"
      >
        {logo ? (
          <Image
            src={logo}
            alt={title + " logo"}
            width={40}
            height={40}
            className="mb-2 object-contain"
          />
        ) : (
          <span className="mb-2 h-10 w-10 rounded-full bg-gray-200 dark:bg-dark-3" />
        )}
        <span className="mt-1 text-base font-semibold text-dark dark:text-white">
          {title}
        </span>
      </Link>
    </div>
  );
};

export default SingleClient;
