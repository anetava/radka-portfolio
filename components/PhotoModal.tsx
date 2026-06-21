'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Camera, MapPin, Calendar } from 'lucide-react';
import { Photo, SERIES } from '@/lib/data';

interface PhotoModalProps {
  photo: Photo | null;
  onClose: () => void;
  onInquire: () => void;
}

export default function PhotoModal({ photo, onClose, onInquire }: PhotoModalProps) {
  const series = photo ? SERIES.find(s => s.id === photo.seriesId) : null;

  // Close on Escape
  useEffect(() => {
    if (!photo) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [photo, onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = photo ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [photo]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          key="modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[200] bg-obsidian flex flex-col md:flex-row"
        >
          {/* ── Close button ── */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 group flex items-center gap-2"
          >
            <span className="font-body text-[9px] tracking-[0.3em] uppercase text-oyster/40 group-hover:text-oyster transition-colors">
              Close
            </span>
            <X className="w-4 h-4 text-oyster/40 group-hover:text-oyster transition-colors" />
          </button>

          {/* ── Photo ── */}
          <motion.div
            initial={{ scale: 0.97, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 relative min-h-[55vh] md:min-h-0"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className={`object-contain ${series?.id === 'solitude' ? 'grayscale' : ''}`}
              sizes="(max-width: 768px) 100vw, 65vw"
              priority
            />
          </motion.div>

          {/* ── Metadata panel ── */}
          <motion.aside
            initial={{ x: 60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 60, opacity: 0 }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full md:w-[340px] flex-shrink-0 bg-[#0A0A0B] border-t md:border-t-0 md:border-l border-oyster/6 flex flex-col justify-between p-8 md:p-12"
          >
            <div>
              {/* Series badge */}
              <p className="font-body text-[9px] tracking-[0.38em] uppercase text-gold mb-2">
                {series?.number} — {series?.title}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-light text-oyster mb-2 leading-tight">
                {photo.title}
              </h2>
              <p className="font-body text-xs text-oyster/30 italic mb-10">
                {photo.alt}
              </p>

              {/* Metadata */}
              <ul className="space-y-6">
                <MetaRow icon={<Calendar className="w-3.5 h-3.5" />} label="Year" value={String(photo.year)} />
                <MetaRow icon={<Camera  className="w-3.5 h-3.5" />} label="Camera" value={photo.camera} />
                <MetaRow icon={<MapPin  className="w-3.5 h-3.5" />} label="Location" value={photo.location} />
              </ul>

              {/* Divider */}
              <div className="h-px bg-oyster/8 my-10" />

              {/* Edition note */}
              <p className="font-body text-[10px] text-oyster/30 leading-relaxed">
                All prints are produced on Hahnemühle Photo Rag 308gsm, hand-signed and numbered.
                Limited edition of 5 + 2 AP.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={onInquire}
              className="group mt-8 w-full border border-gold/50 hover:border-gold py-4 flex items-center justify-center gap-2 text-gold font-body text-[10px] tracking-[0.3em] uppercase transition-all duration-300 hover:bg-gold hover:text-obsidian"
            >
              Inquire about Limited Fine-Art Print
            </button>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MetaRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-gold mt-0.5 flex-shrink-0">{icon}</span>
      <div>
        <p className="font-body text-[9px] tracking-[0.3em] uppercase text-oyster/30 mb-0.5">{label}</p>
        <p className="font-body text-sm text-oyster">{value}</p>
      </div>
    </li>
  );
}
