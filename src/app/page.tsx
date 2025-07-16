import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Technologies from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import PromiseSection from "@/components/Promise";
import Team from "@/components/Team";
import ProductsShowcase from "@/components/ProductsShowcase";
// import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ember IT Solutions Nepal - Custom Software Development Services",
  description:
    "Leading IT solutions company in Nepal specializing in custom software development, web applications, mobile apps, and digital transformation services. We ignite your business with innovative technology solutions.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <ProductsShowcase />
      <Pricing />
      <PromiseSection />
      <Faq />
      <Team />
      {/* <HomeBlogSection posts={posts} /> */}
      <Contact />
      <Technologies />
    </main>
  );
}
