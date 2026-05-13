import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Code2, Github, GitCommit, Linkedin, Mail, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

function CodeWindow() {
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (shown >= 9) return;
    const t = setTimeout(() => setShown((s) => s + 1), shown === 0 ? 600 : 260);
    return () => clearTimeout(t);
  }, [shown]);

  const Line = ({ n, children }: { n: number; children: React.ReactNode }) => (
    <div className="flex gap-4">
      <span className="w-4 shrink-0 select-none text-right text-xs leading-7 text-white/20">{n}</span>
      <span className="leading-7">{children}</span>
    </div>
  );
  const K = ({ c }: { c: string }) => <span className="text-violet-400">{c}</span>;
  const P = ({ c }: { c: string }) => <span className="text-sky-300">{c}</span>;
  const S = ({ c }: { c: string }) => <span className="text-emerald-400">{c}</span>;
  const B = ({ c }: { c: string }) => <span className="text-orange-400">{c}</span>;
  const M = ({ c }: { c: string }) => <span className="text-zinc-500">{c}</span>;

  return (
    <div className="w-[420px] overflow-hidden rounded-xl border border-white/10 bg-[#0d0f17] shadow-2xl shadow-brand/15">
      <div className="flex items-center gap-1.5 border-b border-white/5 bg-white/5 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-auto font-mono text-xs text-white/25">kwame.ts</span>
      </div>
      <div className="p-5 font-mono text-sm">
        {shown > 0 && <Line n={1}><K c="const " /><span className="text-white">developer</span><K c=" = {" /></Line>}
        {shown > 1 && <Line n={2}><P c="  name" /><M c=": " /><S c='"Kwame Essuman"' /><M c="," /></Line>}
        {shown > 2 && <Line n={3}><P c="  role" /><M c=": " /><S c='"AI Engineer"' /><M c="," /></Line>}
        {shown > 3 && <Line n={4}><P c="  location" /><M c=": " /><S c={"\"St. John's, NL\""} /><M c="," /></Line>}
        {shown > 4 && (
          <Line n={5}>
            <P c="  stack" /><M c=": [" /><S c='"React"' /><M c=", " /><S c='"Python"' /><M c=", " /><S c='"FastAPI"' /><M c="]," />
          </Line>
        )}
        {shown > 5 && <Line n={6}><P c="  available" /><M c=": " /><B c="true" /><M c="," /></Line>}
        {shown > 6 && <Line n={7}><K c="};" /></Line>}
        {shown > 7 && <Line n={8}><span /></Line>}
        {shown > 8 && <Line n={9}><M c="// Open to full-time opportunities 🚀" /></Line>}
        {shown < 9 && (
          <div className="flex gap-4">
            <span className="w-4 shrink-0 text-right text-xs leading-7 text-white/20">{shown + 1}</span>
            <span className="mt-2.5 h-4 w-2 animate-pulse rounded-sm bg-[hsl(192_100%_50%/0.7)]" />
          </div>
        )}
      </div>
    </div>
  );
}

const roles = [
  "Software Engineer",
  "Full-Stack Developer",
  "Frontend Specialist",
  "Open Source Builder",
];

function Typewriter() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = roles[idx];
    if (!deleting && text.length < target.length) {
      const t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
      return () => clearTimeout(t);
    }
    if (!deleting && text.length === target.length) {
      const t = setTimeout(() => setDeleting(true), 2200);
      return () => clearTimeout(t);
    }
    if (deleting && text.length > 0) {
      const t = setTimeout(() => setText(target.slice(0, text.length - 1)), 40);
      return () => clearTimeout(t);
    }
    if (deleting && text.length === 0) {
      setDeleting(false);
      setIdx((i) => (i + 1) % roles.length);
    }
  }, [text, deleting, idx]);

  return (
    <span className="text-brand">
      {text}
      <span className="ml-0.5 inline-block h-[0.85em] w-[3px] translate-y-[1px] rounded-sm bg-brand align-middle animate-pulse" />
    </span>
  );
}

const stats = [
  { icon: Briefcase, value: "2+", label: "Years exp." },
  { icon: Code2, value: "12+", label: "Projects" },
  { icon: Star, value: "20+", label: "Technologies" },
  { icon: GitCommit, value: "1K+", label: "Commits" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-border">
      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(240 5.9% 60% / 0.13) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)",
        }}
      />

      {/* Glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-48 w-[700px] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-24 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Available for new opportunities
          </span>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-tight">
            Hi, I'm{" "}
            <span className="text-brand">{profile.name}</span>.
            <br />
            <Typewriter />
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-1 flex flex-wrap gap-3">
            <a
              href="#projects"
              className={buttonVariants({ variant: "brand", size: "lg" })}
            >
              View my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <Mail className="h-4 w-4" />
              Get in touch
            </a>
          </div>

          <div className="flex items-center gap-1 text-muted-foreground">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-md p-2 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-md p-2 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-md p-2 transition-colors hover:bg-accent hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.3 }}
            className="mt-2 grid grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1 rounded-xl border border-border bg-card/70 px-3 py-4 text-center backdrop-blur"
              >
                <Icon className="mb-1 h-4 w-4 text-brand" />
                <span className="text-xl font-bold tracking-tight">{value}</span>
                <span className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Code window */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 }}
          className="hidden shrink-0 lg:block"
        >
          <CodeWindow />
        </motion.div>
      </div>
    </section>
  );
}
