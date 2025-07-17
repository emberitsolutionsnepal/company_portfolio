import Image from "next/image";
import Link from "next/link";
import { pricingData } from "@/stripe/pricingData";
import featuresData from "@/components/Features/featuresData";
import { productList } from "@/components/ProductsShowcase";

const Footer = () => {
  const servicesList = [
    "Local Business Website",
    "Mobile App for Booking or Orders",
    "Admin Dashboard for Business",
    "E-commerce Frontend",
    "School or Learning Portal",
    "AI Tool / Automation Mockup",
    "Portfolio Website Template",
  ];
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#090E34] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <Link href="/" className="mb-6 inline-block max-w-[160px]">
                <Image
                  src="/images/logo/ember_logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="max-w-full"
                />
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-gray-7">
                We are a Kathmandu-based software company building modern web,
                mobile, and cloud solutions for Nepali businesses and startups.
              </p>
              <div className="flex items-center gap-4">
                <a
                  aria-label="email"
                  href="mailto:emberitsolutionsnepal@gmail.com"
                  className="text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 22 22"
                    className="fill-current"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>
                <a
                  aria-label="phone"
                  href="tel:+9779763427890"
                  className="text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 22 22"
                    className="fill-current"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 1 11.93 1 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                  </svg>
                </a>
                <a
                  aria-label="linkedin"
                  href="https://linkedin.com/company/emberitsolutionsnepal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-7 hover:text-white"
                >
                  <svg
                    width="22"
                    height="22"
                    fill="none"
                    viewBox="0 0 22 22"
                    className="fill-current"
                  >
                    <path d="M19 0H3C1.35 0 0 1.35 0 3v16c0 1.65 1.35 3 3 3h16c1.65 0 3-1.35 3-3V3c0-1.65-1.35-3-3-3zM7 18H4V8h3v10zm-1.5-11.25C4.67 6.75 4 6.08 4 5.25S4.67 3.75 5.5 3.75 7 4.42 7 5.25 6.33 6.75 5.5 6.75zM20 18h-3v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3V8h3v1.25c.41-.59 1.09-1.25 2-1.25 1.66 0 3 1.34 3 3v7z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Quick Links
              </h4>
              <ul>
                <li>
                  <Link
                    href="/"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
                {/* <li>
                  <Link
                    href="/blogs"
                    className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                  >
                    Blogs
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">
                Services
              </h4>
              <ul>
                {featuresData.map((service) => (
                  <li key={service.title}>
                    <Link
                      href="#products"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-10 w-full">
              <h4 className="mb-4 text-lg font-semibold text-white">
                UI Templates
              </h4>
              {/* <p className="mb-5 text-xs text-gray-400">
                These are UI templates and demo interfaces, not live products.
              </p> */}
              <p className="h-5"></p>
              <ul>
                {productList.map((product: { name: string }) => (
                  <li key={product.name}>
                    <Link
                      href="#products"
                      className="mb-3 inline-block text-base text-gray-7 hover:text-primary"
                    >
                      {product.name}{" "}
                      {/* <span className="text-xs text-gray-500">(UI Demo)</span> */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-10 w-full">
              <h4 className="mb-9 text-lg font-semibold text-white">Contact</h4>
              <ul>
                <li className="mb-3 text-base text-gray-7">Kathmandu, Nepal</li>
                <li className="mb-3 text-base text-gray-7">
                  emberitsolutionsnepal@gmail.com
                </li>
                <li className="mb-3 text-base text-gray-7">+977 9763427890</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-7">
            &copy; {new Date().getFullYear()} Ember IT Solutions Nepal. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
