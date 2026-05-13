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
      "Built a document search system for OEM manuals and technical documents that allows users to ask maintenance and parts questions in plain language and quickly retrieve relevant information, including tables, specifications, and part numbers. Developed the full pipeline for document parsing, table extraction, chunking, indexing, and search, and built a web interface and API that enable engineers and maintenance teams to access technical information without manually searching through hundreds of pages of documentation.",
    tech: ["Python", "FastAPI", "ChromaDB", "Hybrid Retrieval"],
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
    title: "Driver Emotion Monitoring System",
    description:
      "End-to-end real-time driver emotion recognition system built in MATLAB using deep learning and computer vision. Processed 5,000+ image frames through a custom preprocessing and augmentation pipeline, then benchmarked multiple architectures before fine-tuning VGG to achieve 94% detection accuracy. Developed as an MSc Capstone for an industry brief from Jaguar Land Rover.",
    tech: ["MATLAB", "Deep Learning", "Computer Vision", "VGG", "Data Augmentation"],
  },
  {
    title: "Blackjack AI Player",
    description:
      "AI decision algorithm in Java automating player decision-making across all standard Blackjack game states, demonstrating algorithmic design and object-oriented programming principles.",
    tech: ["Java", "OOP", "AI Algorithms"],
  },
];
