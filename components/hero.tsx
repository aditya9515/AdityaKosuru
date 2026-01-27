import { GLSLHills } from "@/components/glsl-hills";

export default function DemoOne() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <GLSLHills />

      <div className="space-y-6 pointer-events-none z-10 text-center absolute">
        <h1 className="font-semibold text-7xl whitespace-pre-wrap">
          <span className="italic text-6xl font-thin">
            Want an AI Agent <br />
          </span>
          for Your Business?
        </h1>

        <p className="text-sm text-primary/60">
          We build custom AI agents that automate workflows,  
          handle customer interactions, and scale your business operations.
        </p>
      </div>
    </div>
  );
}
