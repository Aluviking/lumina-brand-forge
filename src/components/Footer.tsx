import { motion } from "framer-motion";
import { Instagram, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/artmony-logo.png";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="relative pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent" />

      <div className="container relative z-10 px-6">
        <div className="flex flex-col items-center text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <img src={logo} alt="Artmony Agencia" className="h-12 w-auto" />
          </motion.div>
          
          <p className="text-lg font-display font-semibold text-foreground mb-1">
            Agencia de Marketing Digital
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Estrategia · Contenido · Producción
          </p>

          {/* Email */}
          <a
            href="mailto:hello@artmony.agency"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <Mail className="w-4 h-4" />
            hello@artmony.agency
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <p className="text-muted-foreground text-sm text-center">
            © Artmony Agencia — Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
