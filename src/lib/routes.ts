import type { ComponentType } from "react";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Experience } from "../pages/Experience";
import { Home } from "../pages/Home";
import { Projects } from "../pages/Projects";
import { Skills } from "../pages/Skills";

export const resumePath = "/resume/james-abilong-resume.pdf";

export type PortfolioRoute = {
  path: string;
  label: string;
  title: string;
  description: string;
  Component: ComponentType;
};

export const routes: PortfolioRoute[] = [
  {
    path: "/",
    label: "Home",
    title: "James Abilong | Full-Stack Developer",
    description: "Portfolio for James Abilong, a software developer with React, Node.js, C#, Java, and SQL experience.",
    Component: Home,
  },
  {
    path: "/about",
    label: "About",
    title: "About | James Abilong",
    description: "Developer profile and professional background for James Abilong.",
    Component: About,
  },
  {
    path: "/projects",
    label: "Projects",
    title: "Projects | James Abilong",
    description: "Selected professional software projects by James Abilong.",
    Component: Projects,
  },
  {
    path: "/skills",
    label: "Skills",
    title: "Skills | James Abilong",
    description: "Languages, frontend, backend, database, and professional skills used by James Abilong.",
    Component: Skills,
  },
  {
    path: "/experience",
    label: "Experience",
    title: "Experience | James Abilong",
    description: "Professional software development experience at FDCI and Advanced World Solutions.",
    Component: Experience,
  },
  {
    path: "/contact",
    label: "Contact",
    title: "Contact | James Abilong",
    description: "Contact James Abilong for full-stack development opportunities and collaboration.",
    Component: Contact,
  },
];
