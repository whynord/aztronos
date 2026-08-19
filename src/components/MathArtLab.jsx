import React, { useRef, useEffect, useState } from 'react';

const MODES = [
  { key: 'lorenz', label: '01. Lorenz Attractor', note: 'Chaos System' },
  { key: 'voronoi', label: '02. Constellation Network', note: 'Topology' },
  { key: 'harmonic', label: '03. Occam Signal Synthesizer', note: 'Harmonics' },
];

export default function MathArtLab() {
  const [activeLabMode, setActiveLabMode] = useState('lorenz'); // lorenz | voronoi | harmonic
  const canvasRef = useRef(null);

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
      radius: Math.random() * 2 + 1,
    }));

    const teal = 'hsl(174 56% 50%)';
    const crimson = 'hsl(355 75% 60%)';
    const amber = 'hsl(43 68% 52%)';

    const render = () => {
      time += 0.03 * speed;

      if (activeLabMode === 'lorenz') {
        ctx.fillStyle = 'rgba(10, 10, 12, 0.15)';
        ctx.fillRect(0, 0, width, height);

        for (let i = 0; i < 8 * speed; i++) {
          const dt = 0.008;
          const dx = sigma * (y - x) * dt;
          const dy = (x * (rho - z) - y) * dt;
          const dz = (x * y - beta * z) * dt;
          x += dx; y += dy; z += dz;

          const scale = Math.min(width, height) / 60;
          const cx = width / 2 + x * scale;
          const cy = height / 2 + (y - z / 2) * scale;

          lorenzPoints.push({ x: cx, y: cy });
          if (lorenzPoints.length > 800) lorenzPoints.shift();
        }

        ctx.beginPath();
        if (lorenzPoints.length > 0) {
          ctx.moveTo(lorenzPoints[0].x, lorenzPoints[0].y);
          for (let p of lorenzPoints) ctx.lineTo(p.x, p.y);
        }
        ctx.strokeStyle = teal;
        ctx.lineWidth = 1.2;
        ctx.stroke();

      } else if (activeLabMode === 'voronoi') {
        ctx.clearRect(0, 0, width, height);

        nodes.forEach((n) => {
          n.x += n.vx * speed;
          n.y += n.vy * speed;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;

          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
          ctx.fillStyle = amber;
          ctx.fill();
        });

        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x;
            const dy = nodes[i].y - nodes[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.beginPath();
              ctx.moveTo(nodes[i].x, nodes[i].y);
              ctx.lineTo(nodes[j].x, nodes[j].y);
              ctx.strokeStyle = `rgba(176,141,34,${1 - dist / 140})`;
              ctx.lineWidth = 0.8;
              ctx.stroke();
            }
          }
        }

      } else if (activeLabMode === 'harmonic') {
        ctx.clearRect(0, 0, width, height);

        const midY = height / 2;
        const cutoff = filterThreshold / 100;

        ctx.beginPath();
        for (let px = 0; px < width; px += 3) {
          const rawWave =
            Math.sin(px * 0.02 + time * 2) * 30 +
            Math.sin(px * 0.08 + time * 5) * 15 +
            (Math.random() - 0.5) * 20 * (1 - cutoff);
          const yPos = midY + rawWave;
          if (px === 0) ctx.moveTo(px, yPos);
          else ctx.lineTo(px, yPos);
        }
        ctx.strokeStyle = crimson;
        ctx.globalAlpha = 0.4;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.beginPath();
        for (let px = 0; px < width; px += 3) {
          const pureWave = Math.sin(px * 0.015 + time * 1.5) * 45 * cutoff;
          const yPos = midY + pureWave;
          if (px === 0) ctx.moveTo(px, yPos);
          else ctx.lineTo(px, yPos);
        }
        ctx.strokeStyle = teal;
        ctx.lineWidth = 2.4;
        ctx.stroke();
      }

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [activeLabMode, speed, density, filterThreshold]);

  const notes = {
    lorenz: 'Lorenz System — complex business dynamics circle two distinct attractor basins without ever repeating, demonstrating deterministic chaos.',
    voronoi: 'Topology Network — disparate operational nodes auto-organize into optimal spatial clusters once given clear governing rules.',
    harmonic: 'Occam Filter — strips high-frequency market noise (crimson) to reveal the underlying core harmonic trend (teal).',
  };

  return (
    <section id="lab" className="relative px-6 py-32 md:py-48 z-20 border-t border-[var(--fg)]/15">
      <div className="mx-auto max-w-6xl">
        {/* Header — Occam eyebrow + heading language */}
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="label-mono mb-4 block text-[9px] text-[var(--fg)]/50">
              [ 05 ] Mathematical Art Laboratory
            </span>
            <h2 className="font-heading text-4xl font-medium tracking-[-0.02em] text-[var(--fg)] sm:text-5xl md:text-6xl">
              Structure emerging from <br />
              <span className="italic font-normal text-[var(--fg)]/60">complexity.</span>
            </h2>
          </div>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[var(--fg)]/55">
            Interact with our mathematical models of business systems — watch non-linear chaos converge into deterministic order.
          </p>
        </div>

        {/* Lab Switcher Controls — quiet Occam tabs */}
        <div className="mb-8 flex flex-wrap items-center gap-px border border-[var(--fg)]/15 bg-[var(--fg)]/10">
          {MODES.map((m) => {
            const isActive = activeLabMode === m.key;
            return (
              <button
                key={m.key}
                onClick={() => setActiveLabMode(m.key)}
                className={`flex-1 px-5 py-4 text-left transition-all duration-300 ${
                  isActive ? 'bg-[var(--bg)]' : 'bg-transparent hover:bg-[var(--fg)]/5'
                }`}
              >
                <span className={`label-mono text-[8px] block ${isActive ? 'text-[var(--accent-teal)]' : 'text-[var(--fg)]/45'}`}>
                  {m.label}
                </span>
                <span className={`font-mono text-xs ${isActive ? 'text-[var(--fg)]' : 'text-[var(--fg)]/55'}`}>
                  {m.note}
                </span>
              </button>
            );
          })}
        </div>

        {/* Interactive Lab Canvas Frame — thin Occam border, no neon */}
        <div className="relative border border-[var(--fg)]/15 bg-[var(--bg)]/40 overflow-hidden">
          <div className="relative h-96 w-full bg-[var(--bg)]/30">
            <canvas ref={canvasRef} className="h-full w-full" />
            <div className="absolute bottom-4 left-4 max-w-sm border border-[var(--fg)]/15 bg-[var(--bg)]/80 p-4 font-mono text-xs leading-relaxed text-[var(--fg)]/70">
              {notes[activeLabMode]}
            </div>
            <span className="absolute right-4 top-4 label-mono text-[8px] text-[var(--fg)]/40">
              EXPERIMENT: {activeLabMode.toUpperCase()}
            </span>
          </div>

          {/* Controls Bar — Occam sliders */}
          <div className="border-t border-[var(--fg)]/15 bg-[var(--bg)]/60 p-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div>
              <label className="label-mono mb-3 flex items-center justify-between text-[8px] text-[var(--fg)]/45">
                <span>Simulation Speed</span>
                <span className="text-[var(--accent-teal)]">{speed}x</span>
              </label>
              <input
                type="range" min="0.2" max="3" step="0.1" value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-full cursor-pointer appearance-none bg-[var(--fg)]/15 accent-[var(--accent-teal)]"
              />
            </div>
            <div>
              <label className="label-mono mb-3 flex items-center justify-between text-[8px] text-[var(--fg)]/45">
                <span>Node Density</span>
                <span className="text-[var(--accent-amber)]">{density}</span>
              </label>
              <input
                type="range" min="20" max="100" value={density}
                onChange={(e) => setDensity(Number(e.target.value))}
                className="w-full cursor-pointer appearance-none bg-[var(--fg)]/15 accent-[var(--accent-amber)]"
              />
            </div>
            <div>
              <label className="label-mono mb-3 flex items-center justify-between text-[8px] text-[var(--fg)]/45">
                <span>Occam Noise Filter</span>
                <span className="text-[var(--accent-crimson)]">{filterThreshold}%</span>
              </label>
              <input
                type="range" min="10" max="100" value={filterThreshold}
                onChange={(e) => setFilterThreshold(Number(e.target.value))}
                className="w-full cursor-pointer appearance-none bg-[var(--fg)]/15 accent-[var(--accent-crimson)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
