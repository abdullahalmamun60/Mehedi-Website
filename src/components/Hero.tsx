import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-henna.jpg";
import { MessageCircle, Images } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/8801712345678?text=Hello! I'm interested in booking a mehendi appointment.",
      "_blank"
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Floating Decorative Mandalas */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 opacity-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-gold/60">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" strokeWidth="0.5" />
          {[...Array(8)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="5"
              x2="50"
              y2="95"
              strokeWidth="0.3"
              transform={`rotate(${i * 45} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-10 w-32 h-32 opacity-10"
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-gold/50">
          <circle cx="50" cy="50" r="45" strokeWidth="0.5" />
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="50"
              cy="20"
              rx="8"
              ry="15"
              strokeWidth="0.5"
              transform={`rotate(${i * 30} 50 50)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-start">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="h-px w-12 md:w-16 bg-gradient-to-r from-transparent to-gold" />
            <span className="text-gold text-2xl md:text-3xl animate-pulse-soft">✦</span>
            <span className="h-px w-12 md:w-16 bg-gradient-to-l from-transparent to-gold" />
          </motion.div>

          {/* Tagline */}
         <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gold font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6"
            >
              Traditional South Asian Mehendi Art
            </motion.p>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="font-heading text-4xl md:text-6xl lg:text-7xl font-semibold text-cream-light leading-tight mb-6"
            >
              Where Tradition Meets{" "}
              <span className="italic text-gradient-gold">Artistry</span>
            </motion.h1>
         </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-cream/80 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed"
          >
            Exquisite henna designs for weddings, festivals, and life's most
            precious celebrations. Creating timeless memories with every stroke.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4"
          >
            <Button
              variant="gold"
              size="lg"
              onClick={openWhatsApp}
              className="group min-w-[200px]"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Book Now
            </Button>
            <Button
              variant="hero"
              size="lg"
              onClick={scrollToGallery}
              className="group min-w-[200px]"
            >
              <Images className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              View Gallery
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-cream/50 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/50 to-transparent" />
    </section>
  );
};

export default Hero;