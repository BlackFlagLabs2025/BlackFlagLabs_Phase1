import CyberButton from "../UI/CyberButton";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import { UPWORK_URL, CONTACT_EMAIL } from "../../config/links";

export default function ContactSection({ t, setShowContactForm }) {
  const handleHireUpwork = () => {
    window.open(UPWORK_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="contact"
      className="py-32 container-wide relative z-10 text-center"
    >
      {/* BACKGROUND FX: SCANLINES + GLOW + MICROGRID */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent 0px, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] pointer-events-none"></div>

      {/* HEADER */}
      <div className="mb-20 scroll-reveal relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold glitch-title mb-4 text-cyan-300">
          {t.title}
        </h2>
        <p className="text-lg max-w-3xl mx-auto text-gray-300 cyber-subtitle">
          {t.subtitle}
        </p>
      </div>

      {/* MAIN CTA CARD */}
      <div className="flex justify-center relative z-10 mb-12">
        <CyberCardGlitch className="px-10 py-12 max-w-xl w-full">
          <div className="space-y-6">

            {/* PRIMARY CTA - UPWORK */}
            <CyberButton
              variant="accent"
              className="w-full text-lg tracking-wide py-4"
              onClick={handleHireUpwork}
            >
              Hire me on Upwork
            </CyberButton>

            {/* SECONDARY CTA - CONTACT FORM */}
            <CyberButton
              variant="primary"
              className="w-full text-lg tracking-wide py-4"
              onClick={() => setShowContactForm(true)}
            >
              {t.title}
            </CyberButton>

            {/* EMAIL */}
            <p className="text-gray-300 text-sm tracking-wide mt-6">
              {CONTACT_EMAIL}
            </p>
          </div>
        </CyberCardGlitch>
      </div>

      {/* FOOTER LINE (CYBER GLOW) */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent mt-20"></div>
    </section>
  );
}