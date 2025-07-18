import { Feature } from "@/types/feature";
import Link from "next/link";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph, btn, btnLink } = feature;
  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/4">
      <div className="wow fadeInUp group mb-12" data-wow-delay=".15s">
        <div className="relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
          <span className="absolute left-0 top-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45"></span>
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-dark dark:text-white">
          {title}
        </h3>
        <p className="mb-8 text-body-color dark:text-dark-6 lg:mb-11">
          {paragraph}
        </p>
        {/* {btn && btnLink && (
          <Link
            href={btnLink}
            className="mb-2 block text-base font-medium text-dark hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {btn}
          </Link>
        )} */}
        <Link
          href={`/services/${slugify(title)}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default SingleFeature;
