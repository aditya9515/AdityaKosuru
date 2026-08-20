export const projects = [
  {
    number: "01",
    discipline: "Desktop & Full-Stack Product",
    year: "2026",
    title: ["Projecto", "Developer OS"],
    description:
      "A connected desktop and web workspace for managing developer projects, terminals, local runtimes, subscriptions, downloads, and updates from one place.",
    image: "/images/projecto.png",
    href: "/projecto",
    github: "https://github.com/aditya9515/Projecto",
    live: "https://projecto.adityakosuru.online/",
    stack: ["Electron", "React", "TypeScript", "Next.js", "Firebase", "Firestore"],
    reverse: false,
  },
  {
    number: "02",
    discipline: "AI Content Automation",
    year: "2026",
    title: ["Postify", "Activity to Story"],
    description:
      "A full-stack workflow that turns developer activity into ranked highlights and editable LinkedIn drafts, using protected serverless AI with validation and safety checks.",
    image: "/images/postify.png",
    href: "/postify",
    github: "https://github.com/aditya9515/postify",
    live: "https://postify.adityakosuru.online/",
    stack: ["React", "TypeScript", "Firebase", "Cloud Functions", "Vertex AI Gemini"],
    reverse: true,
  },
  {
    number: "03",
    discipline: "AI Crisis Operations",
    year: "2026",
    title: ["ReleafOps AI", "Crisis Command"],
    description:
      "An AI-powered disaster response platform that converts field reports into structured incidents, resources, teams, and human-reviewed dispatch plans.",
    image: "/images/releafops-ai.png",
    href: "/releafops",
    github: "https://github.com/aditya9515/GDG",
    live: "https://ngocal.adityakosuru.online/",
    stack: ["Next.js", "FastAPI", "Firebase", "Gemini", "Google Maps", "Cloud Run"],
    reverse: false,
  },
] as const;

export type Project = (typeof projects)[number];

export const additionalProjects = [
  {
    title: "Mental Therapy Agent",
    discipline: "Safety-aware local LLM workflow",
    year: "2024",
    stack: "FastAPI · Ollama · ChromaDB · RAG",
    href: "https://github.com/aditya9515/Mental-Health-Therapy-Agent",
  },
  {
    title: "AI Map Coloring",
    discipline: "Constraint-solving & computer vision",
    year: "2025",
    stack: "Python · CSP · OpenCV · NetworkX",
    href: "https://github.com/aditya9515/AI_map_colouring",
  },
  {
    title: "Stock Anomaly Engine",
    discipline: "Distributed financial analytics",
    year: "2026",
    stack: "Hadoop · Spark · PySpark · Isolation Forest",
    href: "https://github.com/aditya9515/Stock-Analysis",
  },
  {
    title: "Twitter Tweet Analytics",
    discipline: "Sentiment & network analysis at scale",
    year: "2026",
    stack: "PySpark · Spark NLP · GraphFrames · Plotly",
    href: "https://github.com/aditya9515/Twitter-tweet-analytics",
  },
] as const;

export const services = [
  {
    name: "AI Agents",
    description:
      "Agent workflows · RAG · Local LLMs · Safety checks · Human-in-the-loop systems",
    image: "/images/portrait.png",
    align: "left",
  },
  {
    name: "Full-Stack Systems",
    description: "React · Next.js · FastAPI · Firebase · REST APIs · Cloud deployment",
    image: projects[0].image,
    align: "right",
  },
  {
    name: "Data Engineering",
    description:
      "Spark · Hadoop · Hive · ETL pipelines · Distributed analytics · Visualization",
    image: projects[1].image,
    align: "indent",
  },
  {
    name: "Applied ML",
    description:
      "NLP · Anomaly detection · Computer vision · Vector search · LLM applications",
    image: projects[2].image,
    align: "right",
  },
] as const;

export const manifesto =
  "I like problems that cross boundaries: an AI workflow that still needs a trustworthy interface, a data pipeline that must explain its decisions, or a desktop tool that has to feel effortless. I work from system design to shipped product, keeping users, reliability, and measurable outcomes in the same conversation. The goal is simple: build intelligent software that is genuinely useful.";

export const certifications = [
  {
    title: "MongoDB Complete Guide",
    provider: "Coursera",
    year: "2025",
    credential: "M8CZSZNTEZ2C",
  },
  {
    title: "NLP in TensorFlow",
    provider: "Coursera",
    year: "2025",
    credential: "DLIEV6JTYT7E",
  },
  {
    title: "Generative AI with LLMs",
    provider: "Coursera",
    year: "2025",
    credential: "ZW7DNYU52LBQ",
  },
] as const;
