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
    <section id="about" className="py-20 md:py-28 bg-cream-gradient">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-card-hover">
              <img
                src={artistPortrait}
                alt="Fatima - Mehendi Artist"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/20 rounded-2xl -z-0" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-secondary/40 rounded-2xl -z-0" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-secondary font-medium tracking-widest uppercase text-sm">
              About Me
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-primary mt-2 mb-6">
              Meet Fatima
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Assalamu Alaikum! I'm Fatima, a professional Mehendi artist based
                in Dhaka, Bangladesh. My journey with henna art began over 10 years
                ago, inspired by the rich traditions of Bangladeshi culture and
                the intricate beauty of Arabic designs.
              </p>
              <p>
                Every design I create tells a story. Whether it's a bride's
                wedding day, a joyful Eid celebration, or a special milestone,
                I pour my heart into making each piece unique and memorable.
              </p>
              <p>
                I specialize in traditional Bangladeshi bridal mehendi, modern
                Arabic patterns, and contemporary fusion designs. My mission is
                to preserve our cultural heritage while embracing new artistic
                expressions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="font-heading text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
