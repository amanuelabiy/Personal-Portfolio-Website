import { motion, type Variants } from "framer-motion";

import TypeScriptLogo from "../assets/Languages/Typescript_logo_2020.svg.png";
import JavaScriptLogo from "../assets/Languages/JavaScript-logo.png";
import JavaLogo from "../assets/Languages/181_Java_logo_logos-512.webp";
import PythonLogo from "../assets/Languages/Python_logo_01.svg.png";
import CPlusPlusLogo from "../assets/Languages/C++_logo.png";

interface FrameworksProps {
  iconVariants: (duration: number) => Variants;
}

function Languages({ iconVariants }: FrameworksProps) {
  return (
    <div>
      {" "}
      <motion.h2
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Languages
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={TypeScriptLogo} alt="TypeScript" width={60}></img>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={JavaScriptLogo} alt="JavaScript" width={60} />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={JavaLogo} alt="Java" width={60} />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={PythonLogo} alt="Python" width={60} />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={CPlusPlusLogo} alt="C++" width={60} />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Languages;
