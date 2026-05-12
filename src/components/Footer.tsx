import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
        <p>
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p>
          Built with{" "}
          <a
            href="https://react.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground"
          >
            React
          </a>
          ,{" "}
          <a
            href="https://vite.dev"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground"
          >
            Vite
          </a>
          , and{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-foreground"
          >
            Tailwind
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
