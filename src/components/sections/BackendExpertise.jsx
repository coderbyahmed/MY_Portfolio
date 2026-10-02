

import { FaDatabase, FaKey, FaCloudUploadAlt, FaLink } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";
import { TbSql } from "react-icons/tb";

const backendExpertise = [
  {
    title: "Node.js & Express.js",
    description:
      "Building scalable, modular backend applications with clean routing, controllers, and middleware architecture.",
    icon: SiNodedotjs,
  },
  {
    title: "REST API Development",
    description:
      "Designing and developing well-structured RESTful APIs with proper HTTP methods, status codes, and error handling.",
    icon: FaLink,
  },
  {
    title: "Database Management",
    description:
      "Working with MongoDB, MySQL and Microsoft SQL Server to design efficient schemas and manage relational/non-relational data.",
    icon: FaDatabase,
  },
  {
    title: "MongoDB & Mongoose",
    description:
      "Creating data models, validations, and relationships using Mongoose ODM for structured and scalable data handling.",
    icon: SiMongodb,
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implementing secure user authentication and route protection using JWT tokens and custom middleware.",
    icon: FaKey,
  },
  {
    title: "API Validation & Middleware",
    description:
      "Validating incoming requests, handling errors centrally, and applying reusable middleware for cleaner logic.",
    icon: SiExpress,
  },
  {
    title: "File Uploads",
    description:
      "Handling file uploads and cloud storage integration with a focus on reliability and secure file management.",
    icon: FaCloudUploadAlt,
  },
  {
    title: "Relational Databases",
    description:
      "Writing efficient queries and managing structured data with MySQL and Microsoft SQL Server.",
    icon: TbSql,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div
            className="flex flex-col gap-6"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="flex items-center gap-4">
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-sky-400">
                04
              </span>
              <div className="h-px flex-1 bg-slate-800/80" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">
                EXPERIENCE
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Backend Expertise
              </h2>
              <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
                Core backend capabilities focused on building scalable,
                secure, and maintainable server-side applications.
              </p>
            </div>
          </div>

          {/* Backend Expertise Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {backendExpertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group flex flex-col gap-4 border border-slate-800/80 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/30"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={index * 40}
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-sky-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden h-[30rem] w-[30rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl lg:block" />
    </section>
  );
};

export default Experience;