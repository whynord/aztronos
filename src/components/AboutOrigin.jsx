import React from 'react';
import { Compass, Users, Globe } from 'lucide-react';

export default function AboutOrigin() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-48 z-20 border-t border-[var(--fg)]/15">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Story Text */}
          <div className="space-y-6 lg:col-span-7">
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 09 ] Origin & Philosophy
            </span>

            <h2 className="font-heading text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Co-explorers in an <br />
              <span className="italic font-normal text-[var(--fg)]/60">uncharted universe.</span>
            </h2>

            <p className="font-mono text-sm leading-relaxed text-[var(--fg)]/60">
              Aztronos was founded on a simple observation: modern organizations don't fail for lack of data or strategy slide decks — they drown in unmanaged complexity and superficial templates.
            </p>

            <p className="font-mono text-sm leading-relaxed text-[var(--fg)]/55">
              The name <strong className="text-[var(--fg)]">Aztronos</strong> merges <em>astro</em> (stars, navigation, the uncharted) with <em>nos</em> (knowledge, systems, intelligence). We see business challenges not as cookie-cutter projects, but as dynamic astronomical systems where order and chaos constantly interact.
            </p>

            <div className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div className="border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-4">
                <Users className="mb-2 h-5 w-5" style={{ color: 'var(--accent-teal)' }} />
                <h4 className="font-heading text-sm font-medium text-[var(--fg)]">Discover Together</h4>
                <p className="mt-1 text-xs leading-relaxed text-[var(--fg)]/55">
                  Equal partnership, shared risk, shared credit, and co-execution.
                </p>
              </div>
              <div className="border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-4">
                <Globe className="mb-2 h-5 w-5" style={{ color: 'var(--accent-amber)' }} />
                <h4 className="font-heading text-sm font-medium text-[var(--fg)]">Measurable Impact</h4>
                <p className="mt-1 text-xs leading-relaxed text-[var(--fg)]/55">
                  Enduring operational leverage, not theoretical consulting decks.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Core Mandate Card */}
          <div className="lg:col-span-5">
            <div className="space-y-6 border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-8 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border" style={{ borderColor: 'color-mix(in srgb, var(--accent-teal) 40%, transparent)', color: 'var(--accent-teal)' }}>
                <Compass className="h-10 w-10 animate-spin-slow" />
              </div>

              <div className="space-y-2">
                <span className="label-mono block text-[8px] tracking-widest" style={{ color: 'var(--accent-teal)' }}>
                  AZTRONOS CORE MANDATE
                </span>
                <p className="font-heading text-lg font-medium text-[var(--fg)]">
                  "Map the chaos, find the signal, and make execution feel effortless."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-[var(--fg)]/15 pt-6 font-mono text-xs text-[var(--fg)]/55">
                <div>
                  <span className="block font-heading text-sm font-medium text-[var(--fg)]">100%</span>
                  <span>Co-Creation</span>
                </div>
                <div>
                  <span className="block font-heading text-sm font-medium" style={{ color: 'var(--accent-teal)' }}>Occam's</span>
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
