import SectionTitle from "../Common/SectionTitle";
import { CheckCircle, Clock, Shield, Users } from "lucide-react";

const PromiseSection = () => {
  const promises = [
    {
      id: 1,
      icon: Shield,
      title: "Quality Guaranteed",
      description:
        "We guarantee the highest quality code and deliverables. Every project undergoes rigorous testing and review processes.",
    },
    {
      id: 2,
      icon: Clock,
      title: "On-Time Delivery",
      description:
        "We commit to delivering your project on schedule. Our agile methodology ensures transparent progress tracking.",
    },
    {
      id: 3,
      icon: Users,
      title: "Dedicated Support",
      description:
        "Our team provides ongoing support and maintenance. We're here to help you succeed long after launch.",
    },
    {
      id: 4,
      icon: CheckCircle,
      title: "Satisfaction Promise",
      description:
        "Your satisfaction is our priority. We work closely with you to ensure the final product exceeds expectations.",
    },
  ];

  return (
    <section className="bg-gray-1 py-20 dark:bg-dark-2 md:py-[120px]">
      <div className="container px-4">
        <SectionTitle
          subtitle="Our Promise"
          title="What We Guarantee"
          paragraph="We're committed to delivering exceptional results and building lasting partnerships. Here's what you can expect when you choose TechDev Solutions."
          width="640px"
          center
        />

        <div className="mt-[60px] grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {promises.map((promise) => (
            <div
              key={promise.id}
              className="group relative rounded-lg bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-dark-3"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary bg-opacity-10 text-primary transition-all duration-300 group-hover:scale-110">
                <promise.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-dark dark:text-white">
                {promise.title}
              </h3>
              <p className="dark:text-body-color-dark text-body-color">
                {promise.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mx-auto max-w-3xl rounded-lg bg-primary bg-opacity-5 p-8 dark:bg-primary dark:bg-opacity-10">
            <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
              Ready to Get Started?
            </h3>
            <p className="dark:text-body-color-dark mb-6 text-body-color">
              Let's discuss your project and see how we can help bring your
              vision to life.
            </p>
            <button className="rounded-md bg-primary px-8 py-3 text-white transition-all duration-300 hover:bg-primary/90">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;
