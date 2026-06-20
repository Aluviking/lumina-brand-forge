import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo1 from "@/assets/logo-1.png";

const menuItems = [
  { name: "Content Creation", href: "#services" },
  { name: "Photography", href: "#services" },
  { name: "Brand Boosting", href: "#services" },
  { name: "Digital Production", href: "#services" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative z-50 p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </motion.div>
          </button>

          {/* Logo */}
          <div className="absolute left-1/2 -translate-x-1/2">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
              <img
                src={logo1}
                alt="Artmony Agencia"
                className="relative h-12 w-auto object-contain"
                style={{ mixBlendMode: "screen" }}
              />
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#contact"
            className="hidden sm:block px-6 py-2 rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground font-medium text-sm transition-all hover:shadow-lg hover:shadow-primary/25"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl"
          >
            <nav className="flex flex-col items-start justify-center h-full px-12 space-y-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-4xl md:text-5xl font-display font-bold text-foreground hover:text-primary transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
