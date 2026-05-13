export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Capstone Intern",
    company: "Genesis AI Garage — HR Document Retrieval System (RAG)",
    period: "May 2025 — Sept 2025",
    bullets: [
      "Co-developed a RAG system enabling natural language querying across 170+ HR and enterprise documents, replacing manual search and delivering near-instant document retrieval company-wide.",
      "Evaluated and benchmarked multiple embedding models, selecting the optimal model that improved retrieval relevance and response accuracy across the full document collection.",
      "Engineered document chunking and preprocessing pipelines to support the chosen embedding strategy, improving consistency and retrieval quality across all document types.",
      "Built frontend UI and backend integration enabling non-technical staff to query HR documents independently, eliminating reliance on engineering support.",
      "Validated retrieval outputs across 100+ test cases using hit rate and cosine similarity metrics (0.75–0.89), achieving ~90% retrieval accuracy.",
    ],
  },
  {
    role: "Medical Image Labeling Volunteer",
    company: "DIAG Lab, Memorial University of Newfoundland",
    period: "Nov 2024 — Dec 2025",
    location: "St. John's, NL",
    bullets: [
      "Manually annotated 2,000+ CT scan images, contributing high-quality labeled datasets that directly supported automated image analysis algorithm development.",
      "Applied medical image analysis software to label anatomical structures across CT scans, building practical exposure to computational anatomy and clinical research workflows.",
      "Contributed to data labeling pipelines supporting ML model training, improving dataset quality and annotation consistency for medical image interpretation.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "AccountIT Ghana",
    period: "Jun 2023 — Nov 2024",
    location: "Remote",
    bullets: [
      "Collaborated on designing multi-tenant PostgreSQL schemas enabling secure, customised data isolation across 40+ school clients, with each institution provisioned its own tailored database configuration.",
      "Built and contributed to 8 role-specific React dashboards for Edusoft, a multi-tenant school management SaaS, improving operational visibility across admissions, attendance, fee management, and reporting workflows, deployed on AWS (EC2 & S3).",
      "Independently implemented CI/CD pipelines using GitHub Actions, supporting reliable deployments across 40+ client-facing school websites.",
      "Reviewed and tested REST APIs with 8-tier role-based access control, validating permission management and ensuring correct access behavior across all user roles.",
    ],
  },
];
