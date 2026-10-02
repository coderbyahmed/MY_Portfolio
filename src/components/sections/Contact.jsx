import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";

const contactInfo = {
  email: "ahmedazizkhan405@gmail.com",
  whatsapp: "https://wa.me/923178497732?text=Hi%20Muhammad%20Ahmed%2C%20I%20just%20visited%20your%20portfolio%20and%20I'd%20love%20to%20discuss%20a%20potential%20project%20with%20you.%20Could%20we%20have%20a%20quick%20chat%3F",
  github: "https://github.com/coderbyahmed",
  linkedin: "https://www.linkedin.com/in/coderby-ahmad-415543374/",
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }
    setStatus("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section
      id="contact"
      className="relative pt-14 pb-20 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28"
    >
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
                06
              </span>
              <div className="h-px flex-1 bg-slate-800/80" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">
                GET IN TOUCH
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Let's build something together.
              </h2>
              <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
                Have a project, opportunity, or idea in mind? Feel free to get
                in touch.
              </p>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1.95fr] lg:gap-16">
            {/* Left Side - Contact Info */}
            <div
              className="flex flex-col gap-8"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-slate-50">
                  Contact Information
                </h3>
                <p className="text-base text-slate-400">
                  I'd love to hear about your project or opportunity.
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                  EMAIL
                </span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-base font-medium text-slate-50 transition-colors hover:text-sky-400"
                >
                  {contactInfo.email}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-4 border border-slate-800/80 bg-slate-900/40 p-5">
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                    WHATSAPP
                  </span>
                  <p className="text-sm text-slate-400">
                    Feel free to reach out for a quick conversation.
                  </p>
                </div>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 border border-sky-500/40 bg-sky-500/10 px-5 py-2.5 text-sm font-medium text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15"
                >
                  <FaWhatsapp className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-2 border border-slate-800/80 bg-slate-900/40 p-5">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                  LOCATION
                </span>
                <span className="text-base text-slate-50">Pakistan</span>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-4">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-slate-400">
                  Social Links
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    aria-label="Email"
                    className="group flex h-10 w-10 items-center justify-center border border-slate-800/80 bg-slate-900/80 text-slate-400 transition-all hover:border-sky-400/50 hover:text-sky-400"
                  >
                    <FaEnvelope className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 border border-slate-800/80 bg-slate-900/40 p-6 sm:p-8"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-200">
                      Name <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border border-slate-800/80 bg-slate-950/40 px-4 py-3 text-slate-50 placeholder-slate-500 transition-colors focus:border-sky-400/60 focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-medium text-slate-200">
                      Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="border border-slate-800/80 bg-slate-950/40 px-4 py-3 text-slate-50 placeholder-slate-500 transition-colors focus:border-sky-400/60 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="border border-slate-800/80 bg-slate-950/40 px-4 py-3 text-slate-50 placeholder-slate-500 transition-colors focus:border-sky-400/60 focus:outline-none"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-slate-200">
                    Message <span className="text-sky-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell me a little about your project or opportunity..."
                    className="resize-y border border-slate-800/80 bg-slate-950/40 px-4 py-3 text-slate-50 placeholder-slate-500 transition-colors focus:border-sky-400/60 focus:outline-none"
                  />
                </div>
                {status && <div className="text-sm text-sky-300">{status}</div>}
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/10 px-6 py-3 text-sm font-medium text-sky-300 transition-all hover:border-sky-400/60 hover:bg-sky-500/15 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-slate-800/80 to-transparent" />
    </section>
  );
};

export default Contact;
