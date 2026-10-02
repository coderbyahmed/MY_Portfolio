
import { FaServer, FaDatabase, FaExchangeAlt, FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-14 sm:py-16 lg:py-20">
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
                01
              </span>
              <div className="h-px flex-1 bg-slate-800/80" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">
                ABOUT ME
              </span>
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Building systems that work behind the scenes.
            </h2>
          </div>

          {/* Main Layout */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Side - Introduction */}
            <div
              className="flex flex-col gap-6"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Muhammad Ahmed
              </h3>
              <p className="text-base font-medium text-sky-400 sm:text-lg">
                Backend-Focused Full Stack Developer
              </p>
              <div className="flex flex-col gap-5 text-base text-slate-400 sm:text-lg">
                <p>
                  I'm a Backend-Focused Full Stack Developer who enjoys building
                  reliable REST APIs, database-driven applications and complete
                  web systems. My primary focus is Node.js, Express.js, MongoDB
                  and REST API development, while I use React to build modern
                  frontend experiences.
                </p>
                <p>
                  I enjoy working with clean, modular architecture and putting
                  strong emphasis on scalability, maintainability and
                  authentication to build solutions that are built to last.
                </p>
              </div>

              <div className="mt-4 flex flex-col gap-6">
                <p className="text-base font-medium text-slate-300 sm:text-lg">
                  Currently focused on building real-world backend systems and
                  full-stack applications.
                </p>
                <div>
                  <a
                    href="/Muhammad_Ahmed_Resume.pdf"
                    download="Muhammad_Ahmed_Resume.pdf"
                    className="group inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-6 py-3 text-sm font-medium tracking-wide text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-400/30 sm:px-7 sm:py-3.5"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Developer Highlights */}
            <div
              className="flex flex-col gap-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              {/* Highlights Grid */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="group flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-sky-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-sky-400">
                      <FaServer className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-50">
                      Backend
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    Node.js · Express.js
                  </p>
                </div>

                <div className="group flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-sky-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-sky-400">
                      <FaDatabase className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-50">
                      Database
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    MongoDB · MySQL · SQL Server
                  </p>
                </div>

                <div className="group flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-sky-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-sky-400">
                      <FaExchangeAlt className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-50">
                      API
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    REST APIs · JWT · Middleware
                  </p>
                </div>

                <div className="group flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5 transition-colors hover:border-sky-500/30">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-sky-400">
                      <FaCode className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm font-medium uppercase tracking-[0.2em] text-slate-50">
                      Frontend
                    </h4>
                  </div>
                  <p className="text-sm text-slate-400">
                    React · JavaScript · Tailwind CSS
                  </p>
                </div>
              </div>

              {/* Subtle Architecture Visual */}
              <div className="mt-2 flex items-center justify-center border border-slate-800/60 bg-slate-900/30 p-6">
                <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:gap-6">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                    CLIENT
                  </span>
                  <span className="hidden text-sky-400 sm:block">↓</span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-sky-400">
                    REST API
                  </span>
                  <span className="hidden text-sky-400 sm:block">↓</span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                    SERVER
                  </span>
                  <span className="hidden text-sky-400 sm:block">↓</span>
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-slate-300">
                    DATABASE
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden h-[30rem] w-[30rem] -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl lg:block" />
    </section>
  );
};

export default About;