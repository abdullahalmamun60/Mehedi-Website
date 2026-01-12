import { Instagram, Facebook, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-4">
              <span className="text-secondary">✦</span> Mehendi by Fatima
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Bringing traditional Bangladeshi Mehendi art to life. Creating
              beautiful memories for your special occasions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "Gallery", "Services", "About", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-primary-foreground/70 text-sm hover:text-secondary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-primary-foreground/70">
                <strong className="text-primary-foreground">Phone:</strong>{" "}
                +880 1712-345678
              </p>
              <p className="text-primary-foreground/70">
                <strong className="text-primary-foreground">Email:</strong>{" "}
                fatima@mehendi.com
              </p>
              <p className="text-primary-foreground/70">
                <strong className="text-primary-foreground">Location:</strong>{" "}
                Dhaka, Bangladesh
              </p>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="tel:+8801712345678"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {currentYear} Mehendi by Fatima. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
