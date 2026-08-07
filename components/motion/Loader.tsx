"use client";

import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const played = sessionStorage.getItem("introPlayed") === "true";
    if (reduced || played) {
      setVisible(false);
      onComplete();
      return;
    }

    document.documentElement.classList.add("intro-loading");
    const started = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const value = Math.min(100, Math.round(((now - started) / 1450) * 100));
      setProgress(value);
      if (value < 100) {
        frame = requestAnimationFrame(tick);
        return;
      }
      window.setTimeout(() => {
        setExiting(true);
        document.documentElement.classList.remove("intro-loading");
        sessionStorage.setItem("introPlayed", "true");
        onComplete();
        window.setTimeout(() => setVisible(false), 1000);
      }, 120);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [onComplete]);

  if (!visible) return null;

  return (
    <section
      className={`loader${exiting ? " loader-exit" : ""}`}
      aria-label="Loading portfolio"
      aria-live="polite"
    >
      <div className="site-container loader-inner">
        <p>
          Building intelligent systems from raw ideas, real data, and reliable
          code
        </p>
        <span>{progress}%</span>
      </div>
    </section>
  );
}
