"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ResumeTimeline() {
  const data = [
    {
      title: "2027 (Expected)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-2">
            <strong>Bachelor of Science – Data Science</strong>
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Manipal Academy of Higher Education, Udupi
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            CGPA: 7.7 · Expected Graduation: July 2027
          </p>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium mb-2">
            🏆 APP-A-THON 2024 Hackathon — Winner
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
            Designed and developed a mobile application to support cancer
            patients during pre- and post-surgery stages.
          </p>

          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <li>OTP-based authentication system</li>
            <li>Weekly health tracking (weight, blood sugar, etc.)</li>
            <li>Pre-surgery dynamic checklist</li>
            <li>Image & video uploads by patients</li>
            <li>Separate dashboards for doctors and patients</li>
          </ul>

          <p className="text-sm mt-3 text-neutral-500">
            GitHub: Cancer Gateway App
          </p>
        </div>
      ),
    },

    {
      title: "Jan 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium mb-2">
            Detect Credit Card Defaulters
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
            Built a machine learning model to predict credit card defaulters.
          </p>

          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <li>Achieved F1-score of 0.81</li>
            <li>Used Decision Trees with hyperparameter tuning</li>
            <li>Applied PCA and correlation-based feature filtering</li>
            <li>Tech stack: Pandas, NumPy, SciPy, Scikit-learn</li>
          </ul>
        </div>
      ),
    },

    {
      title: "2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm font-medium mb-2">
            Transformer Text Style Prediction
          </p>

          <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
            Built a decoder-only Transformer model to detect and generate
            Shakespearean writing style.
          </p>

          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <li>Custom self-attention implementation</li>
            <li>Causal masking for autoregressive training</li>
            <li>Residual connections and dropout layers</li>
            <li>Multi-head attention architecture</li>
            <li>ChatGPT-like training pipeline (early stage)</li>
          </ul>

          <p className="text-sm mt-3 text-neutral-500">
            Tech: Python, TensorFlow, Transformers
          </p>
        </div>
      ),
    },

    {
      title: "Certifications",
      content: (
        <div>
          <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-2">
            <li>Machine Learning — Andrew Ng (Coursera)</li>
            <li>Deep Learning Specialization (Coursera)</li>
            <li>SQL for Data Science (Coursera)</li>
          </ul>
        </div>
      ),
    },

    {
      title: "Skills",
      content: (
        <div>
          <div className="text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
            <p><strong>Languages:</strong> Python, Java, C++, SQL</p>
            <p><strong>ML & AI:</strong> Transformers, CNN, RNN, Hugging Face</p>
            <p><strong>Backend:</strong> PostgreSQL, Firebase, Supabase</p>
            <p><strong>Concepts:</strong> DSA, OOP, Probability, Graph Theory</p>
            <p><strong>Cloud & Compute:</strong> CUDA, HPC, Cloud Computing</p>
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
