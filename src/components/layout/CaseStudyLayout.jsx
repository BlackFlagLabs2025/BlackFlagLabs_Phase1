import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import CyberNavbar from './CyberNavbar';
import Footer from '../sections/Footer';
import CyberMockupFrame from '../UI/CyberMockupFrame';
import translations from '../../data/translations';

/**
 * CaseStudyLayout - Premium case study page layout
 *
 * Props:
 * - title: Project title
 * - subtitle: Short tagline
 * - heroImage: Main hero screenshot
 * - challenge: Challenge section text
 * - solution: Solution section text
 * - features: Array of feature strings
 * - techStack: Array of tech strings
 * - galleryImages: Array of image paths
 * - liveUrl: Live demo URL
 * - language: Current language (en/es)
 */
const CaseStudyLayout = ({
  title,
  subtitle,
  heroImage,
  challenge,
  solution,
  features = [],
  techStack = [],
  galleryImages = [],
  liveUrl,
  language = 'en',
  t
}) => {
  // Get full translations for Footer
  const allTranslations = translations[language] || translations.en;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <CyberNavbar language={language} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 mb-8 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {t?.backToWork || 'Back to Work'}
          </Link>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gradient-cyber mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mb-8">
            {subtitle}
          </p>

          {/* Neon Divider */}
          <div className="h-[2px] w-32 bg-gradient-to-r from-rose-500 via-cyan-400 to-transparent mb-12" />

          {/* Hero Image */}
          <CyberMockupFrame className="max-w-6xl mx-auto">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-auto rounded-lg"
            />
          </CyberMockupFrame>
        </motion.div>
      </section>

      {/* Challenge Section */}
      <section className="py-16 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 flex items-center gap-3">
            <span className="h-8 w-1 bg-gradient-to-b from-rose-500 to-rose-600" />
            {t?.challengeTitle || 'The Challenge'}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {challenge}
          </p>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="py-16 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 flex items-center gap-3">
            <span className="h-8 w-1 bg-gradient-to-b from-cyan-500 to-cyan-600" />
            {t?.solutionTitle || 'The Solution'}
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            {solution}
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      {features.length > 0 && (
        <section className="py-16 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-purple-500 to-purple-600" />
              {t?.featuresTitle || 'Core Features'}
            </h2>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-rose-500
                    flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)]">
                    <span className="w-2 h-2 rounded-full bg-white" />
                  </span>
                  <span className="text-lg text-slate-300 pt-0.5">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>
      )}

      {/* Tech Stack Section */}
      {techStack.length > 0 && (
        <section className="py-16 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-8 flex items-center gap-3">
              <span className="h-8 w-1 bg-gradient-to-b from-emerald-500 to-emerald-600" />
              {t?.techStackTitle || 'Tech Stack'}
            </h2>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="px-4 py-2 bg-slate-900/60 border border-cyan-500/30 rounded-lg
                    text-cyan-400 font-mono text-sm backdrop-blur-sm
                    hover:border-cyan-500/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
                    transition-all duration-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="py-16 container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-50 mb-12 text-center">
              {t?.galleryTitle || 'Gallery'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CyberMockupFrame>
                    <img
                      src={image}
                      alt={`${title} screenshot ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </CyberMockupFrame>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Live Demo CTA */}
      {liveUrl && (
        <section className="py-20 container-wide text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-rose-500 to-cyan-500
                text-white font-semibold text-lg rounded-xl
                shadow-[0_0_30px_rgba(248,113,113,0.5)]
                hover:shadow-[0_0_50px_rgba(248,113,113,0.7)]
                hover:scale-105 transition-all duration-300"
            >
              {t?.viewLiveDemo || 'View Live Demo'} →
            </a>
          </motion.div>
        </section>
      )}

      <Footer t={allTranslations} />
    </div>
  );
};

export default CaseStudyLayout;
