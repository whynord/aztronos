import React, { useRef, useEffect } from 'react';

export default function BackgroundGridCanvas() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = 0;
    let height = 0;
    const GRID_SIZE = 64;

    const handleResize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const isActive = mouseRef.current.active;
      const radius = 180;

      // Draw Vertical Grid Lines
      for (let x = 0; x <= width; x += GRID_SIZE) {
        let opacity = 0.05;
        if (isActive) {
          const dist = Math.abs(x - mx);
          if (dist < radius) {
            opacity = 0.05 + (1 - dist / radius) * 0.32;
          }
        }
        ctx.strokeStyle = `rgba(10, 10, 12, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();

        if (isActive && Math.abs(x - mx) < radius) {
          const targetY = my;
          const curveOffset = (mx - x) * 0.04;
          ctx.moveTo(x, 0);
          ctx.quadraticCurveTo(x + curveOffset, targetY, x, height);
        } else {
          ctx.moveTo(x, 0);
          ctx.lineTo(x, height);
        }
        ctx.stroke();
      }

      // Draw Horizontal Grid Lines
      for (let y = 0; y <= height; y += GRID_SIZE) {
        let opacity = 0.05;
        if (isActive) {
          const dist = Math.abs(y - my);
          if (dist < radius) {
            opacity = 0.05 + (1 - dist / radius) * 0.32;
          }
        }
        ctx.strokeStyle = `rgba(10, 10, 12, ${opacity})`;
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw Teal Magnet Ring
      if (isActive) {
        ctx.strokeStyle = 'rgba(42, 157, 143, 0.5)';
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.arc(mx, my, 6, 0, Math.PI * 2);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    handleResize();
    render();

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
