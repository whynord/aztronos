import React from 'react';
import logoImg from '../assets/aztronos-logo-transparent.png';

export default function OccamFooter() {
  return (
    <footer className="relative border-t border-[var(--fg)]/15 px-6 py-16 z-20 bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-4">
          
          <div className="md:col-span-2 space-y-3">
            <a href="#nexus" className="inline-block hover:opacity-75 transition-opacity">
              <img
                src={logoImg}
                alt="AZTRONOS STUDIO Logo"
                className="h-20 w-auto object-contain"
              />
            </a>
            <p className="mt-4 max-w-sm font-mono text-xs leading-relaxed text-[var(--fg)]/55">
              An instrument for discovery. We explore the uncharted universe to resolve complex problems into their simplest, truest form.
            </p>
          </div>

          <div>
            <span className="label-mono mb-4 block text-[8px] text-[var(--fg)]/40">
              Coordinates
            </span>
            <ul className="space-y-2 font-mono text-xs text-[var(--fg)]/60">
              <li>
                <a href="#nexus" className="hover:text-[var(--fg)]">
                  Nexus
                </a>
              </li>
              <li>
                <a href="#logic" className="hover:text-[var(--fg)]">
                  Logic Stream
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[var(--fg)]">
                  Impact Ledger
                </a>
              </li>
              <li>
                <a href="#gateway" className="hover:text-[var(--fg)]">
                  Gateway
                </a>
              </li>
            </ul>
          </div>

          <div>
            <span className="label-mono mb-4 block text-[8px] text-[var(--fg)]/40">
              Signal
            </span>
            <ul className="space-y-2 font-mono text-xs text-[var(--fg)]/60">
              <li>
                <a href="mailto:hello@aztronos.com" className="hover:text-[var(--fg)]">
                  hello@aztronos.com
                </a>
              </li>
              <li className="text-[var(--fg)]/40 italic">
                Occam's Razor, applied
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[var(--fg)]/10 pt-6 md:flex-row md:items-center">
          <span className="label-mono text-[8px] text-[var(--fg)]/40">
            © {new Date().getFullYear()} AZTRONOS STUDIO — THE OCCAM GRID
          </span>
          <a
            href="#nexus"
            className="label-mono text-[8px] text-[var(--fg)]/40 hover:text-[var(--fg)]"
          >
            RETURN TO ORIGIN ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
