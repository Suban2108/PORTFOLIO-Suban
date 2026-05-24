"use client";
import { useState, useEffect } from "react";
import { personal } from "../../lib/data";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: personal.github,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: personal.linkedin,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "LeetCode",
    href: personal.leetcode,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = personal.roles[roleIndex];
    let timeout;

    if (!isDeleting && displayed.length < role.length) {
      timeout = setTimeout(
        () => setDisplayed(role.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!isDeleting && displayed.length === role.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow blobs */}
      {/* <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full opacity-10 animate-pulse2"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 70%)", filter: "blur(40px)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full opacity-8 animate-pulse2"
        style={{
          background: "radial-gradient(circle, #06b6d4, transparent 70%)",
          filter: "blur(60px)",
          animationDelay: "1.5s",
        }}
      /> */}


      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Left — Text */}
        <div className="flex-1 text-center lg:text-left">
          {/* Status badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.08)] mb-8 text-sm text-[var(--accent-soft)]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for opportunities
          </div>

          {/* Name */}
          <h1
            className="text-5xl lg:text-7xl font-extrabold leading-none tracking-tight mb-4"
            style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800 }}
          >
            <span className="text-[var(--text)]">Abdul </span>
            <span className="gradient-text">Suban</span>
          </h1>

          {/* Typewriter role */}
          <div
            className="flex items-center justify-center lg:justify-start gap-1 text-xl lg:text-2xl text-[var(--text-muted)] mb-6 h-9"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span className="text-[var(--accent-2)]">&gt;</span>
            <span className="text-[var(--text)]">{displayed}</span>
            <span className="cursor" />
          </div>

          {/* Summary */}
          <p className="text-[var(--text-muted)] text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            {personal.summary}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                boxShadow: "0 0 20px rgba(99,102,241,0.3)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download Resume
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                border: "1px solid rgba(99,102,241,0.4)",
                color: "var(--accent-soft)",
                background: "rgba(99,102,241,0.08)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* Social icons */}
          <div className="flex gap-4 justify-center lg:justify-start">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-10 h-10 rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:text-[var(--text)] hover:border-[rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Orbit visual */}
        <div className="flex-shrink-0 w-72 h-72 lg:w-80 lg:h-80 relative flex items-center justify-center">
          {/* Central avatar */}
          <div
            className="w-32 h-32 rounded-full flex items-center justify-center text-4xl font-extrabold relative z-10"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              background:
                "linear-gradient(135deg, rgba(99,102,241,0.2), rgba(6,182,212,0.2))",
              border: "2px solid rgba(99,102,241,0.4)",
              boxShadow: "0 0 40px rgba(99,102,241,0.2)",
            }}
          >
            <span className="gradient-text">AS</span>
          </div>

          {/* Orbit rings */}
          {[90, 120, 140].map((r, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: r * 2,
                height: r * 2,
              }}
            />
          ))}

          {/* Orbiting tech dots */}
          {[
            {
              label: "React",
              color: "#61dafb",
              rgb: "97,218,251",
            },
            {
              label: "Node",
              color: "#68a063",
              rgb: "104,160,99",
            },
            {
              label: "Python",
              color: "#a78bfa",
              rgb: "167,139,250",
            },
            {
              label: "C++",
              color: "#f26767",
              rgb: "242,103,103",
            },
            {
              label: "Next",
              color: "#12848f",
              rgb: "18, 132, 143",
            },
            {
              label: "JS",
              color: "#3178c6",
              rgb: "49,120,198",
            },
          ].map((item, index, arr) => {
            const angle = (360 / arr.length) * index;
            const radius = 120;

            return (
              <div
                key={item.label}
                className="absolute"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  animation: "orbit 12s linear infinite",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: `rotate(${angle}deg)`,
                    position: "relative",
                  }}
                >
                  <div
                    className="absolute w-11 h-11 rounded-full flex items-center justify-center text-[10px] font-semibold border backdrop-blur-sm"
                    style={{
                      top: "-22px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: `rgba(${item.rgb},0.15)`,
                      border: `1px solid ${item.color}40`,
                      color: item.color,
                      boxShadow: `0 0 20px rgba(${item.rgb},0.2)`,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
