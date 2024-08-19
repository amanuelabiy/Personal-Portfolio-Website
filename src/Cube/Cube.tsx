import "./Cube.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Cube() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1023);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1023);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLargeScreen ? 100 : 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className={`cube-wrapper ${isLargeScreen ? "" : "small-screen"}`}
    >
      <motion.div className="cube">
        <div className="face">
          <FaJava
            className={`text-red-800 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
        <div className="face">
          <FaPython
            className={`text-yellow-500 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
        <div className="face">
          <FaReact
            className={`text-cyan-400 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
        <div className="face">
          <FaHtml5
            className={`text-orange-700 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
        <div className="face">
          <FaCss3Alt
            className={`text-blue-500 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
        <div className="face">
          <FaNodeJs
            className={`text-green-600 ${isLargeScreen ? "" : "small-icons"}`}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Cube;
