import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Briefcase, Code2, Github, GitCommit, Linkedin, Mail, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

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

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
          className="relative hidden h-72 w-72 shrink-0 lg:block"
        >
          {/* Spinning decorative rings */}
          <div
            className="absolute -inset-4 animate-spin rounded-full border border-brand/20"
            style={{ animationDuration: "22s" }}
          />
          <div
            className="absolute -inset-8 animate-spin rounded-full border border-brand/10"
            style={{ animationDuration: "35s", animationDirection: "reverse" }}
          />

          <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-brand/40 to-brand/0 blur-2xl" style={{ animationDuration: "4s" }} />
          <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-brand/30 bg-card shadow-2xl shadow-brand/20">
            <img
              src={profile.avatarUrl}
              alt={profile.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
