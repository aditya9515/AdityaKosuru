import { ProjectDetail } from "@/components/ProjectDetail";
import { projects } from "@/lib/content";

export default function ReleafOpsPage() {
  return <ProjectDetail project={projects[2]} />;
}
