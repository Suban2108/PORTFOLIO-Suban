"use client";
import { useState, useEffect } from "react";
import {   } from "./ThemeToggleButton";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "LeetCode", href: "#leetcode" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
      style={scrolled ? { background: "var(--nav-bg)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => scrollTo(e, "#hero")}
          className="font-display font-bold text-lg gradient-text tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}
        >
          Abdul Suban
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={`relative px-3 py-1.5 text-sm rounded-lg transition-all duration-200 font-medium ${
                  isActive
                    ? "text-[var(--text)]"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "rgba(99,102,241,0.15)",
                      border: "1px solid rgba(99,102,241,0.3)",
                    }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button
            className="text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-0.5 bg-current transition-transform duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t border-[var(--border)] backdrop-blur-xl"
          style={{ background: "var(--nav-bg-mobile)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="block px-6 py-3 text-sm text-[var(--text-muted)] hover:text-[var(--text)] hover:bg-[var(--surface)] transition-all border-b border-[var(--border)] last:border-0"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
