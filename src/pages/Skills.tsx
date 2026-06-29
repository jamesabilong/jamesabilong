import { PageShell } from "../components/PageShell";
import { SkillCard } from "../components/SkillCard";
import { skills } from "../data";
import { usePageMeta } from "../lib/usePageMeta";

export function Skills() {
  usePageMeta("Skills | James Abilong", "Frontend, backend, database, and deployment tools used by James Abilong.");

  return (
    <PageShell eyebrow="Technical stack" title="Skills and tools">
      <div className="skill-grid">
        {skills.map((section) => (
          <SkillCard key={section.group} section={section} />
        ))}
      </div>
    </PageShell>
  );
}
