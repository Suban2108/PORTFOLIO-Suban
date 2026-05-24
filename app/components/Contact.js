"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { personal } from "../../lib/data";

const SOCIAL = [
  { label: "GitHub", href: personal.github, color: "#e2e2f0" },
  { label: "LinkedIn", href: personal.linkedin, color: "#0ea5e9" },
  { label: "LeetCode", href: personal.leetcode, color: "#f59e0b" },
];

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey ||
        serviceId === "your_service_id_here") {
      setStatus("error");
      setError("EmailJS is not configured yet. Please update your .env.local file.");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("error");
      setError("Message failed to send. Please try again or email me directly.");
    }
  };

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Get In Touch
        </h2>
        <p className="text-[var(--text-muted)] mt-3 max-w-md mx-auto text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi — my inbox is always open!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-4xl mx-auto">
        {/* Info panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Direct contact */}
          {[
            {
              label: "Email",
              value: personal.email,
              href: `mailto:${personal.email}`,
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
            },
            {
              label: "Phone",
              value: personal.phone,
              href: `tel:${personal.phone}`,
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
            },
            {
              label: "Location",
              value: personal.location,
              href: null,
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <div key={item.label} className="glow-card p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-[var(--accent-soft)]"
                style={{ background: "rgba(99,102,241,0.15)" }}>
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-[var(--text-muted)] mb-0.5" style={{ fontFamily: "'JetBrains Mono', monospace" }}>{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="text-sm text-[var(--text)] hover:text-[var(--accent-soft)] transition-colors" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-[var(--text)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center py-2.5 rounded-lg text-xs font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  color: "var(--text-muted)",
                  fontFamily: "'DM Sans', sans-serif",
                }}>
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-3 glow-card p-6 lg:p-8">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-12">
              <div className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "rgba(16,185,129,0.15)", border: "2px solid rgba(16,185,129,0.4)" }}>
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg font-600 text-[var(--text)]" style={{ fontFamily: "'Syne', sans-serif", fontWeight: 600 }}>Message Sent!</h4>
              <p className="text-sm text-center text-[var(--text-muted)]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Thanks for reaching out. I&apos;ll get back to you shortly.
              </p>
              <button onClick={() => setStatus("idle")}
                className="text-xs text-[var(--accent-soft)] underline underline-offset-4" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Send another message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-xs text-[var(--text-muted)] mb-1.5"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about the opportunity, project, or just say hello..."
                  className="form-input resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-red-400 p-3 rounded-lg"
                  style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", fontFamily: "'DM Sans', sans-serif" }}>
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100 flex items-center justify-center gap-2"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #06b6d4)",
                  boxShadow: "0 0 20px rgba(99,102,241,0.25)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {status === "sending" ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}