"use client";
import { education } from "../../lib/data";

export default function Education() {
  return (
    <section id="education" className="py-10 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Academic Background
        </h2>
      </div>

      <div className="space-y-5">
        {education.map((edu, i) => (
          <div key={i} className="glow-card p-6 lg:p-8 flex flex-col sm:flex-row gap-5 items-start">
            {/* Icon */}
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              <svg className="w-5 h-5 text-[var(--accent-soft)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>

            {/* Details */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                <h3 className="text-lg font-600 text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
                  {edu.degree}
                </h3>
                <div
                  className="flex-shrink-0 px-3 py-1 rounded-lg text-xs text-[var(--text-muted)]"
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {edu.period}
                </div>
              </div>
              <p className="text-[var(--accent-2)] text-sm font-medium mb-0.5" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {edu.institution}
              </p>
              <p className="text-[var(--text-muted)] text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {edu.affiliation}
              </p>
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: "rgba(16,185,129,0.12)",
                  border: "1px solid rgba(16,185,129,0.3)",
                  color: "#6ee7b7",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {edu.grade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}