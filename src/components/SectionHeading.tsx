import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 flex flex-col gap-3", className)}>
      <span className="text-sm font-medium uppercase tracking-widest text-brand">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
