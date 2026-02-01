// src/routes/Home.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// GLOBAL FX
import GlitchFillLoader from "../components/Global/GlitchFillLoader";
import CyberBackgroundSystem from "../components/effects/CyberBackgroundSystem";
import CustomCursor from "../components/effects/CustomCursor";

// NAV + HERO
import CyberNavbar from "../components/layout/CyberNavbar";
import HeroSection from "../components/sections/HeroSection";

// SECTIONS
import SelectedWork from "../components/sections/SelectedWork";
import CoreOffersSection from "../components/sections/CoreOffersSection";
import FAQ from "../components/sections/FAQ";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

// MODAL
import ContactFormModal from "../components/sections/ContactFormModal";

// HOOKS
import useScrollReveal from "../hooks/useScrollReveal";

// STORES
import { usePreferencesStore } from "../store/preferencesStore";
import { useUIStore } from "../store/uiStore";

// DATA
import translations from "../data/translations";
import CyberControlPanel from "../components/UI/CyberControlPanel";
import { CONTACT_EMAIL } from "../config/links";

export default function Home() {
  const theme = usePreferencesStore((s) => s.theme);
  const language = usePreferencesStore((s) => s.language);
  const setLanguage = usePreferencesStore((s) => s.setLanguage);

  const loading = useUIStore((s) => s.loading);
  const setLoading = useUIStore((s) => s.setLoading);
  const scrollY = useUIStore((s) => s.scrollY);
  const setScrollY = useUIStore((s) => s.setScrollY);
  const showContactForm = useUIStore((s) => s.showContactForm);
  const setShowContactForm = useUIStore((s) => s.setShowContactForm);

  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY || 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  useScrollReveal(".scroll-reveal");
  useScrollReveal(".scroll-reveal-left");
  useScrollReveal(".scroll-reveal-right");
  useScrollReveal(".scroll-reveal-scale");

  const t = translations[language];

  return (
    <>
      <CyberBackgroundSystem />
      <CustomCursor />
      {!loading && <CyberControlPanel />}

      <AnimatePresence>
        {loading && (
          <GlitchFillLoader theme={theme} onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative min-h-screen"
      >
        <CyberNavbar />

        {/* HERO */}
        <HeroSection
          t={t.hero}
          language={language}
          onStartProject={() => setShowContactForm(true)}
          startAnimations={!loading}
        />

        <main className="relative z-10">
          <SelectedWork t={t.selectedWork} />

          <CoreOffersSection
            onRequestQuote={() => setShowContactForm(true)}
            language={language}
          />

          <FAQ language={language} onLanguageChange={setLanguage} />

          <ContactSection t={t.contact} setShowContactForm={setShowContactForm} />
        </main>

        <Footer t={t} />
      </motion.div>

      <ContactFormModal
        t={t}
        show={showContactForm}
        setShow={setShowContactForm}
        handleFormSubmit={async (e) => {
          e.preventDefault();
          setFormSubmitting(true);

          try {
            const formData = new FormData(e.target);
            const data = {
              access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
              name: formData.get("name"),
              email: formData.get("email"),
              company: formData.get("company") || "Not provided",
              budget: formData.get("budget"),
              timeline: formData.get("timeline"),
              message: formData.get("message"),
              subject: "New Contact Form Submission - Black Flag Labs"
            };

            const response = await fetch("https://api.web3forms.com/submit", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
              alert("Message sent successfully! We'll get back to you soon.");
              setShowContactForm(false);
              e.target.reset();
            } else {
              throw new Error("Form submission failed");
            }
          } catch (error) {
            console.error("Form submission error:", error);
            alert(
              `Failed to send message. Please email us directly at ${CONTACT_EMAIL}`
            );
          } finally {
            setFormSubmitting(false);
          }
        }}
        formSubmitting={formSubmitting}
      />
    </>
  );
}