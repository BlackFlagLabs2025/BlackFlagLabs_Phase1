import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreferencesStore } from "../../store/preferencesStore";
import { useUIStore } from "../../store/uiStore";

export default function CyberNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const theme = usePreferencesStore((s) => s.theme);
  const setShowContactForm = useUIStore((s) => s.setShowContactForm);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const isDark = theme === "dark";

  return (
    <>
      <motion.header
        className="fixed top-0 inset-x-0 z-40"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <motion.div
          className="mx-auto max-w-4xl px-4 pt-3 pb-2"
          animate={
            scrolled
              ? {
                  scale: 0.98,
                  y: -4,
                }
              : { scale: 1, y: 0 }
          }
          transition={{ duration: 0.25 }}
        >
          <div
            className="
              cyber-hover-target
              flex items-center justify-between gap-4
              rounded-2xl px-4 py-2.5
              border border-[var(--border-soft)]
              shadow-[var(--glow-outer)]
            "
            style={{
              background: isDark
                ? "linear-gradient(to right,#05060fdd,#090716ee)"
                : "linear-gradient(to right,#ffffffdd,#f9f3f7ee)",
            }}
          >
            {/* Logo */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="h-8 w-8 flex items-center justify-center">
                <img
                  src="/Black Flag Labs Logo Symbol.png"
                  alt="Black Flag Labs Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col items-center leading-tight">
                <span className="text-xs uppercase tracking-[0.26em] text-[var(--fg-soft)]">
                  Black Flag
                </span>
                <span className="text-sm font-semibold tracking-[0.24em] uppercase">
                  Labs
                </span>
              </div>
            </div>

            {/* Links */}
            <nav className="hidden md:flex items-center gap-5 text-[11px] uppercase tracking-[0.22em]">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-[var(--fg-soft)] hover:text-[#ff0534] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Start button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowContactForm(true)}
              className="
                cyber-hover-target
                hidden md:inline-flex items-center justify-center flex-shrink-0
                px-4 py-2 rounded-xl text-[10px]
                uppercase tracking-[0.22em] font-semibold
                bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-soft)] to-[var(--accent-red)]
                text-black shadow-[var(--glow-outer)]
              "
            >
              Start
            </motion.button>
          </div>
        </motion.div>
      </motion.header>

      {/* Panel flotante con el switch (el que ya tienes) */}
    </>
  );
}