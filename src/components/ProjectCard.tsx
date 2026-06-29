import { ArrowRight } from "lucide-react";
import type { Project } from "../data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div>
        <p>{project.type}</p>
        <h2>{project.name}</h2>
        <span>{project.status}</span>
      </div>
      <p>{project.description}</p>
      <ul className="tag-list">
        {project.tech.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
        Open project
        <ArrowRight aria-hidden="true" />
      </a>
    </article>
  );
}
