import DefaultDemo from "@/components/contact";
import { Navbar } from "@/components/header-2";
import DemoOne from "@/components/hero";
import ProjectCardDemo from "@/components/project";
import ResumePage from "@/components/resume";
import { ResumeTimeline } from "@/components/resume-timeline";

export default function Home() {
  return (
    <> 
    <Navbar/>
    <section id="hero">
      <DemoOne />
    </section>

    <section id="about">
      <ResumeTimeline />
    </section>

    <section id="projects">
      <ProjectCardDemo />
    </section>

    <section id="resume">
      <ResumePage />
    </section>

    <section id="contact">
      <DefaultDemo />
    </section>

    </>
  )
}