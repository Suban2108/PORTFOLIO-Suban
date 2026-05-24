"use client";
import { useState } from "react";
import { projects } from "../../lib/data";

const ICON_MAP = {
  Sprout: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 19V6m0 0C12 6 9 3 5 3c0 4 2 7 5 8m2-8c0 0 3-3 7-3 0 4-2 7-5 8"
      />
    </svg>
  ),
  ArrowLeftRight: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
      />
    </svg>
  ),
  HeartPulse: () => (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

function ProjectModal({ project, onClose }) {
  const Icon = ICON_MAP[project.icon] || ICON_MAP["Sprout"];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "var(--overlay)", backdropFilter: "blur(8px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{
          background: "var(--surface)",
          border: "1px solid rgba(99,102,241,0.3)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          style={{ background: "var(--bg)", border: "1px solid var(--border)" }}
        >
          ×
        </button>

        <div className="p-8">
          {/* Icon + title */}
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ background: `${project.color}20`, color: project.color }}
            >
              <Icon />
            </div>
            <div>
              <h3
                className="text-xl font-bold text-[var(--text)]"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: project.color,
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Period */}
          <p
            className="text-xs text-[var(--text-muted)] mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            {project.period}
          </p>

          {/* Description */}
          <p
            className="text-sm text-[var(--text-muted)] leading-relaxed mb-6"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            {project.description}
          </p>

          {/* Bullets */}
          <ul className="space-y-3 mb-6">
            {project.bullets.map((b, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: project.color }}
                />
                {b}
              </li>
            ))}
          </ul>

          {/* Tech */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-all"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
                GitHub
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-all"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-link-icon lucide-link"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
                Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("All");

  const allTech = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.tech))),
  ];
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section id="projects" className="py-10 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12">
        <h2
          className="text-3xl lg:text-4xl font-bold text-[var(--text)]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
        >
          Things I&apos;ve Built
        </h2>
      </div>

      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10 overflow-x-auto pb-2">
        {allTech.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
              filter === t
                ? "text-[var(--text)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              background:
                filter === t ? "rgba(99,102,241,0.2)" : "var(--surface)",
              border:
                filter === t
                  ? "1px solid rgba(99,102,241,0.5)"
                  : "1px solid var(--border)",
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filtered.map((p) => {
          const Icon = ICON_MAP[p.icon] || ICON_MAP["Sprout"];
          return (
            <div
              key={p.id}
              className="glow-card p-6 cursor-pointer flex flex-col relative overflow-hidden"
              onClick={() => setSelected(p)}
            >
              {/* Featured badge
              {p.featured && (
                <div
                  className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-xs"
                  style={{
                    background: "rgba(99,102,241,0.2)",
                    border: "1px solid rgba(99,102,241,0.4)",
                    color: "#a5b4fc",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Featured
                </div>
              )} */}

              {/* Color accent bar */}
              <div
                className="absolute top-[-5px] left-0 right-0 h-0.5"
                style={{
                  background: `linear-gradient(90deg, ${p.color}, transparent)`,
                }}
              />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${p.color}15`, color: p.color }}
              >
                <Icon />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-600 text-[var(--text)] mb-1"
                style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
              >
                {p.title}
              </h3>
              <p
                className="text-sm mb-3"
                style={{ color: p.color, fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.subtitle}
              </p>
              <p
                className="text-sm text-[var(--text-muted)] leading-relaxed mb-5 flex-1 line-clamp-3"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {p.description}
              </p>

              {/* Tech tags (first 4 only) */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag text-xs">
                    {t}
                  </span>
                ))}
                {p.tech.length > 4 && (
                  <span className="tech-tag text-xs">+{p.tech.length - 4}</span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                <span
                  className="text-xs text-[var(--text-muted)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {p.period}
                </span>
                <span
                  className="text-xs flex items-center gap-1"
                  style={{
                    color: p.color,
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  View details
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
