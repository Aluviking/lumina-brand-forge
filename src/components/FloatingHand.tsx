import { motion, useScroll, useTransform } from "framer-motion";
import handIcon from "@/assets/hand-icon.png";

const FloatingHand = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [0, 15, -10]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]);

  return (
    <motion.div
      className="fixed right-4 md:right-8 top-24 z-40 pointer-events-none"
      style={{ y, rotate, opacity }}
    >
      <img
        src={handIcon}
        alt=""
        className="w-12 h-12 md:w-16 md:h-16 object-contain"
        style={{ mixBlendMode: "screen", filter: "invert(1)" }}
      />
    </motion.div>
  );
};

export default FloatingHand;
