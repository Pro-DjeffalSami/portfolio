import { useEffect, useRef } from 'react';
import {
  advanceScrollOffset,
  BOOT_LOG_LINES,
  computeLogColumns,
} from '../utils/terminalBgLogic';

const LINE_HEIGHT = 26;
const SCROLL_SPEED_PX_PER_SEC = 24;
const TARGET_FRAME_MS = 1000 / 24;

export function TerminalBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let offset = 0;
    let animationFrameId = 0;
    let lastDrawTime = performance.now();

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = '13px "JetBrains Mono", ui-monospace, SFMono-Regular, monospace';
      ctx.textBaseline = 'top';

      const columns = computeLogColumns(width);
      const totalBlockHeight = BOOT_LOG_LINES.length * LINE_HEIGHT;
      const repeatCount = Math.ceil(height / totalBlockHeight) + 2;

      for (const col of columns) {
        const lineShift = col.columnIndex * 7;
        for (let r = 0; r < repeatCount; r += 1) {
          for (let i = 0; i < BOOT_LOG_LINES.length; i += 1) {
            const y = r * totalBlockHeight + i * LINE_HEIGHT - offset;
            if (y < -LINE_HEIGHT || y > height + LINE_HEIGHT) {
              continue;
            }
            const line =
              BOOT_LOG_LINES[(i + lineShift) % BOOT_LOG_LINES.length];
            const isSystemdOrNet =
              line.includes('ufw') ||
              line.includes('dockerd') ||
              line.includes('terraform');
            ctx.fillStyle = isSystemdOrNet ? '#34d399' : '#22d3ee';
            ctx.fillText(line, col.x, y);
          }
        }
      }
    };

    resize();
    drawFrame();

    if (prefersReducedMotion) {
      canvas.dataset.animating = 'reduced';
      window.addEventListener('resize', () => {
        resize();
        drawFrame();
      });
      return;
    }

    canvas.dataset.animating = 'true';
    const totalBlockHeight = BOOT_LOG_LINES.length * LINE_HEIGHT;

    const loop = (now: number) => {
      animationFrameId = window.requestAnimationFrame(loop);
      if (document.hidden) {
        lastDrawTime = now;
        return;
      }
      const elapsedMs = now - lastDrawTime;
      if (elapsedMs < TARGET_FRAME_MS) {
        return;
      }
      lastDrawTime = now;
      offset = advanceScrollOffset(
        offset,
        elapsedMs / 1000,
        SCROLL_SPEED_PX_PER_SEC,
        totalBlockHeight
      );
      drawFrame();
    };

    animationFrameId = window.requestAnimationFrame(loop);

    const handleResize = () => {
      resize();
      drawFrame();
    };

    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      data-testid="terminal-bg-canvas"
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 opacity-[0.14]"
    />
  );
}
