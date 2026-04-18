'use client';

import { useEffect, useRef } from 'react';

const FONT_SIZE = 11;
const GAP = 10;
const HIGHLIGHT_CHANCE = 0.15;
const HIGHLIGHT_COLORS = ['#0033FF', '#FF2200', '#00FFAA', '#00CFFF', '#FFD700'];

const WORD_POOL = [
  'VHS', 'AUDIO', 'VISUAL', 'PERFORMANCE', 'GENERATIVE', 'INTERACTIVE',
  'INSTALLATION', 'AUDIOVISUAL', 'LIVE', 'SYNTHESIZER', 'SEQUENCER',
  'PROJECTION', 'MAPPING', 'SIGNAL', 'FREQUENCY', 'NOISE', 'PATTERN',
  'SYSTEM', 'FIELD', 'SPACE', 'TIME', 'BODY', 'SCREEN', 'LIGHT',
  'WAVE', 'PULSE', 'LOOP', 'MODULAR', 'ANALOG', 'DIGITAL', 'CODE',
  'IMAGE', 'ARTIST', '추호승', '소리', '빛', '공간', '신체',
  '경험', '생성', '반복', '신호', '파동', 'HO-SEUNG', 'CHOO',
  'ABLETON', 'MAX/MSP', 'TOUCHDESIGNER', 'RESOLUME', 'AV', 'SEOUL',
  '37.5665°N', '126.9780°E', 'SYS://ACTIVE', 'KR-0091',
  '░░░░', '▓▓▓', '>>>', '___', '[VHS]', '경고', 'OFF-WORLD',
];

type WaveWord = {
  text: string;
  highlight: string | null;
  streamX: number;
  width: number;
};

type WaveStream = {
  baseY: number;
  amplitude: number;
  frequency: number;
  phaseSpeed: number;
  phase: number;
  scrollSpeed: number;
  speedMult: number;
  nextSpeedChange: number;
  direction: 1 | -1;
  offset: number;
  words: WaveWord[];
  unitWidth: number;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildStream(
  ctx: CanvasRenderingContext2D,
  index: number,
  baseY: number,
  screenWidth: number
): WaveStream {
  ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;

  const words = shuffle(WORD_POOL);
  let totalW = 0;
  const unitWords: WaveWord[] = [];
  let i = 0;

  while (totalW < screenWidth * 1.5) {
    const word = words[i % words.length];
    const w = ctx.measureText(word).width;
    unitWords.push({
      text: word,
      highlight: Math.random() < HIGHLIGHT_CHANCE
        ? HIGHLIGHT_COLORS[Math.floor(Math.random() * HIGHLIGHT_COLORS.length)]
        : null,
      streamX: totalW,
      width: w,
    });
    totalW += w + GAP;
    i++;
  }

  const unitWidth = totalW;
  const allWords: WaveWord[] = [];
  for (let rep = 0; rep < 3; rep++) {
    for (const w of unitWords) {
      allWords.push({ ...w, streamX: w.streamX + rep * unitWidth });
    }
  }

  return {
    baseY,
    amplitude: 22 + Math.random() * 38,
    frequency: 0.005 + Math.random() * 0.013,
    phaseSpeed: 0.007 + Math.random() * 0.011,
    phase: Math.random() * Math.PI * 2,
    scrollSpeed: 0.25 + Math.random() * 0.75,
    speedMult: 1.0,
    nextSpeedChange: 60 + Math.floor(Math.random() * 120),
    direction: (index % 2 === 0 ? 1 : -1) as 1 | -1,
    offset: Math.random() * unitWidth,
    words: allWords,
    unitWidth,
  };
}

export default function ParticleCanvas() {
  const GLITCH_INTERVAL = 15;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamsRef = useRef<WaveStream[]>([]);
  const rafRef = useRef<number>(0);
  const frameRef = useRef<number>(0);
  const glitchTimeRef = useRef<number>(GLITCH_INTERVAL);
  const lastFrameTimeRef = useRef<number>(0);

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

      const streamSpacing = 70;
      const count = Math.ceil(h / streamSpacing) + 1;
      streamsRef.current = Array.from({ length: count }, (_, i) =>
        buildStream(ctx, i, i * streamSpacing + streamSpacing / 2, w)
      );
    };

    requestAnimationFrame(init);
    window.addEventListener('resize', init);

    const onGlitch = () => { glitchTimeRef.current = 0; };
    window.addEventListener('glitch-trigger', onGlitch);

    const tick = (timestamp: number) => {
      const dt = lastFrameTimeRef.current
        ? (timestamp - lastFrameTimeRef.current) / 1000
        : 0;
      lastFrameTimeRef.current = timestamp;

      glitchTimeRef.current = Math.min(glitchTimeRef.current + dt, GLITCH_INTERVAL);
      const t = glitchTimeRef.current / GLITCH_INTERVAL;
      const cycleSpeedMult = 0.5 + 0.5 * Math.pow(t, 4);

      frameRef.current++;
      const frame = frameRef.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${FONT_SIZE}px "Space Mono", monospace`;

      for (const stream of streamsRef.current) {
        // Random speed burst
        if (frame >= stream.nextSpeedChange) {
          stream.speedMult = 0.2 + Math.random() * 2.5;
          stream.nextSpeedChange = frame + 60 + Math.floor(Math.random() * 200);
        }
        stream.speedMult += (1.0 - stream.speedMult) * 0.01;

        stream.phase += stream.phaseSpeed;
        stream.offset += stream.scrollSpeed * stream.speedMult * cycleSpeedMult * stream.direction;
        if (stream.offset >= stream.unitWidth) stream.offset -= stream.unitWidth;
        if (stream.offset < 0) stream.offset += stream.unitWidth;

        for (const word of stream.words) {
          const screenX = word.streamX - stream.offset;
          if (screenX + word.width < 0 || screenX > canvas.width) continue;

          const waveY = stream.baseY
            + stream.amplitude * Math.sin(screenX * stream.frequency + stream.phase);

          // Opacity modulated by wave position — brighter at peaks/troughs
          const waveIntensity = Math.abs(Math.sin(screenX * stream.frequency + stream.phase));

          if (word.highlight) {
            const pad = 2;
            ctx.fillStyle = word.highlight;
            ctx.fillRect(screenX - pad, waveY - FONT_SIZE, word.width + pad * 2, FONT_SIZE + 4);
            ctx.globalAlpha = 1;
            ctx.fillStyle = '#000000';
          } else {
            ctx.globalAlpha = 0.25 + waveIntensity * 0.35;
            ctx.fillStyle = '#ffffff';
          }

          ctx.fillText(word.text, screenX, waveY);
          ctx.globalAlpha = 1;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', init);
      window.removeEventListener('glitch-trigger', onGlitch);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, filter: 'blur(0.5px)' }}
    />
  );
}
