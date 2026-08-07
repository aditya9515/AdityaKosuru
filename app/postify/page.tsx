import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

export default function PostifyPage() {
  return <ProjectDetail project={projects[1]} />;
}
