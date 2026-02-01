// src/components/sections/CoreOffersSection.jsx
import { motion } from "framer-motion";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import CyberButton from "../UI/CyberButton";
import { usePreferencesStore } from "../../store/preferencesStore";
import { UPWORK_URL } from "../../config/links";

const coreOffers = [
  {
    id: "web-dev",
    title: "Web Development",
    price: 899,
    description: "Modern, responsive websites and web apps that convert visitors into customers. Built with React, Next.js, and cutting-edge technologies.",
    outcomes: [
      "Lightning-fast performance",
      "Mobile-first responsive design",
      "SEO-optimized architecture",
      "Seamless user experience"
    ]
  },
  {
    id: "ai-integrations",
    title: "AI Integrations",
    price: 1499,
    description: "Transform your business with intelligent automation. ChatGPT, custom AI models, and smart workflows that work 24/7.",
    outcomes: [
      "Automated customer support",
      "Smart content generation",
      "Intelligent data processing",
      "Custom AI-powered features"
    ]
  },
  {
    id: "automation-apis",
    title: "Automation & APIs",
    price: 999,
    description: "Streamline operations with custom integrations and automations. Connect your tools, eliminate repetitive tasks, save hours daily.",
    outcomes: [
      "Workflow automation",
      "Third-party API integration",
      "Data synchronization",
      "Process optimization"
    ]
  },
  {
    id: "performance-seo",
    title: "Performance & SEO",
    price: 499,
    description: "Optimize existing sites for speed and discoverability. Get found on Google and deliver instant loading experiences.",
    outcomes: [
      "Core Web Vitals optimization",
      "Technical SEO audit & fixes",
      "Page speed improvements",
      "Search ranking boost"
    ]
  }
];

export default function CoreOffersSection({ onRequestQuote, language = "en" }) {
  const theme = usePreferencesStore((s) => s.theme);

  const handleHireUpwork = () => {
    window.open(UPWORK_URL, "_blank", "noopener,noreferrer");
  };

  const sectionText = {
    en: {
      title: "Core Offers",
      subtitle: "Professional web development services to elevate your digital presence",
      startingAt: "Starting at",
      hireUpwork: "Hire me on Upwork",
      requestQuote: "Request a Quote",
      upworkNote: "Discounted rates available on Upwork while I build my Upwork portfolio."
    },
    es: {
      title: "Ofertas Principales",
      subtitle: "Servicios profesionales de desarrollo web para elevar tu presencia digital",
      startingAt: "Desde",
      hireUpwork: "Contrátame en Upwork",
      requestQuote: "Solicitar Cotización",
      upworkNote: "Tarifas con descuento disponibles en Upwork mientras construyo mi portafolio de Upwork."
    }
  };

  const t = sectionText[language] || sectionText.en;

  return (
    <section id="services" className="py-28 container-wide relative z-10">
      {/* BACKGROUND FX */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.08),transparent_70%)] pointer-events-none"></div>

      {/* HEADER */}
      <div className="mb-16 scroll-reveal text-center">
        <h2 className="text-4xl md:text-5xl font-bold glitch-title mb-4">
          {t.title}
        </h2>
        <p className="text-fg-secondary text-lg max-w-3xl mx-auto cyber-subtitle">
          {t.subtitle}
        </p>
      </div>

      {/* UPWORK NOTE */}
      <div className="mb-12 text-center">
        <p className={`text-sm italic ${theme === "dark" ? "text-cyan-300/80" : "text-[#ff0534]/80"}`}>
          {t.upworkNote}
        </p>
      </div>

      {/* OFFERS GRID */}
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {coreOffers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="scroll-reveal"
          >
            <CyberCardGlitch className="h-full group hover:scale-[1.02] transition-transform duration-300">
              <div className="relative z-10 p-6 space-y-4 h-full flex flex-col">
                {/* TITLE & PRICE */}
                <div className="flex justify-between items-start mb-2">
                  <h3 className={`font-bold text-xl ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    {offer.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-xs text-fg-secondary">{t.startingAt}</div>
                    <div className="text-2xl font-bold text-cyan-300">
                      ${offer.price}
                    </div>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className={`text-sm leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                  {offer.description}
                </p>

                {/* OUTCOMES */}
                <ul className={`space-y-2 text-sm flex-grow ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                  {offer.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-300 mt-0.5">✓</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="grid grid-cols-2 gap-3 pt-4 mt-auto">
                  <CyberButton
                    variant="accent"
                    className="w-full py-3 text-sm"
                    onClick={handleHireUpwork}
                  >
                    {t.hireUpwork}
                  </CyberButton>
                  <CyberButton
                    variant="ghost"
                    className="w-full py-3 text-sm"
                    onClick={onRequestQuote}
                  >
                    {t.requestQuote}
                  </CyberButton>
                </div>
              </div>
            </CyberCardGlitch>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
