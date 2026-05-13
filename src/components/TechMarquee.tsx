const techs = [
  "React", "TypeScript", "Python", "FastAPI", "PostgreSQL",
  "Node.js", "Docker", "AWS", "LangChain", "ChromaDB",
  "Tailwind CSS", "Framer Motion", "REST APIs", "RAG Systems",
  "Computer Vision", "GitHub Actions", "MATLAB", "SQL",
];

export function TechMarquee() {
  const items = [...techs, ...techs];
  return (
    <div className="overflow-hidden border-y border-border bg-muted/20 py-3">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={i}
            className="mx-7 font-mono text-xs font-medium text-muted-foreground/60"
          >
            <span className="mr-2 text-brand">◆</span>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
