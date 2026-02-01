import { useEffect, useRef } from 'react';

export default function CyberBackgroundSystem() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speed = Math.random() * 0.3 + 0.1; // Slower: 0.1-0.4
        this.opacity = Math.random() * 0.5 + 0.4; // Brighter: 0.4-0.9
        this.color = Math.random() > 0.5 ? '#ff0055' : '#00eaff';
        this.size = Math.random() * 2.5 + 1.5; // Thicker: 1.5-4px
      }

      update() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.y = 0;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity * 0.7; // More visible
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Initialize particles (more visible - 50 particles)
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    // Matrix-like vertical lines
    const matrixLines = [];
    for (let i = 0; i < 12; i++) { // More lines: 12 instead of 8
      matrixLines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.5 + 0.2, // Slower: 0.2-0.7
        opacity: Math.random() * 0.3 + 0.2, // Brighter: 0.2-0.5
        color: Math.random() > 0.5 ? '#ff0055' : '#00eaff',
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ultra-subtle gradient glow
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, 'rgba(0, 234, 255, 0.02)');
      gradient.addColorStop(0.5, 'rgba(255, 0, 85, 0.01)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.globalAlpha = 1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw matrix lines
      matrixLines.forEach((line) => {
        ctx.strokeStyle = line.color;
        ctx.globalAlpha = line.opacity;
        ctx.lineWidth = 2; // Thicker: 2px instead of 1px
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x, line.y + 80); // Longer lines: 80px instead of 60px
        ctx.stroke();

        line.y += line.speed;
        if (line.y > canvas.height) {
          line.y = -80;
          line.x = Math.random() * canvas.width;
        }
      });

      // Draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  );
}
