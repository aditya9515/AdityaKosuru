export function About() {
  return (
    <section id="about" className="section about site-container">
      <div className="section-index">
        <span>(01)</span>
      </div>
      <h2 className="section-heading scramble" data-scramble="ABOUT">
        ABOUT
      </h2>
      <div className="about-copy">
        <p className="reveal-copy" data-lines>
          I build AI agents, data platforms, and full-stack products—taking
          ideas from architecture and model workflows through to interfaces
          people can actually use.
        </p>
        <p className="reveal-copy about-copy-secondary" data-lines>
          I’m a Data Science undergraduate at Manipal Academy of Higher
          Education, graduating in 2027. My work spans React, Next.js,
          FastAPI, Firebase, Spark, Hadoop, NLP, and applied LLM systems.
        </p>
      </div>
      <div className="profile-facts" aria-label="Profile highlights">
        <div>
          <span>Education</span>
          <strong>B.Tech · Data Science</strong>
        </div>
        <div>
          <span>Graduation</span>
          <strong>July 2027</strong>
        </div>
        <div>
          <span>Focus</span>
          <strong>AI · Data · Product</strong>
        </div>
      </div>
    </section>
  );
}
