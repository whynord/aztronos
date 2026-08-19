import React, { useState } from 'react';

export default function CaseStudies() {
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      id: 'case-01',
      title: 'Global Fintech Architecture Consolidation',
      category: 'DATA & SYSTEMIC CLARITY',
      client: 'Tier-1 Digital Payments Provider',
      metrics: [
        { label: 'Legacy Data Silos', value: '42 → 1', change: '-97.6%' },
        { label: 'Decision Latency', value: '4.2h → 120ms', change: 'Real-Time' },
        { label: 'Cognitive Drag', value: 'Minimal Signal', change: '+3.8x Velocity' },
      ],
      problem: 'The organization operated across 42 fragmented database shards and legacy risk engines, creating massive latency, conflicting reporting metrics, and paralyzed strategic execution.',
      solution: 'Aztronos mapped the underlying data topology, stripped away 38 redundant intermediary ETL layers, and implemented a unified real-time graph model based on Occam’s Razor principles.',
      architectureBefore: '42 fragmented microservices → 18 manual reconciliation tables → High error rate',
      architectureAfter: '1 Unified Mathematical Event Graph → Auto-reconciling risk vector → Real-time clarity',
    },
    {
      id: 'case-02',
      title: 'Supply Chain Multi-Node Optimization Engine',
      category: 'OPERATIONAL FRICTION REMOVAL',
      client: 'International Logistics Conglomerate',
      metrics: [
        { label: 'Manual Rules Trimming', value: '250 → 3', change: '-98.8%' },
        { label: 'Route Computation', value: '14 min → 1.2s', change: '+700x Speed' },
        { label: 'Operational Cost', value: '-$4.2M/yr', change: 'Direct Profit' },
      ],
      problem: 'A complex web of 250+ manual edge-case rules created constant delivery delays, escalating carrier friction, and opaque driver handoffs.',
      solution: 'We identified the core constraint algorithm, replaced fragile nested heuristics with an elegant linear programming solver, and created a 3-click dispatcher interface.',
      architectureBefore: 'Nested IF/ELSE legacy rules engine → Excel manual overrides → 14-minute bottleneck',
      architectureAfter: 'Deterministic Linear Solver → 3-Step Clean Dispatcher → Instant route resolution',
    },
    {
      id: 'case-03',
      title: 'SaaS Platform Cognitive Friction Streamlining',
      category: 'UX AESTHETIC & LOGIC',
      client: 'Enterprise Analytics SaaS',
      metrics: [
        { label: 'User Workflow Clicks', value: '14 → 1', change: '-92.8%' },
        { label: 'Partner Onboarding Time', value: '14 Days → 10 Min', change: 'Instant' },
        { label: 'User Retention', value: '+44%', change: 'Record High' },
      ],
      problem: 'Users faced overwhelming dashboard noise with over 80 visual charts and complex nested navigation, resulting in low adoption and high churn.',
      solution: 'Using signal-to-noise UI filtering, Aztronos redesigned the user experience around 1 key action card, auto-surfacing high-priority anomalies.',
      architectureBefore: '80+ static charts → 4 levels of nested dropdown menus → User fatigue',
      architectureAfter: 'Contextual Anomaly Engine → 1 Actionable Signal Surface → Effortless execution',
    },
  ];

  const current = cases[selectedCase];

  return (
    <section id="work" className="relative px-6 py-32 md:py-48 z-20 border-t border-[var(--fg)]/15">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 07 ] Proof of Impact
            </span>
            <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Turning complexity into <br />
              <span className="italic font-normal text-[var(--fg)]/60">measurable impact.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[var(--fg)]/55">
            Real stories of how deep problem mapping and Occam's Razor simplicity transformed operations for our partners.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="mb-12 grid grid-cols-1 gap-px border border-[var(--fg)]/15 bg-[var(--fg)]/10 md:grid-cols-3">
          {cases.map((c, idx) => {
            const isActive = selectedCase === idx;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCase(idx)}
                className={`p-6 text-left transition-all duration-300 ${
                  isActive ? 'bg-[var(--bg)]' : 'bg-transparent hover:bg-[var(--fg)]/5'
                }`}
              >
                <span
                  className="label-mono block text-[8px]"
                  style={{ color: isActive ? 'var(--accent-teal)' : 'var(--fg)/45' }}
                >
                  {c.category}
                </span>
                <h3
                  className={`mt-2 font-heading text-lg font-medium tracking-[-0.01em] ${
                    isActive ? 'text-[var(--fg)]' : 'text-[var(--fg)]/55'
                  }`}
                >
                  {c.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-[var(--fg)]/45">
                  Client: {c.client}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Case Deep Dive Card */}
        <div className="space-y-8 border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-8 sm:p-10">
          {/* Top Info & Metrics Grid */}
          <div className="grid grid-cols-1 items-start gap-8 border-b border-[var(--fg)]/15 pb-8 lg:grid-cols-12">
            <div className="space-y-3 lg:col-span-6">
              <span
                className="label-mono inline-block px-3 py-1 text-[8px]"
                style={{ color: 'var(--accent-teal)', border: '1px solid color-mix(in srgb, var(--accent-teal) 35%, transparent)' }}
              >
                {current.category}
              </span>
              <h3 className="font-heading text-2xl font-medium tracking-[-0.01em] text-[var(--fg)] sm:text-3xl">
                {current.title}
              </h3>
              <p className="font-mono text-xs text-[var(--fg)]/55">
                Partner: <span style={{ color: 'var(--accent-teal)' }}>{current.client}</span>
              </p>
            </div>

            {/* Impact Metrics Counters */}
            <div className="grid grid-cols-3 gap-4 lg:col-span-6">
              {current.metrics.map((m, mIdx) => (
                <div key={mIdx} className="border border-[var(--fg)]/15 bg-[var(--bg)]/40 p-4 text-center">
                  <div className="font-heading text-lg font-medium text-[var(--fg)] sm:text-xl">
                    {m.value}
                  </div>
                  <div
                    className="label-mono my-1 text-[8px]"
                    style={{ color: 'var(--accent-amber)' }}
                  >
                    [{m.change}]
                  </div>
                  <div className="text-[11px] text-[var(--fg)]/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Story */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-3 border border-[var(--fg)]/15 p-6" style={{ borderLeft: '2px solid var(--accent-crimson)' }}>
              <div className="label-mono flex items-center gap-2 text-[8px]" style={{ color: 'var(--accent-crimson)' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent-crimson)' }} />
                THE UNCHARTED COMPLEXITY (BEFORE)
              </div>
              <p className="text-sm leading-relaxed text-[var(--fg)]/70">{current.problem}</p>
              <div className="border border-[var(--fg)]/10 bg-[var(--bg)]/40 p-3 font-mono text-xs text-[var(--fg)]/55">
                {current.architectureBefore}
              </div>
            </div>

            <div className="space-y-3 border border-[var(--fg)]/15 p-6" style={{ borderLeft: '2px solid var(--accent-teal)' }}>
              <div className="label-mono flex items-center gap-2 text-[8px]" style={{ color: 'var(--accent-teal)' }}>
                <span className="h-2 w-2 rounded-full" style={{ background: 'var(--accent-teal)' }} />
                AZTRONOS OCCAM SOLUTION (AFTER)
              </div>
              <p className="text-sm leading-relaxed text-[var(--fg)]/70">{current.solution}</p>
              <div className="border border-[var(--fg)]/10 bg-[var(--bg)]/40 p-3 font-mono text-xs text-[var(--fg)]/55">
                {current.architectureAfter}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
