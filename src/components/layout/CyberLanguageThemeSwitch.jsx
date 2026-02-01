import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { usePreferencesStore } from "../../store/preferencesStore";

export default function CyberLanguageThemeSwitch({ className = "" }) {
  const language = usePreferencesStore((s) => s.language);
  const setLanguage = usePreferencesStore((s) => s.setLanguage);

  const theme = usePreferencesStore((s) => s.theme);
  const toggleTheme = usePreferencesStore((s) => s.toggleTheme);

  const [idle, setIdle] = useState(false);

  const handleLangClick = (lang) => {
    if (lang !== language) {
      setLanguage(lang);
    }
  };

  const handleThemeClick = () => {
    toggleTheme();
  };

  const isDark = theme === "dark";

  // -----------------------
  // IDLE FADE-OUT REACTIVATED
  // -----------------------
  useEffect(() => {
    let timer = setTimeout(() => setIdle(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleWake = () => {
    setIdle(false);
    clearTimeout(window.__idleTimer);
    window.__idleTimer = setTimeout(() => setIdle(true), 2500);
  };

  return (
    <motion.div
      onMouseEnter={handleWake}
      onMouseMove={handleWake}
      className={`
        relative rounded-xl px-2.5 py-2
        overflow-hidden
        transition-all
        ${idle ? "opacity-40" : "opacity-100"}
        ${className}
      `}
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: idle ? 0.35 : 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >

      {/* LANG SWITCH */}
      <div className="flex items-center gap-1.5 mb-2">
        {["en", "es"].map((lang) => (
          <button
            key={lang}
            onClick={() => handleLangClick(lang)}
            className={`
              flex-1 py-1.5 text-[10px] font-bold uppercase rounded-lg
              transition-all relative overflow-hidden
              ${language === lang
                ? isDark ? "bg-red-500/30 text-red-200" : "bg-[#ff0534] text-white"
                : "bg-black/20 text-neutral-500 hover:bg-black/30"
              }
            `}
          >
            <span className="relative z-10">{lang}</span>
          </button>
        ))}
      </div>

      {/* THEME SWITCH */}
      <button
        onClick={handleThemeClick}
        className={`
          w-full flex items-center justify-center gap-1.5
          py-1.5 rounded-lg text-lg
          transition-all relative overflow-hidden
          ${isDark
            ? "bg-red-500/30 hover:bg-red-500/40"
            : "bg-[#ff0534] hover:bg-[#ff0534]/90"
          }
        `}
      >
        <span className="relative z-10">
          {isDark ? "🌙" : "☀️"}
        </span>
      </button>
    </motion.div>
  );
}