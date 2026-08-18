import React, { useState } from 'react';
import { Compass, BookOpen, Target, Sparkles, Navigation, Network, Cpu, ArrowUpRight } from 'lucide-react';

export default function BrandEssence() {
  const [activeTab, setActiveTab] = useState('astro');

  return (
    <section id="essence" className="py-24 relative border-t border-white/5 bg-[#070b16] overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            BRAND ESSENCE & ETYMOLOGY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why <span className="text-gradient-cyan">Aztronos</span> Exists
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A guided expedition into uncharted territory. We don't bring canned answers—we navigate complexity alongside you to unlock decisive clarity.
          </p>
        </div>

        {/* Featured Quote Box */}
        <div className="max-w-4xl mx-auto mb-16 p-8 rounded-2xl glass-panel-cyan relative overflow-hidden text-center group">
          <div className="absolute top-0 right-0 p-8 opacity-10 font-mono text-8xl font-black text-cyan-400 select-none">
            "
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-cyan-100 leading-relaxed mb-6 relative z-10">
            “We explore uncharted business problems with our partners, turning complexity into clear, impactful action.”
          </p>
          <div className="inline-flex items-center gap-3 text-xs font-mono text-cyan-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            THE AZTRONOS PROMISE
          </div>
        </div>

        {/* Etymology Dual-Engine Interactive Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Astro Card */}
          <div className="p-8 rounded-2xl glass-panel border border-cyan-500/20 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Navigation className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-cyan-400/80 bg-cyan-950 px-3 py-1 rounded-full border border-cyan-500/20">
                ROOT: ASTRO
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-2">Stars, Navigation & The Unknown</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Representing the uncharted business frontier. In rapid market shifts, traditional blueprints fail. We map celestial trajectories through chaotic data and noise.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Exploration Mindset vs Fixed Templates
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                Dynamic Course Corrections in Complex Ecosystems
              </li>
            </ul>
          </div>

          {/* Nos Card */}
          <div className="p-8 rounded-2xl glass-panel border border-amber-500/20 relative overflow-hidden transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)]">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs text-amber-400/80 bg-amber-950 px-3 py-1 rounded-full border border-amber-500/20">
                ROOT: NOS
              </span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">Knowledge, Systems & Understanding</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Representing systemic intelligence and Occam's Razor. Insight without application is noise; we distil raw information into actionable, frictionless execution.
            </p>

            <ul className="space-y-3 font-mono text-xs text-slate-300 border-t border-white/5 pt-4">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Deep Problem Framing over Superficial Patches
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                Resolving Complexity to Decisive Simplicity
              </li>
            </ul>
          </div>
        </div>

        {/* 3 Core Purpose Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="font-mono text-xs text-cyan-400 mb-2">PILLAR 01</div>
            <h4 className="text-lg font-bold text-white mb-2">Exploration Mindset</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              We treat every client challenge as a unique frontier requiring deep curiosity, non-linear thinking, and zero preconceived biases.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="font-mono text-xs text-amber-400 mb-2">PILLAR 02</div>
            <h4 className="text-lg font-bold text-white mb-2">Co-Creation Partnership</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              "Discover together" defines our DNA. We don't deliver remote slide decks; we embed with your team to share risk, vision, and victory.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-slate-900/60 border border-white/10 hover:border-white/20 transition-all">
            <div className="font-mono text-xs text-purple-400 mb-2">PILLAR 03</div>
            <h4 className="text-lg font-bold text-white mb-2">Impact Orientation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              The ultimate objective is not theoretical insight, but measurable, permanent operational leverage for your organization.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
