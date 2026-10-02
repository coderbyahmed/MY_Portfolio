import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const roles = [
  "Backend Developer",
  "Full Stack Developer",
  "REST API Developer",
  "Node.js Developer",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(120);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          setTypingSpeed(1600);
          setIsDeleting(true);
        }
      } else {
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
          setTypingSpeed(80);
        } else {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(40);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  // Image replacement location: public/profile-placeholder.jpg (or src/assets)
  const profileImageUrl = "/Ahmed_hero_img.jpeg";

  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] items-center sm:min-h-[95svh]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side */}
          <div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="mb-6 inline-flex items-center gap-2 border border-slate-800/80 bg-slate-900/60 px-3 py-1 text-xs font-medium tracking-[0.25em] uppercase text-sky-400 backdrop-blur-sm">
              HELLO, I'M
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
              Muhammad Ahmed
            </h1>

            <div className="mt-4 flex min-h-[3rem] items-center justify-center lg:justify-start sm:min-h-[3.5rem]">
              <h2 className="text-lg font-medium tracking-tight text-sky-400 sm:text-xl md:text-2xl lg:text-3xl">
                {displayText}
                <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-sky-400 sm:h-7 md:h-8" />
              </h2>
            </div>

            <p className="mt-6 max-w-xl text-base text-slate-400 sm:text-lg">
              I build reliable REST APIs, backend systems and modern full-stack
              applications with a focus on clean architecture, authentication
              and scalable database-driven solutions.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-6 py-3 text-sm font-medium tracking-wide text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-400/30 sm:px-7 sm:py-3.5"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 border border-slate-800/80 bg-slate-900/80 px-6 py-3 text-sm font-medium tracking-wide text-slate-50 transition-all hover:border-sky-400/40 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 sm:px-7 sm:py-3.5"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/coderbyahmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group inline-flex items-center gap-2 border border-slate-800/80 bg-slate-900/80 px-4 py-3 text-sm font-medium tracking-wide text-slate-50 transition-all hover:border-sky-400/40 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 sm:px-5 sm:py-3.5"
              >
                <FaGithub className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/coderbyahmed"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/coderby-ahmad-415543374/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ahmedazizkhan405@gmail.com"
                aria-label="Email"
                className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>

            {/* Status Indicator */}
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-slate-800/80 bg-slate-900/60 px-4 py-1.5 text-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
              </span>
              <span className="text-slate-300">
                Available for Opportunities
              </span>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className="relative flex items-center justify-center lg:justify-end"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="relative flex items-center justify-center">
              {/* Accent ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-sky-500/20 via-transparent to-sky-500/20 blur-sm sm:-inset-6" />
              <div className="absolute -inset-2 rounded-full border border-sky-500/20 sm:-inset-3" />

              {/* Profile image container */}
              <div className="relative aspect-square w-64 overflow-hidden rounded-full border border-slate-800/80 bg-slate-900/60 p-1 shadow-[0_0_80px_-20px_rgba(14,165,233,0.25)] sm:w-80 lg:w-96">
                <img
                  src={profileImageUrl}
                  alt="Muhammad Ahmed - Backend-Focused Full Stack Developer"
                  className="h-full w-full rounded-full object-cover object-center"
                  loading="eager"
                  draggable={false}
                />
              </div>

              {/* Subtle decorative elements */}
              <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm sm:-top-8 sm:-right-8 sm:h-24 sm:w-24" />
              <div className="pointer-events-none absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm sm:-bottom-6 sm:-left-6 sm:h-20 sm:w-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-500/10 blur-3xl sm:-top-32" />
      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden h-[30rem] w-[30rem] -translate-y-1/2 -translate-x-1/2 rounded-full bg-sky-500/5 blur-3xl lg:block" />
    </section>
  );
};

export default Hero;
