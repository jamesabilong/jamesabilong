import { useEffect, useState } from "react";
import { PageShell } from "../components/PageShell";
import { profile } from "../data";
import { usePageMeta } from "../lib/usePageMeta";

const START = new Date(2019, 8, 2).getTime();

interface Elapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcElapsed(): Elapsed {
  const now = Date.now();
  const diff = now - START;

  const s = new Date(START);
  const n = new Date(now);

  let years = n.getFullYear() - s.getFullYear();
  let months = n.getMonth() - s.getMonth();
  let days = n.getDate() - s.getDate();

  if (days < 0) {
    months--;
    days += new Date(n.getFullYear(), n.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }

  const totalSec = Math.floor(diff / 1000);
  const seconds = totalSec % 60;
  const totalMin = Math.floor(totalSec / 60);
  const minutes = totalMin % 60;
  const hours = Math.floor(totalMin / 60) % 24;

  return { years, months, days, hours, minutes, seconds };
}

function ExperienceCounter() {
  const [e, setE] = useState<Elapsed>(calcElapsed);

  useEffect(() => {
    const id = setInterval(() => setE(calcElapsed()), 1000);
    return () => clearInterval(id);
  }, []);

  const units: { value: number; label: string }[] = [
    { value: e.years, label: "years" },
    { value: e.months, label: "months" },
    { value: e.days, label: "days" },
    { value: e.hours, label: "hours" },
    { value: e.minutes, label: "min" },
    { value: e.seconds, label: "sec" },
  ];

  return (
    <div className="exp-counter" aria-label="Time elapsed since September 2 2019">
      {units.map(({ value, label }) => (
        <div key={label} className="exp-unit">
          <span className="exp-num">{String(value).padStart(2, "0")}</span>
          <span className="exp-label">{label}</span>
        </div>
      ))}
    </div>
  );
}

export function About() {
  usePageMeta("About | James Abilong", "Developer profile, focus areas, and collaboration interests for James Abilong.");

  return (
    <PageShell eyebrow="Developer profile" title="About me">
      <div className="split-layout">
        <div className="rich-text">
          <p>
            I'm a software developer with experience across software development, database management, user
            interface optimization, API development, testing, and debugging.
          </p>
          <p>
            My recent work includes ReactJS live streaming applications, backend API improvements, C#/.NET Core
            migration work, Java feature development, and enterprise software maintenance.
          </p>
          <p className="exp-since">Professional experience since September 2, 2019</p>
          <ExperienceCounter />
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
