'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { TEARSHEETS } from '@/lib/data';

export default function Tearsheets() {
  return (
    <section id="tearsheets" className="bg-obsidian py-28 overflow-hidden">
      {/* Header */}
      <div className="px-8 md:px-14 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-[10px] tracking-[0.42em] uppercase text-oyster/30 mb-4">
            Published Work
          </p>
          <h2 className="font-display text-[14vw] md:text-[9vw] font-light text-oyster leading-none tracking-tight">
            Tearsheets
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll strip */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-8 md:px-14 pb-2"
           style={{ scrollSnapType: 'x mandatory' }}>
        {TEARSHEETS.map((sheet, i) => (
          <motion.div
            key={sheet.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.65 }}
            className="flex-shrink-0 group"
            style={{ scrollSnapAlign: 'start', width: 'clamp(260px, 26vw, 380px)' }}
          >
            {/* Image */}
            <div
              className="relative overflow-hidden mb-5"
              style={{ aspectRatio: sheet.src.includes('1506905925346') || sheet.src.includes('1531746020798') ? '3/4' : '4/3' }}
            >
              <Image
                src={sheet.src}
                alt={sheet.caption}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 70vw, 30vw"
              />
              {/* Publication badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="font-body text-[9px] tracking-[0.35em] uppercase text-gold">
                  {sheet.publication}
                </p>
                <p className="font-body text-xs text-oyster/70 mt-0.5">{sheet.issue}</p>
              </div>
            </div>

            {/* Caption */}
            <p className="font-body text-xs text-oyster/40 leading-relaxed">{sheet.caption}</p>

            {/* Divider line animation */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 + 0.3 }}
              className="h-px bg-oyster/10 origin-left mt-4"
            />
          </motion.div>
        ))}

        {/* "More on request" end card */}
        <div className="flex-shrink-0 flex items-center justify-center border border-oyster/10"
             style={{ scrollSnapAlign: 'start', width: 'clamp(200px, 22vw, 320px)' }}>
          <div className="text-center px-8">
            <p className="font-display text-3xl font-light text-oyster/30 italic mb-2">+47</p>
            <p className="font-body text-[9px] tracking-[0.3em] uppercase text-oyster/25">
              More tearsheets<br />available on request
            </p>
          </div>
        </div>
      </div>

      {/* Marquee bottom strip */}
      <div className="mt-16 border-t border-oyster/5 pt-6 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_25s_linear_infinite]">
          {Array.from({ length: 8 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-8 font-display text-sm italic text-oyster/15">
              VOGUE ITALIA
              <span className="text-gold not-italic">·</span>
              APERTURE
              <span className="text-gold not-italic">·</span>
              DAZED & CONFUSED
              <span className="text-gold not-italic">·</span>
              WSJ. MAGAZINE
              <span className="text-gold not-italic">·</span>
              ARTFORUM
              <span className="text-gold not-italic">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
