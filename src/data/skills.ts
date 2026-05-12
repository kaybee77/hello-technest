export interface SkillGroup {
  title: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vite", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    title: "Tools & Cloud",
    items: ["Git", "Docker", "Vercel", "AWS", "GitHub Actions"],
  },
];
