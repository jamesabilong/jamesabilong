import type { ReactNode } from "react";

type PageShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function PageShell({ eyebrow, title, children }: PageShellProps) {
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
