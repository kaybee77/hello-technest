import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
      >
        <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-brand/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-24 sm:px-6 sm:py-28 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex max-w-2xl flex-col gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for new opportunities
          </span>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I'm <span className="text-brand">{profile.name}</span>.
            <br />
            {profile.title}.
          </h1>

          <p className="text-lg text-muted-foreground sm:text-xl">
            {profile.tagline}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
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

          <div className="mt-2 flex items-center gap-2 text-muted-foreground">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub"
              className="rounded-md p-2 hover:bg-accent hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn"
              className="rounded-md p-2 hover:bg-accent hover:text-foreground"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-md p-2 hover:bg-accent hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative hidden h-64 w-64 shrink-0 lg:block"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brand/40 to-brand/0 blur-2xl" />
          <div className="relative h-full w-full overflow-hidden rounded-full border border-border bg-card shadow-xl">
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
