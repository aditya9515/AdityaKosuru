
import { ProjectCard } from "./project-card";


export default function ProjectCardDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-16 gap-10">
      <h1 className="text-4xl font-semibold tracking-tight">
            My projects
      </h1>
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard
          title="Metal Health Therapy AI Agent"
          description=""
          imgSrc="/ai_agent.png"
          link="https://github.com/aditya9515/Mental-Health-Therapy-Agent"
        />
        <ProjectCard
          title="Landing page form my Metal Health Therapy AI Agent"
          description="A dreamy mobile app prototype designed for mindfulness and relaxation, featuring calming animations and a serene user interface."
          imgSrc="/MHAL.png"
          link="https://github.com/aditya9515/MHA-landing-page"
          linkText="Explore Concept"
        />
        <ProjectCard
          title="Transformer_Text_Style_Prediction"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/Transformer_Text_Style_Prediction?tab=readme-ov-file"
        />
        <ProjectCard
          title="CANCER_GATEWAY_APP"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/CANCER_GATEWAY_APP"
        />  
        <ProjectCard
          title="meteorite-landings"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/meteorite-landings"
        /> 
        <ProjectCard
          title="hunting-exo-planets"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/hunting-exo-planets"
        /> 
        <ProjectCard
          title="Air_quality_analysis"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/Air_quality_analysis"
        /> 
      </div>
    </div>
  );
}