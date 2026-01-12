import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background with depth of field effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            scale: [1, 1.05, 1],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img
            src={heroBg}
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>
        
        {/* Volumetric light rays */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[200%] w-32 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
              style={{
                left: `${10 + i * 20}%`,
                transform: "rotate(15deg)",
                transformOrigin: "top center",
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                x: [-20, 20, -20],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Neon glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/50 to-background" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold leading-tight mb-2">
              Tu marca merece
            </h1>
            <span className="block text-5xl md:text-7xl lg:text-9xl font-script gradient-text mb-4">
              destacar
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 font-light"
          >
            Nosotros nos encargamos de hacerlo realidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#contact"
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg overflow-hidden neon-glow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Impulsa Tu Marca
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              href="#showreel"
              className="group px-10 py-5 rounded-full border border-border text-foreground font-semibold text-lg hover:border-primary hover:text-primary transition-colors flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                <Play className="w-4 h-4 fill-current" />
              </div>
              Ver Showreel
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
