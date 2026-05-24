"use client";
import { certifications, achievements } from "../../lib/data";

const ICONS = {
  GraduationCap: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  ),
  Bot: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="11" width="18" height="10" rx="2" strokeWidth={2} />
      <circle cx="12" cy="5" r="2" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M12 7v4M8 15h.01M16 15h.01" />
    </svg>
  ),
  Trophy: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  ),
  Star: () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  ),
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Certifications &amp; Achievements
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Certifications column */}
        <div>
          <h3 className="text-sm font-medium text-[var(--text-muted)] mb-5 flex items-center gap-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="w-4 h-px bg-[var(--accent-2)]" />
            Certifications
          </h3>
          <div className="space-y-4">
            {certifications.map((cert, i) => {
              const Icon = ICONS[cert.icon] || ICONS["GraduationCap"];
              return (
                <div key={i} className="glow-card p-5 flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${cert.color}15`, color: cert.color }}
                  >
                    <Icon />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-600 text-[var(--text)] mb-0.5" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] mb-2" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {cert.issuer} · {cert.year}
                    </p>
                    {cert.credentialId && (
                      <p className="text-xs font-mono" style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                        ID: {cert.credentialId}
                      </p>
                    )}
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements column */}
        <div>
          <h3 className="text-sm font-medium text-[var(--text-muted)] mb-5 flex items-center gap-2"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            <span className="w-4 h-px bg-[var(--accent-2)]" />
            Achievements
          </h3>
          <div className="space-y-4">
            {achievements.map((ach, i) => {
              const Icon = ICONS[ach.icon] || ICONS["Trophy"];
              return (
                <div key={i} className="glow-card p-5 flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${ach.color}15`, color: ach.color }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-sm font-600 text-[var(--text)] mb-1.5" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
                      {ach.title}
                    </h4>
                    <p className="text-xs text-[var(--text-muted)] leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                      {ach.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}