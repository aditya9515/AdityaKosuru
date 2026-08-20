import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

const project = projects[2];

export const metadata: Metadata = {
  title: "ReleafOps AI — Crisis Command | Aditya Kosuru",
  description: project.description,
  openGraph: {
    title: "ReleafOps AI — Crisis Command",
    description: project.description,
    images: [{ url: project.image, alt: "ReleafOps AI crisis operations command interface" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReleafOps AI — Crisis Command",
    description: project.description,
    images: [project.image],
  },
};

export default function ReleafOpsPage() {
  return <ProjectDetail project={project} />;
}
