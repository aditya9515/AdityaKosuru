"use client";

import { useEffect, useState } from "react";

export function RouteCurtain() {
  const [covering, setCovering] = useState(false);

  useEffect(() => {
    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("[data-project-link]"),
    );
    const handle = (event: Event) => {
      const link = event.currentTarget as HTMLAnchorElement;
      if (event instanceof MouseEvent && (event.metaKey || event.ctrlKey)) return;
      event.preventDefault();
      setCovering(true);
      window.setTimeout(() => {
        window.location.assign(link.href);
      }, 920);
    };
    links.forEach((link) => link.addEventListener("click", handle));
    return () => links.forEach((link) => link.removeEventListener("click", handle));
  }, []);

  return (
    <div
      className={`route-curtain${covering ? " is-covering" : ""}`}
      aria-hidden="true"
    >
      {Array.from({ length: 12 }, (_, index) => (
        <span key={index} style={{ "--bar": index } as React.CSSProperties} />
      ))}
    </div>
  );
}
