"use client";

import Image from "next/image";
import { useState } from "react";

export const productList = [
  {
    name: "Life Hub",
    description:
      "Ultimate productivity app for individuals to manage their day-to-day activities. Track tasks, habits, moods, and finances in one comprehensive platform.",
    image: "/images/products/lifehub.png",
    features: [
      "Task management",
      "Habit tracking",
      "Mood monitoring",
      "Financial planning",
    ],
    tech: ["Flutter", "Dart", "Supabase"],
    demo: "#",
    // type: "Web",
  },
  {
    name: "CRMLite",
    description:
      "Lightweight CRM solution designed for small businesses to manage customer relationships, sales pipelines, and business operations efficiently.",
    image: "/images/products/crmlite.png",
    features: [
      "Customer management",
      "Sales pipeline tracking",
      "Lead management",
      "Business analytics",
    ],
    tech: ["Flutter", "Dart", "Firebase"],
    demo: "#",
    // type: "Web",
  },
  {
    name: "Local Business Website",
    description:
      "UI template for a local business website (e.g., beauty salon) with booking and gallery sections. Not a live product.",
    image: "/images/blog/small_website.webp",
    features: [
      "Responsive landing page",
      "Online booking",
      "Contact form",
      "Gallery / Reviews section",
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    demo: "#",
    // type: "Web",
  },
  {
    name: "Mobile App for Grocery",
    description:
      "UI demo for a mobile grocery shopping app. This is a design template, not a working app.",
    image: "/images/blog/grocery.webp",
    features: [
      "User login/sign up",
      "Booking or order system",
      "Payment integration (optional)",
    ],
    tech: ["Flutter", "Firebase"],
    demo: "#",
    // type: "Mobile",
  },
  {
    name: "Admin Dashboard for Business",
    description:
      "UI concept for a business admin dashboard (CRM, analytics, etc.). Not a real product.",
    image: "/images/blog/dashboard.png",
    features: ["Login + roles", "Analytics dashboard", "CRUD operations"],
    tech: ["React", "Node.js", "MongoDB"],
    demo: "#",
    // type: "Web",
  },
  {
    name: "E-commerce",
    description:
      "UI template for an e-commerce storefront with product filters and cart. Not a live shop.",
    image: "/images/blog/ecommerce.jpg",
    features: [
      "Product catalog",
      "Cart + checkout (dummy)",
      "Payment gateway (mocked)",
    ],
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    demo: "#",
    // type: "Web",
  },
  // {
  //   name: "School or Learning Portal",
  //   description:
  //     "Learning portal with video lessons, class schedules, and quiz tracking.",
  //   image: "/images/about/about-image-02.jpg",
  //   features: ["Student dashboard", "Course pages", "Exam or quiz section"],
  //   tech: ["React", "Supabase", "Tailwind CSS"],
  //   demo: "#",
  // },
  // {
  //   name: "AI Tool / Automation Mockup",
  //   description: "Email reply automation tool for customer support teams.",
  //   image: "/images/blog/blog-footer-01.jpg",
  //   features: ["Auto email responder", "Simple chatbot", "Data extractor"],
  //   tech: ["Python", "OpenAI API", "Next.js"],
  //   demo: "#",
  // },
  // {
  //   name: "Portfolio Website Template",
  //   description: "Portfolio template for freelancers to showcase their work.",
  //   image: "/images/blog/blog-footer-02.jpg",
  //   features: ["Project gallery", "About + services", "Contact form"],
  //   tech: ["Next.js", "Tailwind CSS"],
  //   demo: "#",
  // },
];

const techIcons: Record<string, string> = {
  React: "/images/technologies/reactjs.png",
  "Next.js": "/images/technologies/nextjs.png",
  "Tailwind CSS": "/images/technologies/tailwindcss.png",
  Flutter: "/images/technologies/flutter.png",
  Firebase: "/images/technologies/digitalocean.png", // Placeholder
  "Node.js": "/images/technologies/nodejs.png",
  MongoDB: "/images/technologies/aws.png", // Placeholder
  Stripe: "/images/technologies/aws.png", // Placeholder
  Supabase: "/images/technologies/digitalocean.png", // Placeholder
  Python: "/images/technologies/python.png",
  "OpenAI API": "/images/technologies/aws.png", // Placeholder
};

const ProductsShowcase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const openModal = (img: string) => {
    setModalImage(img);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };

  return (
    <section className="bg-white py-16 dark:bg-dark">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white">
            Our Products showcase
          </h2>
          <p className="text-base text-body-color dark:text-dark-6">
            Explore our gallery of UI templates and demo interfaces for various
            business needs. Some of these are not live products, but
            ready-to-use UI concepts and design inspirations while some are
            ready to use products.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {productList.map((product) => (
            <div
              key={product.name}
              className="flex h-full min-w-[270px] flex-col items-center overflow-hidden rounded-2xl bg-white p-10 shadow-lg dark:bg-dark-2"
            >
              <div
                className="mb-6 w-full cursor-pointer"
                onClick={() => openModal(product.image)}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={260}
                  height={160}
                  className="h-[160px] w-full rounded-lg object-cover transition-transform hover:scale-105"
                />
              </div>
              <h3 className="mb-2 text-center text-lg font-semibold text-dark dark:text-white">
                {product.name}
              </h3>
              <p className="text-justify text-sm text-body-color dark:text-dark-6">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for large image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative mx-4 w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute right-2 top-2 z-10 rounded-full bg-white/80 p-2 text-black hover:bg-white"
              onClick={closeModal}
              aria-label="Close image preview"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 6L6 18M6 6l12 12"
                />
              </svg>
            </button>
            <Image
              src={modalImage || ""}
              alt="Large preview"
              width={900}
              height={600}
              className="h-auto w-full rounded-lg bg-white object-contain dark:bg-dark"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsShowcase;
