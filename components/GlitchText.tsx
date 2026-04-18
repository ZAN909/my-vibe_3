'use client';

import { useEffect, useState } from 'react';

const GLITCH_CHARS = '#@%!▓░[]{}<>/\\|*~^&$Ξ≠≡';

function scramble(text: string, intensity: number): string {
  return text.split('').map(char => {
    if (char === ' ' || char === '\n') return char;
    return Math.random() < intensity
      ? GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      : char;
  }).join('');
}

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

export default function GlitchText({ text, className, style }: Props) {
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const runGlitch = () => {
      let frame = 0;
      const totalFrames = 14;

      const id = setInterval(() => {
        const progress = frame / totalFrames;
        // 강하게 시작 → 점점 원래 텍스트로 복귀
        const intensity = Math.max(0, 0.9 - progress * 0.9);
        setDisplay(intensity > 0 ? scramble(text, intensity) : text);
        frame++;
        if (frame > totalFrames) clearInterval(id);
      }, 45);
    };

    const id = setInterval(runGlitch, 3000);
    return () => clearInterval(id);
  }, [text]);

  return (
    <span className={className} style={style}>
      {display}
    </span>
  );
}
