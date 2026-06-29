import { PageShell } from "../components/PageShell";
import { profile } from "../data";
import { usePageMeta } from "../lib/usePageMeta";

export function About() {
  usePageMeta("About | James Abilong", "Developer profile, focus areas, and collaboration interests for James Abilong.");

  return (
    <PageShell eyebrow="Developer profile" title="About me">
      <div className="split-layout">
        <div className="rich-text">
          <p>
            I'm a software developer with 5 years of experience across software development, database management, user
            interface optimization, API development, testing, and debugging.
          </p>
          <p>
            My recent work includes ReactJS live streaming applications, backend API improvements, C#/.NET Core
            migration work, Java feature development, and enterprise software maintenance.
          </p>
        </div>
        <aside className="profile-panel">
          <dl>
            <div>
              <dt>Name</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{profile.role}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{profile.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{profile.currentFocus}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </PageShell>
  );
}
