import React, { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-0 z-30 hidden h-full w-px -translate-x-1/2 md:block"
    >
      <div className="absolute inset-0 bg-[#0a0a0c]/8" />
      <div
        className="absolute left-0 top-0 w-px bg-[#0a0a0c]/45"
        style={{ height: `${scrollProgress * 100}%` }}
      />
      <div
        className="absolute left-1/2 h-px w-3 -translate-x-1/2 bg-[#0a0a0c]/60"
        style={{ top: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
