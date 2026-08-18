import React, { useRef, useEffect, useState } from 'react';
import { Sliders, RefreshCw, Sparkles, Activity, ShieldCheck, ArrowRight, Zap, Play } from 'lucide-react';

export default function HeroCanvas({ scrollToSection }) {
  const canvasRef = useRef(null);
  const [orderRatio, setOrderRatio] = useState(70); // 0 (pure chaos) to 100 (pure order)
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [activePreset, setActivePreset] = useState('balanced');
  const [metrics, setMetrics] = useState({
    entropy: '0.28 bits',
    snr: '24.2 dB',
    nodes: 120,
    coherence: '92.4%'
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Resize Canvas
    const handleResize = () => {
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Node particle class
    const PARTICLE_COUNT = 120;
    const particles = [];

    // Grid targets for Order alignment
    const cols = 12;
    const rows = 10;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      // Grid position target
      const colIndex = i % cols;
      const rowIndex = Math.floor(i / cols) % rows;
      
      const targetX = (canvas.width / (cols + 1)) * (colIndex + 1);
      const targetY = (canvas.height / (rows + 1)) * (rowIndex + 1);

      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        targetX,
        targetY,
        radius: Math.random() * 2 + 1.5,
        color: i % 5 === 0 ? '#00f0ff' : i % 7 === 0 ? '#f59e0b' : '#94a3b8',
        phase: Math.random() * Math.PI * 2
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const orderFactor = orderRatio / 100;
      const chaosFactor = 1 - orderFactor;

      // Update particle positions
      particles.forEach((p, idx) => {
        // Update grid targets dynamically if canvas resized
        const colIndex = idx % cols;
        const rowIndex = Math.floor(idx / cols) % rows;
        p.targetX = (canvas.width / (cols + 1)) * (colIndex + 1) + Math.sin(time + idx) * (15 * chaosFactor);
        p.targetY = (canvas.height / (rows + 1)) * (rowIndex + 1) + Math.cos(time + idx) * (15 * chaosFactor);

        // Brownian movement for chaos
        const chaosVx = p.vx + (Math.random() - 0.5) * 0.5;
        const chaosVy = p.vy + (Math.random() - 0.5) * 0.5;

        // Vector toward target for order
        const dx = p.targetX - p.x;
        const dy = p.targetY - p.y;
        const orderVx = dx * 0.05;
        const orderVy = dy * 0.05;

        // Blend velocity based on orderFactor
        p.x += orderVx * orderFactor + chaosVx * chaosFactor;
        p.y += orderVy * orderFactor + chaosVy * chaosFactor;

        // Mouse attraction magnet effect
        const mdx = mousePos.x - p.x;
        const mdy = mousePos.y - p.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x += (mdx / dist) * force * 3;
          p.y += (mdy / dist) * force * 3;
        }

        // Boundary reflection for chaos mode
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // Render particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * (1 + orderFactor * 0.3), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.4 + orderFactor * 0.5;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      // Draw constellation connections
      const maxDistance = 90 + orderFactor * 50;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * (0.15 + orderFactor * 0.4);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            if (orderFactor > 0.7) {
              ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
            } else if (orderFactor < 0.3) {
              ctx.strokeStyle = `rgba(239, 68, 68, ${alpha})`;
            } else {
              ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            }
            
            ctx.lineWidth = 0.8 + orderFactor * 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [orderRatio, mousePos]);

  // Update telemetry metrics based on slider
  const handleSliderChange = (e) => {
    const val = Number(e.target.value);
    setOrderRatio(val);
    setActivePreset('custom');

    const entropyVal = (1.5 * (1 - val / 100)).toFixed(2);
    const snrVal = (5 + (val / 100) * 32).toFixed(1);
    const coherenceVal = (30 + (val / 100) * 68).toFixed(1);

    setMetrics({
      entropy: `${entropyVal} bits`,
      snr: `${snrVal} dB`,
      nodes: 120,
      coherence: `${coherenceVal}%`
    });
  };

  const applyPreset = (presetName, ratio) => {
    setActivePreset(presetName);
    setOrderRatio(ratio);
    
    const val = ratio;
    const entropyVal = (1.5 * (1 - val / 100)).toFixed(2);
    const snrVal = (5 + (val / 100) * 32).toFixed(1);
    const coherenceVal = (30 + (val / 100) * 68).toFixed(1);

    setMetrics({
      entropy: `${entropyVal} bits`,
      snr: `${snrVal} dB`,
      nodes: 120,
      coherence: `${coherenceVal}%`
    });
  };

  const handleMouseMove = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden math-grid">
      {/* Background radial glow */}
      <div className="absolute inset-0 math-radial-glow pointer-events-none" />

      {/* Dynamic Mathematical Canvas */}
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        className="absolute inset-0 w-full h-full cursor-crosshair opacity-80"
      />

      {/* Main Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Etymology Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 backdrop-blur-md mb-6 animate-pulse-slow">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide uppercase">
            Order Emerging From Chaos
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Navigating Complexity With <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">Mathematical Clarity</span>
        </h1>

        {/* Subtitle / Brand Promise */}
        <p className="max-w-2xl text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-8">
          We explore uncharted business problems with our partners—mapping the chaos, discovering hidden patterns, and designing elegantly simple paths to measurable impact.
        </p>

        {/* Interactive Order & Chaos Control Deck */}
        <div className="w-full max-w-xl p-5 rounded-2xl glass-panel border border-cyan-500/20 shadow-2xl mb-10 text-left">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-semibold text-slate-200 tracking-wider">
                SYSTEM ORDER RATIO: <span className="text-cyan-400">{orderRatio}%</span>
              </span>
            </div>
            <span className="text-[11px] font-mono text-slate-400">
              [ Slide to filter noise ]
            </span>
          </div>

          {/* Interactive Range Slider */}
          <div className="relative flex items-center gap-4 mb-4">
            <span className="text-[11px] font-mono font-semibold text-red-400">CHAOS</span>
            <input
              type="range"
              min="0"
              max="100"
              value={orderRatio}
              onChange={handleSliderChange}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <span className="text-[11px] font-mono font-semibold text-cyan-400">ORDER</span>
          </div>

          {/* Presets buttons */}
          <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => applyPreset('raw_chaos', 10)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePreset === 'raw_chaos'
                    ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                01. Raw Chaos
              </button>
              <button
                onClick={() => applyPreset('balanced', 50)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePreset === 'balanced'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                02. Pattern Finding
              </button>
              <button
                onClick={() => applyPreset('occam', 100)}
                className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                  activePreset === 'occam'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'bg-slate-800/60 text-slate-400 hover:text-white'
                }`}
              >
                03. Occam Clarity
              </button>
            </div>

            {/* Live Metrics Telemetry */}
            <div className="hidden sm:flex items-center gap-3 text-[11px] font-mono text-slate-400">
              <span>Entropy: <strong className="text-cyan-300">{metrics.entropy}</strong></span>
              <span>SNR: <strong className="text-emerald-400">{metrics.snr}</strong></span>
            </div>
          </div>
        </div>

        {/* Hero Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => scrollToSection('expedition')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_25px_rgba(0,240,255,0.4)] flex items-center justify-center gap-2 group"
          >
            START AN EXPEDITION
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={() => scrollToSection('lab')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-mono text-sm font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/60 hover:border-cyan-500/40 transition-all flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4 text-cyan-400" />
            MATH ART LABORATORY
          </button>
        </div>

      </div>
    </section>
  );
}
