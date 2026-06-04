import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Projecto Website + Billing Backend",
    description: `Projecto is a Next.js 16 and TypeScript web app that acts as the source of truth for a desktop project-workspace product. It handles user accounts, Google and Apple sign-in through Firebase Authentication, Dodo Payments checkout, the customer billing portal, Firestore subscription records, desktop auth token exchange, and Electron subscription verification across Windows, macOS, and Linux.

The backend is designed for real product entitlement logic. It processes Dodo subscription and payment webhooks, maps lifecycle events into Firestore, supports paid-through access after cancellation or failed renewal, reconciles Free/Pro project visibility, archives older projects when a user drops to the Free plan, and restores archived projects when Pro access returns. It also includes manual Pro overrides for support grants, internal testing, and temporary promotions.

The desktop auth flow uses short-lived single-use callback codes and hashed session tokens, so long-lived desktop credentials are never placed in browser redirect URLs. The repo also documents deployment paths for Firebase App Hosting and Vercel, required environment variables, webhook setup, and verification commands such as lint, typecheck, tests, and build.

Stack: Next.js App Router, TypeScript, Tailwind CSS 4, Firebase Authentication, Firebase Admin SDK, Firestore, Dodo Payments TypeScript SDK, Vitest, and Testing Library.

Latest public update: pushed June 2, 2026. The full GitHub link is available from the card action, and the related shell repo is listed in the timeline.`,
    imgSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/aditya9515/projecto_frontend",
  },
  {
    title: "ReliefOps AI - Smart Resource Allocation",
    description: `ReliefOps AI is a maps-first emergency coordination system built for NGOs, disaster-response teams, hospitals, and municipal command centers. The project converts messy operational inputs such as WhatsApp-style messages, CSV sheets, PDF reports, field notes, images, maps, and spreadsheets into structured incidents, teams, volunteers, resources, and dispatch plans.

The architecture separates AI understanding from operational truth. AI is used for extraction, reevaluation, warnings, and structured draft creation, while the backend owns resource stock arithmetic, team availability, route ETA, organization isolation, duplicate detection, final confirmation, and Firestore persistence. This keeps humans in control: operators review editable drafts, correct fields, reevaluate with prompts, and only commit records after confirmation.

Graph 1 handles source-to-record intake. It parses uploaded files or text, extracts incidents/teams/resources, geocodes locations, flags duplicates, stores source provenance, and presents a reviewable GraphRun before persistence. Graph 2 handles dispatch planning. It can run single-case planning or global batch planning across all open cases, ranking emergencies, checking scarce assets, enriching candidates with Routes API ETAs, and avoiding double-booking of teams or resources.

The system supports online and local/offline workflows. Online mode uses Firebase Auth, Firestore, Gemini, Google Geocoding, Google Routes, and Google Maps JavaScript. Local mode can fall back to memory storage, local Gemma through Ollama, heuristic extraction, approximate routes, and a local tactical map.

Stack: Next.js operator dashboard, FastAPI backend, Firebase Auth, Firestore, Gemini, Gemma/Ollama fallback, Google Maps, Geocoding API, Routes API, Pydantic models, repository abstraction, vector indexing, duplicate detection, and human-in-the-loop graph workflows.

Latest public update: created and pushed April 26, 2026. The GitHub repository is linked from the card action.`,
    imgSrc:
      "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/aditya9515/GDG",
  },
  {
    title: "InspireWorks Plivo IVR Demo",
    description: `A full-stack IVR demo for a Plivo technical assignment. The backend exposes voice routes for outbound call triggering, OTP authentication through DTMF input, wrong-OTP reprompting, language selection, second-level menu actions, audio playback, and associate transfer. It returns Plivo XML responses for each step in the voice flow.

The project supports both local demo mode and real-call mode. In local demo mode, the frontend generates test links for OTP prompt, wrong OTP, correct OTP, language menu, audio playback, and dial-associate flows without placing a real phone call. In real-call mode, the app uses a public HTTPS webhook tunnel so Plivo can reach the Flask backend and place outbound calls to E.164 receiver numbers.

Stack: Python, Flask, Plivo Python client, Plivo XML, DTMF menus, local tunneling, Vite frontend, and environment-driven demo/real-call switching.

Latest public update: created and pushed May 16, 2026. The GitHub repository is linked from the card action.`,
    imgSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/aditya9515/plivo",
  },
  {
    title: "Mental Health Therapy AI Agent",
    description: `A backend-first AI support agent for mental-health-adjacent conversations. The FastAPI server exposes an /ask endpoint that accepts a user message, invokes a LangGraph/LangChain agent, parses the tool call and final response, and returns both the generated answer and the tool selected by the agent. CORS is configured for local frontend development and a hosted frontend domain.

The project uses local model workflows through Ollama and LangChain, with current model work centered around alibayram/medgemma:4b and Qwen2.5:7B. The broader system includes a Chroma vector database repository for mental-health PDFs/data, a Next.js frontend repo, and a separate landing page repo for explaining the concept, collecting feedback, and preparing for launch.

The product direction is safety-aware: local inference, retrieval-backed mental-health resources, emergency-contact workflow planning, frontend integration, model evaluation, and future fine-tuning. The goal is not to replace professionals, but to build a supportive, bounded AI assistant that can guide users toward healthier next steps and escalate when needed.

Stack: FastAPI, Pydantic, LangGraph, LangChain, Ollama, local LLMs, ChromaDB/RAG support, Next.js frontend work, and landing-page feedback collection.

Latest public updates: backend pushed March 25, 2026; Chroma database and agent UI repos created March 2026. The main GitHub repository is linked from the card action, and related repos are linked in the timeline.`,
    imgSrc: "/ai_agent.png",
    link: "https://github.com/aditya9515/Mental-Health-Therapy-Agent",
  },
  {
    title: "Mental Health Agent Landing Page + Frontend",
    description: `A public-facing Next.js landing page and companion frontend surface for the Mental Health Therapy AI Agent. The landing page explains the project, presents the intended features, gives visitors a way to understand the support model, and creates a path for user feedback, supporter interest, and future launch planning.

The frontend repo extends the idea from concept into an application interface for interacting with the agent. Together, these repos show the product side of the AI agent system: not just the model/backend, but also the user-facing communication layer, onboarding direction, visual identity, and deployment workflow.

Stack: Next.js, TypeScript, Tailwind CSS, reusable UI components, Vercel-oriented deployment, and frontend integration planning.

Latest public update: landing page pushed February 12, 2026; app frontend pushed February 5, 2026. The landing page repository is linked from the card action, and the frontend repo is linked in the timeline.`,
    imgSrc: "/MHAL.png",
    link: "https://github.com/aditya9515/MHA-landing-page",
    linkText: "View Landing Repo",
  },
  {
    title: "AI Map Colouring",
    description: `AI Map Colouring turns map/region inputs into a constraint-satisfaction graph coloring problem. The newer implementation uses OpenCV to process images, segment regions, dilate region masks, detect which labeled regions touch each other, and convert the resulting adjacency graph into JSON-safe data. A backtracking coloring solver then assigns up to four colors while ensuring neighboring regions never share the same color.

The project includes backend logic for graph building, rendering, validation, and coloring, plus a frontend folder and Docker setup for running the system as an app. It connects classic AI/CSP theory to a visual task: taking a map-like input, inferring graph structure, solving the coloring constraints, and producing a valid colored output.

Related earlier work in aiproject includes a MapColoringCSP solver with optional ML heuristics for variable selection and color ordering. That version loads graph data, applies backtracking, and can use a trained heuristic model to guide the CSP search.

Stack: Python, OpenCV, NumPy, backtracking CSP, graph adjacency construction, Docker, Vite frontend, and optional ML heuristic work.

Latest public update: AI_map_colouring pushed April 5, 2026. The main GitHub repository is linked from the card action, and the related CSP repo is linked in the timeline.`,
    imgSrc:
      "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
    link: "https://github.com/aditya9515/AI_map_colouring",
  },
  {
    title: "Deep Research Agent + All Agents UI",
    description: `Deep Research Agent is a FastAPI service wrapped around a graph-based research pipeline. The /run-agent endpoint accepts a query and invokes a graph app with state fields for search mode, collected URLs, parsed pages, filtered pages, verified pages, intermediate summaries, final summary, errors, and URL prompts. This makes the agent pipeline easier to inspect, extend, and connect to a frontend.

All_agents_frontend is the companion Next.js interface that renders an AI assistant UI for interacting with agent workflows. The related common-agent repos form a shared base for multi-agent experimentation: a host API, agent-structure pipeline, reusable frontend shell, and room to plug in different specialist agents.

The project is useful as a research/agent orchestration layer: collect sources, parse content, filter relevance, verify information, summarize findings, track failures, and return a final response through an API contract.

Stack: Python, FastAPI, Pydantic, graph-based agent pipeline, CORS-enabled API service, Next.js, TypeScript, and reusable AI assistant UI components.

Latest public update: agent and frontend repos pushed March 23, 2026. The main GitHub repository is linked from the card action, and the frontend repo is linked in the timeline.`,
    imgSrc:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop",
    link: "https://github.com/aditya9515/Deep_research_agent",
  },
  {
    title: "Transformer Text Style Prediction",
    description: `A character-level decoder-only Transformer language model inspired by Attention Is All You Need. The implementation uses token embeddings, learned positional embeddings, causal self-attention Transformer blocks, multi-head masked attention, feed-forward layers, residual connections, layer normalization, and a language-modeling head optimized with cross-entropy loss for next-token prediction.

The project focuses on text-style learning: users provide sample text, the model trains on that style, and the interface generates new text that attempts to mimic the learned writing pattern. It intentionally keeps the architecture educational and local, using character-level sequences instead of subword tokenization and learned positional embeddings instead of sinusoidal encodings.

The repo includes a simple web interface, backend training/generation logic, model code, context/input files, README screenshots, and a demo video link.

Stack: Python, custom Transformer model, causal masking, autoregressive generation, Flask-style backend flow, and a simple HTML frontend.

Latest public update: pushed April 13, 2025. The GitHub repository is linked from the card action.`,
    imgSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop",
    link: "https://github.com/aditya9515/Transformer_Text_Style_Prediction?tab=readme-ov-file",
  },
  {
    title: "Cancer Gateway App / ERAS Protocol App",
    description: `A Flutter mobile app built with MAHE and KMC Hospital, Udupi, to support cancer patients before and after surgery. The app helps patients and assigned doctors communicate in a more organized way across pre-operative preparation, post-operative care, chemotherapy sessions, surgery dates, follow-ups, vitals, lifestyle inputs, diet tracking, medication reminders, and image uploads from affected areas.

The app includes patient and doctor roles, Firebase Authentication, Firestore-backed data storage, treatment-plan management, emergency contact support, and calendar-style care tracking. Doctors can monitor patient progress while patients get a clearer care pathway across appointments and recovery steps.

The project was delivered as a functional interactive application and won a Rs.20,000 cash prize.

Stack: Flutter, Dart, Firebase Authentication, Firebase Firestore, Figma prototyping, provider state management, image_picker, and flutter_local_notifications.

Latest public update: pushed February 11, 2025. The GitHub repository is linked from the card action.`,
    imgSrc: "/appathon.jpeg",
    link: "https://github.com/aditya9515/CANCER_GATEWAY_APP",
  },
  {
    title: "FinLit.ai",
    description: `FinLit.ai is a TypeScript financial-literacy app focused on helping users understand and manage finance-related workflows through a modern mobile-style interface. The repo includes screens for home, dashboard, AI feature, login/logout, profile, menu, upload, and user-persona views, showing both product flow and interface exploration.

The project demonstrates frontend product building around financial education: dashboard structure, AI-assistive feature direction, user profile flows, document/upload interaction, and a Vite-based development setup.

Stack: TypeScript, Vite, frontend UI implementation, screenshot-driven app documentation, dashboard and AI feature screens.

Latest public update: created and pushed September 10, 2025. The GitHub repository is linked from the card action.`,
    imgSrc:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2026&auto=format&fit=crop",
    link: "https://github.com/aditya9515/FinLit.ai",
  },
];

export default function ProjectCardDemo() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-16 gap-10">
      <h1 className="text-4xl font-semibold tracking-tight">My projects</h1>
      <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
