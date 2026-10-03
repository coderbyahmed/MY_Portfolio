import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import analogClockImg from "../../assets/images/javascript/Analog_Clock_img.png";
import calculatorImg from "../../assets/images/javascript/Calculater_img.png";
import digitalClockImg from "../../assets/images/javascript/Digital_Clock_img.png";
import movieAppImg from "../../assets/images/javascript/Movie_App_img.png";
import schoolsInfoImg from "../../assets/images/javascript/SchoolS_Info_img.png";
import todoAppImg from "../../assets/images/javascript/Todo_App_img.png";
import weatherAppImg from "../../assets/images/javascript/Weather_App_img.png";

import ecommerceImg from "../../assets/images/react/E_Commerce_ianding_page_img.png";
import playtubeImg from "../../assets/images/react/Play_Tube_img.png";
import techVisionImg from "../../assets/images/react/Tech_Vision_Institute_img.png";
import reactTodoImg from "../../assets/images/react/Todo_app_img.png";

import assetMgmtImg from "../../assets/images/backend/Asset_Management_img.png";
import firebaseLoginImg from "../../assets/images/backend/Firebase_login_Signup_img.png";
import firebaseUserMgmtImg from "../../assets/images/backend/Firebase_User_management_System_img.png";

import soundGroupImg from "../../assets/images/fullStack/Sound_Group_img.png";
// Temporary placeholder — replace with the real Cartify screenshot when available.
import cartifyImg from "../../assets/images/fullStack/Cartify_placeholder_img.svg";

const projectsData = [
  {
    id: 10,
    title: "Analog Clock",
    description:
      "A responsive analog clock built with HTML, CSS and JavaScript with real-time clock updates.",
    image: analogClockImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/JS_Analog_Clock.git",
    liveDemo: "https://js-analog-clock-two.vercel.app/",
  },
  {
    id: 11,
    title: "Calculator",
    description:
      "A functional calculator interface built with HTML, CSS and JavaScript for performing basic arithmetic operations.",
    image: calculatorImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/Saylani-Calculater.git",
    liveDemo: "https://coderbyahmed.github.io/Saylani-Calculater/",
  },
  {
    id: 12,
    title: "Digital Clock",
    description:
      "A real-time digital clock built with HTML, CSS and JavaScript with a clean responsive interface.",
    image: digitalClockImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/SMIT-Digital-Clock.git",
    liveDemo: "https://coderbyahmed.github.io/SMIT-Digital-Clock/",
  },
  {
    id: 13,
    title: "Movie App",
    description:
      "A JavaScript-based movie application for browsing and displaying movie information through a responsive interface.",
    image: movieAppImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/JS_Movie_App.git",
    liveDemo: "https://js-movie-app-rust.vercel.app/",
  },
  {
    id: 14,
    title: "Schools Info",
    description:
      "A responsive school information interface built with HTML, CSS and JavaScript.",
    image: schoolsInfoImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/APTECH-E-PROJECT-SM-1.git",
    liveDemo: "https://coderbyahmed.github.io/APTECH-E-PROJECT-SM-1/",
  },
  {
    id: 15,
    title: "To-Do App",
    description:
      "A simple task management application built with HTML, CSS and JavaScript for adding and managing tasks.",
    image: todoAppImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/coderbyahmed/JS_Todo_App.git",
    liveDemo: "https://js-todo-app-sable.vercel.app/",
  },
  {
    id: 16,
    title: "Weather App",
    description:
      "A weather application that retrieves and displays weather information using JavaScript and an external weather API.",
    image: weatherAppImg,
    category: ["JavaScript"],
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/coderbyahmed/JS_Weather_App.git",
    liveDemo: "https://js-weather-app-green.vercel.app/",
  },
  {
    id: 17,
    title: "E-commerce Landing Page",
    description:
      "Simple and responsive e-commerce landing page built with React, using Ant Design components for a clean and polished interface.",
    image: ecommerceImg,
    category: ["React"],
    technologies: ["HTML", "CSS", "React", "Ant Design"],
    github: "https://github.com/coderbyahmed/React_landing_anth_design.git",
    liveDemo: "https://react-landing-anth-design.vercel.app/",
  },
  {
    id: 18,
    title: "PlayTube",
    description:
      "React-based video platform interface with multiple views and client-side routing for navigating between pages.",
    image: playtubeImg,
    category: ["React"],
    technologies: ["HTML", "CSS", "React", "React Router"],
    github: "https://github.com/coderbyahmed/React_Play_Tube.git",
    liveDemo: "https://react-play-tube.vercel.app/",
  },
  {
    id: 19,
    title: "Tech Vision Institute",
    description:
      "Multi-page institute website built with React, featuring multiple pages and client-side routing.",
    image: techVisionImg,
    category: ["React"],
    technologies: ["HTML", "CSS", "React", "React Router"],
    github: "https://github.com/coderbyahmed/React_TechVision_Institute.git",
    liveDemo: "https://react-tech-vision-institute.vercel.app/",
  },
  {
    id: 20,
    title: "ToDo App",
    description:
      "React-based ToDo application with Firebase integration for handling application data.",
    image: reactTodoImg,
    category: ["React"],
    technologies: ["HTML", "CSS", "React", "Firebase"],
    github: "https://github.com/coderbyahmed/React_Todo_App.git",
    liveDemo: "https://react-todo-app-ecru-mu.vercel.app/",
  },
  {
    id: 21,
    title: "Asset Management",
    description:
      "A complete Asset Management System built with HTML, CSS, JavaScript and Firebase, including proper asset management functionality and Firebase integration.",
    image: assetMgmtImg,
    category: ["Backend"],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/coderbyahmed/Saylani_Mini_Hackthon.git",
    liveDemo: "https://saylani-mini-hackthon.vercel.app/pages/auth/signup.html",
  },
  {
    id: 22,
    title: "Firebase Login Signup",
    description:
      "A simple Firebase authentication project featuring login, signup, dashboard access and logout functionality.",
    image: firebaseLoginImg,
    category: ["Backend"],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/coderbyahmed/firebase-login-signup.git",
    liveDemo: "https://firebase-login-signup-zeta.vercel.app/",
  },
  {
    id: 23,
    title: "Firebase User Management",
    description:
      "A Firebase-based user management dashboard with authentication and complete user CRUD functionality including add, update and delete operations.",
    image: firebaseUserMgmtImg,
    category: ["Backend"],
    technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/coderbyahmed/firebase-user-management-system.git",
    liveDemo: "https://firebase-user-management-system-omega.vercel.app/signup.html",
  },
  {
    id: 24,
    title: "Sound Group",
    description:
      "A complete Sound Group web application for music and video content, featuring a public-facing website along with a complete admin panel built with PHP.",
    image: soundGroupImg,
    category: ["Full Stack"],
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "PHP Mailer"],
    github: "https://github.com/coderbyahmed/APTECH_E-PROJECT_SM-2.git",
    liveDemo: "https://soundgroup.infinityfreeapp.com/frontend/website/index.php",
  },
  {
    id: 25,
    title: "Cartify",
    description:
      "An e-commerce backend API currently under development, built with Node.js and Express.js, providing authentication, product management, image uploads and database-driven REST APIs.",
    image: cartifyImg,
    category: ["Full Stack"],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "bcrypt",
      "Joi",
      "Multer",
      "Cloudinary",
    ],
    github: "https://github.com/coderbyahmed/Cartify.git",
    liveDemo: "",
  },
];

const filters = ["All", "JavaScript", "React", "Backend", "Full Stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Filtering is driven strictly by the project's category field.
  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) =>
          project.category.includes(activeFilter)
        );

  return (
    <section id="projects" className="relative py-14 sm:py-16 lg:py-20">
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
                03
              </span>
              <div className="h-px flex-1 bg-slate-800/80" />
              <span className="text-xs font-medium tracking-[0.3em] uppercase text-slate-400">
                FEATURED PROJECTS
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                Projects I've built
              </h2>
              <p className="max-w-2xl text-base text-slate-400 sm:text-lg">
                A selection of real-world applications, APIs and development
                projects I've worked on.
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center px-3 py-1.5 text-sm font-medium transition-all sm:px-4 sm:py-2 ${
                  activeFilter === filter
                    ? "border border-sky-500/40 bg-sky-500/10 text-sky-300"
                    : "border border-slate-800/80 bg-slate-900/60 text-slate-400 hover:border-sky-400/30 hover:text-slate-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group flex flex-col border border-slate-800/80 bg-slate-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:border-sky-500/30"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={index * 50}
              >
                {/* Project Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-slate-800/80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-slate-950/0 transition-all duration-300 group-hover:bg-slate-950/60" />
                  {/* Overlay Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.github &&
                      project.github.trim() !== "" &&
                      project.github !== "#" && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-slate-50/20 bg-slate-950/80 px-4 py-2 text-sm font-medium text-slate-50 backdrop-blur-sm transition-all hover:border-slate-50/40 hover:bg-slate-950/90"
                        >
                          <FaGithub className="h-4 w-4" />
                          GitHub
                        </a>
                      )}
                    {project.liveDemo &&
                      project.liveDemo.trim() !== "" &&
                      project.liveDemo !== "#" && (
                        <a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-sky-500/40 bg-sky-500/20 px-4 py-2 text-sm font-medium text-sky-200 backdrop-blur-sm transition-all hover:border-sky-400/60 hover:bg-sky-500/30"
                        >
                          <FaExternalLinkAlt className="h-4 w-4" />
                          Live Demo
                        </a>
                      )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="flex flex-1 flex-col gap-5 p-6 sm:p-7">
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-base text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  {/* Technology Tags */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 text-xs font-medium text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-1/3 -z-10 hidden h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/5 blur-3xl lg:block" />
    </section>
  );
};

export default Projects;
