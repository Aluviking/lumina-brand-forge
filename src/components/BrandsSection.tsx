import { motion } from "framer-motion";

const brands = [
  "ALESSI",
  "Glossier",
  "Unilever",
  "THE BODY SHOP",
  "Freshly",
  "Flying Tiger",
  "VANS",
];

const BrandsSection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Torn paper effect top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-foreground/5">
        <svg
          viewBox="0 0 1200 50"
          className="absolute bottom-0 w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 Q30,30 60,45 T120,40 T180,48 T240,35 T300,42 T360,50 T420,38 T480,45 T540,35 T600,48 T660,40 T720,50 T780,38 T840,45 T900,35 T960,48 T1020,40 T1080,50 T1140,38 T1200,45 L1200,50 Z"
            className="fill-background"
          />
        </svg>
      </div>

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Estamos detrás de más de{" "}
            <span className="gradient-text">183,000</span> marcas
          </h2>
          <p className="text-xl text-muted-foreground">
            y sus relaciones con los clientes
          </p>
        </motion.div>

        {/* Brands marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-16 items-center"
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors whitespace-nowrap select-none"
                style={{
                  fontFamily: index % 3 === 0 ? "'Playfair Display', serif" : 
                             index % 3 === 1 ? "'Dancing Script', cursive" : 
                             "'Inter', sans-serif",
                }}
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Únete a las marcas que destacan
          </motion.a>
        </motion.div>
      </div>

      {/* Torn paper effect bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-foreground/5">
        <svg
          viewBox="0 0 1200 50"
          className="absolute top-0 w-full h-12"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 Q30,20 60,5 T120,10 T180,2 T240,15 T300,8 T360,0 T420,12 T480,5 T540,15 T600,2 T660,10 T720,0 T780,12 T840,5 T900,15 T960,2 T1020,10 T1080,0 T1140,12 T1200,5 L1200,0 Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default BrandsSection;
