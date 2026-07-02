import { motion } from "framer-motion";

interface WaveDividerProps {
  position?: "top" | "bottom";
  color?: string;
  className?: string;
}

export default function WaveDivider({
  position = "bottom",
  color = "oklch(0.18 0.01 280)",
  className = "",
}: WaveDividerProps) {
  const isTop = position === "top";

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <motion.svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-auto ${isTop ? "rotate-180" : ""}`}
        style={{ display: "block" }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill={color}
          animate={{
            d: [
              "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
              "M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z",
              "M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z",
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  );
}
