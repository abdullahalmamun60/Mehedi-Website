import { motion } from "framer-motion";
import { Heart, Home, Users, Sparkles, Calendar, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Crown,
    title: "Bridal Mehendi",
    description:
      "Complete bridal henna package with intricate designs for hands and feet. Make your special day unforgettable with our signature dulhan designs.",
    price: "Starting ৳15,000",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Party Mehendi",
    description:
      "Elegant designs for parties, sangeet, and celebrations. Quick application with stunning results that complement your outfit.",
    price: "Starting ৳1,500",
    highlight: false,
  },
  {
    icon: Heart,
    title: "Custom Designs",
    description:
      "Personalized henna art tailored to your preferences. From traditional motifs to modern patterns, we bring your vision to life.",
    price: "Starting ৳2,000",
    highlight: false,
  },
  {
    icon: Users,
    title: "Event Packages",
    description:
      "Special packages for group events, holud ceremonies, and family gatherings. Discounts available for larger parties.",
    price: "Custom Pricing",
    highlight: false,
  },
  {
    icon: Home,
    title: "Home Service",
    description:
      "Enjoy professional mehendi art in the comfort of your home. Perfect for busy brides and private celebrations.",
    price: "Starting ৳3,000",
    highlight: false,
  },
  {
    icon: Calendar,
    title: "Festival Mehendi",
    description:
      "Special designs for Eid, Durga Puja, and other festivals. Quick, beautiful, and affordable options for every celebration.",
    price: "Starting ৳1,000",
    highlight: false,
  },
];

const Services = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-cream-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional henna services for every occasion, delivered with love,
            tradition, and artistic excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative ${service.highlight ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div
                className={`h-full bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border ${
                  service.highlight
                    ? "border-secondary/50 ring-1 ring-secondary/20"
                    : "border-border hover:border-secondary/30"
                }`}
              >
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gold-gradient text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full shadow-gold-glow">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                    service.highlight
                      ? "bg-gold-gradient shadow-gold-glow"
                      : "bg-secondary/15 group-hover:bg-secondary/25"
                  }`}
                >
                  <service.icon
                    className={`w-7 h-7 ${
                      service.highlight ? "text-secondary-foreground" : "text-secondary"
                    }`}
                  />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-5 border-t border-border">
                  <span className="text-secondary font-bold text-lg">
                    {service.price}
                  </span>
                  <Button
                    variant="link"
                    className="text-primary p-0 h-auto font-semibold group-hover:text-secondary transition-colors"
                    onClick={scrollToContact}
                  >
                    Book Now
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;