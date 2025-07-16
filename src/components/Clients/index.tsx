import SingleClient from "./SingleClient";
import { technologiesData } from "./clientsData";

const Technologies = () => {
  return (
    <section className="pb-20 dark:bg-dark">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h3 className="mb-4 text-2xl font-bold text-dark dark:text-white">
            Technologies We Master
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            We work with cutting-edge technologies to deliver modern, scalable
            solutions
          </p>
        </div>
        <div className="-mx-4 flex flex-wrap items-center justify-center gap-8 xl:gap-11">
          {technologiesData.map((tech, i) => (
            <SingleClient key={i} client={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
