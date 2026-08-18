import React, { useRef, useEffect, useState } from 'react';
import { Cpu, Activity, Sparkles, RefreshCw, Zap, Compass, Layers, Sliders } from 'lucide-react';

export default function MathArtLab() {
  const [activeLabMode, setActiveLabMode] = useState('lorenz'); // lorenz | voronoi | harmonic
  const canvasRef = useRef(null);

  // Simulation Parameters
  const [speed, setSpeed] = useState(1);
  const [density, setDensity] = useState(50);
  const [filterThreshold, setFilterThreshold] = useState(70);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;

    const width = (canvas.width = canvas.parentElement.clientWidth);
    const height = (canvas.height = canvas.parentElement.clientHeight);

    let time = 0;

    // Mode 1: Lorenz Attractor
    let x = 0.1, y = 0, z = 0;
    const sigma = 10, rho = 28, beta = 8 / 3;
    const lorenzPoints = [];

    // Mode 2: Voronoi / Constellation Nodes
    const nodes = Array.from({ length: Math.floor(density) }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      radius: Math.random() * 2 + 1
    }));

    const render = () => {
      time += 0.03 * speed;

      if (activeLabMode === 'lorenz') {
        // Fade background for trail effect
        ctx.fillStyle = 'rgba(6, 8, 16, 0.15)';
        ctx.fillRect(0, 0, width, height);

        // Calculate 10 steps per frame for smooth curve
        for (let i = 0; i < 8 * speed; i++) {
          const dt = 0.008;
          const dx = sigma * (y - x) * dt;
          const dy = (x * (rho - z) - y) * dt;
          const dz = (x * y - beta * z) * dt;
          x += dx;
          y += dy;
          z += dz;

          // Map 3D Lorenz to 2D canvas
          const scale = Math.min(width, height) / 60;
          const cx = width / 2 + x * scale;
          const cy = height / 2 + (y - z / 2) * scale;

          lorenzPoints.push({ x: cx, y: cy });
          if (lorenzPoints.length > 800) lorenzPoints.shift();
        }

        // Draw Lorenz Curve
        ctx.beginPath();
        if (lorenzPoints.length > 0) {
          ctx.moveTo(lorenzPoints[0].x, lorenzPoints[0].y);
          for (let p of lorenzPoints) {
            ctx.lineTo(p.x, p.y);
          }
        }
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;

      } else if (activeLabMode === 'voronoi') {
        ctx.clearRect(0, 0, width, height);

        // Update nodes
        nodes.forEach(n => {
          n.x += n.vx * speed;
          n.y += n.vy * speed;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.fill();
        });

        // Draw Triangulation & Constellation Edges
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(245, 158, 11, ${1 - dist / 140})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

      } else if (activeLabMode === 'harmonic') {
        ctx.clearRect(0, 0, width, height);

        const midY = height / 2;
        const cutoff = (filterThreshold / 100);

        // Draw raw chaotic wave
        ctx.beginPath();
        for (let x = 0; x < width; x += 3) {
          const rawWave = 
            Math.sin(x * 0.02 + time * 2) * 30 +
            Math.sin(x * 0.08 + time * 5) * 15 +
            (Math.random() - 0.5) * 20 * (1 - cutoff);
          const yPos = midY + rawWave;
          if (x === 0) ctx.moveTo(x, yPos);
          else ctx.lineTo(x, yPos);
        }
        ctx.strokeStyle = 'rgba(239, 68, 68, 0.4)';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw filtered pure Occam harmonic wave
        ctx.beginPath();
        for (let x = 0; x < width; x += 3) {
          const pureWave = Math.sin(x * 0.015 + time * 1.5) * 45 * cutoff;
          const yPos = midY + pureWave;
          if (x === 0) ctx.moveTo(x, yPos);
          else ctx.lineTo(x, yPos);
        }
        ctx.strokeStyle = '#00f0ff';
        ctx.lineWidth = 3;
        ctx.shadowColor = '#00f0ff';
        ctx.shadowBlur = 15;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationId);
  }, [activeLabMode, speed, density, filterThreshold]);

  return (
    <section id="lab" className="py-24 relative border-t border-white/5 bg-[#070a14] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold mb-4">
            <Cpu className="w-3.5 h-3.5" />
            MATHEMATICAL ART LABORATORY
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Structure Emerging From <span className="text-gradient-cyan">Complexity</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Interact with our mathematical models of business systems. Watch non-linear chaos converge into deterministic geometric order.
          </p>
        </div>

        {/* Lab Switcher Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          <button
            onClick={() => setActiveLabMode('lorenz')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
              activeLabMode === 'lorenz'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,240,255,0.2)]'
                : 'bg-slate-900 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            <Activity className="w-4 h-4" />
            01. Lorenz Attractor (Chaos System)
          </button>

          <button
            onClick={() => setActiveLabMode('voronoi')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
              activeLabMode === 'voronoi'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.2)]'
                : 'bg-slate-900 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            <Compass className="w-4 h-4" />
            02. Constellation Network (Topology)
          </button>

          <button
            onClick={() => setActiveLabMode('harmonic')}
            className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all flex items-center gap-2 ${
              activeLabMode === 'harmonic'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                : 'bg-slate-900 text-slate-400 border border-white/10 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            03. Occam Signal Synthesizer (Harmonics)
          </button>
        </div>

        {/* Interactive Lab Canvas Frame */}
        <div className="relative rounded-2xl glass-panel border border-cyan-500/30 overflow-hidden shadow-2xl">
          
          {/* Top Status Bar */}
          <div className="flex items-center justify-between px-6 py-3 bg-slate-950/80 border-b border-white/10 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-cyan-300 font-semibold uppercase">
                ACTIVE EXPERIMENT: {activeLabMode.toUpperCase()}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <span>FPS: <strong className="text-white">60.0</strong></span>
              <span>RENDER ENGINE: <strong className="text-cyan-400">CANVAS 2D HARMONIC</strong></span>
            </div>
          </div>

          {/* Main Visual Canvas */}
          <div className="relative h-96 w-full bg-[#05070f]">
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Mode Description Badge */}
            <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-slate-950/90 border border-cyan-500/20 max-w-sm font-mono text-xs text-slate-300">
              {activeLabMode === 'lorenz' && (
                <p>
                  <strong className="text-cyan-400">Lorenz System:</strong> Models how complex business dynamics circle two distinct attractor basins without ever repeating—demonstrating deterministic chaos.
                </p>
              )}
              {activeLabMode === 'voronoi' && (
                <p>
                  <strong className="text-amber-400">Topology Network:</strong> Shows how disparate operational nodes auto-organize into optimal spatial clusters when given clear governing rules.
                </p>
              )}
              {activeLabMode === 'harmonic' && (
                <p>
                  <strong className="text-purple-400">Occam Filter:</strong> Strips away high-frequency market noise (red) to reveal the underlying core harmonic trend vector (electric blue).
                </p>
              )}
            </div>
          </div>

          {/* Interactive Controls Bar */}
          <div className="p-6 bg-slate-950 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="text-xs font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>SIMULATION SPEED</span>
                <span className="text-cyan-400">{speed}x</span>
              </label>
              <input
                type="range"
                min="0.2"
                max="3"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>NODE DENSITY</span>
                <span className="text-amber-400">{density}</span>
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
            </div>

            <div>
              <label className="text-xs font-mono text-slate-400 flex items-center justify-between mb-2">
                <span>OCCAM NOISE FILTER</span>
                <span className="text-purple-400">{filterThreshold}%</span>
              </label>
              <input
                type="range"
                min="10"
                max="100"
                value={filterThreshold}
                onChange={(e) => setFilterThreshold(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
