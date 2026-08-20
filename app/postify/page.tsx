import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

const project = projects[1];

export const metadata: Metadata = {
  title: "Postify — Activity to Story | Aditya Kosuru",
  description: project.description,
  openGraph: {
    title: "Postify — Activity to Story",
    description: project.description,
    images: [{ url: project.image, alt: "Postify publishing workspace interface" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Postify — Activity to Story",
    description: project.description,
    images: [project.image],
  },
};

export default function PostifyPage() {
  return <ProjectDetail project={project} />;
}
