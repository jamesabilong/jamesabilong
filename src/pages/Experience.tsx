import { PageShell } from "../components/PageShell";
import { experienceItems } from "../data";
import { usePageMeta } from "../lib/usePageMeta";

export function Experience() {
  usePageMeta(
    "Experience | James Abilong",
    "Professional software development experience at FDCI and Advanced World Solutions.",
  );

  return (
    <PageShell eyebrow="Professional background" title="Experience">
      <div className="timeline">
        {experienceItems.map((item) => (
          <article key={`${item.company}-${item.period}`}>
            <span>{item.period}</span>
            <h2>{item.role}</h2>
            <p className="timeline-company">{item.company}</p>
            <ul className="experience-projects">
              {item.projects.map((project) => (
                <li key={project.name}>
                  <strong>{project.name}</strong>
                  <p>{project.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
