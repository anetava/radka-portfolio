'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface InquirySlideOverProps {
  open: boolean;
  onClose: () => void;
  photoTitle?: string;
}

const FRAME_SIZES = ['30×40 cm', '50×70 cm', '70×100 cm', '100×140 cm'];

export default function InquirySlideOver({ open, onClose, photoTitle }: InquirySlideOverProps) {
  const [form, setForm] = useState({
    name: '', email: '', frameSize: '50×70 cm', city: '', notes: '',
  });
  const [sent, setSent] = useState(false);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[300] bg-obsidian/70 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            key="panel"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 32, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-[440px] z-[310] bg-oyster overflow-y-auto shadow-2xl"
          >
            <div className="p-10">
              {/* Header */}
              <div className="flex items-start justify-between mb-10">
                <div>
                  <p className="font-body text-[9px] tracking-[0.4em] uppercase text-muted mb-2">
                    Fine-Art Print Inquiry
                  </p>
                  <h3 className="font-display text-2xl font-light text-obsidian leading-snug">
                    {photoTitle ? (
                      <><span className="italic">{photoTitle}</span><br />Limited Edition Print</>
                    ) : (
                      'Limited Edition Print'
                    )}
                  </h3>
                </div>
                <button onClick={onClose} className="group ml-4 flex-shrink-0">
                  <X className="w-5 h-5 text-obsidian/40 group-hover:text-obsidian transition-colors" />
                </button>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <p className="font-display text-4xl font-light italic text-obsidian mb-3">
                    Inquiry received.
                  </p>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    Thank you. I will respond within 2 business days with availability and pricing.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-8 font-body text-[10px] tracking-[0.3em] uppercase text-muted hover:text-obsidian transition-colors"
                  >
                    Close
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <SlideField
                    label="Full Name"
                    value={form.name}
                    onChange={v => setForm({ ...form, name: v })}
                    required
                  />
                  {/* Email */}
                  <SlideField
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={v => setForm({ ...form, email: v })}
                    required
                  />

                  {/* Frame size */}
                  <div>
                    <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-4">
                      Preferred Frame Size
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {FRAME_SIZES.map(size => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => setForm({ ...form, frameSize: size })}
                          className={`py-3.5 text-center font-body text-xs transition-all duration-200 ${
                            form.frameSize === size
                              ? 'bg-obsidian text-oyster'
                              : 'border border-obsidian/15 text-obsidian hover:border-obsidian/40'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Shipping city */}
                  <SlideField
                    label="Shipping City / Country"
                    value={form.city}
                    onChange={v => setForm({ ...form, city: v })}
                    required
                  />

                  {/* Notes */}
                  <SlideField
                    label="Additional Notes (optional)"
                    value={form.notes}
                    onChange={v => setForm({ ...form, notes: v })}
                    multiline
                  />

                  {/* Fine print */}
                  <p className="font-body text-[10px] text-muted/70 leading-relaxed">
                    All prints are produced on Hahnemühle Photo Rag 308gsm. Editions of 5 + 2 AP, hand-signed.
                    International shipping available.
                  </p>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-obsidian text-oyster py-4 font-body text-[10px] tracking-[0.35em] uppercase hover:bg-gold hover:text-obsidian transition-all duration-300"
                  >
                    Submit Inquiry
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SlideField({
  label, value, onChange, type = 'text', required, multiline,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; multiline?: boolean;
}) {
  const cls = 'w-full border-b border-obsidian/15 bg-transparent pb-3 font-body text-sm text-obsidian focus:outline-none focus:border-obsidian transition-colors placeholder:text-obsidian/20 resize-none';
  return (
    <div>
      <label className="font-body text-[10px] tracking-[0.3em] uppercase text-muted block mb-3">
        {label}
      </label>
      {multiline
        ? <textarea rows={3} value={value} onChange={e => onChange(e.target.value)} className={cls} />
        : <input type={type} value={value} onChange={e => onChange(e.target.value)} required={required} className={cls} />
      }
    </div>
  );
}
