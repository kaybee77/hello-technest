import { Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to interesting roles, freelance work, and friendly intros. The quickest way to reach me is email."
          className="items-center text-center [&>*]:mx-auto"
        />

        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className={buttonVariants({ variant: "brand", size: "lg" })}
          >
            <Mail className="h-4 w-4" />
            {profile.email}
          </a>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "outline", size: "lg" })}
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground">
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
            href={profile.socials.twitter}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Twitter / X"
            className="rounded-md p-2 hover:bg-accent hover:text-foreground"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
