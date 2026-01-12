import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "gold" | "floral" | "simple";
  className?: string;
}

const SectionDivider = ({ variant = "gold", className = "" }: SectionDividerProps) => {
  if (variant === "floral") {
    return (
      <div className={`flex items-center justify-center py-8 ${className}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4"
        >
          <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-secondary/60" />
          <svg
            viewBox="0 0 60 40"
            className="w-12 h-8 md:w-16 md:h-10 text-secondary"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            {/* Central flower */}
            <circle cx="30" cy="20" r="4" fill="currentColor" opacity="0.3" />
            {[...Array(6)].map((_, i) => (
              <ellipse
                key={i}
                cx="30"
                cy="12"
                rx="3"
                ry="6"
                transform={`rotate(${i * 60} 30 20)`}
                fill="none"
              />
            ))}
            {/* Side swirls */}
            <path d="M10,20 Q15,10 25,15" />
            <path d="M50,20 Q45,10 35,15" />
            <path d="M5,22 Q10,25 15,20" />
            <path d="M55,22 Q50,25 45,20" />
          </svg>
          <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-secondary/60" />
        </motion.div>
      </div>
    );
  }

  if (variant === "simple") {
    return (
      <div className={`flex items-center justify-center py-6 ${className}`}>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-px w-32 md:w-48 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
        />
      </div>
    );
  }

  // Default gold variant
  return (
    <div className={`flex items-center justify-center py-8 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3"
      >
        <div className="h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-secondary/50" />
        <div className="flex items-center gap-2">
          <span className="text-secondary text-lg">✦</span>
          <span className="text-secondary/60 text-sm">❋</span>
          <span className="text-secondary text-lg">✦</span>
        </div>
        <div className="h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-secondary/50" />
      </motion.div>
    </div>
  );
};

export default SectionDivider;