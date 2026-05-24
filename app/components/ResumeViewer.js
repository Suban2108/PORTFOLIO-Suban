"use client";
import { personal } from "../../lib/data";

export default function ResumeViewer() {
  return (
    <section id="resume" className="py-20 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          My Resume
        </h2>
        <p className="text-[var(--text-muted)] mt-2 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          View directly or download a copy
        </p>
      </div>

      {/* PDF Embed */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ border: "1px solid rgba(99,102,241,0.3)", background: "var(--surface)" }}
      >
        {/* Toolbar */}
        <div
          className="flex items-center justify-between px-5 py-3 border-b"
          style={{ borderColor: "rgba(99,102,241,0.2)" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
              ))}
            </div>
            <span className="text-xs text-[var(--text-muted)]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
              resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[var(--text-muted)] hover:text-[var(--text)] transition-all duration-200"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open
            </a>
            <a
              href={personal.resumeUrl}
              download
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative" style={{ height: "80vh", minHeight: "600px" }}>
          <iframe
            src={`${personal.resumeUrl}#toolbar=0&navpanes=0`}
            className="w-full h-full"
            title="Abdul Suban Resume"
            style={{ background: "#fff" }}
          />
          {/* Fallback overlay for browsers that block PDF embeds */}
          <noscript>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4" style={{ background: "var(--surface)" }}>
              <p className="text-[var(--text-muted)] text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                PDF preview not available in your browser.
              </p>
              <a
                href={personal.resumeUrl}
                download
                className="px-5 py-2 rounded-lg text-sm text-white"
                style={{ background: "linear-gradient(135deg, #6366f1, #06b6d4)" }}
              >
                Download Resume
              </a>
            </div>
          </noscript>
        </div>
      </div>
    </section>
  );
}