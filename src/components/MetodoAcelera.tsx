import { motion } from "framer-motion";
import { Search, Layers, Play, Megaphone, Bot, BarChart2, Rocket, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "ANALIZAR",
    description: "Entendemos tu negocio y detectamos oportunidades reales.",
  },
  {
    number: "2",
    icon: Layers,
    title: "CONSTRUIR",
    description: "Diseñamos la estrategia y el sistema que te va a diferenciar.",
  },
  {
    number: "3",
    icon: Play,
    title: "EJECUTAR",
    description: "Creamos contenido que conecta, posiciona y vende.",
  },
  {
    number: "4",
    icon: Megaphone,
    title: "LANZAR",
    description: "Invertimos con foco para atraer clientes calificados.",
  },
  {
    number: "5",
    icon: Bot,
    title: "ESCALAR",
    description: "Automatizamos con IA para optimizar procesos y potenciar resultados.",
  },
  {
    number: "6",
    icon: BarChart2,
    title: "RENTABILIZAR",
    description: "Analizamos, medimos y optimizamos cada decisión.",
  },
  {
    number: "7",
    icon: Rocket,
    title: "ACELERAR",
    description: "Escalamos tu negocio de forma sostenible y exponencial.",
  },
];

const MetodoAcelera = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Circuit board corner decorations */}
      <div className="absolute top-0 left-0 w-64 h-64 pointer-events-none opacity-30">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,40 L40,40 L40,0" />
          <path d="M0,80 L80,80 L80,40 L120,40" />
          <path d="M0,120 L20,120 L20,60 L60,60" />
          <circle cx="40" cy="40" r="4" fill="currentColor" />
          <circle cx="80" cy="80" r="4" fill="currentColor" />
          <circle cx="120" cy="40" r="4" fill="currentColor" />
          <circle cx="20" cy="120" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-30 scale-x-[-1]">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,40 L40,40 L40,0" />
          <path d="M0,80 L80,80 L80,40 L120,40" />
          <path d="M0,120 L20,120 L20,60 L60,60" />
          <circle cx="40" cy="40" r="4" fill="currentColor" />
          <circle cx="80" cy="80" r="4" fill="currentColor" />
          <circle cx="120" cy="40" r="4" fill="currentColor" />
          <circle cx="20" cy="120" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="container relative z-10 px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <p className="text-primary font-semibold tracking-[0.5em] text-sm uppercase mb-2">
            M É T O D O
          </p>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display font-black uppercase tracking-tight leading-none">
            ACEL ER<span className="gradient-text">A</span>
          </h2>
          <p className="mt-4 text-sm md:text-base font-semibold tracking-widest text-foreground/80 uppercase">
            ESTRATEGIA + CONTENIDO + PAUTA + IA ={" "}
            <span className="gradient-text">RESULTADOS</span>
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 items-start">
          {steps.map((step, index) => (
            <div key={step.title} className="flex flex-col items-center relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number */}
                <span className="text-primary font-bold text-sm mb-2">{step.number}</span>

                {/* Icon circle */}
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3 neon-glow">
                  <step.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <p className="font-display font-black text-xs md:text-sm uppercase tracking-wider text-foreground mb-2">
                  {step.title}
                </p>

                {/* Description */}
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>

              {/* Arrow between steps (not after last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-10 text-primary z-10">
                  <ArrowRight className="w-5 h-5" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetodoAcelera;
