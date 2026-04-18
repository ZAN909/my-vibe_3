'use client';

import { useEffect, useRef } from 'react';

const LINE_COUNT = 28;
const DOT_COUNT = 120;
const COLOR = '#00CFFF';

type Dot = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
};

function initDots(w: number, h: number): Dot[] {
  return Array.from({ length: DOT_COUNT }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.15,
    size: 0.8 + Math.random() * 1.4,
    alpha: 0.2 + Math.random() * 0.4,
  }));
}

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const init = () => {
      const w = canvas.offsetWidth || window.innerWidth;
      const h = canvas.offsetHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      dotsRef.current = initDots(w, h);
    };

    requestAnimationFrame(init);
    window.addEventListener('resize', init);

    let t = 0;

    const tick = () => {
      t += 0.008;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Wave lines
      for (let i = 0; i < LINE_COUNT; i++) {
        const baseY = (i / LINE_COUNT) * h;
        const phase = i * 0.42;

        ctx.beginPath();
        ctx.strokeStyle = COLOR;
        ctx.globalAlpha = 0.08 + 0.06 * Math.sin(i * 0.7 + t);
        ctx.lineWidth = 0.8;

        for (let x = 0; x <= w; x += 3) {
          const y = baseY
            + 18 * Math.sin(x * 0.008 + t + phase)
            + 10 * Math.sin(x * 0.018 - t * 1.3 + phase * 2)
            + 6  * Math.sin(x * 0.035 + t * 0.7 + phase * 3);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Scatter dots
      for (const dot of dotsRef.current) {
        dot.x += dot.vx;
        dot.y += dot.vy;
        if (dot.x < 0) dot.x = w;
        if (dot.x > w) dot.x = 0;
        if (dot.y < 0) dot.y = h;
        if (dot.y > h) dot.y = 0;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = COLOR;
        ctx.globalAlpha = dot.alpha;
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
}
