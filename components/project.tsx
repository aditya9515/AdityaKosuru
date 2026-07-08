import { ProjectCard } from "./project-card";

const projectImage = "/project-placeholder.svg";

const projects = [
  {
    title: "Projecto - Developer Project Manager",
    description: `Desktop and web platform for managing developer projects from one workspace.

Built an Electron, React, and TypeScript desktop app to manage project folders, launch commands, terminal processes, runtime states, and local app URLs.

Built the connected web platform with Next.js, Firebase App Hosting, Firestore, REST APIs, authentication, Dodo Payments subscriptions, billing flows, download pages, and desktop update checks.

Keywords: Electron, React, TypeScript, Next.js, Firebase, Firestore, REST APIs, Dodo Payments, GitHub Releases, Squirrel.Windows, SHA-256 validation.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/Projecto",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/Projecto" },
      { label: "Live", href: "https://projecto.adityakosuru.online/" },
    ],
  },
  {
    title: "Postify - Developer Activity Automation",
    description: `Full-stack platform that turns developer work into structured content highlights.

Built a React, TypeScript, Firebase Authentication, Firestore, and Cloud Functions app to collect Codex, GitHub, and manual activity, rank useful work items, and generate editable LinkedIn draft variants.

Used Vertex AI Gemini through backend-side serverless functions with schema validation, safety checks, and protected API keys.

Keywords: React, TypeScript, Firebase Auth, Firestore, Cloud Functions, Vertex AI Gemini, content automation, LinkedIn drafts.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/postify",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/postify" },
      { label: "Live", href: "https://postify.adityakosuru.online/" },
    ],
  },
  {
    title: "ReleafOps AI - NGO Crisis Management",
    description: `AI-powered disaster response platform for NGOs and emergency teams.

Built a full-stack app with Next.js, TypeScript, FastAPI, Firebase Authentication, Firestore, Gemini, Google Maps APIs, and Cloud Run. The platform ingests CSV, PDF, image, and text reports and converts them into incidents, teams, volunteers, resources, and dispatch plans.

Designed human-in-the-loop workflows for preview, edit, reevaluation, confirmation, provenance, audit trails, resource-aware matching, route ETA, and organization-scoped access.

Keywords: Next.js, FastAPI, Firebase, Firestore, Gemini API, Google Maps, Cloud Run, AI agents, dispatch planning, human-in-the-loop.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/GDG",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/GDG" },
      { label: "Live", href: "https://ngocal.adityakosuru.online/" },
    ],
  },
  {
    title: "Mental Therapy Agent",
    description: `Safety-aware AI wellness assistant built around local LLM workflows.

Built a FastAPI and LangGraph-style agent pipeline that routes user messages through intent detection, safety checks, emotion classification, RAG retrieval, and response generation.

Used Ollama, local LLM inference, ChromaDB, vector search, structured JSON outputs, conditional routing, risk classification, escalation logic, and conversation state management.

Keywords: FastAPI, LangGraph, Ollama, local LLMs, ChromaDB, RAG, vector search, safety checks, emotion classification, escalation logic.`,
    imgSrc: "/ai_agent.png",
    link: "https://github.com/aditya9515/Mental-Health-Therapy-Agent",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/Mental-Health-Therapy-Agent" },
    ],
  },
  {
    title: "AI Map Coloring / Dynamic Mapper",
    description: `Classical AI system for graph and map coloring problems.

Built a CSP solver with backtracking search, MRV, LCV, Forward Checking, and AC-3. Added benchmarking for execution time, memory usage, nodes explored, backtracks, inference calls, and pruning efficiency.

Extended the work with OpenCV image processing, connected-component detection, adjacency graph construction, and API-based rendering to color uploaded map images automatically.

Keywords: Python, CSP, backtracking, MRV, LCV, Forward Checking, AC-3, OpenCV, NetworkX, Streamlit, benchmarking.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/AI_map_colouring",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/AI_map_colouring" },
    ],
  },
  {
    title: "Stock Analysis - Big Data Anomaly Engine",
    description: `Distributed stock analytics platform for Indian market data.

Built ETL pipelines for OHLCV price ingestion, RSS news parsing, Reddit sentiment extraction, deduplication, normalization, and ticker-level joins across multiple financial data sources.

Implemented anomaly detection with Isolation Forest, sentiment correlation, rolling momentum, sector analysis, and price-volume features to explain unusual stock movements.

Keywords: Hadoop, Spark, HDFS, Hive, Pig, HBase, Docker, PySpark, Streamlit, ETL, Isolation Forest, sentiment analysis, Indian stock market.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/Stock-Analysis",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/Stock-Analysis" },
    ],
  },
  {
    title: "Twitter Tweet Analytics",
    description: `Big data tweet analytics pipeline for sentiment and hashtag-network analysis.

Built a PySpark pipeline to process about 1.6M tweets using batch processing, optional file-based streaming, Spark NLP sentiment analysis, hashtag extraction, and graph analytics.

Generated vertices, weighted edges, degree centrality, dominant sentiment, and auto-refresh dashboard views using Dash, Plotly, Cytoscape, and JSON outputs.

Keywords: PySpark, Spark NLP, GraphFrames, Dash, Plotly, Cytoscape, batch processing, streaming simulation, sentiment analysis, graph analytics.`,
    imgSrc: projectImage,
    link: "https://github.com/aditya9515/Twitter-tweet-analytics",
    links: [
      { label: "GitHub", href: "https://github.com/aditya9515/Twitter-tweet-analytics" },
    ],
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
