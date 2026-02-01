// src/components/sections/BundlesSection.jsx

import { motion } from "framer-motion";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import CyberButton from "../UI/CyberButton";
import { usePreferencesStore } from "../../store/preferencesStore";

export default function BundlesSection({ t, bundles, selectedBundles, toggleBundle }) {
  const theme = usePreferencesStore((s) => s.theme);
  return (
    <section id="bundles" className="py-28 relative z-10">
      <div className="container-wide">

        {/* HEADER */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold glitch-title mb-4">
            {t.title}
          </h2>

          <p className="text-fg-secondary text-lg max-w-3xl mx-auto cyber-subtitle">
            {t.subtitle}
          </p>
        </div>

        {/* GRID */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {bundles.map((bundle) => {
            const isSelected = selectedBundles.some((b) => b.id === bundle.id);

            /** ===============================
             *  📌 Extraer traducción correcta
             *  =============================== */
            const info = t.items[bundle.id]; // <-- IMPORTANTE

            return (
              <motion.div
                key={bundle.id}
                variants={{
                  hidden: { opacity: 0, y: 22 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <CyberCardGlitch
                  className={`cursor-pointer relative group hover:scale-[1.03] transition-transform duration-300 ${
                    isSelected ? "ring-2 ring-cyan-400/80" : ""
                  }`}
                  onClick={() => toggleBundle(bundle)}
                >

                  {/* FEATURED BADGE */}
                  {bundle.featured && (
                    <div
                      className={`
                        absolute top-3 right-3 z-20
                        text-[10px] px-3 py-1
                        backdrop-blur border
                        rounded-md font-bold tracking-wider
                        glitch-mini
                        ${theme === "dark"
                          ? "bg-cyan-500/25 border-cyan-400/50 text-cyan-200"
                          : "bg-[#ff0534]/20 border-[#ff0534]/60 text-[#ff0534]"
                        }
                      `}
                    >
                      POPULAR
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="relative z-10 p-4 space-y-3">

                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-white tracking-wide drop-shadow-[0_0_3px_rgba(0,255,255,0.7)]">
                      {info.name}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-300/90">{info.desc}</p>
                    <p className="text-xs text-gray-400">{info.target}</p>

                    {/* PRICE */}
                    <div className="space-y-1 pt-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-cyan-300 drop-shadow-[0_0_8px_rgba(0,255,255,0.9)]">
                          ${bundle.priceStart}
                        </span>
                        <span className="text-sm text-gray-300/60">
                          {t.startingAt}
                        </span>
                      </div>

                      <div className="text-sm text-gray-400">
                        {t.laterPrice}:{" "}
                        <span className="line-through">${bundle.priceLater}</span>
                      </div>
                    </div>

                    {/* FEATURES — totalmente traducidas */}
                    <ul className="text-sm text-gray-300/80 space-y-1 pt-4">
                      {info.features.map((f, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 bg-cyan-400 rounded-full shadow-[0_0_6px_rgba(0,255,255,0.8)]"></span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {/* BUTTON */}
                    <CyberButton
                      className="w-full mt-4"
                      variant={isSelected ? "accent" : "ghost"}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleBundle(bundle);
                      }}
                    >
                      {isSelected ? t.selected : t.selectBundle}
                    </CyberButton>
                  </div>

                </CyberCardGlitch>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}