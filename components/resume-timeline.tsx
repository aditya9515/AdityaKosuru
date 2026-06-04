"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ResumeTimeline() {
  const data = [
    {
      title: "2023",
      content: (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="flex-1">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-1">
              <strong>Bachelor of Technology - Data Science</strong>
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Manipal Academy of Higher Education, Udupi
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              Expected Graduation: July 2027
            </p>

            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Specialization
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              Artificial Intelligence, Machine Learning, and Data Science
            </p>

            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Technical Skills
            </p>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc ml-5 mb-3 space-y-1">
              <li>AI agents with LangGraph, LangChain, Ollama, and local LLMs</li>
              <li>Hugging Face Transformers and generative AI workflows</li>
              <li>Machine learning, classification, prediction, and model evaluation</li>
              <li>Deep learning models including CNNs, RNNs, and Transformers</li>
              <li>Frontend and backend development with Next.js, TypeScript, FastAPI, Flask, and Flutter</li>
              <li>Database and cloud work with PostgreSQL, Firebase Auth, Firestore, Supabase, and Firebase Storage</li>
              <li>Programming languages: Python, C++, Java, Dart, TypeScript, and JavaScript</li>
            </ul>

            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Relevant Coursework
            </p>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc ml-5 space-y-1">
              <li>Graph Theory and Number Theory</li>
              <li>Calculus and Integration</li>
              <li>Bayesian Probability</li>
              <li>Machine Learning and Deep Learning</li>
              <li>Attention mechanisms and Transformer architectures</li>
              <li>Database Systems with SQL, Oracle, and PostgreSQL</li>
              <li>High-Performance Computing and CUDA</li>
              <li>Cloud Computing with Supabase and Firebase</li>
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>

          <div className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <img
              src="/mahe.png"
              alt="mahe"
              className="rounded-lg shadow-lg object-cover w-full h-full"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10 md:gap-13">
          <div className="flex-1 md:flex-[0_0_60%] max-w-full">
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Cancer Gateway App / ERAS Protocol App
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              Developed an interactive Flutter mobile application in collaboration with MAHE and KMC Hospital, Udupi, to connect cancer patients with assigned doctors and support smoother pre-operative and post-operative care. The app organizes communication, treatment tracking, follow-ups, patient vitals, medication reminders, diet notes, lifestyle information, and image uploads into a single patient-care workflow.
            </p>

            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
              <li>Built patient and doctor roles for treatment-plan management and care monitoring.</li>
              <li>Added calendar-style tracking for chemotherapy sessions, surgery dates, reviews, and follow-ups.</li>
              <li>Included emergency contact support so patients can reach medical staff quickly in critical situations.</li>
              <li>Collected patient context such as smoking, alcohol consumption, vitals, BMI, medications, dietary intake, and affected-area images.</li>
              <li>Implemented secure login for patients and medical staff using Firebase Authentication.</li>
              <li>Stored patient and care-plan data in Firebase Firestore for scalable real-time access.</li>
              <li>Used Flutter packages such as provider, image_picker, and flutter_local_notifications.</li>
            </ul>

            <p className="text-sm mt-3 text-neutral-500">
              Tools and Technologies: <strong>Flutter</strong>, <strong>Dart</strong>, <strong>Firebase Authentication</strong>, <strong>Firestore</strong>, <strong>Figma</strong>, <strong>Provider</strong>, <strong>Image Picker</strong>, and <strong>Local Notifications</strong>.
            </p>

            <p className="text-sm mt-1 text-neutral-500">
              Achievement: delivered a functional interactive application to KMC Hospital and won a Rs.20,000 cash prize.
            </p>

            <p className="text-sm mt-1 text-neutral-500">
              GitHub:{" "}
              <a
                href="https://github.com/aditya9515/CANCER_GATEWAY_APP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Cancer Gateway App
              </a>
            </p>
          </div>

          <div className="flex-shrink-0 w-40 md:w-60 mt-6 md:mt-0">
            <img
              src="/appathon.jpeg"
              alt="Cancer Gateway App screenshot"
              className="rounded-lg shadow-md object-cover w-full h-full rotate-[-90deg]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "April 2025",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Transformer Text Style Prediction
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built a character-level decoder-only Transformer for text-style learning. The model uses token embeddings, learned positional embeddings, masked multi-head self-attention, feed-forward blocks, residual connections, layer normalization, and next-token prediction. It trains on user-provided samples and generates text that attempts to mimic the learned writing style.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The project includes Python model code, backend training/generation flow, a simple HTML interface, screenshots, and a demo video link. It prioritizes conceptual clarity and local experimentation over large-scale optimization.
            </p>
            <a
              href="https://github.com/aditya9515/Transformer_Text_Style_Prediction"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View GitHub Repository
            </a>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
              MongoDB: The Complete Guide to NoSQL Database Development
            </h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Course by EDUCBA, completed April 5, 2025.
            </p>
            <a
              href="https://coursera.org/verify/M8CZSZNTEZ2C"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View Verification
            </a>
            <img
              src="/course3.png"
              alt="MongoDB Certificate"
              className="mt-3 rounded-lg border border-neutral-200 dark:border-neutral-800"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sept-Nov 2025",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              FinLit.ai
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Created a TypeScript financial-literacy app focused on dashboard workflows, AI-assistive finance features, user profiles, login/logout flows, menu navigation, upload screens, and mobile-style product exploration. The repo documents the app through screenshots for the AI feature, dashboard, home, login, profile, and upload screens.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Stack: TypeScript, Vite, frontend UI development, dashboard design, and AI-feature product exploration.
            </p>
            <a
              href="https://github.com/aditya9515/FinLit.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View FinLit.ai
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              ML-Filter
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Started a lightweight HTML-based experiment for custom filters generated from user descriptions. The project explores the idea of turning a natural-language style request into a personalized visual/filter output.
            </p>
            <a
              href="https://github.com/aditya9515/ML-Filter"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View ML-Filter
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "Oct 2025",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Natural Language Processing in TensorFlow - DeepLearning.AI
            </p>
            <a
              href="https://coursera.org/verify/DLIEV6JTYT7E"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 underline"
            >
              View Verification
            </a>
            <img
              src="/course2.png"
              alt="NLP TensorFlow Certificate"
              className="mt-3 rounded-lg border"
            />
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Generative AI with Large Language Models - DeepLearning.AI
            </p>
            <a
              href="https://coursera.org/verify/ZW7DNYU52LBQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 underline"
            >
              View Verification
            </a>
            <img
              src="/course1.png"
              alt="Generative AI with Large Language Models Certificate"
              className="mt-3 rounded-lg border"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan-Mar 2026",
      content: (
        <div className="space-y-4">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Mental Health Therapy AI Agent Ecosystem
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Built a backend-first AI support agent with FastAPI, Pydantic, LangGraph, LangChain, and Ollama. The API exposes an /ask endpoint that accepts a user message, invokes the agent, parses the tool call and final response, and returns a structured response to the frontend. The project uses local model workflows and has been developed around alibayram/medgemma:4b and Qwen2.5:7B.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Expanded the work into supporting repos: a Chroma vector database for mental-health PDFs/data, a frontend app surface, a landing page for project explanation and feedback, and agent UI experiments. The product direction includes retrieval-backed answers, local inference, frontend integration, emergency-contact workflow planning, model evaluation, future fine-tuning, and bounded safety behavior.
          </p>
          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <li>
              <a
                href="https://github.com/aditya9515/Mental-Health-Therapy-Agent"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mental Health Therapy Agent
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aditya9515/Mental_Health_chroma_database"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mental Health Chroma Database
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aditya9515/mha-frontend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mental Health Agent Frontend
              </a>
            </li>
            <li>
              <a
                href="https://github.com/aditya9515/MHA-landing-page"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline dark:text-blue-400"
              >
                Mental Health Agent Landing Page
              </a>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Mar-Apr 2026",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Deep Research Agent and All Agents UI
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Created a FastAPI research-agent API around a graph-based pipeline. The /run-agent endpoint initializes a state object with search mode, collected URLs, parsed pages, filtered pages, verified pages, summaries, final summary, errors, and URL prompts, then returns a final summary through a clean API contract. The companion All_agents_frontend repo renders an AI assistant UI for interacting with these agent workflows.
            </p>
            <a
              href="https://github.com/aditya9515/Deep_research_agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View Deep Research Agent
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              AI Map Colouring
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built an AI/CSP map-coloring system that turns region images into graph-coloring problems. The newer implementation uses OpenCV and NumPy to segment regions, dilate masks, infer adjacency, serialize adjacency to JSON, and solve the coloring with a backtracking algorithm using up to four colors. The related aiproject repo includes a MapColoringCSP solver with optional ML heuristics for choosing variables and color order.
            </p>
            <a
              href="https://github.com/aditya9515/AI_map_colouring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View AI Map Colouring
            </a>
          </div>
        </div>
      ),
    },
    {
      title: "April 2026",
      content: (
        <div className="space-y-4">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            ReliefOps AI - Smart Resource Allocation
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Built ReliefOps AI, a disaster-response coordination platform that converts messy NGO and field data into structured incidents, teams, volunteers, resources, and dispatch plans. The system combines AI-assisted intake with deterministic dispatch planning so operators can understand crisis inputs, review drafts, correct fields, and confirm operational records before anything is committed.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Graph 1 handles intake from CSVs, PDFs, images, notes, and mixed operational data. It extracts records, geocodes locations, flags duplicates, stores provenance, and presents editable drafts. Graph 2 handles single-case and batch dispatch planning, ranking cases globally, checking team/resource availability, enriching candidates with route ETA, and avoiding double-booking of scarce resources.
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Stack: Next.js dashboard, FastAPI backend, Firebase Auth, Firestore, Gemini, Gemma/Ollama fallback, Google Maps JavaScript, Geocoding API, Routes API, Pydantic models, vector indexing, duplicate detection, and human-in-the-loop graph workflows.
          </p>
          <a
            href="https://github.com/aditya9515/GDG"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            View GDG / ReliefOps AI Repository
          </a>
        </div>
      ),
    },
    {
      title: "May-Jun 2026",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Projecto Website + Billing Backend
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built a Next.js 16 and TypeScript website/backend for a desktop product called Projecto. The web app manages user accounts, Google and Apple sign-in, Dodo Payments checkout, billing portal access, Firestore subscription records, desktop auth token exchange, and Electron subscription verification for Windows, macOS, and Linux.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              The subscription backend handles Dodo webhooks, payment/subscription lifecycle events, effective Free/Pro plan checks, paid-through access rules, project archiving after downgrade, restoration after Pro renewal, and manual Pro overrides for support or testing. Desktop login uses short-lived callback codes and hashed rolling session tokens instead of exposing long-lived credentials in browser redirects.
            </p>
            <a
              href="https://github.com/aditya9515/projecto_frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View Projecto Website Backend
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              InspireWorks Plivo IVR Demo
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Created a Python and Flask IVR demo for Plivo. The app supports outbound call triggering, DTMF OTP authentication, wrong-OTP reprompting, language selection, second-level menu actions, audio playback, associate transfer, local demo flows, real-call mode, and Plivo XML responses for each voice step. A Vite frontend helps start demo calls and test the IVR routes.
            </p>
            <a
              href="https://github.com/aditya9515/plivo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View Plivo IVR Demo
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              App-Forge and Projecto Shell Repositories
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Initialized additional public project shells for future product work. The substantive public implementation currently lives in projecto_frontend, while App-Forge and the base Projecto repo are early-stage placeholders for future expansion.
            </p>
            <a
              href="https://github.com/aditya9515/App-Forge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View App-Forge
            </a>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Timeline data={data} />
    </div>
  );
}
