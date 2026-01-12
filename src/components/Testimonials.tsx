import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aisha Rahman",
    role: "Bride",
    content:
      "Fatima's artistry made my wedding day absolutely magical. The intricate bridal design she created was beyond my dreams. Every guest complimented my mehendi!",
    rating: 5,
    event: "Wedding Ceremony",
  },
  {
    id: 2,
    name: "Nusrat Jahan",
    role: "Event Planner",
    content:
      "I've worked with many artists, but Fatima stands out. Her professionalism, creativity, and attention to detail make her the go-to choice for all my clients.",
    rating: 5,
    event: "Multiple Events",
  },
  {
    id: 3,
    name: "Sabrina Ahmed",
    role: "Bride's Mother",
    content:
      "The entire bridal party was thrilled with their designs. Fatima took care of everyone with such patience and grace. Highly recommend!",
    rating: 5,
    event: "Holud Ceremony",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-gradient relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-pattern-overlay" />
      
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
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hear from the brides and families we've had the honor of serving
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border hover:border-secondary/30 h-full flex flex-col relative">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-6 w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold-glow">
                  <Quote className="w-5 h-5 text-secondary-foreground" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4 pt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-secondary text-secondary"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed flex-1 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="mt-6 pt-5 border-t border-border">
                  <p className="font-heading font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </span>
                    <span className="text-xs text-secondary font-medium">
                      {testimonial.event}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;