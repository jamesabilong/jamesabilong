export const profile = {
  name: "James Abilong",
  role: "Full-Stack Developer",
  location: "Philippines",
  email: "your.email@example.com",
  github: "https://github.com/kraim21",
  linkedin: "https://linkedin.com/in/yourprofile",
  currentFocus: "React, Next.js, and product-focused full-stack applications",
  collaboration: "freshprice.philwatch.com",
};

export const skills = [
  { group: "Frontend", items: ["React", "TypeScript", "JavaScript", "Responsive UI", "SPA Architecture"] },
  { group: "Backend", items: ["Node.js", "Express", "REST APIs", "Authentication", "API Design"] },
  { group: "Database", items: ["PostgreSQL", "Data Modeling", "SQL", "Performance Basics"] },
  { group: "Tools", items: ["Docker", "Git", "VS Code", "Code Review", "Deployment"] },
];

export const projects = [
  {
    name: "FreshPrice",
    type: "Personal project",
    description:
      "A product-focused web application concept for price tracking and market visibility, built around practical full-stack workflows.",
    tech: ["React", "Node.js", "PostgreSQL", "REST API"],
    status: "In progress",
    link: "https://freshprice.philwatch.com",
  },
  {
    name: "Full-Stack API Dashboard",
    type: "Portfolio project",
    description:
      "A dashboard-style application pattern for managing authenticated data, filtering records, and connecting frontend views to backend services.",
    tech: ["TypeScript", "Express", "Docker"],
    status: "Template ready",
    link: profile.github,
  },
  {
    name: "React Product Interface",
    type: "Frontend build",
    description:
      "A responsive SPA interface focused on reusable components, predictable state, and clean user flows for product teams.",
    tech: ["React", "TypeScript", "CSS"],
    status: "Case study",
    link: profile.github,
  },
];
