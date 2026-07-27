import { PageShell } from "../components/PageShell";
import { ProjectCard } from "../components/ProjectCard";
import { projects, personalProjects } from "../data";
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

      <div className="personal-section">
        <p className="personal-eyebrow">Personal projects</p>
        <h2 className="personal-title">Side builds</h2>
        <div className="project-grid">
          {personalProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
