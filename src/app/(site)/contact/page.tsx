import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | TechDev Solutions - Get Your Free Project Quote",
  description:
    "Ready to start your software project? Contact TechDev Solutions for a free consultation and project estimate. Get in touch with our expert development team.",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb pageName="Contact Us" />

      <Contact />
    </>
  );
};

export default ContactPage;
