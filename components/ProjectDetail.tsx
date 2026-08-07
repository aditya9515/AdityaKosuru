"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/lib/content";

export function ProjectDetail({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <div className={`project-entry-curtain${open ? " is-open" : ""}`} aria-hidden="true">
        {Array.from({ length: 12 }, (_, index) => (
          <span key={index} style={{ "--bar": index } as React.CSSProperties} />
        ))}
      </div>
      <header className="detail-header site-container">
        <a className="logo" href="/" aria-label="Back to homepage">
          <span>Aditya</span>
          <span>Kosuru</span>
        </a>
        <a className="detail-back" href="/">
          ← Back to work
        </a>
      </header>
      <main className="project-detail">
        <div className="site-container detail-hero">
          <div className="project-meta">
            <span>({project.number})</span>
            <div>
              <span>{project.discipline}</span>
              <span className="muted">{project.year}</span>
            </div>
          </div>
          <h1>{project.title.join(" ")}</h1>
          <div className="detail-image">
            <img src={project.image} alt={`${project.title.join(" ")} project cover`} />
          </div>
          <div className="detail-summary">
            <p>{project.description}</p>
            <div className="detail-stack" aria-label="Technology stack">
              {project.stack.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="detail-actions">
            <a className="detail-next" href={project.github} target="_blank" rel="noreferrer">
              View GitHub <span aria-hidden="true">↗</span>
            </a>
            <a className="detail-next" href={project.live} target="_blank" rel="noreferrer">
              Visit live project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
