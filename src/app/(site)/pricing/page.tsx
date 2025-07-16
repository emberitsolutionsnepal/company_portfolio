import Breadcrumb from "@/components/Common/Breadcrumb";
import Faq from "@/components/Faq";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Development Packages | TechDev Solutions - Custom Software Development Pricing",
  description:
    "Explore our development packages and pricing for custom software solutions. From starter packages to enterprise solutions, find the perfect fit for your project needs.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb pageName="Development Packages" />
      <Pricing />
      <Faq />
    </>
  );
};

export default PricingPage;
