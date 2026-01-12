import { motion } from "framer-motion";
import { Camera, Palette, Rocket, Film } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Content Creation",
    description: "Compelling visuals and copy that tell your brand story and drive engagement across all platforms.",
    gradient: "from-primary to-secondary",
  },
  {
    icon: Camera,
    title: "Photography",
    description: "Stunning product and lifestyle photography that showcases your brand in its best light.",
    gradient: "from-secondary to-accent",
  },
  {
    icon: Rocket,
    title: "Brand Boosting",
    description: "Strategic campaigns that amplify your reach and connect with your target audience.",
    gradient: "from-accent to-primary",
  },
  {
    icon: Film,
    title: "Digital Production",
    description: "High-quality video content that captivates viewers and elevates your digital presence.",
    gradient: "from-primary via-secondary to-accent",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />

      <div className="container relative z-10 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive suite of digital marketing services tailored
            to elevate your brand and drive measurable results.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="group relative h-full p-8 rounded-2xl glass-card hover:border-primary/50 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${service.gradient} transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/25 transition-shadow`}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-display font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="relative text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
