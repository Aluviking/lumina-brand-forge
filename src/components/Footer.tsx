import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Youtube, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/artmony-logo.png";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-background" />

      <div className="container relative z-10 px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <img src={logo} alt="Artmony Agencia" className="h-16 w-auto" />
            </motion.div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Transforming brands into movements through innovative digital
              marketing strategies and creative excellence.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {["Content Creation", "Photography", "Brand Boosting", "Digital Production"].map(
                (service) => (
                  <li key={service}>
                    <a
                      href="#services"
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {service}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-lg text-foreground mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 text-primary" />
                hello@artmony.agency
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>
                  123 Creative Avenue
                  <br />
                  New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Artmony Agencia. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
