import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/cyberMockup.css';

/**
 * CyberMockupFrame - Premium cyberpunk-style holographic display frame
 *
 * Wraps images/content in a futuristic sci-fi monitor panel with:
 * - Neon red/cyan edge glow
 * - Animated holographic corner accents
 * - Scanline overlay
 * - Floating shadow effect
 * - Hover flicker animation
 * - Subtle tilt parallax
 *
 * Usage:
 * <CyberMockupFrame>
 *   <img src="/screenshots/project.png" alt="Project" />
 * </CyberMockupFrame>
 */
const CyberMockupFrame = ({ children, className = '' }) => {
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Subtle tilt: max 2 degrees
    setTilt({
      x: (y - 0.5) * 4,
      y: (x - 0.5) * -4
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`cyber-mockup-wrapper ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
      }}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Holographic corner accents */}
      <div className="cyber-corner cyber-corner-tl" />
      <div className="cyber-corner cyber-corner-tr" />
      <div className="cyber-corner cyber-corner-bl" />
      <div className="cyber-corner cyber-corner-br" />

      {/* Glow border container */}
      <div className="cyber-glow-border">
        {/* Inner frame with dark-glass background */}
        <div className="cyber-frame-inner">
          {/* Content wrapper */}
          <div className="cyber-content">
            {children}
          </div>

          {/* Scanline overlay */}
          <div className="cyber-scanlines" />

          {/* Reflection sheen */}
          <div className="cyber-sheen" />
        </div>
      </div>

      {/* Floating shadow */}
      <div className="cyber-shadow" />
    </motion.div>
  );
};

export default CyberMockupFrame;
