import type { Metadata } from "next";
import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

const project = projects[3];

export const metadata: Metadata = {
  title: "RiskFlow — Payment Risk & ML | Aditya Kosuru",
  description: project.description,
  openGraph: {
    title: "RiskFlow — Payment Risk & ML",
    description: project.description,
    images: [{ url: project.image, alt: "RiskFlow temporary project artwork" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RiskFlow — Payment Risk & ML",
    description: project.description,
    images: [project.image],
  },
};

export default function RiskFlowPage() {
  return <ProjectDetail project={project} />;
}
