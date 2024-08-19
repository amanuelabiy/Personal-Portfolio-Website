import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

interface NavbarProps {
  scrollToAboutSection: () => void;
  scrollToSkillsSection: () => void;
  scrollToProjectsSection: () => void;
}

function Navbar({
  scrollToAboutSection,
  scrollToSkillsSection,
  scrollToProjectsSection,
}: NavbarProps) {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="hidden lg:flex items-center gap-4 text-l">
        <button onClick={scrollToAboutSection}>About</button>
        <button onClick={scrollToSkillsSection}>Skills</button>
        <button onClick={scrollToProjectsSection}>Projects</button>
      </div>

      <div className="flex items-center gap-4 text-l lg:hidden"></div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/amanuel-abiy-96a9a1262/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/amanuelabiy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
