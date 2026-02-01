// src/components/UI/CyberText.jsx
import React from "react";

export default function CyberText({
  label,
  className = "",
  error,
  ...rest
}) {
  const id =
    rest.id || rest.name || `cyber-text-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-fg-secondary/70">
          <span>{label}</span>
          <span className="text-accent/80">MESSAGE</span>
        </div>
      )}

      <div className="relative group">
        {/* Outer frame */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl 
            border border-accent/30 
            group-hover:border-accent/70 
            transition-all duration-300
            shadow-[0_0_0_rgba(0,0,0,0)]
            group-hover:shadow-[0_0_24px_rgba(34,211,238,0.3)]
          "
        />

        {/* Inner gradient edge */}
        <div
          className="
            pointer-events-none absolute inset-[1px] rounded-[0.9rem]
            border border-[rgba(248,113,113,0.3)]
            opacity-40 group-hover:opacity-80
            mix-blend-screen
          "
        />

        {/* Vertical glow bar */}
        <div
          className="
            pointer-events-none absolute top-3 bottom-3 left-2 w-[2px]
            bg-gradient-to-b from-accent via-rose-400 to-accent
            opacity-40 group-hover:opacity-80
            blur-[1px]
          "
        />

        {/* Scanlines */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-xl overflow-hidden
            opacity-[0.18] group-hover:opacity-[0.32]
            transition-opacity duration-300
          "
        >
          <div
            className="w-full h-full"
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0px, rgba(255,255,255,0.06) 1px, transparent 1px, transparent 4px)",
            }}
          />
        </div>

        {/* Main textarea */}
        <textarea
          id={id}
          className="
            relative w-full px-4 py-3.5 rounded-xl
            bg-[#050812]/95 text-sm text-fg
            outline-none
            border border-transparent
            caret-accent
            placeholder:text-fg-secondary/50
            focus:border-accent
            focus:bg-[#05070f]
            transition-all duration-200
            resize-none
            [text-shadow:0_0_6px_rgba(0,0,0,0.9)]
          "
          {...rest}
        />

        {/* Glitch highlight top */}
        <div
          className="
            pointer-events-none absolute top-2 left-10 right-10 h-[1px]
            bg-gradient-to-r from-transparent via-rose-400/80 to-transparent
            opacity-0 group-focus-within:opacity-100
            transition-opacity duration-200
          "
        />
      </div>

      {error && (
        <div className="text-xs text-rose-400/80 tracking-wide">
          {error}
        </div>
      )}
    </div>
  );
}