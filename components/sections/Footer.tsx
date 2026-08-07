export function Footer() {
  return (
    <footer id="contact" className="contact" data-footer>
      <div className="site-container contact-main">
        <p className="footer-intro" data-footer-item>
          I’m open to AI, data, and software engineering roles—along with
          ambitious collaborations where I can help build the whole system.
        </p>
        <div className="footer-title-mask">
          <h2 data-footer-title>Get in touch</h2>
        </div>
        <div className="footer-divider" data-footer-divider />
        <div className="contact-links">
          <a href="mailto:kosurusai646@gmail.com" data-footer-item>
            kosurusai646@gmail.com
          </a>
          <a href="tel:+919515457049" data-footer-item>
            +91 95154 57049
          </a>
        </div>
      </div>

      <div className="site-container footer-bottom">
        <span>©2026 Aditya Kosuru</span>
        <nav aria-label="Social links">
          <a href="https://github.com/aditya9515" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/aditya-kosuru-rolcy/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/kosuruaditya/" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </nav>
        <a className="footer-credit" href="/Aditya_Kosuru.pdf" target="_blank">
          Download résumé ↗
        </a>
      </div>
    </footer>
  );
}
