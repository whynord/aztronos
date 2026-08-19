import React, { useRef, useState, useEffect } from 'react';

const PROBLEMS = [
  'Entangled dependencies',
  'Conflicting stakeholder logic',
  'Opaque data surfaces',
  'Legacy process friction',
  'Unbounded scope',
];

export default function LogicStream() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const currentScroll = Math.min(Math.max(-rect.top, 0), totalScrollable);
      setScrollProgress(totalScrollable > 0 ? currentScroll / totalScrollable : 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCount = Math.max(1, Math.round(PROBLEMS.length * (1 - scrollProgress)));
  const isResolved = scrollProgress > 0.82;

  return (
    <section id="logic" ref={sectionRef} className="relative" style={{ height: '260vh' }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-center md:gap-16">
          
          {/* Left Column: Generative Entropy (The Problem) */}
          <div className="flex-1">
            <span className="label-mono mb-4 block text-[9px] text-[var(--accent-crimson)]">
              [ 01 ] The Problem — Generative Entropy
            </span>

            {/* Rotating Ellipses SVG */}
            <div className="relative h-72 w-full md:h-96">
              <svg viewBox="0 0 400 400" className="h-full w-full">
                {PROBLEMS.map((problem, i) => {
                  if (i >= activeCount) return null;
                  const cx = 200;
                  const cy = 200;
                  const rx = 40 + i * 28;
                  const ry = rx * (0.7 + (i % 3) * 0.12);
                  const rot = (i * 23 + scrollProgress * 60) % 360;
                  const alpha = 0.85 - i * 0.1;

                  return (
                    <ellipse
                      key={i}
                      cx={cx}
                      cy={cy}
                      rx={rx}
                      ry={ry}
                      fill="none"
                      stroke={`hsl(355 75% 56% / ${alpha})`}
                      strokeWidth={0.6}
                      transform={`rotate(${rot} ${cx} ${cy})`}
                      style={{ transition: 'opacity 0.4s' }}
                    />
                  );
                })}

                {scrollProgress < 0.6 && (
                  <g opacity={1 - scrollProgress * 1.6}>
                    {Array.from({ length: 14 }).map((_, i) => {
                      const angle = (i / 14) * Math.PI * 2;
                      const len = 150 + Math.sin(i * 3) * 30;
                      return (
                        <line
                          key={i}
                          x1={200}
                          y1={200}
                          x2={200 + Math.cos(angle) * len}
                          y2={200 + Math.sin(angle) * len}
                          stroke="hsl(355 75% 56% / 0.25)"
                          strokeWidth={0.5}
                        />
                      );
                    })}
                  </g>
                )}

                {isResolved && (
                  <circle cx={200} cy={200} r={3} fill="hsl(174 56% 40%)" />
                )}
              </svg>
            </div>

            {/* Fading List of Problem Statements */}
            <div className="mt-4 space-y-1">
              {PROBLEMS.map((p, i) => {
                const isActive = i < activeCount;
                return (
                  <div
                    key={p}
                    className="label-mono flex items-center gap-2 text-[9px] transition-all duration-500"
                    style={{
                      opacity: isActive ? 0.5 : 0.15,
                      textDecoration: isActive ? 'none' : 'line-through',
                    }}
                  >
                    <span className="text-[var(--fg)]/40">0{i + 1}</span>
                    <span className={isActive ? 'text-[var(--fg)]/70' : 'text-[var(--fg)]/30'}>
                      {p}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Divider Line */}
          <div className="hidden h-72 w-px bg-[var(--fg)]/15 md:block" />

          {/* Right Column: Occam's Razor (The Solution) */}
          <div className="flex-1">
            <span className="label-mono mb-4 block text-[9px] text-[var(--accent-teal)]">
              [ 02 ] The Solution — Occam's Razor
            </span>

            <div
              className={`transition-all duration-700 ${
                isResolved ? 'opacity-100 translate-x-0' : 'opacity-60 translate-x-2'
              }`}
            >
              <p className="font-heading text-3xl font-medium leading-tight tracking-[-0.02em] text-[var(--fg)] sm:text-4xl md:text-5xl">
                Among competing hypotheses, the simplest — the one that makes the fewest assumptions — is invariably the truest.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-16 bg-[var(--accent-teal)]" />
                <span className="label-mono text-[9px] text-[var(--accent-teal)] font-semibold">
                  Lex Parsimoniae
                </span>
              </div>

              <p className="mt-8 max-w-sm font-mono text-xs leading-relaxed text-[var(--fg)]/55">
                Deep understanding of the problem connects the dots that resolve to a simple solution. We facilitate execution and remove friction — the aesthetic and the logic, balanced.
              </p>
            </div>
          </div>

        </div>

        {/* Scroll Progress Bar (Chaos -> Clarity) */}
        <div className="absolute bottom-8 left-1/2 hidden w-64 -translate-x-1/2 md:block">
          <div className="h-px w-full bg-[var(--fg)]/15">
            <div
              className="h-px bg-[var(--fg)]/60 transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            <span className="label-mono text-[8px] text-[var(--fg)]/40">CHAOS</span>
            <span className="label-mono text-[8px] text-[var(--fg)]/40">CLARITY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
