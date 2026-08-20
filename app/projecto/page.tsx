import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

const project = projects[0];

export const metadata: Metadata = {
  title: "Projecto — Developer OS | Aditya Kosuru",
  description: project.description,
  openGraph: {
    title: "Projecto — Developer OS",
    description: project.description,
    images: [{ url: project.image, alt: "Projecto local workspace launcher interface" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projecto — Developer OS",
    description: project.description,
    images: [project.image],
  },
};

export default function ProjectoPage() {
  return <ProjectDetail project={project} />;
}
