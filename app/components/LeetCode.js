"use client";
import { useEffect, useState, useRef } from "react";
import { personal } from "../../lib/data";

function AnimatedNumber({ target, visible, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible || !target) return;
    let start = 0;
    const duration = 1500;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setVal(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
      else setVal(target);
    };
    requestAnimationFrame(step);
  }, [visible, target]);
  return <>{val.toLocaleString()}{suffix}</>;
}

function RingChart({ solved, total, color, label, size = 90 }) {
  const radius = (size - 12) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? Math.min(solved / total, 1) : 0;
  const dash = pct * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--border)" strokeWidth={6} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          style={{ transition: "stroke-dasharray 1.5s cubic-bezier(0.4,0,0.2,1)" }}
        />
      </svg>
      <div className="text-center -mt-1">
        <p className="text-lg font-600 text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>{solved}</p>
        <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{label}</p>
      </div>
    </div>
  );
}

export default function LeetCode() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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

  useEffect(() => {
    fetch("/api/leetcode")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) setError(d.error);
        else setData(d);
      })
      .catch(() => setError("Failed to load LeetCode data."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="leetcode" className="py-10 max-w-7xl mx-auto px-6" ref={ref}>
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Competitive Programming
        </h2>
        <p className="text-[var(--text-muted)] mt-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Live data pulled directly from LeetCode · refreshes every hour
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="glow-card p-6 h-32 shimmer" />
          ))}
        </div>
      )}

      {error && (
        <div className="glow-card p-8 text-center">
          <p className="text-[var(--text-muted)] text-sm mb-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {error}
          </p>
          <a
            href={personal.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--accent-soft)] underline underline-offset-4"
          >
            View LeetCode Profile →
          </a>
        </div>
      )}

      {data && (
        <div className="space-y-6">
          {/* Top stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { label: "Problems Solved", value: data.totalSolved, icon: "✓", color: "#6366f1" },
              { label: "Global Ranking", value: data.ranking, icon: "#", color: "#06b6d4" },
              { label: "Contest Rating", value: data.contestRating || "—", icon: "★", color: "#f59e0b", noAnim: !data.contestRating },
              { label: "Contests Attended", value: data.contestsAttended, icon: "⚡", color: "#10b981" },
            ].map((stat, i) => (
              <div key={i} className="glow-card p-6 text-center">
                <div
                  className="text-2xl mb-2"
                  style={{ color: stat.color }}
                >
                  {stat.icon}
                </div>
                <p
                  className="text-3xl font-bold text-[var(--text)] mb-1"
                  style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
                >
                  {stat.noAnim ? stat.value : <AnimatedNumber target={typeof stat.value === "number" ? stat.value : 0} visible={visible} />}
                </p>
                <p className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Difficulty breakdown */}
          <div className="glow-card p-8">
            <h3 className="text-lg font-600 text-[var(--text)] mb-8" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>
              Difficulty Breakdown
            </h3>
            <div className="flex flex-col lg:flex-row items-center gap-10">
              {/* Ring charts */}
              <div className="flex gap-10 flex-shrink-0">
                <RingChart solved={data.easySolved} total={data.totalEasy} color="#10b981" label="Easy" />
                <RingChart solved={data.mediumSolved} total={data.totalMedium} color="#f59e0b" label="Medium" />
                <RingChart solved={data.hardSolved} total={data.totalHard} color="#ef4444" label="Hard" />
              </div>

              {/* Bar breakdown */}
              <div className="flex-1 w-full space-y-4">
                {[
                  { label: "Easy", solved: data.easySolved, total: data.totalEasy, color: "#10b981", bg: "rgba(16,185,129,0.15)" },
                  { label: "Medium", solved: data.mediumSolved, total: data.totalMedium, color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
                  { label: "Hard", solved: data.hardSolved, total: data.totalHard, color: "#ef4444", bg: "rgba(239,68,68,0.15)" },
                ].map((d) => {
                  const pct = d.total > 0 ? Math.round((d.solved / d.total) * 100) : 0;
                  return (
                    <div key={d.label}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="px-2 py-0.5 rounded text-xs font-medium"
                            style={{ background: d.bg, color: d.color, fontFamily: "'JetBrains Mono', monospace" }}
                          >
                            {d.label}
                          </span>
                        </div>
                        <span className="text-sm text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          {d.solved} / {d.total}
                          <span className="ml-2 text-xs opacity-60">({pct}%)</span>
                        </span>
                      </div>
                      <div className="h-2 bg-[var(--border)] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: visible ? `${pct}%` : "0%",
                            background: d.color,
                            transitionDelay: "0.3s",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Total */}
                <div className="pt-4 mt-4 border-t border-[var(--border)] flex justify-between items-center">
                  <span className="text-sm font-medium text-[var(--text)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>Total Solved</span>
                  <span className="text-xl font-bold gradient-text" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
                    {data.totalSolved}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile link */}
          <div className="text-center">
            <a
              href={personal.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[var(--text-muted)] hover:text-[var(--accent-soft)] transition-colors duration-200"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              View full profile on LeetCode
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            {data.fetchedAt && (
              <p className="text-xs text-[var(--text-muted)] mt-1 opacity-60" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                Last updated: {new Date(data.fetchedAt).toLocaleTimeString()}
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}