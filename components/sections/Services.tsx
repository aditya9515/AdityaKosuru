"use client";

import { useRef, useState } from "react";
import { services } from "@/lib/content";

function ServiceRow({
  service,
  index,
  open,
  onToggle,
}: {
  service: (typeof services)[number];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const left = service.align !== "right";

  return (
    <div
      className={`service-row service-${service.align}`}
      data-service-row
      style={{ "--service-order": index } as React.CSSProperties}
    >
      <button
        type="button"
        className="service-button"
        aria-expanded={open}
        onClick={onToggle}
      >
        {!left && <span className="click-hint">click me →</span>}
        <span className="service-name">
          {service.name}{" "}
          <span className="service-parenthesis">
            (
            <span
              className="service-chip"
              style={{ backgroundImage: `url(${service.image})` }}
              aria-hidden="true"
            />
            )
          </span>
        </span>
        {left && <span className="click-hint">← click me</span>}
      </button>

      <div
        className="service-panel"
        ref={contentRef}
        style={{ maxHeight: open ? contentRef.current?.scrollHeight ?? 180 : 0 }}
      >
        <p>{service.description}</p>
      </div>
    </div>
  );
}

export function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="services site-container" aria-labelledby="services-label">
      <p id="services-label" className="services-label">
        (Services)
      </p>
      <div className="services-list">
        {services.map((service, index) => (
          <ServiceRow
            key={service.name}
            service={service}
            index={index}
            open={open === index}
            onToggle={() => setOpen((value) => (value === index ? null : index))}
          />
        ))}
      </div>
      <div className="final-statement">
        <p data-lines>
          I’m most useful where AI, data, and product engineering meet. I can
          shape the workflow, build the backend, ship the interface, and keep
          the technical story clear from first prototype to production.
        </p>
      </div>
    </section>
  );
}
