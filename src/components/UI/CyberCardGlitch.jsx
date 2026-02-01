import { motion } from "framer-motion";

export default function CyberCardGlitch({
  children,
  className,
  hoverEffect, // <-- la consumimos pero NO la pasamos al DOM
  ...rest
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
      className={`
        cyber-hover-target relative overflow-hidden
        bg-[var(--bg-panel-soft)]
        border border-[var(--border-soft)]
        shadow-[var(--glow-outer)]
        rounded-3xl
        ${className}
      `}
      {...rest}
    >
      {/* Noise layer */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          background: "url('https://assets.codepen.io/13471/noise.png')",
          mixBlendMode: "soft-light",
        }}
      />

      {/* Subtle scanlines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          background:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 1px, transparent 1px, transparent 4px)",
        }}
      />

      {/* Inner gloss */}
      <div className="pointer-events-none absolute inset-[1px] rounded-[1.4rem] border border-white/5" />

      {/* Content */}
      <div className="relative z-10 p-5">{children}</div>
    </motion.div>
  );
}