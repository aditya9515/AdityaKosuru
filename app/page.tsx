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
    <DemoOne/>
    <ResumeTimeline/>
    <ProjectCardDemo/>
    <ResumePage/>
    <DefaultDemo/>
    </>
  )
}