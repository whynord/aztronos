import React from 'react';
import { Compass, Send, Globe, Mail, Share2, ArrowUp } from 'lucide-react';

export default function Footer({ scrollToSection }) {
  return (
    <footer className="bg-[#04060d] border-t border-white/10 text-slate-400 py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand & Etymology */}
          <div className="md:col-span-5 space-y-4">
            <div 
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                AZTRONOS
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Navigating complexity through mathematical clarity. Turning deep problem understanding into elegantly simple, frictionless solutions.
            </p>

            <div className="font-mono text-[11px] text-cyan-400/80 p-2.5 rounded bg-slate-950 border border-cyan-500/20 inline-block">
              COORDINATES: RA 05h 35m / DEC -05° 23' [ J2026.5 ]
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <button onClick={() => scrollToSection('hero')} className="hover:text-cyan-400 transition-colors">
                  01. Order & Chaos Hero
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('essence')} className="hover:text-cyan-400 transition-colors">
                  02. Brand Essence & Etymology
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('dna')} className="hover:text-cyan-400 transition-colors">
                  03. DNA 3-Step Methodology
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('lab')} className="hover:text-cyan-400 transition-colors">
                  04. Math Art Laboratory
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('vision')} className="hover:text-cyan-400 transition-colors">
                  05. Vision & Matrix
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('work')} className="hover:text-cyan-400 transition-colors">
                  06. Impact Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('expedition')} className="hover:text-cyan-400 transition-colors">
                  07. Begin Expedition Brief
                </button>
              </li>
            </ul>
          </div>

          {/* Telemetry / Signal Dispatch */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
              Subscribe To Signal Dispatch
            </h4>
            <p className="text-xs text-slate-400">
              Receive quarterly essays on systemic problem framing, Occam's Razor engineering, and mathematical design.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="partner@company.com"
                className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-cyan-500/20 text-xs font-mono text-white focus:outline-none focus:border-cyan-400"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-mono text-xs font-bold shrink-0"
              >
                JOIN
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} Aztronos Inc. All rights reserved. Built with Aesthetic & Logic.
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
          >
            TOP <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
