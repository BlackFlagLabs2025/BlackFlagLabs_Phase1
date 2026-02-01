import { motion, AnimatePresence } from "framer-motion";
import CyberInput from "../UI/CyberInput";
import CyberText from "../UI/CyberText";
import CyberSelect from "../UI/CyberSelect";
import CyberButton from "../UI/CyberButton";
import { usePreferencesStore } from "../../store/preferencesStore";
import { UPWORK_URL } from "../../config/links";

export default function ContactFormModal({
  t,
  show,
  setShow,
  handleFormSubmit,
  formSubmitting,
}) {
  const theme = usePreferencesStore((s) => s.theme);

  const handleHireUpwork = () => {
    window.open(UPWORK_URL, "_blank", "noopener,noreferrer");
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="
          fixed inset-0 bg-black/70 backdrop-blur-md 
          flex items-center justify-center z-[200] p-6
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* ==============================
           MODAL FRAME CYBERPUNK
        =============================== */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`
            relative shadow-2xl
            rounded-2xl border border-accent/40
            max-w-2xl w-full max-h-[90vh] overflow-y-auto
            cyber-frame p-10
            ${theme === "dark" ? "bg-[#05070d]/95 text-fg" : "bg-white/95 text-gray-900"}
          `}
        >

          {/* ------- Scanlines ------ */}
          <div 
            className="
            absolute inset-0 
            pointer-events-none opacity-[0.16]
          "
            style={{
              background:
                "repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 4px)",
            }}
          />

          {/* ------- Soft glitch noise layer ------ */}
          <div
            className="
              absolute inset-0 opacity-[0.06] mix-blend-screen pointer-events-none
              animate-glitch-soft
            "
            style={{
              background:
                "url('https://assets.codepen.io/13471/noise.png')",
            }}
          />

          {/* =============================
              HEADER
          ============================== */}
          <div className="relative z-20 flex justify-between items-center mb-8">
            <h2 className={`text-2xl font-bold tracking-widest drop-shadow-[0_0_12px_rgba(0,255,255,0.5)] ${theme === "dark" ? "text-accent" : "text-[#ff0534]"}`}>
              {t.contact.form.title}
            </h2>

            <button
              onClick={() => setShow(false)}
              className={`
                text-2xl transition drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]
                ${theme === "dark" ? "text-fg-secondary hover:text-accent" : "text-gray-600 hover:text-[#ff0534]"}
              `}
            >
              ×
            </button>
          </div>

          {/* =============================
              FORM (Cyber Components)
          ============================== */}
          <form onSubmit={handleFormSubmit} className="space-y-6 relative z-20">

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <CyberInput
                name="name"
                placeholder={t.contact.form.name}
                required
              />
              <CyberInput
                name="email"
                type="email"
                placeholder={t.contact.form.email}
                required
              />
            </div>

            {/* COMPANY */}
            <CyberInput
              name="company"
              placeholder={t.contact.form.company}
            />

            {/* SELECTS */}
            <div className="grid md:grid-cols-2 gap-6">
              <CyberSelect
                name="budget"
                label={t.contact.form.budget}
                required
                options={[
                  { label: t.contact.form.budgetOptions.select, value: "" },
                  { label: t.contact.form.budgetOptions.under500, value: "under500" },
                  { label: t.contact.form.budgetOptions["500-1k"], value: "500-1k" },
                  { label: t.contact.form.budgetOptions["1k-2k"], value: "1k-2k" },
                  { label: t.contact.form.budgetOptions["2k-5k"], value: "2k-5k" },
                  { label: t.contact.form.budgetOptions["5k+"], value: "5k+" },
                ]}
              />

              <CyberSelect
                name="timeline"
                label={t.contact.form.timeline}
                required
                options={[
                  { label: t.contact.form.timelineOptions.select, value: "" },
                  { label: t.contact.form.timelineOptions.asap, value: "asap" },
                  { label: t.contact.form.timelineOptions.month, value: "month" },
                  { label: t.contact.form.timelineOptions.quarter, value: "quarter" },
                  { label: t.contact.form.timelineOptions.flexible, value: "flexible" },
                ]}
              />
            </div>

            {/* MESSAGE */}
            <CyberText
              name="message"
              placeholder={t.contact.form.message}
              rows={4}
              required
            />

            {/* CTA BUTTONS - 2 options */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {/* Send Message */}
              <CyberButton
                type="submit"
                variant="primary"
                disabled={formSubmitting}
              >
                {formSubmitting ? t.contact.form.sending : t.contact.form.send}
              </CyberButton>

              {/* Hire me on Upwork */}
              <CyberButton
                type="button"
                variant="accent"
                onClick={handleHireUpwork}
              >
                Hire me on Upwork
              </CyberButton>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}