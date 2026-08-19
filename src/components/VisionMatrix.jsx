import React from 'react';
import { ShieldAlert, ShieldCheck, Check, X } from 'lucide-react';

const comparisons = [
  {
    dimension: 'Problem Framing',
    conventional: 'Applies pre-packaged template solutions to symptoms',
    aztronos: 'Deep mathematical problem mapping down to root constraints',
    highlight: 'Respects origin of complexity',
  },
  {
    dimension: 'Solution Design',
    conventional: 'Bloated multi-initiative decks with high cognitive drag',
    aztronos: "Occam's Razor simplicity: fewest actions for maximum impact",
    highlight: 'Minimal cognitive load',
  },
  {
    dimension: 'Execution Readiness',
    conventional: 'Handed off as theoretical strategy recommendations',
    aztronos: 'Built for instant implementation with explicit decision rules',
    highlight: 'Zero friction handoff',
  },
  {
    dimension: 'Partnership Dynamic',
    conventional: 'Transactional vendor delivering remote slide decks',
    aztronos: 'Co-explorer embedding with your team to share risk & credit',
    highlight: 'Shared risk & credit',
  },
  {
    dimension: 'Experience Quality',
    conventional: 'Rigid, bureaucratic, and jargon-heavy',
    aztronos: 'Aesthetic & Logic: clean, beautiful, rational, purposeful',
    highlight: 'Poetic precision',
  },
];

export default function VisionMatrix() {
  return (
    <section id="vision" className="relative px-6 py-32 md:py-48 z-20 border-t border-[var(--fg)]/15">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 08 ] Vision & Operational Logic
            </span>
            <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Aesthetic meets <br />
              <span className="italic font-normal text-[var(--fg)]/60">logic.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[var(--fg)]/55">
            We balance the origin of the problem with the simplicity of the solution — removing friction so strategy feels as clear as good design.
          </p>
        </div>

        {/* Vision Statement Banner */}
        <div className="mb-16 border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-8 text-center sm:p-10">
          <h3 className="font-heading text-2xl font-medium leading-snug tracking-[-0.01em] text-[var(--fg)] sm:text-3xl">
            “We balance the complexity of real problems with the simplicity of executable solutions — removing friction so strategy feels as clear as good design.”
          </h3>
          <span className="label-mono mt-4 block text-[8px]" style={{ color: 'var(--accent-teal)' }}>
            [ OPERATIONAL VISION STATEMENT ]
          </span>
        </div>

        {/* Comparison Matrix Table */}
        <div className="overflow-hidden border border-[var(--fg)]/15">
          {/* Table Header */}
          <div className="grid grid-cols-1 border-b border-[var(--fg)]/15 bg-[var(--bg)]/60 p-5 font-mono text-xs font-semibold md:grid-cols-12">
            <div className="text-[var(--fg)]/45 uppercase md:col-span-3">Dimension</div>
            <div className="mt-2 flex items-center gap-2 text-[var(--accent-crimson)] md:col-span-4 md:mt-0">
              <ShieldAlert className="h-4 w-4" />
              Typical Vendor Approach
            </div>
            <div className="mt-2 flex items-center gap-2 text-[var(--accent-teal)] md:col-span-5 md:mt-0">
              <ShieldCheck className="h-4 w-4" />
              Aztronos Co-Exploration
            </div>
          </div>

          {/* Matrix Rows */}
          <div>
            {comparisons.map((item, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 items-center gap-4 border-b border-[var(--fg)]/10 p-6 last:border-b-0 md:grid-cols-12"
              >
                <div className="md:col-span-3">
                  <span className="font-heading text-base font-medium text-[var(--fg)]">{item.dimension}</span>
                  <span
                    className="label-mono mt-1 block text-[8px]"
                    style={{ color: 'var(--accent-amber)' }}
                  >
                    [{item.highlight}]
                  </span>
                </div>

                <div
                  className="flex items-start gap-3 border border-[var(--fg)]/10 p-4 text-xs text-[var(--fg)]/65 md:col-span-4"
                  style={{ borderLeft: '2px solid var(--accent-crimson)' }}
                >
                  <X className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent-crimson)' }} />
                  <span>{item.conventional}</span>
                </div>

                <div
                  className="flex items-start gap-3 border border-[var(--fg)]/10 p-4 text-xs md:col-span-5"
                  style={{ borderLeft: '2px solid var(--accent-teal)', color: 'var(--fg)' }}
                >
                  <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: 'var(--accent-teal)' }} />
                  <span className="font-medium">{item.aztronos}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
