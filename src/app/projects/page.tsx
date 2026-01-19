import { ProjectCard } from '@/components/project-card';
import { DATA } from '@/data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'A summary of my Projects.',
};

export default function ProjectsPage() {
  return (
    <section>
      <div className='mb-5'>
        <h2 className="font-medium text-2xl mb-8 tracking-tighter">my projects</h2>
        <p className="prose prose-neutral dark:prose-invert mb-4">
          {DATA.projectssummary}
        </p>
        
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
          {DATA.projects.map((project) => (
            <ProjectCard
              key={project.title}
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              iconLists={project.iconLists}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          ))}
        </div>
      </div>
    </section>
  );
}