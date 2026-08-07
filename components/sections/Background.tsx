import { certifications } from "@/lib/content";

export function Background() {
  return (
    <section id="background" className="background site-container">
      <div className="background-heading">
        <span>(Background)</span>
        <h2>Learning by building</h2>
      </div>

      <div className="education-card">
        <div>
          <span>2023—2027</span>
          <span>Udupi, India</span>
        </div>
        <h3>Bachelor of Technology · Data Science</h3>
        <p>Manipal Academy of Higher Education</p>
      </div>

      <div className="certification-grid">
        {certifications.map((certification) => (
          <article key={certification.title}>
            <span>{certification.year}</span>
            <h3>{certification.title}</h3>
            <p>{certification.provider}</p>
            <small>Credential {certification.credential}</small>
          </article>
        ))}
      </div>

      <a className="resume-link" href="/Aditya_Kosuru.pdf" target="_blank">
        Read the full résumé <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}
