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
    title: "Engineering RAG for OEM Manuals",
    description:
      "A Retrieval-Augmented Generation system using LangChain to enable natural-language search over complex engineering manuals. Implemented table-aware document parsing, semantic chunking, and hybrid retrieval to return accurate, cited technical specifications and procedures.",
    tech: ["Python", "LangChain", "RAG", "Semantic Chunking"],
  },
  {
    title: "Edusoft — School Management SaaS",
    description:
      "Multi-tenant SaaS platform supporting admissions, attendance, fee management, and reporting across 40+ school institutions. Features 8-tier role-based access control and 8 dedicated dashboards per user role.",
    tech: ["React", "REST API", "PostgreSQL", "AWS EC2", "AWS S3"],
  },
  {
    title: "Geoscience Well Log Database",
    description:
      "Prototype database system enabling geoscientists to store, standardize, and query well log data from LAS files across multiple wells, improving data consistency and cutting retrieval time for geological measurements.",
    tech: ["PostgreSQL", "Python", "SQL", "LAS Files"],
  },
  {
    title: "Blackjack AI Player",
    description:
      "AI decision algorithm in Java automating player decision-making across all standard Blackjack game states, demonstrating algorithmic design and object-oriented programming principles.",
    tech: ["Java", "OOP", "AI Algorithms"],
  },
];
