import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      setIsMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsMoving(false);
      }, 150);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeout);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main dot - 6px */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 150ms cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className="rounded-full bg-cyan-400"
          style={{
            width: '6px',
            height: '6px',
            boxShadow: '0 0 10px rgba(0, 234, 255, 0.8)',
          }}
        />
      </div>

      {/* Outer ring - 12px (appears when moving) */}
      <div
        className="fixed pointer-events-none z-[9998] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isMoving ? 1 : 0,
          scale: isMoving ? 1 : 0.8,
        }}
      >
        <div
          className="rounded-full border"
          style={{
            width: '24px',
            height: '24px',
            borderColor: 'rgba(0, 234, 255, 0.5)',
            borderWidth: '1px',
            boxShadow: '0 0 8px rgba(0, 234, 255, 0.3)',
          }}
        />
      </div>
    </>
  );
}
