import React, { useState } from 'react';
import { Eye, ShieldAlert, ShieldCheck, ArrowRight, Check, X, Scale, Layers } from 'lucide-react';

export default function VisionMatrix() {
  const [activeTab, setActiveTab] = useState('matrix');

  const comparisons = [
    {
      dimension: 'Problem Framing',
      conventional: 'Applies pre-packaged template solutions to symptoms',
      aztronos: 'Deep mathematical problem mapping down to root constraints',
      highlight: 'Respects origin of complexity'
    },
    {
      dimension: 'Solution Design',
      conventional: 'Bloated multi-initiative decks with high cognitive drag',
      aztronos: "Occam's Razor simplicity: fewest actions for maximum impact",
      highlight: 'Minimal cognitive load'
    },
    {
      dimension: 'Execution Readiness',
      conventional: 'Handed off as theoretical strategy recommendations',
      aztronos: 'Built for instant implementation with explicit decision rules',
      highlight: 'Zero friction handoff'
    },
    {
      dimension: 'Partnership Dynamic',
      conventional: 'Transactional vendor delivering remote slide decks',
      aztronos: 'Co-explorer embedding with your team to share risk & credit',
      highlight: 'Shared risk & credit'
    },
    {
      dimension: 'Experience Quality',
      conventional: 'Rigid, bureaucratic, and jargon-heavy',
      aztronos: 'Aesthetic & Logic: clean, beautiful, rational, purposeful',
      highlight: 'Poetic precision'
    }
  ];

  return (
    <section id="vision" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <Eye className="w-3.5 h-3.5" />
            VISION & OPERATIONAL LOGIC
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Aesthetic Meets <span className="text-gradient-cyan">Logic</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We balance the origin of the problem with the simplicity of the solution—removing friction so strategy feels as clear as good design.
          </p>
        </div>

        {/* Vision Statement Hero Banner */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel-cyan border border-cyan-500/30 text-center mb-16 relative overflow-hidden">
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl" />
          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white mb-4 leading-snug">
            “We balance the complexity of real problems with the simplicity of executable solutions—removing friction so strategy feels as clear as good design.”
          </h3>
          <span className="font-mono text-xs text-cyan-400 tracking-wider">
            [ OPERATIONAL VISION STATEMENT ]
          </span>
        </div>

        {/* Comparison Matrix Table */}
        <div className="rounded-2xl glass-panel border border-cyan-500/20 overflow-hidden shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950 p-5 border-b border-white/10 font-mono text-xs font-semibold">
            <div className="md:col-span-3 text-slate-400 uppercase">DIMENSION</div>
            <div className="md:col-span-4 text-red-400 flex items-center gap-2 mt-2 md:mt-0">
              <ShieldAlert className="w-4 h-4" />
              TYPICAL VENDOR APPROACH
            </div>
            <div className="md:col-span-5 text-cyan-400 flex items-center gap-2 mt-2 md:mt-0">
              <ShieldCheck className="w-4 h-4" />
              AZTRONOS CO-EXPLORATION
            </div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 hover:bg-slate-900/40 transition-colors items-center gap-4">
                
                {/* Dimension */}
                <div className="md:col-span-3">
                  <span className="font-display font-bold text-white text-base block">
                    {item.dimension}
                  </span>
                  <span className="text-[11px] font-mono text-cyan-400/80 mt-1 block">
                    [{item.highlight}]
                  </span>
                </div>

                {/* Conventional */}
                <div className="md:col-span-4 p-4 rounded-xl bg-red-950/20 border border-red-500/10 text-xs text-slate-300 flex items-start gap-3">
                  <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <span>{item.conventional}</span>
                </div>

                {/* Aztronos */}
                <div className="md:col-span-5 p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 text-xs text-slate-100 flex items-start gap-3 shadow-[0_0_15px_rgba(0,240,255,0.05)]">
                  <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
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
