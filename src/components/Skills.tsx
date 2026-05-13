import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/data/skills";

export function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

        <div ref={ref} className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1, ease: "easeOut" }}
              className="rounded-xl border border-border bg-card p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                {group.title}
              </h3>
              <div className="space-y-4">
                {group.items.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{
                          duration: 0.9,
                          delay: gi * 0.1 + 0.25,
                          ease: "easeOut",
                        }}
                        className="h-full rounded-full bg-brand"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
