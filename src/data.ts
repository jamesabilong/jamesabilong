export const profile = {
  name: "James Abilong",
  role: "Software Developer",
  location: "Apas, Cebu City",
  email: "jamesabilong@gmail.com",
  github: "https://github.com/kraim21",
  linkedin: "https://www.linkedin.com/in/jamesabilong-b9724b164/",
  currentFocus: "React, Node.js, API development, database management, and UI optimization",
  collaboration: "freshprice.philwatch.com",
  summary:
    "Software developer with 5 years of experience in software development, database management, API work, and user interface optimization.",
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export type Project = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  status: string;
  link: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  projects: {
    name: string;
    description: string;
  }[];
};

export const focusAreas = [
  {
    number: "01",
    title: "User interfaces",
    description: "Responsive React interfaces, screen migration work, and usability-focused frontend improvements.",
  },
  {
    number: "02",
    title: "APIs",
    description: "Backend features, API optimization, data exchange improvements, and third-party integrations.",
  },
  {
    number: "03",
    title: "Systems",
    description: "Debugging, testing, database work, and maintaining business-critical application behavior.",
  },
];

export const experienceItems: ExperienceItem[] = [
  {
    company: "Forty Degrees Celsius Inc. (FDCI)",
    role: "Web Developer",
    period: "February 2024 - Present",
    projects: [
      {
        name: "Lulu/Ciao - Live Streaming Application",
        description:
          "Developed a customized variant of the MacheTalk live streaming application with a responsive ReactJS frontend and backend features based on client requirements.",
      },
      {
        name: "MacheTalk - Live Streaming Application",
        description:
          "Designed, developed, and optimized APIs to improve system functionality, data exchange efficiency, third-party integration, response times, and user experience.",
      },
    ],
  },
  {
    company: "Advanced World Solutions, Inc. (AWS PH)",
    role: "Associate Research and Development Engineer",
    period: "2019 - 2023",
    projects: [
      {
        name: "Rental Application for Tenants and Owners",
        description:
          "Designed, implemented, and tested screens while migrating a VBA-based application to C# and .NET Core, improving performance, maintainability, and user experience.",
      },
      {
        name: "Multi-functional Printer Software",
        description:
          "Identified, debugged, and resolved ReactJS software issues across emulator and hardware deployments to improve stability and performance.",
      },
      {
        name: "Web Application for a Rental Company",
        description:
          "Developed mock screens for rental searches and listings to improve usability for tenants and property owners.",
      },
      {
        name: "Banking Portfolio System Programming",
        description:
          "Implemented and tested client-requested Java features while resolving system bugs to improve reliability and reduce downtime.",
      },
    ],
  },
];

export const skills: SkillGroup[] = [
  { group: "Languages", items: ["PHP", "C#", "Java", "JavaScript", "TypeScript"] },
  { group: "Frontend", items: ["React", "HTML", "CSS", "Sass", "Responsive UI"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "API Optimization", "Third-party Integration"] },
  { group: "Database", items: ["SQL", "MS SQL", "IBM Db2", "Database Management"] },
  { group: "Tools", items: ["Git", "SVN", "Docker", "VS Code", "Testing and Debugging"] },
  { group: "Professional", items: ["Communication", "Time Management", "Trainability", "Client Requirements"] },
];

export const projects: Project[] = [
  {
    name: "Lulu/Ciao Live Streaming App",
    type: "Professional project",
    description:
      "Customized live streaming application work covering responsive ReactJS frontend development and backend feature implementation.",
    tech: ["ReactJS", "Node.js", "API Development"],
    status: "FDCI",
    link: profile.github,
  },
  {
    name: "MacheTalk API Optimization",
    type: "Professional project",
    description:
      "API development and optimization work focused on interoperability, faster response times, and better third-party application integration.",
    tech: ["REST APIs", "Backend", "Integration"],
    status: "FDCI",
    link: profile.github,
  },
  {
    name: "Rental Application Migration",
    type: "Enterprise project",
    description:
      "Screen design, implementation, and testing for migrating an existing VBA application to a modern C# and .NET Core system.",
    tech: ["C#", ".NET Core", "Testing"],
    status: "AWS PH",
    link: profile.github,
  },
  {
    name: "Banking Portfolio System",
    type: "Enterprise project",
    description:
      "Client-requested feature implementation and bug fixing for a Java-based banking portfolio system.",
    tech: ["Java", "Testing", "Debugging"],
    status: "AWS PH",
    link: profile.github,
  },
];
