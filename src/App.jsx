import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import BackendExpertise from "./components/sections/BackendExpertise";
import Contact from "./components/sections/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <div className="flex min-h-screen w-full flex-col overflow-x-hidden bg-[#050816] text-slate-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <BackendExpertise />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;