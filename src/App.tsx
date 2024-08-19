import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  const scrollToContactSection = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAboutSection = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToSkillsSection = () => {
    const skillsSection = document.getElementById("skills");

    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjectsSection = () => {
    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar
          scrollToAboutSection={scrollToAboutSection}
          scrollToSkillsSection={scrollToSkillsSection}
          scrollToProjectsSection={scrollToProjectsSection}
        />
        <Hero scrollToContactSection={scrollToContactSection} />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
}

export default App;
