import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A little about me"
          description="A quick snapshot of who I am and what I care about."
        />

        <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            {profile.bio.split("\n\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <aside className="space-y-4 rounded-xl border border-border bg-card p-6 text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4 text-brand" />
              <span>{profile.location}</span>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Currently
              </div>
              <div className="mt-1 font-medium">{profile.title}</div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Focus
              </div>
              <div className="mt-1 font-medium">
                Frontend systems, design engineering, DX
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
