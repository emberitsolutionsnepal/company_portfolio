import featuresData from "@/components/Features/featuresData";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = featuresData.find((s) => slugify(s.title) === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <section className="py-20 dark:bg-dark">
      <div className="container mx-auto max-w-3xl px-4">
        <h1 className="mb-6 text-3xl font-bold text-dark dark:text-white">
          {service.title}
        </h1>
        <div className="mb-6">
          {/* Placeholder image, can be replaced with real one later */}
          <Image
            src="/images/about/about-image-01.jpg"
            alt={service.title}
            width={800}
            height={400}
            className="mb-4 h-64 w-full rounded-lg object-cover"
          />
        </div>
        {service.fullDescription ? (
          <div className="prose prose-lg dark:prose-invert mb-6 max-w-none">
            <ReactMarkdown>{service.fullDescription}</ReactMarkdown>
          </div>
        ) : (
          <p className="mb-6 text-lg text-body-color dark:text-dark-6">
            {service.paragraph}
          </p>
        )}
        {service.btn && (
          <a
            href="#contact"
            className="inline-block rounded bg-primary px-6 py-2 font-medium text-white transition hover:bg-primary/90"
          >
            Contact Us
          </a>
        )}
      </div>
    </section>
  );
}
