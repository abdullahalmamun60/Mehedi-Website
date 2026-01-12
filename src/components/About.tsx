import { motion } from "framer-motion";
import artistPortrait from "@/assets/artist-portrait.jpg";
import { Award, Clock, Heart, Star } from "lucide-react";

const stats = [
  { icon: Clock, value: "10+", label: "Years Experience" },
  { icon: Heart, value: "500+", label: "Happy Brides" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "50+", label: "Awards" },
];

const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-burgundy/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={artistPortrait}
                alt="Fatima - Mehendi Artist"
                className="w-full h-auto object-cover"
              />
              {/* Gold frame overlay */}
              <div className="absolute inset-0 border-4 border-secondary/20 rounded-2xl" />
            </div>

            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 w-56 h-56 bg-gold-gradient opacity-20 rounded-2xl -z-0"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -top-6 -left-6 w-40 h-40 border-2 border-secondary/30 rounded-2xl -z-0"
            />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -right-4 top-1/4 bg-card shadow-card-hover rounded-xl p-4 border border-secondary/30"
            >
              <div className="text-center">
                <span className="text-3xl font-heading font-bold text-gradient-gold">10+</span>
                <p className="text-xs text-muted-foreground mt-1">Years of<br />Excellence</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              About the Artist
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-6">
              Meet Fatima
            </h2>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="text-primary font-medium">Assalamu Alaikum!</span> I'm
                Fatima, a professional Mehendi artist based in Dhaka, Bangladesh.
                My journey with henna art began over a decade ago, inspired by the
                rich traditions of South Asian culture.
              </p>
              <p>
                Every design I create tells a story. Whether it's a bride's wedding
                day, a joyful Eid celebration, or a special milestone, I pour my
                heart into making each piece unique and meaningful.
              </p>
              <p>
                I specialize in{" "}
                <span className="text-secondary font-medium">
                  traditional Bengali bridal mehendi
                </span>
                ,{" "}
                <span className="text-secondary font-medium">modern Arabic patterns</span>
                , and{" "}
                <span className="text-secondary font-medium">
                  contemporary fusion designs
                </span>
                . My mission is to preserve our cultural heritage while embracing
                new artistic expressions.
              </p>
            </div>

            {/* Signature style quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 p-5 bg-secondary/10 rounded-xl border-l-4 border-secondary"
            >
              <p className="text-primary italic font-heading text-lg">
                "Each stroke of henna carries centuries of tradition, love, and
                blessings for the beautiful journey ahead."
              </p>
              <p className="text-secondary font-medium mt-2">— Fatima</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/15 group-hover:bg-secondary/25 flex items-center justify-center mx-auto mb-3 transition-colors">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;