import { useState } from "react";
import useScrollReveal from "../../hooks/useScrollReveal";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import CyberButton from "../UI/CyberButton";

export default function FAQ({ language, onLanguageChange }) {
  const [activeIndex, setActiveIndex] = useState(null);
  useScrollReveal(".scroll-reveal", [activeIndex]);

  // FAQ DATA
  const faqsEN = [
    {
      question: "What services does Black Flag Labs offer?",
      answer:
        "We specialize in high-performance websites, custom web apps, e-commerce, API integrations, AI-powered features, and complete maintenance plans.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Landing pages: 1–2 weeks. Full sites: 2–4 weeks. Advanced apps: 1–3 months depending on complexity.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "We offer packages and fully custom pricing. Bundles start at $899 and scale to enterprise solutions.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "Absolutely. We offer maintenance packages including updates, performance monitoring, and support.",
    },
    {
      question: "What makes Black Flag Labs different?",
      answer:
        "Premium design + cutting-edge performance. Every project includes motion, optimization and cyberpunk-grade aesthetics.",
    },
  ];

  const faqsES = [
    {
      question: "¿Qué servicios ofrece Black Flag Labs?",
      answer:
        "Desarrollamos sitios web de alto rendimiento, apps web personalizadas, ecommerce, integraciones, IA y mantenimiento continuo.",
    },
    {
      question: "¿Cuánto toma un proyecto típico?",
      answer:
        "Landing pages: 1–2 semanas. Sitios completos: 2–4 semanas. Apps complejas: 1–3 meses según alcance.",
    },
    {
      question: "¿Cuál es su estructura de precios?",
      answer:
        "Ofrecemos paquetes y precios personalizados. Los bundles inician desde $899.",
    },
    {
      question: "¿Dan soporte y mantenimiento continuo?",
      answer:
        "Sí. Actualizaciones, monitoreo de rendimiento y soporte técnico.",
    },
    {
      question: "¿Qué hace diferente a Black Flag Labs?",
      answer:
        "Diseño premium + rendimiento de alto nivel con estética cyberpunk y experiencias animadas.",
    },
  ];

  const currentFaqs = language === "en" ? faqsEN : faqsES;

  const content = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Everything you need to know",
    },
    es: {
      title: "Preguntas Frecuentes",
      subtitle: "Todo lo que necesitas saber",
    },
  };

  const t = content[language];

  return (
    <section id="faq" className="py-28 relative z-10 container-wide">

      {/* HEADER */}
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-bold glitch-title">
          {t.title}
        </h2>

        <p className="text-fg-secondary text-lg max-w-2xl mx-auto cyber-subtitle">
          {t.subtitle}
        </p>
      </div>

      {/* LANGUAGE SWITCH */}
      <div className="flex justify-center mb-10 scroll-reveal gap-4">
        <CyberButton
          variant={language === "en" ? "accent" : "ghost"}
          className="px-6"
          onClick={() => onLanguageChange("en")}
        >
          EN
        </CyberButton>

        <CyberButton
          variant={language === "es" ? "accent" : "ghost"}
          className="px-6"
          onClick={() => onLanguageChange("es")}
        >
          ES
        </CyberButton>
      </div>

      {/* FAQ LIST */}
      <div className="max-w-3xl mx-auto space-y-6">
        {currentFaqs.map((faq, index) => {
          const isOpen = activeIndex === index;

          return (
            <CyberCardGlitch
              key={index}
              className="cursor-pointer select-none"
              onClick={() =>
                setActiveIndex(isOpen ? null : index)
              }
            >
              <div className="relative z-10 p-5 space-y-3">
                {/* QUESTION */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold text-white text-lg tracking-wide drop-shadow-[0_0_4px_rgba(0,255,255,0.8)]">
                    {faq.question}
                  </h3>

                  <span className="text-cyan-300 text-2xl font-bold drop-shadow-[0_0_6px_rgba(0,255,255,0.8)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                {isOpen && (
                  <p className="text-gray-300 leading-relaxed text-sm mt-2 border-t border-cyan-400/30 pt-3">
                    {faq.answer}
                  </p>
                )}
              </div>
            </CyberCardGlitch>
          );
        })}
      </div>

    </section>
  );
}