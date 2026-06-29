import { PageShell } from "../components/PageShell";
import { ProjectCard } from "../components/ProjectCard";
import { projects } from "../data";
import { usePageMeta } from "../lib/usePageMeta";

export function Projects() {
  usePageMeta("Projects | James Abilong", "Selected full-stack and frontend projects by James Abilong.");

  return (
    <PageShell eyebrow="Selected work" title="Featured projects">
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </PageShell>
  );
}
