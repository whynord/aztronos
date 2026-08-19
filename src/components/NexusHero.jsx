import React, { useEffect, useState } from 'react';

export default function NexusHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="nexus"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
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
