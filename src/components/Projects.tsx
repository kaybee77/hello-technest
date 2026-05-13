import { ExternalLink, Github, Star } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A few selected projects. More on my GitHub."
        />

        {/* Featured project */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="group relative mb-6 overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-brand/50"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex-1">
              <span className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-2.5 py-0.5 text-xs font-medium text-brand">
                <Star className="h-3 w-3" />
                Featured
              </span>
              <h3 className="mt-1 text-2xl font-bold tracking-tight">
                {featured.title}
              </h3>
              <p className="mt-2 max-w-prose text-base leading-relaxed text-muted-foreground">
                {featured.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-2 text-muted-foreground">
              {featured.github && (
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${featured.title} GitHub`}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground"
                >
                  <Github className="h-4 w-4" />
                  Source
                </a>
              )}
              {featured.live && (
                <a
                  href={featured.live}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${featured.title} live`}
                  className="flex items-center gap-1.5 rounded-lg border border-border px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-foreground"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live site
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Rest of projects */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-brand/50 hover:shadow-lg hover:shadow-brand/10"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle 180px at var(--mx, 50%) var(--my, 50%), hsl(217 91% 60% / 0.10), transparent)",
                }}
              />
              <div className="relative flex flex-1 flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <div className="flex shrink-0 items-center gap-1 text-muted-foreground">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} GitHub`}
                        className="rounded-md p-1.5 transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} live`}
                        className="rounded-md p-1.5 transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
