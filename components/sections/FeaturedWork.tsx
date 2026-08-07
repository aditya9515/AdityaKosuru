import { projects } from "@/lib/content";

function ProjectItem({ project }: { project: (typeof projects)[number] }) {
  return (
    <article
      className={`project${project.reverse ? " project-reverse" : ""}`}
      data-project
    >
      <div className="project-meta" data-project-meta>
        <span>({project.number})</span>
        <div>
          <span>{project.discipline}</span>
          <span className="muted">{project.year}</span>
        </div>
      </div>

      <h3 className="project-title" aria-label={project.title.join(" ")}>
        {project.title.map((line) => (
          <span className="title-mask" key={line}>
            <span data-project-title>{line}</span>
          </span>
        ))}
      </h3>

      <div className="project-grid">
        <a
          className="project-media"
          href={project.href}
          aria-label={project.title.join(" ")}
          data-project-link
        >
          <img src={project.image} alt="" data-parallax-image />
          <span className="project-view">View</span>
        </a>
        <div className="project-copy">
          <p data-project-copy>{project.description}</p>
          <a className="project-mobile-cta" href={project.href} data-project-link>
            View project <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export function FeaturedWork() {
  return (
    <section id="projects" className="featured">
      <div className="featured-stage" data-featured-stage>
        <h2>Featured Work</h2>
        <p>[Scroll to explore more]</p>
      </div>
      <div className="site-container project-list">
        {projects.map((project) => (
          <ProjectItem project={project} key={project.number} />
        ))}
      </div>
    </section>
  );
}
