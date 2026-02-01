import CyberCardGlitch from "../UI/CyberCardGlitch";

export default function Footer({ t }) {
  return (
    <footer className="relative mt-32 pt-16 pb-10 overflow-hidden">

      {/* BACKGROUND FAINT GRID + GLITCH LINES */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, var(--accent-cyan), transparent 70%)'
        }}
      ></div>
      <div
        className="absolute inset-0 opacity-[0.07] mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}
      />

      {/* CYBER BORDER TOP (NEON) */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] animate-pulse"
        style={{
          background: 'linear-gradient(to right, var(--accent-cyan), var(--accent-soft), var(--accent-cyan))'
        }}
      />

      <div className="container-wide relative z-10">

        <CyberCardGlitch
          className="p-8 rounded-2xl backdrop-blur-xl border"
          style={{
            background: 'var(--bg-panel-soft)',
            borderColor: 'var(--border-soft)'
          }}
        >
          {/* TOP SECTION */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Branding */}
            <div className="text-center md:text-left">
              <h3
                className="text-xl font-bold tracking-wide glitch-title"
                style={{ color: 'var(--accent-cyan)' }}
              >
                BLACK FLAG LABS
              </h3>
              <p className="mt-1 text-sm" style={{ color: 'var(--fg-soft)' }}>
                {t.footer?.tagline || "Premium cyber systems for the future."}
              </p>
            </div>

            {/* Links */}
            <div className="flex gap-8 text-sm font-medium">
              <a
                href="/terms"
                className="cyber-link transition-colors hover:!text-[#ff0534]"
                style={{ color: 'var(--fg)' }}
              >
                {t.footer?.terms || "Terms"}
              </a>
              <a
                href="/privacy"
                className="cyber-link transition-colors hover:!text-[#ff0534]"
                style={{ color: 'var(--fg)' }}
              >
                {t.footer?.privacy || "Privacy"}
              </a>
            </div>
          </div>

          {/* SEPARATOR */}
          <div
            className="w-full h-px my-6"
            style={{
              background: 'linear-gradient(to right, transparent, var(--accent-cyan), transparent)',
              opacity: 0.3
            }}
          />

          {/* BOTTOM ROW */}
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <div className="flex items-center gap-2">
              <span className="opacity-70" style={{ color: 'var(--fg-soft)' }}>{t.footer?.copyright || "Made with"}</span>
              <span style={{ color: 'var(--accent-cyan)' }}>⚡</span>
              <span className="opacity-70" style={{ color: 'var(--fg-soft)' }}>BLACK FLAG LABS</span>
            </div>

            <div className="mt-3 md:mt-0">
              <span className="opacity-60" style={{ color: 'var(--fg-soft)' }}>
                © {new Date().getFullYear()} — {t.footer?.rights || "All Rights Reserved."}
              </span>
            </div>
          </div>

        </CyberCardGlitch>
      </div>

      {/* FLICKERING GLITCH EDGES */}
      <div
        className="absolute bottom-0 left-0 w-full h-[2px] animate-glitchBar"
        style={{
          background: 'linear-gradient(to right, var(--accent-soft), var(--accent-cyan), var(--accent-soft))'
        }}
      ></div>
    </footer>
  );
}