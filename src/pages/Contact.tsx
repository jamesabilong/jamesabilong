import { Download, Github, Mail } from "lucide-react";
import { PageShell } from "../components/PageShell";
import { profile } from "../data";
import { resumePath } from "../lib/routes";
import { usePageMeta } from "../lib/usePageMeta";

export function Contact() {
  usePageMeta("Contact | James Abilong", "Contact James Abilong for full-stack development opportunities and collaboration.");

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
