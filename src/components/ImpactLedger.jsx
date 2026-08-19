import React, { useState } from 'react';

const CASES = [
  {
    id: '01',
    title: 'Helios Index',
    domain: 'Capital Markets',
    metric: '−74% decision latency',
    summary: 'Collapsed eleven tangled risk models into a single parsimonious signal — a golden-ratio weighting that traders read in one glance.',
    image: 'https://media.base44.com/images/public/6a83e47e362ebcd00e616b0c/1765a4f4b_generated_4942b04b.png',
    accent: 'hsl(174 56% 40%)',
  },
  {
    id: '02',
    title: 'Monad Engine',
    domain: 'Logistics Infrastructure',
    metric: '+3.2× throughput',
    summary: 'Stripped a legacy routing stack to its load-bearing logic, exposing a platonic-solid structure that scaled without the friction.',
    image: 'https://media.base44.com/images/public/6a83e47e362ebcd00e616b0c/df20500c1_generated_1bd18f1b.png',
    accent: 'hsl(355 75% 56%)',
  },
  {
    id: '03',
    title: 'Voronoi Atlas',
    domain: 'Healthcare Analytics',
    metric: '1 model → 11 markets',
    summary: 'Replaced fragmented regional heuristics with one generative pattern that smoothed from jagged edges to a single rounded truth.',
    image: 'https://media.base44.com/images/public/6a83e47e362ebcd00e616b0c/c39373326_generated_1c27385a.png',
    accent: 'hsl(174 56% 40%)',
  },
];

function WireframeSVG({ id, accent }) {
  return (
    <svg viewBox="0 0 400 300" className="h-full w-full">
      <rect x="0.5" y="0.5" width="399" height="299" fill="none" stroke="var(--fg)" strokeOpacity="0.2" strokeWidth="0.5" />
      
      {[[20, 20], [380, 20], [20, 280], [380, 280]].map(([x, y], idx) => (
        <g key={idx} stroke="var(--fg)" strokeOpacity="0.35" strokeWidth="0.5">
          <line x1={x - 6} y1={y} x2={x + 6} y2={y} />
          <line x1={x} y1={y - 6} x2={x} y2={y + 6} />
        </g>
      ))}

      {id === '01' && (
        <g fill="none" stroke={accent} strokeWidth="0.6" opacity="0.7">
          <path d="M200,250 C200,250 120,200 120,140 C120,80 200,40 200,40 C200,40 280,80 280,140 C280,200 200,250 200,250 Z" />
          <path d="M200,250 C200,250 160,210 160,160 C160,110 200,70 200,70" />
          <circle cx="200" cy="150" r="6" fill={accent} stroke="none" />
        </g>
      )}

      {id === '02' && (
        <g fill="none" stroke={accent} strokeWidth="0.6" opacity="0.7">
          <polygon points="200,70 270,120 240,210 160,210 130,120" />
          <polygon points="200,110 240,140 225,190 175,190 160,140" />
          <line x1="200" y1="70" x2="200" y2="250" strokeDasharray="2 3" />
          <line x1="130" y1="120" x2="270" y2="210" strokeDasharray="2 3" />
        </g>
      )}

      {id === '03' && (
        <g fill="none" stroke={accent} strokeWidth="0.6" opacity="0.7">
          {Array.from({ length: 9 }).map((_, i) => {
            const cx = 80 + (i % 3) * 120;
            const cy = 90 + Math.floor(i / 3) * 80;
            return <circle key={i} cx={cx} cy={cy} r={28 + (i % 2) * 6} />;
          })}
        </g>
      )}

      <text x="20" y="285" className="label-mono" fill="var(--fg)" fillOpacity="0.5" fontSize="7">
        FIG. {id} — WIREFRAME
      </text>
    </svg>
  );
}

export default function ImpactLedger() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="impact" className="relative px-6 py-32 md:py-48 z-20">
      <div className="mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 03 ] The Impact Ledger
            </span>
            <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Proof, rendered as <br />
              <span className="italic font-normal text-[var(--fg)]/60">aesthetic data.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[var(--fg)]/55">
            Each engagement begins as a wireframe of the problem and resolves into a measurable structure. Hover to see the result.
          </p>
        </div>

        {/* 3 Impact Cards Grid */}
        <div className="grid gap-px bg-[var(--fg)]/10 md:grid-cols-3">
          {CASES.map((item) => {
            const isHovered = hoveredId === item.id;
            return (
              <article
                key={item.id}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="group relative bg-[var(--bg)] border border-transparent hover:border-[var(--fg)]/20 transition-all"
              >
                {/* Visual Image / SVG Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface)]">
                  {/* SVG Wireframe View */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                    <WireframeSVG id={item.id} accent={item.accent} />
                  </div>

                  {/* Image View */}
                  <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--fg)]/40 to-transparent" />
                  </div>

                  <span className="absolute left-4 top-4 label-mono text-[8px] text-[var(--fg)]/55">
                    {item.id} / 03
                  </span>
                </div>

                {/* Content Details */}
                <div className="flex flex-col gap-3 p-6">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-heading text-xl font-medium tracking-[-0.01em] text-[var(--fg)]">
                      {item.title}
                    </h3>
                    <span className="label-mono text-[8px] text-[var(--fg)]/45">
                      {item.domain}
                    </span>
                  </div>

                  <p className="font-mono text-xs leading-relaxed text-[var(--fg)]/60">
                    {item.summary}
                  </p>

                  <div className="mt-2 flex items-center gap-3">
                    <span className="font-heading text-lg font-medium" style={{ color: item.accent }}>
                      {item.metric}
                    </span>
                    <span className="h-px flex-1 bg-[var(--fg)]/15" />
                    <a
                      href="#gateway"
                      className="label-mono text-[8px] text-[var(--fg)]/60 transition-colors hover:text-[var(--fg)]"
                    >
                      Discovery ↗
                    </a>
                  </div>
                </div>

              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
