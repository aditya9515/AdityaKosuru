"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cursor || !fine) return;

    let targetX = -40;
    let targetY = -40;
    let x = -40;
    let y = -40;
    let frame = 0;

    const move = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.dataset.visible = "true";
    };
    const leave = () => delete cursor.dataset.visible;
    const loop = () => {
      const factor = reduced ? 1 : 0.24;
      x += (targetX - x) * factor;
      y += (targetY - y) * factor;
      cursor.style.transform = `translate3d(${x - 5}px, ${y - 5}px, 0)`;
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    frame = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
