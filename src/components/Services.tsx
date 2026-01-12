import { motion } from "framer-motion";
import { Camera, Palette, Rocket, Film, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Creación de Contenido",
    description: "Visuales y copy que cuentan tu historia y generan engagement.",
  },
  {
    icon: Camera,
    title: "Fotografía",
    description: "Fotografía profesional que muestra tu marca en su mejor luz.",
  },
  {
    icon: Rocket,
    title: "Brand Boosting",
    description: "Campañas estratégicas que amplifican tu alcance.",
  },
  {
    icon: Film,
    title: "Producción Digital",
    description: "Contenido de video que cautiva y eleva tu presencia digital.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Nuestros <span className="gradient-text">Servicios</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Soluciones de marketing digital diseñadas para elevar tu marca.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative h-full p-6 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Solicita Tu Propuesta
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
