"use client";

import Image from "next/image";
import AnimatedDownloadButton from "@/components/ui/download-hover-button";

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-6 py-16 gap-10">

      {/* Title */}
      <h1 className="text-4xl font-semibold tracking-tight">
        My Resume
      </h1>

      {/* Resume Image */}
      <div className="w-full max-w-4xl border rounded-xl overflow-hidden shadow-sm bg-card">
        <Image
          src="/Aditya_Kosuru_image.jpg"
          alt="Aditya Kosuru Resume"
          width={1200}
          height={1700}
          className="w-full h-auto"
          priority
        />
      </div>
    <div className="flex items-center justify-center min-h-screen bg-background">
        {/* Download Button */}
        <AnimatedDownloadButton />
    </div>
    </div>
  );
}
