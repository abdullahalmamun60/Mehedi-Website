import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-henna.jpg";

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto animate-fade-up">
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-12 bg-gold" />
            <span className="text-gold text-2xl">✦</span>
            <span className="h-px w-12 bg-gold" />
          </div>

          {/* Tagline */}
          <p className="text-gold font-medium tracking-widest uppercase text-sm mb-4">
            Traditional Bangladeshi Mehendi Art
          </p>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-cream-light leading-tight mb-6">
            Bringing Traditional{" "}
            <span className="italic text-gold">Mehendi Art</span> to Life
          </h1>

          {/* Description */}
          <p className="text-cream/90 text-lg md:text-xl max-w-xl mx-auto mb-8 font-light">
            Exquisite henna designs for weddings, festivals, and special
            occasions. Creating memories that last forever.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="lg" onClick={scrollToContact}>
              Book Your Appointment
            </Button>
            <Button variant="hero" size="lg" onClick={scrollToGallery}>
              View Gallery
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2">
          <span className="text-cream/60 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/80 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
