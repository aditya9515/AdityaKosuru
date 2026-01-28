"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ResumeTimeline() {
  const data = [
    {
      title: "2023",
      content: (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
          {/* Left: Text Content */}
          <div className="flex-1">
            {/* Degree */}
            <p className="text-neutral-800 dark:text-neutral-200 text-sm mb-1">
              <strong>Bachelor of Science – Data Science</strong>
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm">
              Manipal Academy of Higher Education, Udupi
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              · Expected Graduation: July 2027
            </p>

            {/* Specialization */}
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Specialization
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              Artificial Intelligence, Machine Learning, and Data Science
            </p>

            {/* Technical Skills */}
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Technical Skills
            </p>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc ml-5 mb-3 space-y-1">
              <li>Hugging Face (Transformers)</li>
              <li>Data Analysis (Classification, Prediction)</li>
              <li>Deep Learning Models (CNN, RNN, Transformers)</li>
              <li>Frontend & Backend Development</li>
              <li>Database Management (PostgreSQL)</li>
              <li>Programming Languages: C++, Python, Java</li>
            </ul>

            {/* Coursework */}
            <p className="text-neutral-800 dark:text-neutral-200 text-sm font-semibold mb-1">
              Relevant Coursework
            </p>
            <ul className="text-neutral-600 dark:text-neutral-400 text-sm list-disc ml-5 space-y-1">
              <li>Graph Theory</li>
              <li>Number Theory</li>
              <li>Calculus and Integration</li>
              <li>Bayesian Probability</li>
              <li>Machine Learning & Deep Learning (Attention, Transformers)</li>
              <li>Database Systems (SQL, Oracle, PostgreSQL)</li>
              <li>High-Performance Computing (CUDA)</li>
              <li>Cloud Computing (Supabase, Firebase)</li>
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
            </ul>
          </div>

          {/* Right: Image */}
          <div className="flex-shrink-0 w-40 md:w-48 lg:w-56">
            <img
              src="/mahe.png  "
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
          {/* Left: Text */}
          <div className="flex-1 md:flex-[0_0_60%] max-w-full">
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-3">
              Developed an interactive mobile application in collaboration with Manipal Academy of Higher Education (MAHE) and KMC Hospital, Udupi, aimed at connecting cancer patients with their assigned doctors. The application facilitates both pre-operative and post-operative care, allowing patients to track their treatment and communicate efficiently with medical staff.
            </p>

            <ul className="list-disc pl-5 text-neutral-600 dark:text-neutral-400 text-sm space-y-1">
              <li>Pre-op and post-op calendar integration to display chemotherapy sessions, surgery dates, and follow-ups.</li>
              <li>Emergency contact feature to reach doctors immediately in critical situations.</li>
              <li>Comprehensive patient data collection including lifestyle habits (smoking, alcohol consumption), vitals tracking (e.g., blood pressure, BMI), medication reminders, dietary intake, and the ability to upload images of affected areas.</li>
              <li>Secure authentication system for patients and KMC medical staff using Firebase Authentication.</li>
              <li>Role-specific dashboards for doctors and patients to manage treatment plans and monitor progress.</li>
              <li>Backend database storage implemented with Firebase Firestore for scalable and real-time data management.</li>
              <li>Flutter frontend development leveraging packages such as `provider` for state management, `flutter_local_notifications` for reminders, and `image_picker` for media uploads.</li>
            </ul>

            <p className="text-sm mt-3 text-neutral-500">
              Tools & Technologies: <strong>Flutter</strong> (Frontend), <strong>Firebase Authentication & Firestore</strong> (Backend), <strong>Figma</strong> (UI/UX Prototyping), <strong>Flutter Packages</strong> – Provider, Image Picker, Local Notifications.  
            </p>

            <p className="text-sm mt-1 text-neutral-500">
              Achievements: Successfully delivered a fully functional and interactive application to KMC Hospital, enabling seamless communication and care management for cancer patients. The project won a cash prize of ₹20,000.
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

          {/* Right: Image */}
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
      title: "April 5, 2025",
      content: (
        <div className="space-y-3">
          <h4 className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
            MongoDB: The Complete Guide to NoSQL Database Development
          </h4>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            by EDUCBA
          </p>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Verification
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
      ),
    },


    {
      title: "Oct 16, 2025",
      content: (
        <div className="space-y-3">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Course
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Natural Language Processing in TensorFlow — DeepLearning.AI
          </p>

          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Verification
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
      ),
    },

    {
      title: "October 27, 2025",
      content: (
        <div className="space-y-4">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Course
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Generative AI with Large Language Models — DeepLearning.AI
          </p>
          <li>
            <span className="font-medium">Verification:</span>{" "}
          </li>
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
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen">
      <Timeline data={data} />
    </div>
  );
}
