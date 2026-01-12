import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useState } from "react";

const VideoShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = [
    {
      title: "Cómo lo grabamos",
      subtitle: "El Clip",
      thumbnail: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=600&h=400&fit=crop",
    },
    {
      title: "Producción",
      subtitle: "Behind Scenes",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=600&h=400&fit=crop",
    },
    {
      title: "Resultados",
      subtitle: "Case Study",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section id="showreel" className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Contenido que{" "}
            <span className="font-script gradient-text text-4xl md:text-6xl">
              conecta
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Creamos historias visuales que capturan la esencia de tu marca
          </p>
        </motion.div>

        {/* Main Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-video rounded-3xl overflow-hidden mb-8 glass-card group cursor-pointer"
          onClick={() => setIsPlaying(!isPlaying)}
        >
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop"
            alt="Showreel"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          
          {/* Play button */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            <div className="w-24 h-24 rounded-full bg-primary/90 flex items-center justify-center neon-glow group-hover:bg-primary transition-colors">
              <Play className="w-10 h-10 text-primary-foreground fill-current ml-1" />
            </div>
          </motion.div>

          {/* Title overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-4xl font-display font-bold mb-2">Showreel 2026</h3>
            <p className="text-muted-foreground">Descubre nuestro trabajo más reciente</p>
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden group cursor-pointer glass-card"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              
              {/* Play icon */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Play className="w-5 h-5 fill-current text-primary-foreground" />
              </div>

              {/* Text overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm text-primary font-semibold uppercase tracking-wider">
                  {video.subtitle}
                </p>
                <h3 className="text-xl font-display font-bold">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold neon-glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Crea tu contenido con nosotros
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoShowcase;
