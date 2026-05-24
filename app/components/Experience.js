"use client";
import { experience } from "../../lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-10 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12">
        <h2
          className="text-3xl lg:text-4xl font-bold text-[var(--text)]"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
        >
          Work Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[rgba(99,102,241,0.6)] via-[rgba(6,182,212,0.4)] to-transparent hidden md:block" />

        {experience.map((exp, idx) => (
          <div key={idx} className="relative flex gap-8 mb-10 group">
            {/* Timeline dot */}
            <div className="hidden md:flex flex-col items-center">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 transition-all duration-300 group-hover:scale-110"
                style={{
                  background: "linear-gradient(135deg, rgba(99,102,241,0.3), rgba(6,182,212,0.2))",
                  border: "2px solid rgba(99,102,241,0.5)",
                }}
              >
                <svg className="w-5 h-5 text-[var(--accent-soft)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>

            {/* Content card */}
            <div className="glow-card flex-1 p-6 lg:p-8">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{
                        background: "rgba(16,185,129,0.15)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        color: "#6ee7b7",
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {exp.type}
                    </span>
                  </div>
                  <h3
                    className="text-xl font-600 text-[var(--text)] mb-1"
                    style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}
                  >
                    {exp.role}
                  </h3>
                  <p className="text-[var(--accent-2)] text-sm font-medium" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {exp.company}
                  </p>
                  <p className="text-[var(--text-muted)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {exp.location}
                  </p>
                </div>
                <div
                  className="flex-shrink-0 px-4 py-2 rounded-lg text-sm text-[var(--text-muted)] whitespace-nowrap"
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "12px",
                  }}
                >
                  {exp.period}
                </div>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mb-6">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-[var(--text-muted)] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "var(--accent-2)" }}
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}