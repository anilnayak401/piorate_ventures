import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPosition, setTrailPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    // Smooth trailing animation loop
    let animationFrameId;
    const updateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(updateTrail);
    };
    animationFrameId = requestAnimationFrame(updateTrail);

    // Dynamic Hover Detection
    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor], button, a, input, [role="button"]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        if (customText) {
          setCursorText(customText);
        } else if (target.tagName.toLowerCase() === 'button' || target.getAttribute('role') === 'button') {
          setCursorText('');
        } else if (target.tagName.toLowerCase() === 'a') {
          setCursorText('VISIT');
        } else {
          setCursorText('');
        }
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [position.x, position.y]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Center Precision Dot */}
      <div
        className="fixed w-2 h-2 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-50 shadow-[0_0_12px_#38bdf8]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transition: 'transform 0.05s ease-out',
        }}
      />

      {/* Trailing Aura & Label Ring */}
      <div
        className={`fixed rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center transition-all duration-200 border ${
          cursorText
            ? 'w-16 h-16 bg-cyan-500/20 border-cyan-400 backdrop-blur-xs scale-110'
            : isHovered
            ? 'w-12 h-12 bg-white/10 border-cyan-400/80 scale-125'
            : 'w-7 h-7 bg-cyan-400/5 border-cyan-400/30'
        }`}
        style={{
          left: `${trailPosition.x}px`,
          top: `${trailPosition.y}px`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-mono font-bold tracking-widest text-cyan-300 uppercase px-1 select-none animate-pulse">
            {cursorText}
          </span>
        )}
      </div>
    </div>
  );
}
