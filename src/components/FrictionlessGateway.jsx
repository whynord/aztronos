import React, { useState } from 'react';

const QUESTIONS = [
  {
    key: 'surface',
    prompt: 'How many surfaces does your problem span?',
    options: [
      { label: 'One, contained', value: 1 },
      { label: 'A few, entangled', value: 3 },
      { label: 'Many, opaque', value: 5 },
    ],
  },
  {
    key: 'friction',
    prompt: 'Where is the friction loudest?',
    options: [
      { label: 'Process & people', value: 2 },
      { label: 'Data & logic', value: 3 },
      { label: 'Everywhere', value: 5 },
    ],
  },
  {
    key: 'horizon',
    prompt: 'How soon must the solution resolve?',
    options: [
      { label: 'This quarter', value: 5 },
      { label: 'This year', value: 3 },
      { label: 'We are exploring', value: 1 },
    ],
  },
];

function ScoreMeter({ value }) {
  const percent = Math.min((value / 15) * 100, 100);
  const label = value <= 5 ? 'Low' : value <= 10 ? 'Moderate' : 'High';
  const color =
    value <= 5
      ? 'hsl(174 56% 40%)'
      : value <= 10
      ? 'hsl(40 60% 45%)'
      : 'hsl(355 75% 56%)';

  return (
    <div className="flex items-center gap-3">
      <div className="h-px w-32 bg-[#0a0a0c]/15">
        <div
          className="h-px transition-all duration-500"
          style={{ width: `${percent}%`, background: color }}
        />
      </div>
      <span className="label-mono text-[8px]" style={{ color }}>
        {label} · {value}/15
      </span>
    </div>
  );
}

export default function FrictionlessGateway() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  const totalScore = Object.values(answers).reduce((acc, val) => acc + val, 0);
  const isComplete = step >= QUESTIONS.length;

  const handleSelectOption = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStep((prev) => prev + 1);
    }, 250);
  };

  const handleReset = () => {
    setAnswers({});
    setStep(0);
    setSubmitted(false);
    setEmail('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="gateway" className="relative px-6 py-32 md:py-48 z-20">
      <div className="mx-auto max-w-3xl">
        
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="label-mono mb-4 block text-[9px] text-[#0a0a0c]/50">
            [ 04 ] The Frictionless Gateway
          </span>
          <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[#0a0a0c] sm:text-5xl md:text-6xl">
            Three questions. <br />
            <span className="italic font-normal text-[#0a0a0c]/60">One path forward.</span>
          </h2>
        </div>

        {/* Diagnostic Box Container */}
        <div className="relative border border-[#0a0a0c]/15 bg-[#f8f9fa]/60 p-8 backdrop-blur-sm md:p-12 shadow-sm">
          
          {/* Top Progress & Score Meter */}
          <div className="mb-10 flex items-center justify-between">
            <span className="label-mono text-[8px] text-[#0a0a0c]/45">
              STEP {Math.min(step + 1, QUESTIONS.length)} / {QUESTIONS.length}
            </span>
            {Object.keys(answers).length > 0 && <ScoreMeter value={totalScore} />}
          </div>

          {/* Step Questions */}
          {!isComplete && !submitted && (
            <div key={step} className="animate-[fadeSlice_0.5s_ease]">
              <p className="font-heading text-2xl font-medium leading-snug tracking-[-0.01em] text-[#0a0a0c] md:text-3xl">
                {QUESTIONS[step].prompt}
              </p>

              <div className="mt-8 flex flex-col gap-px">
                {QUESTIONS[step].options.map((option) => {
                  const isSelected = answers[QUESTIONS[step].key] === option.value;
                  return (
                    <button
                      key={option.label}
                      onClick={() => handleSelectOption(QUESTIONS[step].key, option.value)}
                      className={`group flex items-center justify-between border border-[#0a0a0c]/15 bg-[#f8f9fa] px-5 py-4 text-left transition-all duration-300 hover:border-[#0a0a0c]/40 hover:pl-7 ${
                        isSelected ? 'border-[#0a0a0c]/60 pl-7' : ''
                      }`}
                    >
                      <span className="font-mono text-sm text-[#0a0a0c]/80">
                        {option.label}
                      </span>
                      <span className="label-mono text-[8px] text-[#0a0a0c]/40 transition-colors group-hover:text-[#0a0a0c]/70">
                        SELECT →
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Score Result & Email Request State */}
          {isComplete && !submitted && (
            <div className="animate-[fadeSlice_0.5s_ease] text-center">
              <p className="label-mono mb-4 text-[9px] text-[#0a0a0c]/50">
                COMPLEXITY SCORE RESOLVED
              </p>
              <p className="font-heading text-5xl font-medium tracking-[-0.02em] text-[#0a0a0c]">
                {totalScore}<span className="text-[#0a0a0c]/40">/15</span>
              </p>
              <p className="mx-auto mt-6 max-w-md font-mono text-xs leading-relaxed text-[#0a0a0c]/60">
                Your problem has a measurable shape. A 30-minute Discovery Protocol will map it to its simplest resolution. Leave an address — we will send two proposed times.
              </p>

              <form
                onSubmit={handleFormSubmit}
                className="mx-auto mt-8 flex max-w-md items-center gap-px border border-[#0a0a0c]/20"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="flex-1 bg-transparent px-4 py-3 font-mono text-sm text-[#0a0a0c] outline-none placeholder:text-[#0a0a0c]/35"
                />
                <button
                  type="submit"
                  className="bg-[#0a0a0c] px-5 py-3 label-mono text-[9px] text-white transition-colors hover:bg-[#2a9d8f]"
                >
                  REQUEST →
                </button>
              </form>
            </div>
          )}

          {/* Submission Confirmation State */}
          {submitted && (
            <div className="animate-[fadeSlice_0.5s_ease] text-center">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center border border-[#2a9d8f]">
                <span className="text-xl text-[#2a9d8f]">✓</span>
              </div>
              <p className="font-heading text-2xl font-medium tracking-[-0.01em] text-[#0a0a0c]">
                Path recorded.
              </p>
              <p className="mx-auto mt-4 max-w-md font-mono text-xs leading-relaxed text-[#0a0a0c]/60">
                We will reach out to <span className="font-semibold text-[#0a0a0c]">{email}</span> within one business day with two proposed Discovery slots. The friction ends here.
              </p>
              <button
                onClick={handleReset}
                className="mt-8 label-mono text-[9px] text-[#0a0a0c]/55 underline-offset-4 hover:text-[#0a0a0c] hover:underline"
              >
                ↺ Reset the path
              </button>
            </div>
          )}

        </div>

        <p className="mt-8 text-center font-mono text-[10px] leading-relaxed text-[#0a0a0c]/40">
          Or write directly —{' '}
          <a
            href="mailto:hello@aztronos.com"
            className="underline underline-offset-4 hover:text-[#0a0a0c]"
          >
            hello@aztronos.com
          </a>
        </p>

      </div>
    </section>
  );
}
