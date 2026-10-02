
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/coderbyahmed",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/coderby-ahmad-415543374/",
      icon: FaLinkedin,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/923178497732?text=Hi%20Muhammad%20Ahmed%2C%20I%20just%20visited%20your%20portfolio%20and%20I'd%20love%20to%20discuss%20a%20potential%20project%20with%20you.%20Could%20we%20have%20a%20quick%20chat%3F",
      icon: FaWhatsapp,
    },
  ];

  return (
    <footer className="w-full overflow-x-hidden border-t border-slate-800/80 bg-[#050816]">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center border border-slate-800/80 bg-gradient-to-br from-slate-900 to-slate-950 text-sm font-semibold text-slate-50 shadow-[0_0_0_1px_rgba(14,165,233,0.08)]">
                MA
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-base font-medium tracking-tight text-sky-400">
                  Muhammad Ahmed
                </span>
                <span className="text-xs font-normal tracking-[0.2em] uppercase text-slate-400">
                  Backend-Focused Full Stack Developer
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col items-center gap-4 md:items-center">
            <ul className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-1 sm:gap-x-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap text-xs text-slate-400 transition-colors hover:text-slate-50 sm:text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className="flex flex-col items-center gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group flex h-9 w-9 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="mt-8 border-t border-slate-800/60 pt-6">
          <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
            <p className="text-xs text-slate-500 sm:text-sm">
              © {currentYear} Muhammad Ahmed. All rights reserved.
            </p>
            <p className="text-xs text-slate-500 sm:text-sm">
              Designed & built by Muhammad Ahmed
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;