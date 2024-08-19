import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Cube from "../Cube/Cube";

interface HeroProps {
  scrollToContactSection: () => void;
}

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

function Hero({ scrollToContactSection }: HeroProps) {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Hi
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="lg:pb-16 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-100 via-slate-500 to-purple-500 bg-clip-text text-5xl tracking-tight text-transparent font-bold lg:text-8xl">
                A
              </span>
              manuel,
            </motion.h1>
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent text-center mt-6 lg:text-6xl lg:mt-0"
            >
              <TypeAnimation
                sequence={[
                  "Computer Science Student",
                  2000,
                  "Full Stack Developer",
                  2000,
                ]}
                wrapper="span"
                speed={20}
                repeat={Infinity}
              />
            </motion.h1>

            <motion.button
              variants={container(0)}
              initial="hidden"
              animate="visible"
              onClick={scrollToContactSection}
              className="bg-purple-600 rounded-lg p-4 mt-9"
            >
              Contact Me
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <Cube />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
