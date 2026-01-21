import { DATA } from "@/data";
import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "A summary of my Projects.",
};

export default function ProjectsPage() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tighter text-primary">
        <span className="text-orange-500 dark:text-purple-400">|</span> projects
      </h1>

      <div className="space-y-6">
        {DATA.projects.map((project) => (
          <div key={project.title} className="group">
            <div className="flex items-baseline justify-between gap-4">
              {project.href && project.href !== "#" ? (
                <Link
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="prose prose-neutral dark:prose-invert font-medium hover:text-orange-500 dark:hover:text-purple-400 transition-colors inline-flex items-center gap-1"
                >
                  {project.title}
                  <ArrowUpRight className="size-3 opacity-50" aria-hidden="true" />
                </Link>
              ) : (
                <span className="prose prose-neutral dark:prose-invert font-medium">{project.title}</span>
              )}
              <span className="prose prose-neutral dark:prose-invert text-sm tabular-nums">
                {project.year}
              </span>
            </div>
            <p className="prose prose-neutral dark:prose-invert text-sm mt-0.5">
              {project.tagline}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
