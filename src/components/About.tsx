import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Briefcase, Code2, MapPin, Star, Users } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { profile } from "@/data/profile";

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: number;
  suffix: string;
  active: boolean;
}

function StatCard({ icon: Icon, label, value, suffix, active }: StatCardProps) {
  const count = useCountUp(value, 1200, active);
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand/10 text-brand">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-3xl font-bold tracking-tight">
        {count}
        {suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
    </div>
  );
}

const statsData = [
  { icon: Briefcase, label: "Years Experience", value: 2, suffix: "+" },
  { icon: Code2, label: "Projects Shipped", value: 12, suffix: "+" },
  { icon: Star, label: "Technologies", value: 20, suffix: "+" },
  { icon: Users, label: "Engineers Mentored", value: 4, suffix: "" },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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

        <div ref={ref} className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {statsData.map((stat) => (
            <StatCard key={stat.label} {...stat} active={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
