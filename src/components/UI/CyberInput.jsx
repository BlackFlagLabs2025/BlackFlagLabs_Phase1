// src/components/UI/CyberInput.jsx
import React from "react";

export default function CyberInput({
  label,
  className = "",
  error,
  ...rest
}) {
  const id = rest.id || rest.name || `cyber-input-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-fg-secondary/70">
          <span>{label}</span>
          <span className="text-accent/80">INPUT</span>
        </div>
      )}

      <div className="relative group">
        {/* Glow frame */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-lg 
            border border-accent/30 
            group-hover:border-accent/70 
            transition-all duration-300
            shadow-[0_0_0_rgba(0,0,0,0)]
            group-hover:shadow-[0_0_18px_rgba(34,211,238,0.35)]
          "
        />

        {/* Inner neon edge */}
        <div
          className="
            pointer-events-none absolute inset-[1px] rounded-[0.6rem]
            border border-[rgba(248,113,113,0.35)]
            opacity-40 group-hover:opacity-80
            mix-blend-screen
          "
        />

        {/* Tiny corner brackets */}
        <div className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute -top-px left-3 w-4 h-px bg-accent" />
          <div className="absolute -top-px right-3 w-4 h-px bg-rose-400" />
          <div className="absolute -bottom-px left-3 w-4 h-px bg-rose-400" />
          <div className="absolute -bottom-px right-3 w-4 h-px bg-accent" />
        </div>

        {/* Scanline overlay */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-lg overflow-hidden
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

        {/* Main input */}
        <input
          id={id}
          className="
            relative w-full px-4 py-3.5 rounded-lg
            bg-[#050812]/95 text-sm text-fg
            outline-none
            border border-transparent
            caret-accent
            placeholder:text-fg-secondary/50
            focus:border-accent
            focus:bg-[#05070f]
            transition-all duration-200
            [text-shadow:0_0_6px_rgba(0,0,0,0.9)]
          "
          {...rest}
        />

        {/* Glitch highlight bar */}
        <div
          className="
            pointer-events-none absolute bottom-1 left-3 right-3 h-[1px]
            bg-gradient-to-r from-transparent via-accent/70 to-transparent
            opacity-0 group-focus-within:opacity-100 group-hover:opacity-100
            transition-opacity duration-200
          "
        />

        {/* Micro glitch blocks */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="
              absolute -bottom-1 left-5 w-6 h-[2px] 
              bg-accent/80 
              opacity-0 group-focus-within:opacity-100
              animate-[glitch-x_0.9s_ease-in-out_infinite_alternate]
            "
          />
          <div
            className="
              absolute -top-1 right-6 w-4 h-[2px] 
              bg-rose-400/80 
              opacity-0 group-focus-within:opacity-100
              animate-[glitch-x_0.9s_ease-in-out_infinite_alternate-reverse]
            "
          />
        </div>
      </div>

      {error && (
        <div className="text-xs text-rose-400/80 tracking-wide">
          {error}
        </div>
      )}
    </div>
  );
}