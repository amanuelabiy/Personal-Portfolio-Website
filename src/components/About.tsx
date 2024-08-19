import aboutImage from "../assets/Face.png";
import { motion } from "framer-motion";

function About() {
  return (
    <div id="about" className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImage} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Hello, my name is Amanuel Abiy. I am a software engineer with a
              passion for creating innovative solutions. My primary focus is on
              delivering efficient, scalable, and impactful applications that
              address real-world problems. I approach every challenge as an
              opportunity to learn and grow, continuously striving to become a
              better developer each day. I am currently pursuing an Associate
              Degree in Computer Science at Montgomery College, with plans to
              transfer to the University of Maryland to complete my Bachelor's
              degree. As I continue to grow in my career, I am eager to learn
              from diverse perspectives and contribute to meaningful projects.
              Beyond my studies and engineering work, I enjoy staying active
              through workouts, expanding my knowledge through reading, and
              engaging with insightful podcasts.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
