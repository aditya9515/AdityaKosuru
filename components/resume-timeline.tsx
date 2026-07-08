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
              Focus Areas
            </p>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc ml-5 mb-3 space-y-1">
              <li>AI agents, LLM applications, and human-in-the-loop workflows</li>
              <li>Full-stack development with React, Next.js, FastAPI, and Firebase</li>
              <li>Big data analytics with Spark, Hadoop, Hive, Pig, HBase, and PySpark</li>
              <li>Machine learning, deep learning, NLP, data visualization, and ETL pipelines</li>
            </ul>

            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Core Skills
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Python, TypeScript, JavaScript, SQL, Java, C++, React, Next.js, Electron, FastAPI, Firebase, Firestore, Docker, Git, GitHub, Vertex AI, Gemini API, and Google Cloud.
            </p>
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
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Mental Therapy Agent
          </p>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Built a safety-aware AI wellness assistant using FastAPI, LangGraph-style orchestration, Ollama, local LLM inference, ChromaDB, vector search, intent detection, emotion classification, safety checks, risk classification, and escalation logic.
          </p>
          <a
            href="https://github.com/aditya9515/Mental-Health-Therapy-Agent"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-600 hover:underline dark:text-blue-400"
          >
            View GitHub Repository
          </a>
        </div>
      ),
    },
    {
      title: "2025",
      content: (
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              AI Map Coloring / Dynamic Mapper
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built a CSP-based map coloring system using backtracking, MRV, LCV, Forward Checking, AC-3, OpenCV image processing, connected-component detection, adjacency graph construction, Streamlit UI, and solver benchmarking.
            </p>
            <a
              href="https://github.com/aditya9515/AI_map_colouring"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline dark:text-blue-400"
            >
              View GitHub Repository
            </a>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Certifications
            </p>
            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
              <li>
                MongoDB: The Complete Guide to NoSQL Database Development -{" "}
                <a
                  href="https://coursera.org/verify/M8CZSZNTEZ2C"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  verification
                </a>
              </li>
              <li>
                Natural Language Processing in TensorFlow -{" "}
                <a
                  href="https://coursera.org/verify/DLIEV6JTYT7E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  verification
                </a>
              </li>
              <li>
                Generative AI with Large Language Models -{" "}
                <a
                  href="https://coursera.org/verify/ZW7DNYU52LBQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline dark:text-blue-400"
                >
                  verification
                </a>
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "2026",
      content: (
        <div className="space-y-5">
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Projecto - Developer Project Manager
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built an Electron, React, and TypeScript desktop app with a connected Next.js and Firebase web platform for project launch commands, runtime state, authentication, subscriptions, billing, downloads, and desktop update checks.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/aditya9515/Projecto" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                GitHub
              </a>
              <a href="https://projecto.adityakosuru.online/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Live Website
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Postify - Developer Activity Automation
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built a React, TypeScript, Firebase, Firestore, Cloud Functions, and Vertex AI Gemini platform that turns developer activity into ranked work highlights and editable LinkedIn draft variants.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/aditya9515/postify" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                GitHub
              </a>
              <a href="https://postify.adityakosuru.online/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Live Website
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              ReleafOps AI - NGO Crisis Management Platform
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built a Next.js, FastAPI, Firebase, Firestore, Gemini, Google Maps, and Cloud Run platform for AI-assisted incident intake, resource tracking, route-aware dispatch planning, and human-in-the-loop review.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/aditya9515/GDG" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                GitHub
              </a>
              <a href="https://ngocal.adityakosuru.online/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Live Website
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
              Stock Analysis and Twitter Tweet Analytics
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Built big data analytics pipelines using Hadoop, Spark, HDFS, Hive, Pig, HBase, Docker, PySpark, Spark NLP, Dash, Plotly, Cytoscape, ETL workflows, anomaly detection, and graph analytics.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/aditya9515/Stock-Analysis" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Stock Analysis
              </a>
              <a href="https://github.com/aditya9515/Twitter-tweet-analytics" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                Twitter Analytics
              </a>
            </div>
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
