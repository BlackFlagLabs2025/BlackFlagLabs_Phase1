// src/components/UI/CyberControlPanel.jsx
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { usePreferencesStore } from "../../store/preferencesStore";
import CyberLanguageThemeSwitch from "../layout/CyberLanguageThemeSwitch";

export default function CyberControlPanel() {
  const theme = usePreferencesStore((s) => s.theme);

  const [open, setOpen] = useState(true);
  const [dockSide, setDockSide] = useState("right");
  const [idle, setIdle] = useState(false);

  const panelRef = useRef(null);
  const controls = useAnimation();

  // IDLE FADE-OUT
  useEffect(() => {
    setIdle(false);
    const timer = setTimeout(() => setIdle(true), 2400);
    return () => clearTimeout(timer);
  }, [open]);

  const wake = () => {
    setIdle(false);
  };

  // DRAG BOUNDS
  const [bounds, setBounds] = useState({
    left: -window.innerWidth * 0.35,
    right: window.innerWidth * 0.35,
    top: -window.innerHeight * 0.25,
    bottom: window.innerHeight * 0.25,
  });

  useEffect(() => {
    const update = () => {
      setBounds({
        left: -window.innerWidth * 0.35,
        right: window.innerWidth * 0.35,
        top: -window.innerHeight * 0.25,
        bottom: window.innerHeight * 0.25,
      });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // SNAP TO SIDE
  const handleDragEnd = async (_, info) => {
    const screenW = window.innerWidth;
    const x = info.point.x;

    const snapRight = x > screenW / 2;
    setDockSide(snapRight ? "right" : "left");

    await controls.start({
      x: 0,
      y: 0,
      transition: { type: "spring", stiffness: 240, damping: 24 },
    });
  };

  // THEMING
  const panelStyles = {
    dark: {
      background:
        "linear-gradient(145deg, rgba(6,7,14,0.94), rgba(20,0,10,0.82))",
      border: "1px solid rgba(255,0,70,0.55)",
      boxShadow:
        "0 0 26px rgba(255,0,60,0.45), inset 0 0 0 rgba(255,0,60,0.15)",
    },
    light: {
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.92), rgba(250,250,250,0.96))",
      border: "1px solid rgba(255,5,52,0.45)",
      boxShadow:
        "0 0 22px rgba(255,5,52,0.35), inset 0 0 12px rgba(255,5,52,0.08)",
    },
  };

  const activeStyle = theme === "dark" ? panelStyles.dark : panelStyles.light;

  // HUD BUTTON
  const hudButton = (
    <button
      onClick={() => {
        wake();
        setOpen((o) => !o);
      }}
      className="
        fixed z-[900]
        right-4 bottom-6 md:top-6 md:right-4
        h-9 w-9 rounded-lg
        flex items-center justify-center
        backdrop-blur-xl
        border border-red-500/50
        bg-[rgba(0,0,0,0.65)]
        shadow-[0_0_22px_rgba(255,0,80,0.35)]
        transition-all hover:scale-110 active:scale-95
      "
    >
      <motion.div
        key={open ? "close" : "open"}
        initial={{ opacity: 0, rotate: -20 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.25 }}
        className="text-red-400 text-base font-bold"
      >
        {open ? "✕" : "⚙"}
      </motion.div>
    </button>
  );

  // FINAL RETURN
  return (
    <>
      {hudButton}

      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            drag
            dragConstraints={bounds}
            dragElastic={0.18}
            onDragEnd={handleDragEnd}
            onMouseMove={wake}
            onMouseEnter={wake}
            onTouchStart={wake}
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{
              opacity: idle ? 0.25 : 1,
              scale: 1,
            }}
            exit={{ opacity: 0, scale: 0.9, x: 40 }}
            transition={{ duration: 0.38, ease: "easeOut" }}
            style={activeStyle}
            className={`
              cyber-control-panel
              fixed z-[850]
              rounded-xl backdrop-blur-2xl overflow-hidden
              select-none cursor-grab active:cursor-grabbing

              w-[120px] p-2.5

              bottom-20 md:bottom-auto md:top-16

              ${dockSide === "right" ? "right-10" : "left-10"}
            `}
          >
            <div
              className="absolute inset-0 opacity-[0.08] mix-blend-soft-light pointer-events-none"
              style={{
                background:
                  "url('https://assets.codepen.io/13471/noise.png') repeat",
              }}
            />

            <CyberLanguageThemeSwitch className="scale-[0.75]" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}