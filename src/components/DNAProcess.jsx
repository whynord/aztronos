import React, { useState } from 'react';
import { Search, GitMerge, Scissors, CheckCircle2, Network } from 'lucide-react';

export default function DNAProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'Understand Deeply',
      subtitle: 'Map the real problem, not just the symptoms.',
      icon: Search,
      accent: 'var(--accent-teal)',
      tag: 'RIGOROUS FRAMING',
      details: [
        'Uncover root operational constraints & hidden friction.',
        'Distill signal from high-frequency organizational noise.',
        'Structured qualitative & quantitative discovery frameworks.',
        'Eliminate false assumptions before touching code or strategy.',
      ],
      mathFormula: 'f(t) = \\int_{-\\infty}^{\\infty} F(\\omega)e^{i\\omega t} d\\omega \\rightarrow \\text{Noise Filter}',
    },
    {
      id: '02',
      title: 'Connect the Dots',
      subtitle: 'Reveal patterns others miss across complex domains.',
      icon: GitMerge,
      accent: 'var(--accent-amber)',
      tag: 'PATTERN RECOGNITION',
      details: [
        'Bridge cross-functional gaps: strategy, tech, & execution.',
        'Synthesize fragmented data into unified system topology.',
        'Identify high-leverage intervention points across workflows.',
        'Map dynamic feedback loops in business operations.',
      ],
      mathFormula: 'G = (V, E) \\quad \\text{where } E_{inter-domain} \\neq \\emptyset',
    },
    {
      id: '03',
      title: 'Simplify Decisively',
      subtitle: "Design the simplest model (Occam's Razor) that solves the whole problem.",
      icon: Scissors,
      accent: 'var(--accent-crimson)',
      tag: "OCCAM'S RAZOR EXECUTION",
      details: [
        'Radically trim superfluous initiatives and system drag.',
        'Fewer priorities with exponentially higher execution velocity.',
        'Architect elegant, friction-free workflows and software.',
        'Clear decision rules and seamless operational handoffs.',
      ],
      mathFormula: '\\min_{M} \\operatorname{Complexity}(M) \\quad \\text{s.t.} \\quad \\operatorname{Impact}(M) \\ge I_{target}',
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="dna" className="relative px-6 py-32 md:py-48 z-20 border-t border-[var(--fg)]/15">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 06 ] Aztronos Methodology
            </span>
            <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Our DNA: <br />
              <span className="italic font-normal text-[var(--fg)]/60">3-step problem resolution.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[var(--fg)]/55">
            We don't complicate solutions to justify fees. We resolve chaos to its absolute, simplest, most powerful form.
          </p>
        </div>

        {/* Step Switcher Tabs */}
        <div className="mb-12 grid grid-cols-1 gap-px border border-[var(--fg)]/15 bg-[var(--fg)]/10 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`p-6 text-left transition-all duration-300 ${
                  isActive ? 'bg-[var(--bg)]' : 'bg-transparent hover:bg-[var(--fg)]/5'
                }`}
              >
                <div className="mb-3 flex items-center justify-between">
                  <span
                    className="label-mono text-[8px]"
                    style={{ color: isActive ? step.accent : 'var(--fg)/45' }}
                  >
                    STEP {step.id}
                  </span>
                  <Icon
                    className="h-5 w-5"
                    style={{ color: isActive ? step.accent : 'var(--fg)/40' }}
                  />
                </div>
                <h3
                  className={`text-xl font-medium font-heading tracking-[-0.01em] ${
                    isActive ? 'text-[var(--fg)]' : 'text-[var(--fg)]/55'
                  }`}
                >
                  {step.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] leading-relaxed text-[var(--fg)]/50">
                  {step.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Step Breakdown Detail Panel */}
        <div className="grid grid-cols-1 items-center gap-8 border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-8 sm:p-10 lg:grid-cols-12">
          {/* Left Column: Text & List */}
          <div className="space-y-6 lg:col-span-7">
            <span
              className="label-mono inline-flex items-center gap-2 px-3 py-1 text-[8px]"
              style={{ color: current.accent, border: `1px solid color-mix(in srgb, ${current.accent} 35%, transparent)` }}
            >
              {current.tag}
            </span>

            <div>
              <h3 className="font-heading text-2xl font-medium tracking-[-0.01em] text-[var(--fg)] sm:text-3xl">
                {current.id}. {current.title}
              </h3>
              <p className="mt-2 font-mono text-sm leading-relaxed text-[var(--fg)]/60">
                {current.subtitle}
              </p>
            </div>

            <div className="space-y-2 font-sans text-sm text-[var(--fg)]/80">
              {current.details.map((detail, dIdx) => (
                <div
                  key={dIdx}
                  className="flex items-start gap-3 border border-[var(--fg)]/10 p-3"
                  style={{ borderLeft: `2px solid ${current.accent}` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: current.accent }} />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Formula display */}
            <div className="flex items-center justify-between border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-4 font-mono text-xs">
              <span className="text-[var(--fg)]/45">MATH MODEL:</span>
              <span style={{ color: current.accent }}>{current.mathFormula}</span>
            </div>
          </div>

          {/* Right Column: Visualizer */}
          <div className="relative h-72 overflow-hidden rounded border border-[var(--fg)]/15 bg-[var(--bg)]/30 p-6 lg:col-span-5">
            {activeStep === 0 && (
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <div className="relative flex h-40 w-40 items-center justify-center">
                  <div className="absolute inset-0 animate-spin-slow rounded-full border-2 border-dashed" style={{ borderColor: 'color-mix(in srgb, var(--accent-crimson) 40%, transparent)' }} />
                  <Search className="h-10 w-10" style={{ color: 'var(--accent-teal)' }} />
                </div>
                <span className="label-mono mt-4 text-[8px] tracking-wider" style={{ color: 'var(--accent-teal)' }}>
                  [ ISOLATING SIGNAL FROM NOISE ]
                </span>
              </div>
            )}

            {activeStep === 1 && (
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <div className="grid grid-cols-3 gap-6 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded border font-mono text-xs" style={{ borderColor: 'color-mix(in srgb, var(--accent-amber) 40%, transparent)', color: 'var(--accent-amber)' }}>DATA</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded border font-mono text-xs" style={{ borderColor: 'color-mix(in srgb, var(--accent-teal) 40%, transparent)', color: 'var(--accent-teal)' }}>OPS</div>
                  <div className="flex h-10 w-10 items-center justify-center rounded border font-mono text-xs" style={{ borderColor: 'color-mix(in srgb, var(--accent-amber) 40%, transparent)', color: 'var(--accent-amber)' }}>TECH</div>
                </div>
                <Network className="my-2 h-12 w-12 animate-pulse" style={{ color: 'var(--accent-amber)' }} />
                <span className="label-mono text-[8px] tracking-wider" style={{ color: 'var(--accent-amber)' }}>
                  [ SYNTHESIZING CROSS-DOMAIN GRAPH ]
                </span>
              </div>
            )}

            {activeStep === 2 && (
              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
                <div className="h-1 w-full rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent-teal), var(--accent-amber), var(--accent-crimson))' }} />
                <div className="mt-6 flex items-center gap-3">
                  <Scissors className="h-6 w-6" style={{ color: 'var(--accent-crimson)' }} />
                  <span className="label-mono text-[8px] font-semibold tracking-wider" style={{ color: 'var(--accent-crimson)' }}>
                    OCCAM'S RAZOR: 1 MINIMAL VECTOR
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
