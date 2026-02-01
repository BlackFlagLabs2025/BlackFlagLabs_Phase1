// src/components/sections/SelectedWork.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import CyberCardGlitch from "../UI/CyberCardGlitch";
import CyberMockupFrame from "../UI/CyberMockupFrame";
import projects from "../../data/projects";

export default function SelectedWork({ t }) {
  const list = projects ?? [];

  return (
    <section id="work" className="py-28 container-wide relative">
      {/* HEADER */}
      <div className="text-center mb-16 scroll-reveal">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gradient-cyber">
          {t.title}
        </h2>
        <p className="text-lg opacity-70 max-w-3xl mx-auto">{t.subtitle}</p>
      </div>

      {/* NO PROJECTS */}
      {list.length === 0 && (
        <p className="text-center text-sm text-slate-500">
          {t.noProjects}
        </p>
      )}

      {/* PROJECT GRID */}
      {list.length > 0 && (
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.16 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          {list.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to={`/work/${project.id}`}>
                <CyberCardGlitch
                  className="
                    cursor-pointer group overflow-hidden rounded-3xl
                    border border-slate-800/80
                    bg-[#050509]/95 backdrop-blur-xl
                    shadow-[0_0_40px_rgba(0,0,0,0.9)]
                    transition-transform duration-500
                    hover:scale-[1.02]
                  "
                  intensity="medium"
                  hoverEffect="mono-distort"
                >
                  {/* IMAGE WITH CYBER MOCKUP FRAME */}
                  <div className="relative overflow-hidden rounded-t-3xl p-6 bg-gradient-to-br from-slate-900/50 to-slate-950/80">
                    <CyberMockupFrame>
                      <img
                        src={project.img}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded-lg"
                      />
                    </CyberMockupFrame>
                  </div>

                  {/* CONTENT */}
                  <div className="relative p-5 sm:p-6 space-y-3">
                    <div className="h-[1px] w-10 bg-gradient-to-r from-rose-400 to-transparent mb-1 opacity-70" />

                    <h3 className="text-xl font-semibold tracking-tight text-slate-50">
                      {project.title}
                    </h3>

                    <p className="text-sm text-slate-300/80 leading-relaxed">
                      {project.desc}
                    </p>

                    {/* Tags */}
                    {project.tags && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-[0.65rem] font-mono uppercase tracking-wider
                              bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* BOTTOM META */}
                    <div className="flex items-center justify-between pt-3 text-[0.7rem] text-slate-500 uppercase tracking-[0.18em]">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-400 shadow-[0_0_10px_rgba(248,113,113,0.9)]" />
                        <span>{t.caseStudy}</span>
                      </span>

                      <span className="font-mono text-slate-400">
                        {t.live}
                      </span>
                    </div>
                  </div>
                </CyberCardGlitch>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      )}
    </section>
  );
}