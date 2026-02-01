/* GlitchFillLoader */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlitchFillLoader({ theme, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // 'loading', 'glitch', 'done'

  useEffect(() => {
    // Progress animation
    const duration = 2000;
    const interval = 16;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          // Fase glitch
          setTimeout(() => setPhase('glitch'), 100);
          // Completar
          setTimeout(() => {
            setPhase('done');
            onComplete?.();
          }, 800);
          return 100;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Logo container */}
          <div className="relative w-72 h-72">
            {/* Logo outline (fondo) */}
            <motion.img
              src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
              alt="Black Flag Labs"
              className="absolute inset-0 w-full h-full object-contain opacity-20"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 0.5 }}
            />

            {/* Logo fill con progress */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(${100 - progress}% 0 0 0)`,
              }}
            >
              <img
                src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
                alt="Black Flag Labs"
                className="w-full h-full object-contain"
                style={{
                  filter: `
                    drop-shadow(0 0 20px rgba(var(--accent-rgb), 0.8))
                    drop-shadow(0 0 40px rgba(var(--accent-rgb), 0.4))
                  `,
                }}
              />
            </div>

            {/* GLITCH EFFECT - Cyberpunk style */}
            {phase === 'glitch' && (
              <>
                {/* Main glitch layers */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.img
                    key={`glitch-${i}`}
                    src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
                    alt=""
                    className="absolute inset-0 w-full h-full object-contain"
                    style={{
                      filter: `
                        hue-rotate(${i * 90}deg) 
                        brightness(${1.5 + i * 0.3})
                        contrast(${1.2 + i * 0.2})
                      `,
                      mixBlendMode: 'screen',
                    }}
                    animate={{
                      x: [0, -8, 5, -3, 8, -5, 3, 0],
                      y: [0, 3, -5, 2, -3, 5, -2, 0],
                      scaleX: [1, 0.95, 1.05, 0.98, 1.02, 0.97, 1],
                      opacity: [0, 0.7, 0, 0.5, 0, 0.6, 0],
                    }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.05,
                      times: [0, 0.14, 0.28, 0.42, 0.56, 0.7, 0.84, 1],
                    }}
                  />
                ))}

                {/* RGB Chromatic aberration */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    filter: [
                      'none',
                      'drop-shadow(-5px 0 0 red) drop-shadow(5px 0 0 cyan)',
                      'drop-shadow(-3px 0 0 red) drop-shadow(3px 0 0 cyan)',
                      'drop-shadow(5px 0 0 red) drop-shadow(-5px 0 0 cyan)',
                      'none',
                    ],
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <img
                    src={theme === 'dark' ? '/logo-dark.svg' : '/logo.svg'}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </motion.div>

                {/* Scan lines animadas */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    background: `
                      repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 3px,
                        rgba(255,255,255,0.1) 3px,
                        rgba(255,255,255,0.1) 6px
                      )
                    `,
                  }}
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ duration: 0.7, repeat: 2 }}
                />

                {/* Horizontal glitch bars */}
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={`bar-${i}`}
                    className="absolute left-0 right-0 h-8"
                    style={{
                      top: `${i * 20}%`,
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'invert(0.8)',
                    }}
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{
                      x: ['100%', '-100%', '100%'],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: 'easeInOut',
                    }}
                  />
                ))}

                {/* Digital noise */}
                <motion.div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
                    backgroundSize: '200px 200px',
                    mixBlendMode: 'overlay',
                  }}
                  animate={{
                    opacity: [0, 0.5, 0.3, 0.6, 0],
                  }}
                  transition={{ duration: 0.7 }}
                />

                {/* Distorsión de bordes */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    scale: [1, 1.05, 0.95, 1.03, 0.97, 1],
                    rotate: [0, 2, -2, 1, -1, 0],
                  }}
                  transition={{ duration: 0.7 }}
                  style={{
                    border: '2px solid rgba(var(--accent-rgb), 0.3)',
                    borderRadius: '8px',
                  }}
                />
              </>
            )}

            {/* Progress text */}
            {phase === 'loading' && (
              <motion.div
                className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <div className="text-3xl font-bold mb-2">
                  <span className="text-accent">{Math.round(progress)}</span>
                  <span className="text-fg-secondary">%</span>
                </div>
                <div className="text-xs text-fg-secondary uppercase tracking-widest flex items-center gap-2">
                  <span>Loading</span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                  >
                    .
                  </motion.span>
                  <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                  >
                    .
                  </motion.span>
                </div>
              </motion.div>
            )}

            {/* Progress bar con efecto neon */}
            {phase === 'loading' && (
              <div className="absolute -bottom-8 left-0 right-0 h-1 bg-surface/50 rounded-full overflow-hidden">
                <motion.div
                  className="h-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-accent via-accent-hover to-accent" />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{ opacity: 0.5 }}
                  />
                </motion.div>
              </div>
            )}
          </div>

          {/* Particles cyber */}
          {phase === 'loading' && (
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: Math.random() * 4 + 1 + 'px',
                    height: Math.random() * 4 + 1 + 'px',
                    background: 'var(--accent)',
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    boxShadow: '0 0 10px var(--accent)',
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random(),
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}