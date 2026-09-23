import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

const project = projects[4];

export const metadata: Metadata = {
  title: "WarpForge — GPU Performance Engineering | Aditya Kosuru",
  description: project.description,
  openGraph: {
    title: "WarpForge — GPU Performance Engineering",
    description: project.description,
    images: [{ url: project.image, alt: "WarpForge temporary project artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "WarpForge — GPU Performance Engineering",
    description: project.description,
    images: [project.image],
  },
};

export default function WarpForgePage() {
  return <ProjectDetail project={project} />;
}
