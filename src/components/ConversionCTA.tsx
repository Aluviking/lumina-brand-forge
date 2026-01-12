import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConversionCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
            Tu marca merece{" "}
            <span className="gradient-text">destacar</span>.
          </h2>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            Nosotros nos encargamos de hacerlo realidad.
          </p>

          <motion.a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Comienza Ahora
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ConversionCTA;
