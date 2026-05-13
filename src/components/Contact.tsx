import { useState } from "react";
import { CheckCircle, Download, Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";

const inputClass =
  "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-brand focus:ring-1 focus:ring-brand";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Open to interesting roles, freelance work, and friendly intros."
          className="items-center text-center [&>*]:mx-auto"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          {/* Left: quick links */}
          <div className="flex flex-col gap-4">
            <p className="text-sm leading-relaxed text-muted-foreground">
              The quickest way to reach me is email. I try to respond within 24
              hours.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className={
                buttonVariants({ variant: "brand", size: "lg" }) +
                " w-full justify-center"
              }
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer noopener"
              className={
                buttonVariants({ variant: "outline", size: "lg" }) +
                " w-full justify-center"
              }
            >
              <Download className="h-4 w-4" />
              Download résumé
            </a>
            <div className="flex items-center justify-center gap-1 pt-2 text-muted-foreground">
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
                href={profile.socials.twitter}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter / X"
                className="rounded-md p-2 transition-colors hover:bg-accent hover:text-foreground"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right: form */}
          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, name: e.target.value }))
                  }
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, email: e.target.value }))
                  }
                  placeholder="your@email.com"
                  className={inputClass}
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                placeholder="What's on your mind?"
                className={inputClass + " resize-none"}
              />
            </div>
            <button
              type="submit"
              className={buttonVariants({ variant: "brand" }) + " w-full"}
            >
              {sent ? (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Opening email client…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
