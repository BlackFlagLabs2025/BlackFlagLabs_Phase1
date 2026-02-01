import { motion } from "framer-motion";

export default function CyberButton({
  children,
  className = "",
  variant = "primary",
  size = "md",
  ...rest
}) {
  const base =
    "relative cyber-hover-target inline-flex items-center justify-center font-semibold tracking-[0.16em] uppercase";

  const sizeClasses =
    size === "lg"
      ? "px-6 py-3 text-[11px] rounded-2xl"
      : size === "sm"
      ? "px-3 py-1.5 text-[10px] rounded-xl"
      : "px-4 py-2 text-[10px] rounded-xl";

  let variantClasses = "";

  if (variant === "primary") {
    variantClasses =
      "bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-soft)] to-[var(--accent-red)] text-black shadow-[var(--glow-outer)]";
  } else if (variant === "ghost") {
    variantClasses =
      "bg-[rgba(0,0,0,0.5)] text-[var(--fg-soft)] border border-[var(--border-soft)]";
  } else if (variant === "accent") {
    variantClasses =
      "bg-[rgba(0,0,0,0.85)] text-[#ff0534] border border-[#ff0534] shadow-[var(--glow-outer)]";
  }

  return (
    <motion.button
      type="button"
      whileHover={{ y: -1, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`${base} ${sizeClasses} ${variantClasses} ${className}`}
      {...rest}
    >
      {/* Inner glossy layer */}
      <span className="absolute inset-[1px] rounded-[inherit] bg-gradient-to-b from-white/8 via-transparent to-black/40 opacity-60 mix-blend-soft-light pointer-events-none" />

      {/* Text */}
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}