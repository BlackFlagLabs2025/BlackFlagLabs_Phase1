// src/components/sections/ServicesSection.jsx
import { motion, AnimatePresence } from "framer-motion";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import CyberButton from "../UI/CyberButton";
import { usePreferencesStore } from "../../store/preferencesStore";

export default function ServicesSection({
  t,
  services,
  activeCategory,
  setActiveCategory,
  selectedServices,
  toggleService,
  getFilteredServices,
}) {
  const theme = usePreferencesStore((s) => s.theme);
  const build = t?.buildOwn ?? {};
  const categories = Object.keys(services || {});

  // fallback filter (por si el store no tiene data)
  const fallbackFiltered = () => {
    if (!services) return [];
    const all = Object.values(services).flat();
    if (activeCategory === "all") return all;
    return services[activeCategory] ?? [];
  };

  const filtered =
    typeof getFilteredServices === "function"
      ? getFilteredServices() || []
      : fallbackFiltered();

  return (
    <section id="services" className="py-28 container-wide relative z-10">
      {/* HEADER */}
      <div className="mb-16 scroll-reveal text-center">
        <h2 className="text-4xl md:text-5xl font-bold glitch-title mb-4">
          {build.title || "Build Your Project"}
        </h2>
        <p className="text-fg-secondary text-lg max-w-3xl mx-auto cyber-subtitle">
          {build.subtitle || "Choose services to craft your system."}
        </p>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-14">
        <CyberButton
          onClick={() => setActiveCategory("all")}
          variant={activeCategory === "all" ? "accent" : "ghost"}
          className="px-5 py-2 text-sm"
        >
          {build.categories?.all || "All"}
        </CyberButton>

        {categories.map((cat) => (
          <CyberButton
            key={cat}
            onClick={() => setActiveCategory(cat)}
            variant={activeCategory === cat ? "accent" : "ghost"}
            className="px-5 py-2 text-sm"
          >
            {build.categories?.[cat] || cat}
          </CyberButton>
        ))}
      </div>

      {/* SERVICES GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filtered.map((service) => {
            const isSelected = selectedServices.some((s) => s.id === service.id);

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
              >
                <CyberCardGlitch
                  onClick={() => toggleService(service)}
                  className={`relative cursor-pointer group hover:scale-[1.02] transition-transform duration-300 ${
                    isSelected ? "ring-2 ring-cyan-400/80" : ""
                  }`}
                >
                  <div className="relative z-10 p-4 space-y-3">
                    <h4 className={`font-semibold text-lg ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                      {service.name || "Service"}
                    </h4>

                    <p className={`text-xs ${theme === "dark" ? "text-gray-300/80" : "text-gray-700/90"}`}>
                      {service.desc || ""}
                    </p>

                    <div className="flex items-baseline justify-between mb-3">
                      <span className="text-lg font-bold text-cyan-300">
                        ${service.priceStart}
                        {service.isMonthly && <span className="text-xs">/mo</span>}
                      </span>

                      <span className="text-xs text-gray-400">
                        {build.regularPrice || "Regular"}:{" "}
                        <span className="line-through">${service.priceLater}</span>
                        {service.isMonthly && "/mo"}
                      </span>
                    </div>

                    <CyberButton
                      variant={isSelected ? "accent" : "ghost"}
                      className="w-full py-2 mt-1"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleService(service);
                      }}
                    >
                      {isSelected
                        ? build.added || "Added"
                        : build.addToProject || "Add to Project"}
                    </CyberButton>
                  </div>
                </CyberCardGlitch>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}