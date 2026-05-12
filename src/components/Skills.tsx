import { SectionHeading } from "@/components/SectionHeading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-border bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="The languages, frameworks, and tools I reach for most often."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-5"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
