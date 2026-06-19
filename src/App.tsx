import { useEffect, useRef, useState } from "react";
import { NavLink, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ArrowRight, Code2, Download, Github, Mail, Menu, X } from "lucide-react";
import { profile, projects, skills } from "./data";
import heroImage from "./assets/portfolio-hero.svg";

const resumePath = "/resume/james-abilong-resume.html";

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  return (
    <>
      <header className="site-header">
        <NavLink className="brand" to="/" aria-label="James Abilong home">
          <span className="brand-mark">JA</span>
          <span>James Abilong</span>
        </NavLink>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={`site-nav ${isMenuOpen ? "open" : ""}`} aria-label="Primary navigation">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <a className="nav-resume" href={resumePath} download>
            Resume
          </a>
        </nav>
      </header>

      <main ref={mainRef} id="app" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <span>James Abilong</span>
        <span>Full-stack developer building reliable web applications.</span>
      </footer>
    </>
  );
}

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
};

function PageShell({ eyebrow, title, children }: PageShellProps) {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p>{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {children}
    </section>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack developer</p>
          <h1>James Abilong builds practical web applications from interface to API.</h1>
          <p className="hero-text">
            I work with React, TypeScript, Node.js, Express, and PostgreSQL to turn product ideas into useful,
            maintainable software.
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
        <article>
          <span>01</span>
          <h2>Frontend</h2>
          <p>Component-driven interfaces with responsive layouts and clear user flows.</p>
        </article>
        <article>
          <span>02</span>
          <h2>Backend</h2>
          <p>REST APIs, application logic, authentication patterns, and service structure.</p>
        </article>
        <article>
          <span>03</span>
          <h2>Data</h2>
          <p>PostgreSQL-backed features with practical schema design and query thinking.</p>
        </article>
      </section>
    </>
  );
}

function About() {
  return (
    <PageShell eyebrow="Developer profile" title="About me">
      <div className="split-layout">
        <div className="rich-text">
          <p>
            I'm a software developer focused on building full-stack web applications with modern JavaScript tools. I
            enjoy working across product surfaces, APIs, and data layers, with an emphasis on code quality and steady
            improvement.
          </p>
          <p>
            Right now, I am learning React to Next.js workflows and looking for collaborators on {profile.collaboration}.
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

function Projects() {
  return (
    <PageShell eyebrow="Selected work" title="Featured projects">
      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
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
        ))}
      </div>
    </PageShell>
  );
}

function Skills() {
  return (
    <PageShell eyebrow="Technical stack" title="Skills and tools">
      <div className="skill-grid">
        {skills.map((section) => (
          <article className="skill-card" key={section.group}>
            <h2>{section.group}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </PageShell>
  );
}

function Experience() {
  return (
    <PageShell eyebrow="How I work" title="Experience">
      <div className="timeline">
        <article>
          <span>Current</span>
          <h2>Full-stack web development</h2>
          <p>Building and improving web applications with React, TypeScript, Node.js, Express, and PostgreSQL.</p>
        </article>
        <article>
          <span>Now learning</span>
          <h2>Next.js application patterns</h2>
          <p>Expanding React skills into routing, rendering strategies, and production-ready frontend architecture.</p>
        </article>
        <article>
          <span>Project focus</span>
          <h2>FreshPrice collaboration</h2>
          <p>Looking for collaborators on {profile.collaboration}, a personal product project.</p>
        </article>
      </div>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell eyebrow="Let's connect" title="Contact">
      <div className="contact-layout">
        <div className="rich-text">
          <p>
            I am open to full-stack development opportunities, project collaboration, and technical conversations around
            web applications.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button primary" href={`mailto:${profile.email}`}>
            <Mail aria-hidden="true" />
            Email me
          </a>
          <a className="button secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Github aria-hidden="true" />
            GitHub
          </a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="button secondary" href={resumePath} download>
            <Download aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </PageShell>
  );
}

export default function App() {
  return <Layout />;
}
