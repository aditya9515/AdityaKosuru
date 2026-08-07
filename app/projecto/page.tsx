import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

export default function ProjectoPage() {
  return <ProjectDetail project={projects[0]} />;
}
