import { FaLink, FaJs } from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiExpress,
  SiJsonwebtokens,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

const Skills = () => {
  const skills = [
    { name: "Node.js", icon: SiNodedotjs, iconColor: "text-[#68A063]", borderColor: "border-[#68A063]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#68A063]" },
    { name: "Express.js", icon: SiExpress, iconColor: "text-slate-50", borderColor: "border-slate-300/30", glow: "group-hover:shadow-[0_0_40px_-20px_#e2e8f0]" },
    { name: "MongoDB", icon: SiMongodb, iconColor: "text-[#47A248]", borderColor: "border-[#47A248]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#47A248]" },
    { name: "MySQL", icon: SiMysql, iconColor: "text-[#00758F]", borderColor: "border-[#00758F]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#00758F]" },
    { name: "Microsoft SQL Server", icon: TbSql, iconColor: "text-[#CC2927]", borderColor: "border-[#CC2927]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#CC2927]" },
    { name: "JavaScript", icon: SiJavascript, iconColor: "text-[#F7DF1E]", borderColor: "border-[#F7DF1E]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#F7DF1E]" },
    { name: "React", icon: SiReact, iconColor: "text-[#61DAFB]", borderColor: "border-[#61DAFB]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#61DAFB]" },
    { name: "HTML5", icon: SiHtml5, iconColor: "text-[#E34F26]", borderColor: "border-[#E34F26]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#E34F26]" },
    { name: "CSS3", icon: SiCss, iconColor: "text-[#1572B6]", borderColor: "border-[#1572B6]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#1572B6]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, iconColor: "text-[#38BDF8]", borderColor: "border-[#38BDF8]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#38BDF8]" },
    { name: "REST API", icon: FaLink, iconColor: "text-sky-400", borderColor: "border-sky-400/30", glow: "group-hover:shadow-[0_0_40px_-20px_#38bdf8]" },
    { name: "JWT", icon: SiJsonwebtokens, iconColor: "text-[#D63AFF]", borderColor: "border-[#D63AFF]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#D63AFF]" },
    { name: "Mongoose", icon: SiMongodb, iconColor: "text-[#A12115]", borderColor: "border-[#A12115]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#A12115]" },
    { name: "Joi", icon: FaJs, iconColor: "text-[#F7DF1E]", borderColor: "border-[#F7DF1E]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#F7DF1E]" },
    { name: "Axios", icon: FaLink, iconColor: "text-[#5A29E4]", borderColor: "border-[#5A29E4]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#5A29E4]" },
    { name: "Git", icon: SiGit, iconColor: "text-[#F05032]", borderColor: "border-[#F05032]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#F05032]" },
    { name: "GitHub", icon: SiGithub, iconColor: "text-slate-50", borderColor: "border-slate-50/30", glow: "group-hover:shadow-[0_0_40px_-20px_#f8fafc]" },
    { name: "Postman", icon: SiPostman, iconColor: "text-[#FF6C37]", borderColor: "border-[#FF6C37]/30", glow: "group-hover:shadow-[0_0_40px_-20px_#FF6C37]" },
  ];

  return (
    <section id="skills" className="relative py-14 sm:py-16 lg:py-20">
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
                02
              </span>
              <div className="h-px flex-1 bg-slate-800/80" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">
                TECHNICAL SKILLS
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Technologies I work with
              </h2>
              <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
                A practical stack focused on backend development, APIs,
                databases and modern full-stack applications.
              </p>
            </div>
          </div>

          {/* Individual Technology Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4 xl:grid-cols-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className={`group relative flex flex-col items-center justify-center gap-3 border ${skill.borderColor} bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-900/60 ${skill.glow}`}
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay={index * 30}
                >
                  <Icon className={`h-10 w-10 ${skill.iconColor} sm:h-12 sm:w-12`} />
                  <span className="text-center text-sm font-medium tracking-tight text-slate-200">
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl lg:block" />
    </section>
  );
};

export default Skills;
