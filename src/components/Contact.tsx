import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Instagram, Facebook, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventDate: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Booking Request Sent! ✨",
      description:
        "Thank you for your interest. We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      eventDate: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/8801785205747?text=Hello! I'm interested in booking a mehendi appointment.",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-gradient relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-burgundy/3 rounded-full blur-3xl" />

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
            Get In Touch
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-4">
            Book Your Appointment
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ready to get beautiful henna? Fill out the form below or contact us
            directly via WhatsApp
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-card border border-border">
              <h3 className="font-heading text-xl font-semibold text-primary mb-6 flex items-center gap-2">
                <span className="text-secondary">✦</span>
                Booking Request
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border-border focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1XXX XXXXXX"
                      required
                      className="border-border focus:border-secondary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="border-border focus:border-secondary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Event Date *
                    </label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="border-border focus:border-secondary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tell us about your event
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Event type, number of people, design preferences..."
                    rows={4}
                    className="border-border focus:border-secondary"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Booking Request
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Quick WhatsApp CTA */}
            <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg">
              <h3 className="font-heading text-xl font-semibold mb-2">
                Prefer WhatsApp?
              </h3>
              <p className="text-white/80 text-sm mb-4">
                Get instant responses and quick bookings through WhatsApp.
              </p>
              <Button
                variant="secondary"
                size="lg"
                onClick={openWhatsApp}
                className="bg-white text-green-700 hover:bg-white/90"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                <a
                  href="tel:+8801712345678"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                      +880 1785-205747
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:fatima@mehendi.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0 group-hover:bg-secondary/25 transition-colors">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="text-foreground font-medium group-hover:text-secondary transition-colors">
                      farhanafardous55255@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">
                      Rajshahi, Bangladesh
                    </p>
                    <p className="text-sm text-muted-foreground">
                      (Home service available across the city)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-heading text-xl font-semibold text-primary mb-6">
                Follow Our Work
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center hover:scale-110 transition-transform group"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform group"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-card rounded-xl h-48 flex items-center justify-center border border-border shadow-card overflow-hidden">
              <div className="text-center">
                <MapPin className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="text-sm font-medium text-primary">Dhaka, Bangladesh</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Serving all areas of the city
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;