"use client";

import { useState } from "react";
import { Header } from "./header/Header";
import { Hero } from "./hero/Hero";
import { About } from "./sections/About";
import { FeaturedWork } from "./sections/FeaturedWork";
import { Manifesto } from "./sections/Manifesto";
import { Services } from "./sections/Services";
import { MoreWork } from "./sections/MoreWork";
import { Background } from "./sections/Background";
import { Footer } from "./sections/Footer";
import { Loader } from "./motion/Loader";
import { CustomCursor } from "./motion/CustomCursor";
import { RouteCurtain } from "./motion/RouteCurtain";
import { usePageMotion } from "@/hooks/usePageMotion";

export function Portfolio() {
  const [ready, setReady] = useState(false);
  usePageMotion(ready);

  return (
    <>
      <Loader onComplete={() => setReady(true)} />
      <RouteCurtain />
      <CustomCursor />
      <div className={`page-shell${ready ? " is-ready" : ""}`}>
        <Header />
        <main>
          <Hero />
          <About />
          <FeaturedWork />
          <MoreWork />
          <Manifesto />
          <Background />
          <Services />
        </main>
        <Footer />
      </div>
    </>
  );
}
