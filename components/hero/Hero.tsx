"use client";

import { useEffect, useState } from "react";

const rows = [
  { text: "AI Engineer", direction: "forward", count: 6 },
  { text: "Data Scientist", direction: "reverse", count: 5 },
  { text: "Full-Stack Dev", direction: "forward", count: 5 },
] as const;

function MarqueeRow({
  text,
  direction,
  count,
  index,
}: {
  text: string;
  direction: "forward" | "reverse";
  count: number;
  index: number;
}) {
  const copies = Array.from({ length: count }, (_, item) => item);
  return (
    <div
      className={`marquee-row marquee-row-${index + 1} ${direction}`}
      aria-label={text}
    >
      <div className="marquee-track" aria-hidden="true">
        {copies.map((item) => (
          <span key={item}>{text}</span>
        ))}
      </div>
      <div className="marquee-track" aria-hidden="true">
        {copies.map((item) => (
          <span key={item}>{text}</span>
        ))}
      </div>
    </div>
  );
}

function IndiaClock() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const update = () => setTime(formatter.format(new Date()));
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return <time>{time}</time>;
}

export function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero-marquees">
        {rows.map((row, index) => (
          <MarqueeRow key={row.text} {...row} index={index} />
        ))}
      </div>

      <div className="portrait" data-portrait>
        <img src="/images/portrait.png" alt="Portrait of Aditya Kosuru" />
        <canvas aria-hidden="true" />
      </div>

      <div className="site-container hero-meta">
        <div className="hero-location">
          <span>Based in India</span>
          <span aria-hidden="true">•</span>
          <IndiaClock />
        </div>
        <div className="availability">
          <span className="availability-dot" aria-hidden="true" />
          <span>Open to work</span>
        </div>
      </div>
    </section>
  );
}
