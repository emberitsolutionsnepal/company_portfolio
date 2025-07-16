import featuresData from "@/components/Features/featuresData";
import Link from "next/link";

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServicesPage() {
  return (
    <section className="py-20 dark:bg-dark">
      <div className="container mx-auto max-w-4xl px-4">
        <h1 className="mb-10 text-3xl font-bold text-dark dark:text-white">
          Our Services
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {featuresData.map((service) => (
            <div
              key={service.title}
              className="flex flex-col justify-between rounded-lg bg-white p-6 shadow dark:bg-dark-2"
            >
              <h2 className="mb-2 text-xl font-semibold text-dark dark:text-white">
                {service.title}
              </h2>
              <p className="mb-4 text-body-color dark:text-dark-6">
                {service.paragraph}
              </p>
              <Link
                href={`/services/${slugify(service.title)}`}
                className="inline-block rounded bg-primary px-4 py-2 font-medium text-white transition hover:bg-primary/90"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
