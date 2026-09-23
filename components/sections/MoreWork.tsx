import { additionalProjects, projects } from "@/lib/content";

export function MoreWork() {
  return (
    <section className="more-work site-container" aria-labelledby="more-work-title">
      <div className="more-work-heading">
        <span>(More work)</span>
        <h2 id="more-work-title">Selected experiments & systems</h2>
      </div>
      <div className="more-work-list">
        {additionalProjects.map((project, index) => (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="more-work-row"
            key={project.title}
          >
            <span className="more-work-index">{String(projects.length + index + 1).padStart(2, "0")}</span>
            <strong>{project.title}</strong>
            <span>{project.discipline}</span>
            <span>{project.stack}</span>
            <span>{project.year} ↗</span>
          </a>
        ))}
      </div>
    </section>
  );
}
