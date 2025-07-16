import About from "@/components/About";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Team from "@/components/Team";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | TechDev Solutions - Custom Software Development Services",
  description:
    "Learn about TechDev Solutions, our team of expert developers, and our mission to deliver exceptional software solutions that drive business growth.",
};

const AboutPage = () => {
  return (
    <main>
      <Breadcrumb pageName="About Us" />
      <About />
      <Team />
    </main>
  );
};

export default AboutPage;
