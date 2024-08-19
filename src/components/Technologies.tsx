import { type Variants } from "framer-motion";
import Frameworks from "./Frameworks";
import Languages from "./Languages";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div id="skills" className="border-b border-neutral-800 pb-24">
      <Frameworks iconVariants={iconVariants} />
      <Languages iconVariants={iconVariants} />
    </div>
  );
}

export default Technologies;
