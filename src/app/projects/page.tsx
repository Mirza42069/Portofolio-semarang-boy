import { DATA } from "@/data";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "A summary of my Projects.",
};

const colSpanClass = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
  4: "col-span-4",
} as const;

const rowSpanClass = {
  1: "row-span-1",
  2: "row-span-2",
  3: "row-span-3",
  4: "row-span-4",
} as const;

export default function ProjectsPage() {
  // Duplicate projects to fill the page
  const items = [...DATA.projects, ...DATA.projects];

  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-primary">
        <span className="text-orange-500 dark:text-purple-400">|</span> Projects
      </h1>

      {/* Bento Grid */}
      <div className="grid grid-cols-4 auto-rows-[140px] gap-3">
        {items.map((project, i) => (
          <Link
            key={`${project.title}-${i}`}
            href={project.href || "#"}
            className={cn(
              "group relative overflow-hidden rounded-xl",
              "transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
              colSpanClass[project.colSpan],
              rowSpanClass[project.rowSpan]
            )}
          >
            {/* Background Image */}
            <Image
              src="/image6.png"
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay - visible on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300" />

            {/* Content - hidden by default, shown on hover */}
            <div className="relative z-10 flex h-full flex-col justify-end p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <h3 className="font-medium text-white text-sm sm:text-base leading-tight">
                {project.title}
              </h3>
              <p className="text-white/70 text-xs mt-0.5">
                {project.tagline}
              </p>
              <span className="text-white/50 text-[10px] mt-1 tabular-nums">
                {project.year}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
