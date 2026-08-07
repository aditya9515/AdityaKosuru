import { manifesto } from "@/lib/content";

export function Manifesto() {
  return (
    <section className="manifesto site-container" data-manifesto>
      <p aria-label={manifesto}>
        <span aria-hidden="true">
          {manifesto.split(" ").map((word, index) => (
            <span className="manifesto-word" key={`${word}-${index}`}>
              {word}{" "}
            </span>
          ))}
        </span>
      </p>
    </section>
  );
}
