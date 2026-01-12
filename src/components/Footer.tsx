import { motion } from "framer-motion";
import { Instagram, Facebook, Phone, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full border border-secondary" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 rounded-full border border-secondary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 py-12 md:py-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-4">
              <span className="text-secondary">✦</span> Mehedi by Bristi
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-md mb-6">
              Bringing traditional South Asian Mehendi art to life. Creating
              beautiful memories for your weddings, festivals, and special
              occasions with love and artistry.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors group"
              >
                <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61567641751974"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors group"
              >
                <Facebook className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="tel:+8801785205747"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/30 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-5 text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Gallery", "Services", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(`#${link.toLowerCase()}`);
                    }}
                    className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-secondary mr-0 group-hover:mr-2 transition-all" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading text-lg font-semibold mb-5 text-secondary">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-primary-foreground/70">
                <span className="text-primary-foreground font-medium">Phone:</span>{" "}
                <a href="tel:+8801785205747" className="hover:text-secondary transition-colors">
                  +880 1785-205747
                </a>
              </p>
              <p className="text-primary-foreground/70">
                <span className="text-primary-foreground font-medium">Email:</span>{" "}
                <a href="mailto:farhanafardous55255@gmail.com" className="hover:text-secondary transition-colors">
                  farhanafardous55255@gmail.com
                </a>
              </p>
              <p className="text-primary-foreground/70">
                <span className="text-primary-foreground font-medium">Location:</span>{" "}
                Rajshahi, Bangladesh
              </p>
              <p className="text-primary-foreground/50 text-xs mt-4">
                Home service available across the city
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/50 text-sm text-center md:text-left">
              © {currentYear} Mehedi by Bristi. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm flex items-center gap-1">
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;