// src/components/sections/HeroSection.jsx
import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import CyberButton from "../UI/CyberButton";
import { useUIStore } from "../../store/uiStore";
import { UPWORK_URL } from "../../config/links";

export default function HeroSection({ t, language, onStartProject, startAnimations = false }) {
  const handleHireUpwork = () => {
    window.open(UPWORK_URL, "_blank", "noopener,noreferrer");
  };
  const videoRef = useRef(null);
  const loading = useUIStore((s) => s.loading);
  const title = t?.title || "We Build Premium Cyber Systems";
  const subtitle =
    t?.subtitle ||
    "Web development, automations, AI integrations & high-end digital systems crafted with precision.";
  const startProject = t?.cta || "Start Project";
  const viewServices = t?.viewServices || "View Services";
  const description =
    t?.description ||
    "We create next-gen digital infrastructure for brands that demand elite performance, identity and speed.";

  // Play video after preloader ends AND animations start
  useEffect(() => {
    if (!loading && startAnimations && videoRef.current) {
      videoRef.current.play();
    }
  }, [loading, startAnimations]);

  return (
    <section
      id="home-hero"
      className="relative min-h-[88vh] flex items-center px-6 pb-16 pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Glass / glow background – sin azul chillón */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hero-ultra-bg"
      />

      <div className="container-wide relative z-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)]">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Kicker simple (SIN breadcrumb larguísimo) */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={startAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 hero-kicker"
          >
            <span className="hero-kicker-dot" />
            <span className="hero-kicker-label">
              {language === "en" ? "Black Flag Labs" : "Black Flag Labs"}
            </span>
          </motion.div>

          {/* TITLES + DESCRIPTION */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={startAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-4"
          >
            <h1 className="hero-ultra-title">{title}</h1>
            <h2 className="hero-ultra-subtitle">{subtitle}</h2>
            <p className="hero-ultra-body max-w-2xl">{description}</p>
          </motion.div>

          {/* BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={startAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3 text-[0.7rem] uppercase tracking-[0.18em]"
          >
            <span className="hero-badge">Next.js + Motion Design</span>
            <span className="hero-badge">AI-Ready · API-First</span>
            <span className="hero-badge">Performance-Driven</span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={startAnimations ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <CyberButton
              size="lg"
              variant="accent"
              className="min-w-[190px]"
              onClick={handleHireUpwork}
            >
              {language === "en" ? "Hire me on Upwork" : "Contrátame en Upwork"}
            </CyberButton>

            <CyberButton
              size="lg"
              variant="primary"
              className="min-w-[190px]"
              onClick={onStartProject}
            >
              {startProject}
            </CyberButton>

            <a
              href="#services"
              className="group inline-flex items-center gap-2 text-sm font-medium hero-secondary-link"
            >
              <span>{viewServices}</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE – PANEL PARA EL MP4 DEL LOGO */}
        <motion.div
          initial={{ opacity: 0, y: 22, scale: 0.97 }}
          animate={startAnimations ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.97 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative max-w-md mx-auto lg:mx-0 w-full"
        >
          <div className="hero-logo-panel cyber-hover-target">
            {/* Overlay glass / scan */}
            <div className="hero-logo-glass" aria-hidden="true" />

            {/* Video Animation */}
            <div className="hero-logo-placeholder flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                muted
                playsInline
                className="w-full h-full object-cover"
                style={{ objectPosition: 'center' }}
              >
                <source src="/BlackFlagLabs_Animation.mp4" type="video/mp4" />
              </video>
            </div>

            <div className="hero-logo-meta flex items-center justify-center">
              <span className="hero-logo-meta-label text-center">
                Premium Cyber Systems • Studio-Grade Precision
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}