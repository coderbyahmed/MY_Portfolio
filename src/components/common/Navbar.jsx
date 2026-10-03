import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import Logo from "./Logo";

const RESUME_FILE = "/Muhammad_Ahmed_Resume.pdf";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-slate-800/80 bg-[#050816]/95 backdrop-blur supports-[backdrop-filter]:bg-[#050816]/90 shadow-sm shadow-sky-500/5"
          : "border-transparent bg-transparent backdrop-blur-0"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo */}
        <div onClick={closeMenu}>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="group relative px-1 py-2 text-sm font-medium tracking-wide text-slate-400 transition-colors duration-200 hover:text-slate-50"
                >
                  {link.name}
                  <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 transform bg-sky-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Buttons: Resume | Let's Talk */}
          <div className="flex items-center gap-3">
            <a
              href={RESUME_FILE}
              download="Muhammad_Ahmed_Resume.pdf"
              className="group inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-5 py-2 text-sm font-medium tracking-wide text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15 hover:text-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:ring-offset-2 focus:ring-offset-[#050816]"
            >
              <FiDownload className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Resume
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 border border-slate-800/80 bg-slate-900/80 px-5 py-2 text-sm font-medium tracking-wide text-slate-50 transition-all hover:border-sky-400/50 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 focus:ring-offset-2 focus:ring-offset-[#050816]"
            >
              Let's Talk
              <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={toggleMenu}
          className="inline-flex items-center justify-center border border-slate-800/80 bg-slate-900/80 p-2 text-slate-400 transition-colors hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-400/20 md:hidden"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <HiX className="h-5 w-5" /> : <HiMenu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-slate-800/80 bg-[#050816]/98 backdrop-blur md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-3 py-2.5 text-base font-medium tracking-wide text-slate-400 transition-colors hover:text-slate-50"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="mt-4 flex items-center gap-3">
                <a
                  href={RESUME_FILE}
                  download="Muhammad_Ahmed_Resume.pdf"
                  onClick={closeMenu}
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-sky-500/40 bg-sky-500/10 px-4 py-2.5 text-sm font-medium tracking-wide text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15"
                >
                  <FiDownload className="h-4 w-4" />
                  Resume
                </a>
                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="inline-flex flex-1 items-center justify-center gap-2 border border-slate-800/80 bg-slate-900/80 px-4 py-2.5 text-sm font-medium tracking-wide text-slate-50 transition-all hover:border-sky-400/50 hover:text-sky-400"
                >
                  Let's Talk
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;