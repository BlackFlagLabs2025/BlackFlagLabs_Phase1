// src/components/UI/CyberSelect.jsx
import React from "react";

export default function CyberSelect({
  label,
  options = [],
  className = "",
  error,
  ...rest
}) {
  const id =
    rest.id || rest.name || `cyber-select-${Math.random().toString(36).slice(2, 8)}`;

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-fg-secondary/70">
          <span>{label}</span>
          <span className="text-accent/80">SELECT</span>
        </div>
      )}

      <div className="relative group">
        {/* Frame */}
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

        {/* Inner border */}
        <div
          className="
            pointer-events-none absolute inset-[1px] rounded-[0.6rem]
            border border-[rgba(248,113,113,0.35)]
            opacity-40 group-hover:opacity-80
            mix-blend-screen
          "
        />

        {/* Scanlines */}
        <div
          className="
            pointer-events-none absolute inset-0 rounded-lg overflow-hidden
            opacity-[0.18] group-hover:opacity-[0.3]
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

        {/* Select */}
        <select
          id={id}
          className="
            relative w-full px-4 py-3.5 pr-10 rounded-lg
            bg-[#050812]/95 text-sm text-fg
            outline-none
            border border-transparent
            focus:border-accent
            focus:bg-[#05070f]
            appearance-none
            cursor-pointer
            [text-shadow:0_0_6px_rgba(0,0,0,0.9)]
          "
          {...rest}
        >
          {options.map((opt) => (
            <option
              key={opt.value ?? opt.label}
              value={opt.value}
              className="bg-[#02040a] text-fg"
            >
              {opt.label}
            </option>
          ))}
        </select>

        {/* Custom arrow */}
        <div
          className="
            pointer-events-none absolute right-3 top-1/2 -translate-y-1/2
            w-7 h-7 rounded-md border border-accent/50
            flex items-center justify-center
            bg-[#020308]/90
            shadow-[0_0_10px_rgba(34,211,238,0.25)]
          "
        >
          <div className="relative w-3 h-3">
            <span
              className="
                absolute inset-0 
                border-b-2 border-r-2 border-accent
                rotate-45
              "
            />
          </div>
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