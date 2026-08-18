import React, { useState } from 'react';
import { Search, GitMerge, Scissors, ArrowRight, CheckCircle2, Sliders, Shield, Network, Zap } from 'lucide-react';

export default function DNAProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: '01',
      title: 'Understand Deeply',
      subtitle: 'Map the real problem, not just the symptoms.',
      icon: Search,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      tag: 'RIGOROUS FRAMING',
      details: [
        'Uncover root operational constraints & hidden friction.',
        'Distill signal from high-frequency organizational noise.',
        'Structured qualitative & quantitative discovery frameworks.',
        'Eliminate false assumptions before touching code or strategy.'
      ],
      diagramState: 'noise_reduction',
      mathFormula: 'f(t) = \\int_{-\\infty}^{\\infty} F(\\omega)e^{i\\omega t} d\\omega \\rightarrow \\text{Noise Filter}'
    },
    {
      id: '02',
      title: 'Connect the Dots',
      subtitle: 'Reveal patterns others miss across complex domains.',
      icon: GitMerge,
      color: 'text-amber-400',
      bgColor: 'bg-amber-500/10',
      borderColor: 'border-amber-500/30',
      tag: 'PATTERN RECOGNITION',
      details: [
        'Bridge cross-functional gaps: strategy, tech, & execution.',
        'Synthesize fragmented data into unified system topology.',
        'Identify high-leverage intervention points across workflows.',
        'Map dynamic feedback loops in business operations.'
      ],
      diagramState: 'network_synthesis',
      mathFormula: 'G = (V, E) \\quad \\text{where } E_{inter-domain} \\neq \\emptyset'
    },
    {
      id: '03',
      title: 'Simplify Decisively',
      subtitle: "Design the simplest model (Occam's Razor) that solves the whole problem.",
      icon: Scissors,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      tag: "OCCAM'S RAZOR EXECUTION",
      details: [
        'Radically trim superfluous initiatives and system drag.',
        'Fewer priorities with exponentially higher execution velocity.',
        'Architect elegant, friction-free workflows and software.',
        'Clear decision rules and seamless operational handoffs.'
      ],
      diagramState: 'harmonic_beam',
      mathFormula: '\\min_{M} \\operatorname{Complexity}(M) \\quad \\text{s.t.} \\quad \\operatorname{Impact}(M) \\ge I_{target}'
    }
  ];

  const current = steps[activeStep];

  return (
    <section id="dna" className="py-24 relative border-t border-white/5 bg-[#060810] overflow-hidden math-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <Zap className="w-3.5 h-3.5" />
            AZTRONOS METHODOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Our DNA: <span className="text-gradient-cyan">3-Step Problem Resolution</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We don't complicate solutions to justify consulting fees. We resolve chaos to its absolute, simplest, most powerful form.
          </p>
        </div>

        {/* Interactive Step Switcher Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-6 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'glass-panel border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] bg-slate-900/90'
                    : 'bg-slate-950/60 border border-white/5 hover:border-white/20 hover:bg-slate-900/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-md ${
                    isActive ? 'bg-cyan-400 text-black' : 'bg-slate-800 text-slate-400'
                  }`}>
                    STEP {step.id}
                  </span>
                  <Icon className={`w-5 h-5 ${isActive ? step.color : 'text-slate-500'}`} />
                </div>
                <h3 className={`text-xl font-bold mb-1 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-2">
                  {step.subtitle}
                </p>

                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-amber-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* Step Breakdown Detail Panel & Interactive Graphic */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-cyan-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Text & List */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold px-3 py-1 rounded bg-slate-900 text-cyan-400 border border-cyan-500/30">
              {current.tag}
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {current.id}. {current.title}
              </h3>
              <p className="text-slate-300 text-base font-normal">
                {current.subtitle}
              </p>
            </div>

            <div className="space-y-3 font-sans text-sm text-slate-200">
              {current.details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/60 border border-white/5">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>

            {/* Formula display */}
            <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/20 font-mono text-xs text-cyan-300 flex items-center justify-between">
              <span className="text-slate-400">MATH MODEL:</span>
              <span>{current.mathFormula}</span>
            </div>
          </div>

          {/* Right Column: Visual Diagrammatic Visualizer */}
          <div className="lg:col-span-5 relative h-72 rounded-xl bg-slate-950/80 border border-cyan-500/20 p-6 flex flex-col items-center justify-center overflow-hidden">
            <div className="absolute inset-0 math-grid-dense opacity-40" />

            {activeStep === 0 && (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-red-500/40 rounded-full animate-spin-slow" />
                  <div className="absolute inset-4 border border-cyan-500/30 rounded-full animate-ping" />
                  <Search className="w-10 h-10 text-cyan-400 animate-bounce" />
                </div>
                <span className="font-mono text-xs text-cyan-400 mt-4 tracking-wider">
                  [ ISOLATING SIGNAL FROM NOISE ]
                </span>
              </div>
            )}

            {activeStep === 1 && (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="grid grid-cols-3 gap-6 p-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-mono text-xs">DATA</div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 font-mono text-xs">OPS</div>
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 font-mono text-xs">TECH</div>
                </div>
                <Network className="w-12 h-12 text-amber-400 my-2 animate-pulse" />
                <span className="font-mono text-xs text-amber-400 tracking-wider">
                  [ SYNTHESIZING CROSS-DOMAIN GRAPH ]
                </span>
              </div>
            )}

            {activeStep === 2 && (
              <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400 rounded-full shadow-[0_0_20px_rgba(0,240,255,0.8)] animate-pulse" />
                <div className="flex items-center gap-3 mt-6">
                  <Scissors className="w-6 h-6 text-emerald-400" />
                  <span className="font-mono text-xs text-emerald-400 font-semibold tracking-wider">
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
