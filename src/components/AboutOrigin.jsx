import React from 'react';
import { Compass, Sparkles, BookOpen, Shield, ArrowUpRight, Users, Globe } from 'lucide-react';

export default function AboutOrigin() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
              <Compass className="w-3.5 h-3.5" />
              ORIGIN & PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Co-Explorers in an <br />
              <span className="text-gradient-cyan">Uncharted Universe</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Aztronos was founded on a simple observation: modern organizations don't fail for lack of data or strategy slide decks—they drown in unmanaged complexity and superficial templates.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              The name <strong className="text-cyan-300 font-mono">Aztronos</strong> merges <em>astro</em> (stars, navigation, the uncharted) with <em>nos</em> (knowledge, systems, intelligence). We see business challenges not as cookie-cutter projects, but as dynamic astronomical systems where order and chaos constantly interact.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-cyan-500/20">
                <Users className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Discover Together</h4>
                <p className="text-xs text-slate-400">
                  Equal partnership, shared risk, shared credit, and co-execution.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-amber-500/20">
                <Globe className="w-5 h-5 text-amber-400 mb-2" />
                <h4 className="text-sm font-bold text-white mb-1">Measurable Impact</h4>
                <p className="text-xs text-slate-400">
                  Enduring operational leverage, not theoretical consulting decks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Mathematical Art Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-8 rounded-2xl glass-panel-cyan border border-cyan-500/30 text-center space-y-6 relative overflow-hidden">
              <div className="w-20 h-20 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto shadow-[0_0_30px_rgba(0,240,255,0.3)]">
                <Compass className="w-10 h-10 animate-spin-slow" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs text-cyan-400 font-semibold tracking-widest block">
                  AZTRONOS CORE MANDATE
                </span>
                <p className="font-display font-medium text-lg text-white">
                  "Map the chaos, find the signal, and make execution feel effortless."
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 font-mono text-xs text-slate-400">
                <div>
                  <span className="block text-white font-bold text-sm">100%</span>
                  <span>Co-Creation</span>
                </div>
                <div>
                  <span className="block text-cyan-400 font-bold text-sm">Occam's</span>
                  <span>Razor Mindset</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
