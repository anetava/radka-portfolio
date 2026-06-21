'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const PROJECT_TYPES = [
  'Editorial Campaign',
  'Fine-Art Commission',
  'Brand Portrait Series',
  'Exhibition Documentation',
  'Personal Project / Collaboration',
  'Other',
];

const TIMELINES = ['ASAP', '1–3 months', '3–6 months', '6+ months', 'Flexible'];
const BUDGETS   = ['$2k – $5k', '$5k – $15k', '$15k – $50k', '$50k+', 'To discuss'];

export default function Manifesto() {
  const [form, setForm] = useState({
    name: '', email: '',
    projectType: '', timeline: '', budget: '', message: '',
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="manifesto" className="bg-oyster">
      {/* ── Manifesto quote ── */}
      <div className="px-8 md:px-14 pt-28 pb-20 max-w-[1380px] mx-auto border-b border-obsidian/8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-muted mb-10">
            Philosophy
          </p>
          <blockquote className="font-display text-3xl md:text-5xl lg:text-6xl font-light italic text-obsidian leading-[1.15] max-w-5xl text-balance">
            &ldquo;I don&rsquo;t take photographs. I negotiate with light until it agrees to remember something for me.&rdquo;
          </blockquote>
          <p className="font-body text-xs tracking-[0.28em] uppercase text-muted mt-8">
            — Radka Stolariková
          </p>
        </motion.div>
      </div>

      {/* ── Contact / Booking ── */}
      <div
        id="contact"
        className="px-8 md:px-14 pt-20 pb-28 max-w-[1380px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-28 items-start"
      >
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-muted mb-5">
            Bookings & Inquiries
          </p>
          <h2 className="font-display text-[11vw] md:text-[7vw] font-light text-obsidian leading-[0.9] tracking-tight mb-10">
            Let&rsquo;s<br />create<br /><span className="italic text-gold">together.</span>
          </h2>
          <div className="space-y-1.5">
            <p className="font-body text-sm text-muted">studio@radkastolarikova.com</p>
            <p className="font-body text-sm text-muted">Prague, Czech Republic</p>
            <p className="font-body text-sm text-muted">Available worldwide</p>
          </div>

          {/* Social links */}
          <div className="flex gap-6 mt-10">
            {['Instagram', 'Behance', '500px'].map(s => (
              <a
                key={s}
                href="#"
                className="font-body text-[10px] tracking-[0.28em] uppercase text-muted hover:text-obsidian transition-colors border-b border-transparent hover:border-obsidian pb-0.5"
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {sent ? (
            <div className="py-16 text-center">
              <p className="font-display text-4xl font-light italic text-obsidian mb-3">
                Message received.
              </p>
              <p className="font-body text-sm text-muted">I&rsquo;ll be in touch within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <Field
                label="Your Name"
                value={form.name}
                onChange={v => setForm({ ...form, name: v })}
                required
              />
              <Field
                label="Email Address"
                type="email"
                value={form.email}
                onChange={v => setForm({ ...form, email: v })}
                required
              />

              {/* Project type */}
              <div>
                <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-3">
                  Project Type
                </label>
                <select
                  value={form.projectType}
                  onChange={e => setForm({ ...form, projectType: e.target.value })}
                  className="w-full border-b border-obsidian/15 bg-transparent pb-3 font-body text-sm text-obsidian focus:outline-none focus:border-obsidian appearance-none"
                  required
                >
                  <option value="" disabled>Select a project type…</option>
                  {PROJECT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>

              {/* Timeline + Budget */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-3">
                    Estimated Timeline
                  </label>
                  <select
                    value={form.timeline}
                    onChange={e => setForm({ ...form, timeline: e.target.value })}
                    className="w-full border-b border-obsidian/15 bg-transparent pb-3 font-body text-sm text-obsidian focus:outline-none focus:border-obsidian appearance-none"
                  >
                    <option value="" disabled>When?</option>
                    {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-3">
                    Budget Range
                  </label>
                  <select
                    value={form.budget}
                    onChange={e => setForm({ ...form, budget: e.target.value })}
                    className="w-full border-b border-obsidian/15 bg-transparent pb-3 font-body text-sm text-obsidian focus:outline-none focus:border-obsidian appearance-none"
                  >
                    <option value="" disabled>Budget?</option>
                    {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
              </div>

              <Field
                label="Message (optional)"
                value={form.message}
                onChange={v => setForm({ ...form, message: v })}
                multiline
              />

              <button
                type="submit"
                className="group flex items-center gap-3 bg-obsidian text-oyster px-8 py-4 font-body text-[10px] tracking-[0.3em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
              >
                Send Inquiry
                <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* ── Footer ── */}
      <div className="border-t border-obsidian/8 px-8 md:px-14 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl font-light text-obsidian/40 tracking-tight">
          R<span className="italic text-gold">S</span>
        </span>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">
          © 2024 Radka Stolariková — All rights reserved
        </p>
        <p className="font-body text-[10px] tracking-[0.2em] uppercase text-muted">
          Prague · New York
        </p>
      </div>
    </section>
  );
}

// ─── Field helper ─────────────────────────────────────────────────────────────
function Field({
  label, value, onChange, type = 'text', required, multiline,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; multiline?: boolean;
}) {
  const base = 'w-full border-b border-obsidian/15 bg-transparent pb-3 font-body text-sm text-obsidian placeholder:text-obsidian/25 focus:outline-none focus:border-obsidian resize-none';
  return (
    <div>
      <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-3">
        {label}
      </label>
      {multiline ? (
        <textarea
          rows={3}
          value={value}
          onChange={e => onChange(e.target.value)}
          className={base}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
          required={required}
          className={base}
        />
      )}
    </div>
  );
}
