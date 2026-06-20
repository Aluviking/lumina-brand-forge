import { motion, useScroll, useTransform } from "framer-motion";
import handIcon from "@/assets/ffff.png";

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
        className="w-16 h-16 md:w-24 md:h-24 object-contain drop-shadow-lg"
        style={{ mixBlendMode: "screen" }}
      />
    </motion.div>
  );
};

export default FloatingHand;
