"use client";

import { useEffect, useState } from "react";

const links = [
  ["01", "About", "#about"],
  ["02", "Projects", "#projects"],
  ["03", "Background", "#background"],
  ["04", "Contact", "#contact"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent("portfolio:scroll-lock", { detail: open }),
    );
    return () => {
      window.dispatchEvent(
        new CustomEvent("portfolio:scroll-lock", { detail: false }),
      );
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${open ? " menu-open" : ""}`}>
      <div className="site-container header-inner">
        <a className="logo" href="#top" aria-label="Aditya Kosuru home" onClick={close}>
          <span>Aditya</span>
          <span>Kosuru</span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([number, label, href]) => (
            <a key={href} href={href}>
              <span className="nav-index">{number}</span>
              <span>{label}</span>
            </a>
          ))}
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" aria-hidden={!open}>
        <nav aria-label="Mobile navigation">
          {links.map(([number, label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={close}
              style={{ "--menu-order": index } as React.CSSProperties}
            >
              <span>{number}</span>
              {label}
            </a>
          ))}
        </nav>
        <p>AI · Data · Full-stack · India</p>
      </div>
    </header>
  );
}
