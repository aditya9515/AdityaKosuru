
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
          description={`This is a mental health AI agent designed to provide support to individuals
          in need. It is built using LangChain for agent orchestration and prompt engineering, FastAPI to expose the backend endpoints, Twilio for emergency contact functionality, and Ollama to run models locally on the device.
          
          The current models in use are alibayram/medgemma:4b and Qwen2.5:7B. 
          Future plans include fine-tuning the models, developing a frontend, and adding new features based on user feedback collected through the landing page. The web application will be launched after securing a suitable investor.`}
          imgSrc="/ai_agent.png"
          link="https://github.com/aditya9515/Mental-Health-Therapy-Agent"
        />
        <ProjectCard
          title="Landing page form my Metal Health Therapy AI Agent"
          description={`this is the landing page for my Mental Health Therapy AI Agent project. It provides information about the project, its features, and how to get involved or support the development.`}
          imgSrc="/MHAL.png"
          link="https://github.com/aditya9515/MHA-landing-page"
          linkText="Explore Concept"
        />
        <ProjectCard
          title="Transformer_Text_Style_Prediction"
          description={`This system implements a decoder-only Transformer language model inspired by Attention Is All You Need. The architecture consists of token embeddings, learned positional embeddings, and a stack of causal self-attention Transformer blocks. Each block contains multi-head masked self-attention, a position-wise feed-forward network, residual connections, and Layer Normalization. Causal masking is enforced using a lower-triangular attention mask to prevent information leakage from future tokens.

The attention mechanism follows scaled dot-product attention, where queries, keys, and values are linearly projected from the embedding space. Multiple attention heads operate in parallel and are concatenated before a projection back to the model dimension. The output is passed through a linear language modeling head and optimized using cross-entropy loss for next-token prediction.

The model is trained autoregressively on character-level input sequences, deviating from the original paper which uses subword tokenization. Positional encodings are learned embeddings rather than sinusoidal. The architecture omits an encoder stack, cross-attention layers, label smoothing, and learning rate warmup, making it simpler than the original Transformer. Dropout is configurable but currently disabled.

Input and Output

Input: A sequence of character indices with a fixed context window (block_size).
Output: Logits over the character vocabulary and generated text via probabilistic sampling.

This implementation prioritizes conceptual clarity and local inference over scale and optimization fidelity.`}
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/Transformer_Text_Style_Prediction?tab=readme-ov-file"
        />
        <ProjectCard
          title="CANCER_GATEWAY_APP"
          description="this the same ap explained in the about"
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/CANCER_GATEWAY_APP"
        />  
        {/* <ProjectCard
          title="hunting-exo-planets"
          description={``}
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/hunting-exo-planets"
        /> 
        <ProjectCard
          title="Air_quality_analysis"
          description="A data visualization tool for quantum computing experiments, providing real-time insights and complex data analysis."
          imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
          link="https://github.com/aditya9515/Air_quality_analysis"
        />  */}
      </div>
    </div>
  );
}