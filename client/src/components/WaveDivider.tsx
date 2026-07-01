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
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`w-full h-auto ${isTop ? "rotate-180" : ""}`}
        style={{ display: "block" }}
      >
        <path
          d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
