import { Code2, Download } from "lucide-react";
import { NavLink } from "react-router-dom";
import heroImage from "../assets/portfolio-hero.svg";
import { focusAreas } from "../data";
import { resumePath } from "../lib/routes";
import { usePageMeta } from "../lib/usePageMeta";

export function Home() {
  usePageMeta(
    "James Abilong | Full-Stack Developer",
    "Portfolio for James Abilong, a software developer with experience in React, Node.js, C#, Java, SQL, and API development.",
  );

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack developer</p>
          <h1>James Abilong builds reliable web applications, APIs, and business software.</h1>
          <p className="hero-text">
            I have 5 years of experience across ReactJS interfaces, Node.js APIs, C#/.NET Core migration work, Java
            systems, SQL databases, testing, and debugging.
          </p>
          <div className="hero-actions">
            <NavLink className="button primary" to="/projects">
              <Code2 aria-hidden="true" />
              View projects
            </NavLink>
            <a className="button secondary" href={resumePath} download>
              <Download aria-hidden="true" />
              Download resume
            </a>
          </div>
        </div>
        <figure className="hero-media">
          <img src={heroImage} alt="Developer workstation with code, database, and interface panels" />
        </figure>
      </section>

      <section className="home-grid" aria-label="Development focus areas">
        {focusAreas.map((area) => (
          <article key={area.title}>
            <span>{area.number}</span>
            <h2>{area.title}</h2>
            <p>{area.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}
