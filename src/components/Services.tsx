import { Heart, Home, Users, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Bridal Mehendi",
    description:
      "Complete bridal henna package with intricate designs for hands and feet. Make your special day unforgettable.",
    price: "Starting ৳15,000",
  },
  {
    icon: Home,
    title: "Home Service",
    description:
      "Enjoy professional mehendi art in the comfort of your home. Perfect for busy brides and events.",
    price: "Starting ৳3,000",
  },
  {
    icon: Users,
    title: "Group Booking",
    description:
      "Special packages for bridesmaids, family events, and group celebrations. Discounts available.",
    price: "Custom Pricing",
  },
  {
    icon: Sparkles,
    title: "Custom Designs",
    description:
      "Personalized henna art tailored to your preferences. From traditional to contemporary styles.",
    price: "Starting ৳2,000",
  },
  {
    icon: Calendar,
    title: "Festival Mehendi",
    description:
      "Special designs for Eid, Durga Puja, and other festivals. Quick, beautiful, and affordable.",
    price: "Starting ৳1,000",
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
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-secondary font-medium tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Professional henna services for every occasion, delivered with love
            and artistry
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border hover:border-secondary/50 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center mb-5 group-hover:bg-secondary/30 transition-colors">
                <service.icon className="w-7 h-7 text-secondary" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Price */}
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-secondary font-semibold">
                  {service.price}
                </span>
                <Button
                  variant="link"
                  className="text-primary p-0 h-auto font-medium"
                  onClick={scrollToContact}
                >
                  Book Now →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
