import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, CheckCircle2, TrendingUp, Cpu, Workflow, BarChart3 } from 'lucide-react';

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
        { label: 'Cognitive Drag', value: 'Minimal Signal', change: '+3.8x Velocity' }
      ],
      problem: 'The organization operated across 42 fragmented database shards and legacy risk engines, creating massive latency, conflicting reporting metrics, and paralyzed strategic execution.',
      solution: 'Aztronos mapped the underlying data topology, stripped away 38 redundant intermediary ETL layers, and implemented a unified real-time graph model based on Occam’s Razor principles.',
      architectureBefore: '42 fragmented microservices → 18 manual reconciliation tables → High error rate',
      architectureAfter: '1 Unified Mathematical Event Graph → Auto-reconciling risk vector → Real-time clarity'
    },
    {
      id: 'case-02',
      title: 'Supply Chain Multi-Node Optimization Engine',
      category: 'OPERATIONAL FRICTION REMOVAL',
      client: 'International Logistics Conglomerate',
      metrics: [
        { label: 'Manual Rules Trimming', value: '250 → 3', change: '-98.8%' },
        { label: 'Route Computation', value: '14 min → 1.2s', change: '+700x Speed' },
        { label: 'Operational Cost', value: '-$4.2M/yr', change: 'Direct Profit' }
      ],
      problem: 'A complex web of 250+ manual edge-case rules created constant delivery delays, escalating carrier friction, and opaque driver handoffs.',
      solution: 'We identified the core constraint algorithm, replaced fragile nested heuristics with a elegant linear programming solver, and created a 3-click dispatcher interface.',
      architectureBefore: 'Nested IF/ELSE legacy rules engine → Excel manual overrides → 14-minute bottleneck',
      architectureAfter: 'Deterministic Linear Solver → 3-Step Clean Dispatcher → Instant route resolution'
    },
    {
      id: 'case-03',
      title: 'SaaS Platform Cognitive Friction Streamlining',
      category: 'UX AESTHETIC & LOGIC',
      client: 'Enterprise Analytics SaaS',
      metrics: [
        { label: 'User Workflow Clicks', value: '14 → 1', change: '-92.8%' },
        { label: 'Partner Onboarding Time', value: '14 Days → 10 Min', change: 'Instant' },
        { label: 'User Retention', value: '+44%', change: 'Record High' }
      ],
      problem: 'Users faced overwhelming dashboard noise with over 80 visual charts and complex nested navigation, resulting in low adoption and high churn.',
      solution: 'Using signal-to-noise UI filtering, Aztronos redesigned the user experience around 1 key action card, auto-surfacing high-priority anomalies.',
      architectureBefore: '80+ static charts → 4 levels of nested dropdown menus → User fatigue',
      architectureAfter: 'Contextual Anomaly Engine → 1 Actionable Signal Surface → Effortless execution'
    }
  ];

  const current = cases[selectedCase];

  return (
    <section id="work" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            PROOF OF IMPACT
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Turning Complexity Into <span className="text-gradient-cyan">Measurable Impact</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Real stories of how deep problem mapping and Occam's Razor simplicity transformed business operations for our partners.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {cases.map((c, idx) => (
            <button
              key={c.id}
              onClick={() => setSelectedCase(idx)}
              className={`p-6 rounded-2xl text-left transition-all duration-300 ${
                selectedCase === idx
                  ? 'glass-panel border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.15)] bg-slate-900/90'
                  : 'bg-slate-950/60 border border-white/5 hover:border-white/20'
              }`}
            >
              <span className="font-mono text-xs text-cyan-400 font-semibold block mb-2">
                {c.category}
              </span>
              <h3 className={`text-lg font-bold mb-2 ${selectedCase === idx ? 'text-white' : 'text-slate-300'}`}>
                {c.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Client: {c.client}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Case Deep Dive Card */}
        <div className="p-8 sm:p-10 rounded-2xl glass-panel border border-cyan-500/30 space-y-8">
          
          {/* Top Info & Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-white/10">
            <div className="lg:col-span-6 space-y-3">
              <span className="inline-block px-3 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
                {current.category}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {current.title}
              </h3>
              <p className="text-slate-300 font-mono text-xs">
                Partner: <span className="text-cyan-300">{current.client}</span>
              </p>
            </div>

            {/* Impact Metrics Counters */}
            <div className="lg:col-span-6 grid grid-cols-3 gap-4">
              {current.metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/20 text-center">
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mb-1">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 font-semibold mb-1">
                    [{m.change}]
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem vs Solution Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-xl bg-slate-950/60 border border-red-500/20 space-y-3">
              <div className="font-mono text-xs text-red-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                THE UNCHARTED COMPLEXITY (BEFORE)
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.problem}
              </p>
              <div className="p-3 rounded bg-slate-900 font-mono text-xs text-red-300 border border-red-500/10">
                {current.architectureBefore}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-950/60 border border-cyan-500/30 space-y-3">
              <div className="font-mono text-xs text-cyan-400 font-bold flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                AZTRONOS OCCAM SOLUTION (AFTER)
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">
                {current.solution}
              </p>
              <div className="p-3 rounded bg-slate-900 font-mono text-xs text-cyan-300 border border-cyan-500/20">
                {current.architectureAfter}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
