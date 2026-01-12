import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    brand: "",
    objective: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", brand: "", objective: "" });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-secondary/10 blur-[150px]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[150px]"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your brand? Tell us about your project and we'll
              craft a strategy just for you.
            </p>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-8 md:p-12 rounded-3xl glass-card"
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-3xl gradient-border pointer-events-none" />

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle className="w-16 h-16 text-primary mb-4" />
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground">
                  We'll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="brand"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Brand / Company
                  </label>
                  <input
                    type="text"
                    id="brand"
                    name="brand"
                    value={formData.brand}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your Brand Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="objective"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Project Objective
                  </label>
                  <textarea
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-muted/50 border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Tell us about your goals and what you'd like to achieve..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-shadow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
