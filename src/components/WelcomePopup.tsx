import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after 2 seconds
    const timer = setTimeout(() => {
      const hasSeenPopup = sessionStorage.getItem("artmony-welcome-seen");
      if (!hasSeenPopup) {
        setIsOpen(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("artmony-welcome-seen", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md"
          >
            <div className="relative rounded-3xl overflow-hidden glass-card border border-border">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-10"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Gradient header */}
              <div className="h-32 bg-gradient-to-br from-primary via-secondary to-accent relative overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    background: "linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-16 h-16 text-white/80" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-display font-bold mb-2">
                  ¡Bienvenido a{" "}
                  <span className="font-script gradient-text text-3xl">Artmony</span>!
                </h2>
                <p className="text-muted-foreground mb-6">
                  Obtén una estrategia de marketing gratuita para tu marca. Sin compromiso, solo resultados.
                </p>

                <div className="space-y-3">
                  <motion.a
                    href="#contact"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold neon-glow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Obtener Estrategia Gratis
                    <ArrowRight className="w-5 h-5" />
                  </motion.a>

                  <button
                    onClick={handleClose}
                    className="w-full px-6 py-3 text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    Tal vez después
                  </button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  🔒 Tu información está segura con nosotros
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default WelcomePopup;
