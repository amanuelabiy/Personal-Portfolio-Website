import "./Cube.css";
import { motion } from "framer-motion";
import { FaJava, FaNode } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

function Cube() {
  return (
    <div className="">
      <motion.div className="cube">
        <div className="face">
          <FaJava className="text-red-800 icons" />
        </div>
        <div className="face">
          <FaPython className="text-yellow-500 icons" />
        </div>
        <div className="face">
          <FaReact className="text-cyan-400 icons" />
        </div>
        <div className="face">
          <FaHtml5 className="text-orange-700 icons" />
        </div>
        <div className="face">
          <FaCss3Alt className="text-blue-500 icons" />
        </div>
        <div className="face">
          <FaNodeJs className="text-green-600 icons" />
        </div>
      </motion.div>
    </div>
  );
}

export default Cube;
