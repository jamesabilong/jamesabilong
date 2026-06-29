import type { SkillGroup } from "../data";

type SkillCardProps = {
  section: SkillGroup;
};

export function SkillCard({ section }: SkillCardProps) {
  return (
    <article className="skill-card">
      <h2>{section.group}</h2>
      <ul>
        {section.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
