import React, { useState } from 'react';
import { Compass, Sparkles, Send, CheckCircle2, ArrowRight, ShieldCheck, Terminal, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ExpeditionPlanner() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    domain: 'Operational Bottleneck',
    chaosLevel: 'High Noise & Fragmented Systems',
    impactTarget: 'Radical Occam Simplicity',
    name: '',
    email: '',
    company: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSelectDomain = (domain) => {
    setFormData(prev => ({ ...prev, domain }));
  };

  const handleSelectChaos = (chaosLevel) => {
    setFormData(prev => ({ ...prev, chaosLevel }));
  };

  const handleSelectImpact = (impactTarget) => {
    setFormData(prev => ({ ...prev, impactTarget }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  return (
    <section id="expedition" className="py-24 relative border-t border-white/5 bg-[#060810] overflow-hidden math-grid">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <Compass className="w-3.5 h-3.5" />
            BEGIN AN EXPEDITION
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Start Your <span className="text-gradient-cyan">Journey With Aztronos</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Tell us about the uncharted business complexity you are facing. We will co-create a tailored blueprint for decisive clarity.
          </p>
        </div>

        {/* Form Container */}
        <div className="rounded-2xl glass-panel border border-cyan-500/30 p-8 sm:p-10 shadow-2xl relative">
          
          {!submitted ? (
            <div>
              {/* Step Progress Tracker */}
              <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
                {[1, 2, 3, 4].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      step === s 
                        ? 'bg-cyan-400 text-black shadow-[0_0_15px_rgba(0,240,255,0.4)]'
                        : step > s
                        ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/40'
                        : 'bg-slate-900 text-slate-500 border border-white/5'
                    }`}>
                      {step > s ? <CheckCircle2 className="w-4 h-4" /> : `0${s}`}
                    </div>
                    <span className="hidden sm:inline font-mono text-xs text-slate-400">
                      {s === 1 && 'Domain'}
                      {s === 2 && 'Complexity'}
                      {s === 3 && 'Impact'}
                      {s === 4 && 'Partner Info'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step 1: Challenge Domain */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    01. What domain represents your primary frontier?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Operational Bottleneck & Friction',
                      'Data Mesh & AI Architecture',
                      'Strategic Alignment & Roadmap',
                      'Enterprise Product UX Redesign'
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelectDomain(item)}
                        className={`p-5 rounded-xl text-left font-mono text-xs transition-all border ${
                          formData.domain === item
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                            : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2"
                    >
                      NEXT: COMPLEXITY LEVEL <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Chaos & Friction Level */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    02. Describe the nature of your current friction.
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'High Noise & Fragmented Systems',
                      'Legacy Rules & Decision Paralysis',
                      'Cognitive Drag Across Teams',
                      'Slow Execution & High Churn'
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelectChaos(item)}
                        className={`p-5 rounded-xl text-left font-mono text-xs transition-all border ${
                          formData.chaosLevel === item
                            ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                            : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs text-slate-400 bg-slate-900 border border-white/10"
                    >
                      BACK
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2"
                    >
                      NEXT: TARGET IMPACT <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Desired Impact */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    03. What is your target outcome?
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'Radical Occam Simplicity',
                      'Unified Real-Time System Graph',
                      'Zero-Friction Workflow Engine',
                      'Scalable Strategic Roadmap'
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleSelectImpact(item)}
                        className={`p-5 rounded-xl text-left font-mono text-xs transition-all border ${
                          formData.impactTarget === item
                            ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                            : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs text-slate-400 bg-slate-900 border border-white/10"
                    >
                      BACK
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 flex items-center gap-2"
                    >
                      NEXT: CONTACT DETAILS <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 4: Contact & Notes */}
              {step === 4 && (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    04. Partner Details & Context
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">YOUR NAME</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Alexandra Vance"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-400 mb-2">WORK EMAIL</label>
                      <input
                        type="email"
                        required
                        placeholder="alexandra@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">ORGANIZATION / COMPANY</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aztronos Partner Corp"
                      value={formData.company}
                      onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-400 mb-2">ADDITIONAL CONTEXT (OPTIONAL)</label>
                    <textarea
                      rows="3"
                      placeholder="Briefly describe the specific problem or goals..."
                      value={formData.notes}
                      onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-cyan-500/20 text-white font-mono text-xs focus:outline-none focus:border-cyan-400"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2.5 rounded-xl font-mono text-xs text-slate-400 bg-slate-900 border border-white/10"
                    >
                      BACK
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl font-mono text-xs font-bold text-black bg-cyan-400 hover:bg-cyan-300 shadow-[0_0_20px_rgba(0,240,255,0.4)] flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      SUBMIT EXPEDITION BRIEF
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Confirmation State & Generated Expedition Blueprint */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-400 mx-auto animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Expedition Brief Generated!
              </h3>

              <p className="text-slate-300 text-sm max-w-lg mx-auto">
                Thank you, <strong className="text-cyan-300">{formData.name}</strong>. We have mapped your initial frontier metrics and will reach out to <span className="text-cyan-400 font-mono">{formData.email}</span> within 24 hours.
              </p>

              {/* Generated Blueprint Card */}
              <div className="max-w-xl mx-auto p-6 rounded-xl bg-slate-950 border border-cyan-500/30 text-left font-mono text-xs space-y-3">
                <div className="flex justify-between border-b border-white/10 pb-2 text-cyan-400 font-bold">
                  <span>AZTRONOS EXPEDITION BLUEPRINT</span>
                  <span>CONFIDENTIAL</span>
                </div>
                <div>Domain: <span className="text-white">{formData.domain}</span></div>
                <div>Friction Profile: <span className="text-amber-400">{formData.chaosLevel}</span></div>
                <div>Target Vector: <span className="text-emerald-400">{formData.impactTarget}</span></div>
                <div>Organization: <span className="text-white">{formData.company}</span></div>
              </div>

              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-xl font-mono text-xs text-slate-400 bg-slate-900 border border-white/10 hover:text-white"
              >
                START ANOTHER EXPEDITION BRIEF
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
