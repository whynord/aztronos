import React, { useRef, useEffect, useState } from 'react';

export default function NexusHero() {
  const canvasRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = 0;
    let height = 0;
    let dpr = 1;
    const count = 220;
    const particles = [];

    const handleResize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (particles.length === 0) {
        for (let i = 0; i < count; i++) {
          particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
            r: Math.random() * 1.4 + 0.4,
          });
        }
      }
    };

    const getScrollProgress = () => {
      const heroHeight = window.innerHeight * 0.9;
      return Math.min(window.scrollY / heroHeight, 1);
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const scrollProgress = getScrollProgress();

      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.26;

      for (const p of particles) {
        const angle = Math.atan2(p.y - cy, p.x - cx);
        const targetX = cx + Math.cos(angle) * radius;
        const targetY = cy + Math.sin(angle) * radius;

        p.x += p.vx * (1 - scrollProgress);
        p.y += p.vy * (1 - scrollProgress);

        p.x += (targetX - p.x) * 0.04 * scrollProgress;
        p.y += (targetY - p.y) * 0.04 * scrollProgress;

        if (scrollProgress < 0.05) {
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        const alpha = 0.25 + scrollProgress * 0.55;
        ctx.fillStyle =
          scrollProgress > 0.6
            ? `rgba(42, 157, 143, ${alpha})`
            : `rgba(10, 10, 12, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (scrollProgress > 0.45) {
        const ringAlpha = (scrollProgress - 0.45) / 0.55;
        ctx.strokeStyle = `rgba(10, 10, 12, ${ringAlpha * 0.7})`;
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    handleResize();
    render();

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section
      id="nexus"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 z-10" />

      <div className="relative z-20 flex flex-col items-center px-6 text-center max-w-4xl mx-auto">
        <span
          className={`label-mono mb-8 text-[10px] text-[var(--fg)]/55 transition-opacity duration-1000 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          [ The Occam Grid — v.01 ]
        </span>

        <h1
          className={`font-heading text-5xl font-medium leading-[0.95] tracking-[-0.02em] text-[var(--fg)] sm:text-7xl md:text-8xl transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          EXPLORE THE <br />
          <span className="italic font-normal text-[var(--fg)]/70">uncharted</span>{' '}
          universe.
        </h1>

        <p
          className={`mt-8 max-w-md font-mono text-sm leading-relaxed text-[var(--fg)]/60 transition-all delay-200 duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          We discover, together with our partners, to create impact — balancing the origin of a problem with the simplicity of its solution.
        </p>

        <a
          href="#gateway"
          className={`group mt-12 inline-flex items-center gap-3 transition-all delay-300 duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="label-mono text-[10px] text-[var(--fg)]/70 group-hover:text-[var(--fg)]">
            Begin Discovery
          </span>
          <span className="h-px w-12 bg-[var(--fg)]/40 transition-all duration-300 group-hover:w-20 group-hover:bg-[var(--fg)]" />
        </a>
      </div>

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2">
        <span className="label-mono text-[8px] text-[var(--fg)]/40">SCROLL ↓</span>
      </div>
    </section>
  );
}
