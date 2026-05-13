export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    role: "AI Capstone Intern",
    company: "Genesis AI Garage — HR Document Retrieval System (RAG)",
    period: "May 2025 — Sept 2025",
    summary:
      "Worked on the development of a document search system that allowed users to ask questions in plain language and retrieve information from more than 170 HR and business documents in seconds. Designed and tested document preprocessing and chunking workflows, evaluated different embedding models, and built the user interface and backend integration so non-technical staff could search documents independently. Conducted testing across more than 100 scenarios and improved retrieval performance to deliver accurate and relevant results consistently.",
  },
  {
    role: "Medical Image Labeling Volunteer",
    company: "DIAG Lab, Memorial University of Newfoundland",
    period: "Nov 2024 — Dec 2025",
    location: "St. John's, NL",
    summary:
      "Medical Image Labeling Volunteer with experience preparing high-quality annotated datasets for medical imaging research. Labeled more than 2,000 CT scan images using specialized image analysis software to support the development and testing of automated image analysis tools. Worked within clinical research workflows to ensure accuracy and consistency across annotations, helping create reliable datasets for evaluating and improving medical imaging algorithms.",
  },
  {
    role: "Full-Stack Developer",
    company: "AccountIT Ghana",
    period: "Jun 2023 — Nov 2024",
    location: "Remote",
    summary:
      "Full-Stack Engineer with experience building and maintaining web applications that help organizations run their operations more efficiently. Contributed to the development of ACIT EduSoft, a school management platform that supports student admissions, fee collection, attendance tracking, timetable creation, parent access, and online classes. Developed responsive front-end interfaces using React, JavaScript, HTML, and CSS, and built secure back-end services and REST APIs using Node.js, Express, and PostgreSQL. Worked closely with clients and colleagues to translate business requirements into practical software solutions and used Git, Docker, and cloud deployment tools to deliver reliable applications used in day-to-day operations.",
  },
];
