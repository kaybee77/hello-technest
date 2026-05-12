export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "ecoNext",
    description:
      "A sustainability-focused web app that helps users discover greener product alternatives, with personalized recommendations.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    github: "https://github.com/your-username/econext",
    live: "https://econext.example.com",
  },
  {
    title: "TaskFlow",
    description:
      "A minimalist task manager with keyboard-first navigation, drag-and-drop boards, and offline support.",
    tech: ["React", "Vite", "Zustand", "IndexedDB"],
    github: "https://github.com/your-username/taskflow",
  },
  {
    title: "DevPulse",
    description:
      "A developer dashboard that aggregates GitHub activity, CI status, and code review stats in one view.",
    tech: ["Next.js", "tRPC", "Prisma", "PostgreSQL"],
    github: "https://github.com/your-username/devpulse",
    live: "https://devpulse.example.com",
  },
  {
    title: "Notesy",
    description:
      "A Markdown-first notes app with bidirectional links, full-text search, and end-to-end encryption.",
    tech: ["React", "TypeScript", "WebCrypto", "Supabase"],
    github: "https://github.com/your-username/notesy",
  },
];
