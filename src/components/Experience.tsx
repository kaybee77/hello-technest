import { motion } from "framer-motion";
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

        <ol className="relative border-l border-border pl-8">
          {experience.map((entry, i) => (
            <motion.li
              key={`${entry.role}-${entry.company}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
              className="mb-12 last:mb-0"
            >
              <span className="absolute -left-[7px] mt-2 h-3.5 w-3.5 rounded-full border-2 border-background bg-brand ring-4 ring-brand/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.role}{" "}
                  <span className="text-brand">@ {entry.company}</span>
                </h3>
                <span className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              {entry.location ? (
                <div className="mt-1 text-sm text-muted-foreground">
                  {entry.location}
                </div>
              ) : null}
              <ul className="mt-3 space-y-2">
                {entry.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
