import { SectionHeading } from "@/components/SectionHeading";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-b border-border bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Recent roles and what I shipped."
        />

        <ol className="relative border-l border-border pl-6">
          {experience.map((entry) => (
            <li key={`${entry.role}-${entry.company}`} className="mb-10 last:mb-0">
              <span className="absolute -left-[7px] mt-2 h-3 w-3 rounded-full border-2 border-background bg-brand" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.role}{" "}
                  <span className="text-brand">@ {entry.company}</span>
                </h3>
                <span className="text-sm text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              {entry.location ? (
                <div className="mt-1 text-sm text-muted-foreground">
                  {entry.location}
                </div>
              ) : null}
              <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                {entry.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
