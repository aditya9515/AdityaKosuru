"use client";

import * as React from "react";
import AnimatedDownloadButton from "@/components/ui/download-hover-button";

export default function ResumePage() {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-start px-6 py-16 gap-10">
        
        {/* Title */}
        <h1 className="text-4xl font-semibold tracking-tight">
            My Resume
        </h1>

        {/* Resume Preview */}
        <div className="w-full max-w-4xl h-[80vh] rounded-xl overflow-hidden border shadow-sm bg-card">
            <iframe
            src="/resume.pdf"
            className="w-full h-full"
            title="My Resume"
            />
        </div>
        <div className="flex items-center justify-center min-h-screen bg-background">
            {/* Download Button */}
            <AnimatedDownloadButton />
        </div>
            
        </div>
    );
}
