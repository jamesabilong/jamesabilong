import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  depth: number;
  colorIdx: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  colorIdx: number;
  life: number;
  maxLife: number;
}

const STAR_COLORS = ["#FFFFFF", "#E8F4FD", "#B8D8F0", "#4FC3F7", "#C0A8FF"];
const PARTICLE_COLORS = ["#4FC3F7", "#9D7BFF", "#E8F4FD", "#26C6DA", "#FFD580"];

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Explicit non-nullable aliases so closures satisfy TS strict checks
    const el: HTMLCanvasElement = canvas;
    const c: CanvasRenderingContext2D = ctx;

    let rafId: number;
    let lastTime = 0;
    let elapsedSecs = 0;
    const mouse = { x: -9999, y: -9999 };
    let stars: Star[] = [];
    const particles: Particle[] = [];

    function initStars(W: number, H: number) {
      const count = Math.min(Math.floor((W * H) / 5000), 220);
      stars = [];
      for (let i = 0; i < count; i++) {
        const depth = Math.random();
        const size =
          depth < 0.35
            ? 0.4 + Math.random() * 0.5
            : depth < 0.70
            ? 0.8 + Math.random() * 1.0
            : 1.5 + Math.random() * 2.2;
        const baseOpacity =
          depth < 0.35
            ? 0.12 + Math.random() * 0.28
            : depth < 0.70
            ? 0.3 + Math.random() * 0.45
            : 0.55 + Math.random() * 0.4;
        stars.push({
          x: Math.random(),
          y: Math.random(),
          size,
          baseOpacity,
          opacity: baseOpacity,
          twinkleSpeed: 0.5 + Math.random() * 2.5,
          twinklePhase: Math.random() * Math.PI * 2,
          depth,
          colorIdx:
            Math.random() < 0.72
              ? 0
              : Math.floor(Math.random() * STAR_COLORS.length),
        });
      }
    }

    function spawnBurst(cx: number, cy: number) {
      const count = 12 + Math.floor(Math.random() * 10);
      for (let i = 0; i < count; i++) {
        const angle =
          (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.9;
        const speed = 1.5 + Math.random() * 4;
        const life = 900 + Math.random() * 700;
        particles.push({
          x: cx,
          y: cy,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 1.2 + Math.random() * 3,
          opacity: 1,
          colorIdx: Math.floor(Math.random() * PARTICLE_COLORS.length),
          life,
          maxLife: life,
        });
      }
    }

    function draw(W: number, H: number, dt: number) {
      c.clearRect(0, 0, W, H);

      const centerX = W / 2;
      const centerY = H / 2;
      const mdx = mouse.x < 0 ? 0 : mouse.x - centerX;
      const mdy = mouse.y < 0 ? 0 : mouse.y - centerY;
      const PX = 0.042;

      for (const s of stars) {
        s.opacity =
          s.baseOpacity +
          Math.sin(elapsedSecs * s.twinkleSpeed + s.twinklePhase) *
            s.baseOpacity *
            0.45;

        let rx = s.x * W + mdx * s.depth * PX;
        let ry = s.y * H + mdy * s.depth * PX;
        rx = ((rx % W) + W) % W;
        ry = ((ry % H) + H) % H;

        const alpha = Math.max(0, s.opacity);
        c.fillStyle = STAR_COLORS[s.colorIdx];

        if (s.size > 1.4) {
          c.globalAlpha = alpha * 0.15;
          c.beginPath();
          c.arc(rx, ry, s.size * 3.8, 0, Math.PI * 2);
          c.fill();
        }

        c.globalAlpha = alpha;
        c.beginPath();
        c.arc(rx, ry, s.size, 0, Math.PI * 2);
        c.fill();
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life -= dt;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.963;
        p.vy *= 0.963;
        p.opacity = p.life / p.maxLife;

        c.globalAlpha = p.opacity * 0.92;
        c.fillStyle = PARTICLE_COLORS[p.colorIdx];
        c.beginPath();
        c.arc(p.x, p.y, p.size * (0.3 + p.opacity * 0.7), 0, Math.PI * 2);
        c.fill();
      }

      c.globalAlpha = 1;
    }

    function loop(now: number) {
      const dt = Math.min(now - lastTime, 50);
      lastTime = now;
      elapsedSecs += dt * 0.001;
      draw(el.width, el.height, dt);
      rafId = requestAnimationFrame(loop);
    }

    function resize() {
      el.width = window.innerWidth;
      el.height = window.innerHeight;
      initStars(el.width, el.height);
    }

    function onPointerMove(e: PointerEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, input, select, textarea")) return;
      spawnBurst(e.clientX, e.clientY);
    }

    resize();
    lastTime = performance.now();
    rafId = requestAnimationFrame(loop);

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("click", onClick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("click", onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        touchAction: "none",
      }}
    />
  );
}
