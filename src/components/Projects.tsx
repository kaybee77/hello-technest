import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A few selected projects. More on my GitHub."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="group flex h-full flex-col transition-colors hover:border-brand/60"
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} GitHub repository`}
                        className="rounded-md p-1.5 hover:bg-accent hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    ) : null}
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} live site`}
                        className="rounded-md p-1.5 hover:bg-accent hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    ) : null}
                  </div>
                </div>
                <CardDescription className="leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <Badge key={t} variant="outline">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
