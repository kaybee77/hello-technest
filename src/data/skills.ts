export interface Skill {
  name: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 82 },
      { name: "Java", level: 70 },
      { name: "MATLAB", level: 75 },
    ],
  },
  {
    title: "Frontend & Backend",
    items: [
      { name: "React", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "Node.js", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    title: "AI & Data",
    items: [
      { name: "RAG Systems", level: 88 },
      { name: "ML Pipelines", level: 85 },
      { name: "Computer Vision", level: 80 },
      { name: "Medical Imaging (DICOM)", level: 72 },
      { name: "LangChain", level: 80 },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Git", level: 92 },
      { name: "GitHub Actions (CI/CD)", level: 82 },
      { name: "Docker", level: 78 },
      { name: "AWS (EC2, S3)", level: 72 },
    ],
  },
];
