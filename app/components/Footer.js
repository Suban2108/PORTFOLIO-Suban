import { personal } from "../../lib/data";

export default function Footer() {
  return (
    <footer className="border-t py-8 px-6" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          © {new Date().getFullYear()} {personal.name} · Built with Next.js
        </p>
        <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          Designed &amp; Developed by{" "}
          <span className="gradient-text-2">{personal.name}</span>
        </p>
      </div>
    </footer>
  );
}