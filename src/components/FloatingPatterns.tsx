import { motion } from "framer-motion";

const FloatingPatterns = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large mandala - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-96 h-96 opacity-[0.04]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-secondary">
          <defs>
            <pattern id="mandala1" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="100" cy="100" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1="100"
                  y1="10"
                  x2="100"
                  y2="190"
                  stroke="currentColor"
                  strokeWidth="0.3"
                  transform={`rotate(${i * 30} 100 100)`}
                />
              ))}
              {[...Array(8)].map((_, i) => (
                <ellipse
                  key={`e${i}`}
                  cx="100"
                  cy="40"
                  rx="15"
                  ry="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  transform={`rotate(${i * 45} 100 100)`}
                />
              ))}
            </pattern>
          </defs>
          <circle cx="100" cy="100" r="95" fill="url(#mandala1)" />
        </svg>
      </motion.div>

      {/* Medium mandala - bottom left */}
      <motion.div
        className="absolute -bottom-32 -left-32 w-80 h-80 opacity-[0.03]"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full fill-primary">
          <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.6" />
          {[...Array(16)].map((_, i) => (
            <path
              key={i}
              d="M100,20 Q115,50 100,80 Q85,50 100,20"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
        </svg>
      </motion.div>

      {/* Small floating paisley elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 opacity-[0.06]"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full fill-secondary">
          <path d="M25,5 C40,5 45,25 40,35 C35,45 20,45 15,35 C10,25 15,15 25,15 C30,15 32,20 30,25 C28,30 22,30 20,25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-20 w-12 h-12 opacity-[0.05]"
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg viewBox="0 0 50 50" className="w-full h-full fill-primary">
          <path d="M25,5 C40,5 45,25 40,35 C35,45 20,45 15,35 C10,25 15,15 25,15 C30,15 32,20 30,25 C28,30 22,30 20,25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </motion.div>

      {/* Floating dots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-secondary/10"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 14}%`,
          }}
          animate={{
            y: [-5, 5, -5],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingPatterns;