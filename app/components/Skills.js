"use client";
import { useState, useEffect, useRef } from "react";
import { skills } from "../../lib/data";

const ICONS = {
  Code2: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Layout: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M3 9h18M9 21V9" />
    </svg>
  ),
  Server: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <rect x="2" y="3" width="20" height="7" rx="1" strokeWidth={2} />
      <rect x="2" y="14" width="20" height="7" rx="1" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M6 7h.01M6 18h.01" />
    </svg>
  ),
  Database: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <ellipse cx="12" cy="5" rx="9" ry="3" strokeWidth={2} />
      <path strokeLinecap="round" strokeWidth={2} d="M21 12c0 1.657-4.03 3-9 3S3 13.657 3 12" />
      <path strokeLinecap="round" strokeWidth={2} d="M3 5v14c0 1.657 4.03 3 9 3s9-1.343 9-3V5" />
    </svg>
  ),
  Wrench: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Brain: () => (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
};

function SkillBar({ name, level, visible }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm text-[var(--text)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          {name}
        </span>
        <span className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
          {level}%
        </span>
      </div>
      <div className="h-1 bg-[var(--border)] rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: visible ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const categories = ["All", ...skills.map((s) => s.category)];
  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="py-10 max-w-7xl mx-auto px-6" ref={ref}>
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Tech Stack &amp; Proficiency
        </h2>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              active === cat
                ? "text-[var(--text)]"
                : "text-[var(--text-muted)] hover:text-[var(--text)]"
            }`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              background: active === cat ? "rgba(99,102,241,0.2)" : "var(--surface)",
              border: active === cat ? "1px solid rgba(99,102,241,0.5)" : "1px solid var(--border)",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((group) => {
          const Icon = ICONS[group.icon] || ICONS["Code2"];
          return (
            <div key={group.category} className="glow-card p-6">
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.15)", color: "var(--accent-soft)" }}
                >
                  <Icon />
                </div>
                <h3 className="text-base font-600 text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
                  {group.category}
                </h3>
              </div>

              {/* Skill bars */}
              {group.items.map((item) => (
                <SkillBar key={item.name} name={item.name} level={item.level} visible={visible} />
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}