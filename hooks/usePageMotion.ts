"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

export function usePageMotion(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    gsap.registerPlugin(ScrollTrigger);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const splits: SplitType[] = [];
    let lenis: Lenis | null = null;
    let raf: ((time: number) => void) | null = null;

    if (!reduced) {
      lenis = new Lenis({
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1,
        syncTouch: false,
      });
      raf = (time: number) => lenis?.raf(time * 1000);
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
    }

    const lockHandler = (event: Event) => {
      const locked = (event as CustomEvent<boolean>).detail;
      if (locked) lenis?.stop();
      else lenis?.start();
      document.body.classList.toggle("scroll-locked", locked);
    };
    window.addEventListener("portfolio:scroll-lock", lockHandler);

    const anchorHandler = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor || !anchor.hash) return;
      const target = document.querySelector<HTMLElement>(anchor.hash);
      if (!target) return;
      event.preventDefault();
      document.body.classList.remove("scroll-locked");
      if (lenis) {
        lenis.start();
        lenis.scrollTo(target, {
          duration: 1.2,
          offset:
            anchor.hash === "#contact"
              ? 0
              : window.innerWidth < 832
                ? -76
                : -96,
        });
      }
      else target.scrollIntoView();
    };
    document.addEventListener("click", anchorHandler);

    const context = gsap.context(() => {
      if (!reduced) {
        gsap.fromTo(
          "[data-portrait]",
          { clipPath: "inset(50% 0 50% 0)", scale: 1.05 },
          {
            clipPath: "inset(0% 0 0% 0)",
            scale: 1,
            duration: 1.2,
            ease: "power4.out",
          },
        );
        gsap.fromTo(
          ".marquee-row",
          { clipPath: "inset(0 0 100% 0)" },
          {
            clipPath: "inset(0 0 0% 0)",
            duration: 1,
            stagger: 0.08,
            ease: "power4.out",
          },
        );
        gsap.fromTo(
          ".hero-meta, .header-inner > *",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.06, ease: "power4.out" },
        );
      }

      document.querySelectorAll<HTMLElement>("[data-lines]").forEach((element) => {
        const split = new SplitType(element, { types: "lines" });
        splits.push(split);
        const lines = split.lines ?? [];
        lines.forEach((line) => line.classList.add("split-line"));
        if (reduced) return;
        gsap.from(lines, {
          yPercent: 110,
          duration: 1.1,
          stagger: 0.06,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 85%", once: true },
        });
      });

      const scramble = document.querySelector<HTMLElement>("[data-scramble]");
      if (scramble && !reduced) {
        const original = scramble.dataset.scramble ?? "ABOUT";
        const glyphs = "023689ABOT";
        ScrollTrigger.create({
          trigger: scramble,
          start: "top 82%",
          once: true,
          onEnter: () => {
            let frame = 0;
            const timer = window.setInterval(() => {
              const settled = Math.floor(frame / 3);
              scramble.textContent = original
                .split("")
                .map((letter, index) =>
                  index < settled
                    ? letter
                    : glyphs[Math.floor(Math.random() * glyphs.length)],
                )
                .join("");
              frame += 1;
              if (settled >= original.length) {
                scramble.textContent = original;
                window.clearInterval(timer);
              }
            }, 70);
          },
        });
      }

      const firstProject = document.querySelector("[data-project]");
      const stage = document.querySelector("[data-featured-stage]");
      if (firstProject && stage && !reduced) {
        gsap.to(stage, {
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: firstProject,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
          },
        });
      }

      document.querySelectorAll<HTMLElement>("[data-project]").forEach((project) => {
        if (!reduced) {
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: project,
              start: "top 76%",
              once: true,
            },
          });
          timeline
            .from(project.querySelector("[data-project-meta]"), {
              y: 18,
              opacity: 0,
              duration: 0.75,
              ease: "power4.out",
            })
            .from(
              project.querySelectorAll("[data-project-title]"),
              { yPercent: 105, duration: 1.25, stagger: 0.12, ease: "power4.out" },
              0.18,
            )
            .from(
              project.querySelector("[data-project-copy]"),
              { y: 22, opacity: 0, duration: 0.9, ease: "power4.out" },
              0.5,
            );

          const image = project.querySelector("[data-parallax-image]");
          if (image) {
            gsap.fromTo(
              image,
              { yPercent: -5, scale: 1.1 },
              {
                yPercent: 5,
                ease: "none",
                scrollTrigger: {
                  trigger: project,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: true,
                },
              },
            );
          }
        }
      });

      const manifesto = document.querySelector<HTMLElement>("[data-manifesto]");
      const words = gsap.utils.toArray<HTMLElement>(".manifesto-word");
      if (manifesto && words.length) {
        if (reduced) {
          gsap.set(words, { opacity: 1 });
        } else {
          ScrollTrigger.create({
            trigger: manifesto,
            start: "top 82%",
            end: "bottom 38%",
            scrub: true,
            onUpdate: ({ progress }) => {
              const active = progress * words.length;
              words.forEach((word, index) => {
                const opacity = Math.max(0.1, Math.min(1, active - index + 0.1));
                word.style.opacity = String(opacity);
              });
            },
          });
        }
      }

      if (!reduced) {
        gsap.from("[data-service-row]", {
          x: (index) => (index % 2 === 0 ? -80 : 80),
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".services-list",
            start: "top 80%",
            once: true,
          },
        });

        const footer = document.querySelector("[data-footer]");
        if (footer) {
          const header = document.querySelector(".site-header");
          ScrollTrigger.create({
            trigger: footer,
            start: "top 8%",
            end: "bottom top",
            onEnter: () => header?.classList.add("on-dark"),
            onEnterBack: () => header?.classList.add("on-dark"),
            onLeave: () => header?.classList.remove("on-dark"),
            onLeaveBack: () => header?.classList.remove("on-dark"),
          });
          const footerTimeline = gsap.timeline({
            scrollTrigger: { trigger: footer, start: "top 72%", once: true },
          });
          footerTimeline
            .fromTo(
              "[data-footer-item]",
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.1,
                ease: "expo.out",
                immediateRender: false,
                clearProps: "transform,opacity",
              },
            )
            .from(
              "[data-footer-title]",
              { yPercent: 105, duration: 0.9, ease: "expo.out" },
              0.1,
            )
            .fromTo(
              "[data-footer-divider]",
              { scaleX: 0 },
              { scaleX: 1, duration: 1, ease: "expo.out" },
              0.3,
            );
        }
      }
    });

    ScrollTrigger.refresh();
    return () => {
      context.revert();
      splits.forEach((split) => split.revert());
      window.removeEventListener("portfolio:scroll-lock", lockHandler);
      document.removeEventListener("click", anchorHandler);
      document.body.classList.remove("scroll-locked");
      if (raf) gsap.ticker.remove(raf);
      lenis?.destroy();
    };
  }, [ready]);
}
