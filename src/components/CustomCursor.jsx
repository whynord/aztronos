import React, { useRef, useEffect, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.2s' }}
    >
      {/* Crosshair + */}
      <div className="absolute -left-[7px] -top-[7px] h-3.5 w-3.5">
        <span className="absolute left-1/2 top-0 h-3.5 w-px -translate-x-1/2 bg-[var(--fg)]/70" />
        <span className="absolute top-1/2 left-0 h-px w-3.5 -translate-y-1/2 bg-[var(--fg)]/70" />
      </div>

      {/* Live Coordinate Label */}
      <span className="label-mono absolute left-3 top-3 whitespace-nowrap text-[8px] leading-none text-[var(--fg)]/55">
        {pos.x}, {pos.y}
      </span>
    </div>
  );
}
