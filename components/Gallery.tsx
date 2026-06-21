'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SERIES, Photo, Series } from '@/lib/data';

interface GalleryProps {
  onPhotoSelect: (photo: Photo) => void;
}

export default function Gallery({ onPhotoSelect }: GalleryProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="selected-series"
      className="bg-oyster pt-28 pb-20 px-8 md:px-14"
    >
      <div className="max-w-[1380px] mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-muted mb-5">
            Selected Series
          </p>
          <h2 className="font-display text-[14vw] md:text-[9vw] font-light text-obsidian leading-none tracking-tight">
            The Work
          </h2>
        </motion.div>

        {/* Series list */}
        <div>
          {SERIES.map((series, index) => (
            <SeriesRow
              key={series.id}
              series={series}
              index={index}
              isOpen={openId === series.id}
              onToggle={() => setOpenId(openId === series.id ? null : series.id)}
              onPhotoSelect={onPhotoSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Series Row ───────────────────────────────────────────────────────────────
function SeriesRow({
  series,
  index,
  isOpen,
  onToggle,
  onPhotoSelect,
}: {
  series: Series;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  onPhotoSelect: (photo: Photo) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="border-t border-obsidian/10 last:border-b"
    >
      {/* Accordion header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 md:py-9 text-left group"
      >
        <div className="flex items-baseline gap-6 md:gap-10">
          <span className="font-body text-[10px] tracking-[0.35em] text-muted">{series.number}</span>
          <span className="font-display text-4xl md:text-6xl font-light text-obsidian tracking-tight group-hover:translate-x-1 transition-transform duration-300">
            {series.title}
          </span>
          <span className="hidden md:block font-body text-xs tracking-[0.2em] uppercase text-muted">
            {series.tagline}
          </span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex-shrink-0 ml-4"
        >
          <Plus className="w-5 h-5 text-obsidian/50 group-hover:text-obsidian transition-colors" />
        </motion.div>
      </button>

      {/* Accordion body */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-16">
              <p className="font-body text-sm text-muted/80 max-w-md mb-10 leading-relaxed">
                {series.description}
              </p>

              {/* Photo grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {series.photos.map((photo, i) => (
                  <PhotoThumb
                    key={photo.id}
                    photo={photo}
                    index={i}
                    grayscale={series.id === 'solitude'}
                    onSelect={onPhotoSelect}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Photo Thumbnail ──────────────────────────────────────────────────────────
function PhotoThumb({
  photo,
  index,
  grayscale,
  onSelect,
}: {
  photo: Photo;
  index: number;
  grayscale: boolean;
  onSelect: (p: Photo) => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => onSelect(photo)}
      data-cursor="expand"
      className="relative overflow-hidden group block"
      style={{ aspectRatio: photo.orientation === 'portrait' ? '3/4' : '4/3' }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${
          grayscale ? 'grayscale group-hover:grayscale-0' : ''
        }`}
        sizes="(max-width: 768px) 50vw, 20vw"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-obsidian/0 group-hover:bg-obsidian/30 transition-colors duration-400" />
      {/* Title reveal */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-400">
        <p className="font-body text-[9px] tracking-[0.25em] uppercase text-oyster leading-none">
          {photo.title}
        </p>
        <p className="font-body text-[9px] text-oyster/60 mt-1">{photo.year}</p>
      </div>
    </motion.button>
  );
}
