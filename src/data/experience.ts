export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "Software Engineer",
    company: "Acme Corp",
    period: "2024 — Present",
    location: "Remote",
    bullets: [
      "Lead frontend for the customer dashboard, used by 10k+ weekly active users.",
      "Migrated legacy components to a shared design system, cutting bundle size by 28%.",
      "Mentored two junior engineers through onboarding and code review.",
    ],
  },
  {
    role: "Frontend Engineer (Intern)",
    company: "Globex",
    period: "2023 — 2024",
    location: "Accra, Ghana",
    bullets: [
      "Shipped a Next.js marketing site that improved Lighthouse performance from 62 to 98.",
      "Built reusable charts and tables consumed by three internal product teams.",
    ],
  },
];
