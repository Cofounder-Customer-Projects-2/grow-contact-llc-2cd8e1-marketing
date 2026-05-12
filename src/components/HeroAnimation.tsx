"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  z: number; // depth 0‑1 → opacity + size scaling
  vx: number;
  vy: number;
  radius: number;
  pulse: number; // phase offset for glow pulse
}

interface Edge {
  a: number;
  b: number;
}

const NODE_COUNT = 68;
const EDGE_DIST = 180;
const BASE_SPEED = 0.18;

function initNodes(w: number, h: number): Node[] {
  return Array.from({ length: NODE_COUNT }, () => {
    const angle = Math.random() * Math.PI * 2;
    const speed = BASE_SPEED * (0.4 + Math.random() * 0.6);
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      z: 0.25 + Math.random() * 0.75,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: 1.5 + Math.random() * 2.5,
      pulse: Math.random() * Math.PI * 2,
    };
  });
}

function buildEdges(nodes: Node[]): Edge[] {
  const edges: Edge[] = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x;
      const dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < EDGE_DIST) {
        edges.push({ a: i, b: j });
      }
    }
  }
  return edges;
}

export function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let nodes: Node[] = [];
    let edges: Edge[] = [];
    let t = 0;

    function resize() {
      const c = canvasRef.current;
      if (!c) return;
      c.width = c.offsetWidth * window.devicePixelRatio;
      c.height = c.offsetHeight * window.devicePixelRatio;
      nodes = initNodes(c.width, c.height);
      edges = buildEdges(nodes);
    }

    function draw() {
      const c = canvasRef.current;
      if (!c || !ctx) return;
      const W = c.width;
      const H = c.height;

      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      // ── Tick nodes ──────────────────────────────────────────────────────────
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = W + 20;
        if (n.x > W + 20) n.x = -20;
        if (n.y < -20) n.y = H + 20;
        if (n.y > H + 20) n.y = -20;
      }

      // Rebuild edges lazily every ~60 frames (cheaper than every frame)
      if (Math.floor(t * 5) % 60 === 0) {
        edges = buildEdges(nodes);
      }

      // ── Draw edges ───────────────────────────────────────────────────────────
      for (const e of edges) {
        const na = nodes[e.a];
        const nb = nodes[e.b];
        const dx = na.x - nb.x;
        const dy = na.y - nb.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const fade = 1 - dist / EDGE_DIST;
        const depthFade = (na.z + nb.z) / 2;

        const grad = ctx.createLinearGradient(na.x, na.y, nb.x, nb.y);
        const alpha = fade * depthFade * 0.55;
        grad.addColorStop(0, `hsla(262,83%,65%,${alpha})`);
        grad.addColorStop(0.5, `hsla(215,60%,60%,${alpha * 0.6})`);
        grad.addColorStop(1, `hsla(262,83%,65%,${alpha})`);

        ctx.beginPath();
        ctx.moveTo(na.x, na.y);
        ctx.lineTo(nb.x, nb.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = depthFade * 0.9;
        ctx.stroke();
      }

      // ── Draw nodes ───────────────────────────────────────────────────────────
      for (const n of nodes) {
        const pulse = 0.7 + 0.3 * Math.sin(t * 2 + n.pulse);
        const r = n.radius * n.z * pulse;
        const alpha = 0.35 + n.z * 0.55;

        // glow halo
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 4);
        glow.addColorStop(0, `hsla(262,83%,70%,${alpha * 0.45})`);
        glow.addColorStop(1, `hsla(262,83%,70%,0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, r * 4, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // core dot
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(262,83%,78%,${alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    animId = requestAnimationFrame(draw);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none w-full"
      style={{ height: "340px", position: "relative" }}
    >
      {/* subtle top fade so the canvas blends with the hero gradient above */}
      <div
        className="absolute inset-x-0 top-0 z-10 h-24"
        style={{
          background:
            "linear-gradient(to bottom, hsl(260 87% 3%), transparent)",
        }}
      />
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{ display: "block" }}
      />
      {/* bottom fade */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 h-24"
        style={{
          background:
            "linear-gradient(to top, hsl(260 87% 3%), transparent)",
        }}
      />
    </div>
  );
}
