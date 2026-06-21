'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { HERO_IMAGE } from '@/lib/data';

const SUBTITLES = [
  'Capturing the quiet weight of human presence.',
  'Light as language. Shadow as memory.',
  'Every frame — a negotiation between stillness and becoming.',
  'The camera never lies. It only keeps its own secrets.',
];

const FIRST = 'RADKA';
const SECOND = 'STOLARIKOVA';

function LetterReveal({ text, delayStart }: { text: string; delayStart: number }) {
  return (
    <div className="flex leading-none">
      {text.split('').map((char, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span
            className="inline-block font-display font-light"
            initial={{ y: '110%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 1.0,
              delay: delayStart + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const [subIdx, setSubIdx] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const imageScale    = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY      = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  // Cycle subtitles
  useEffect(() => {
    const id = setInterval(() => setSubIdx(p => (p + 1) % SUBTITLES.length), 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen min-h-[700px] overflow-hidden bg-obsidian flex items-end"
    >
      {/* ── Hero image (right, full bleed) ── */}
      <div className="absolute inset-0 flex justify-end">
        <motion.div
          className="relative w-full md:w-[62%] h-full overflow-hidden"
          style={{ scale: imageScale }}
        >
          <Image
            src={HERO_IMAGE}
            alt="Radka Stolariková — Hero"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
          {/* Left gradient fade-into-dark */}
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-transparent" />
          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* ── Eyebrow top-left ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute top-28 left-8 md:left-14"
      >
        <p className="font-body text-[10px] tracking-[0.42em] uppercase text-oyster/40">
          Fine-Art Photography &ensp;/&ensp; Est. 2017
        </p>
      </motion.div>

      {/* ── Scroll indicator top-right ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.8 }}
        className="absolute top-28 right-8 md:right-14 flex flex-col items-center gap-3"
      >
        <p
          className="font-body text-[9px] tracking-[0.35em] uppercase text-oyster/35"
          style={{ writingMode: 'vertical-rl' }}
        >
          Scroll to Explore
        </p>
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-oyster/40 to-transparent origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* ── Main content ── */}
      <motion.div
        className="relative z-10 w-full px-8 md:px-14 pb-14 md:pb-20"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {/* Giant name */}
        <h1
          className="text-[13.5vw] md:text-[11vw] text-oyster leading-[0.88] tracking-[-0.02em] mb-8"
        >
          <LetterReveal text={FIRST}  delayStart={0.7} />
          <LetterReveal text={SECOND} delayStart={0.85} />
        </h1>

        {/* Subtitle + divider */}
        <div className="flex items-end justify-between">
          <div className="max-w-xs">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-px w-12 bg-gold origin-left mb-5"
            />
            <AnimatePresence mode="wait">
              <motion.p
                key={subIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.55, ease: 'easeInOut' }}
                className="font-body text-sm font-light text-oyster/55 leading-relaxed"
              >
                {SUBTITLES[subIdx]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Right meta */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 1 }}
            className="hidden md:block text-right"
          >
            {['Krajina', 'Příroda', 'Architektura', 'Světlo'].map(tag => (
              <p key={tag} className="font-body text-[10px] tracking-[0.3em] uppercase text-oyster/30 leading-[2.6]">
                {tag}
              </p>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── Photo counter bottom-right ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.6, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-14 font-display text-[11px] tracking-[0.15em] text-oyster/30 italic"
      >
        © 2024 Radka Stolariková
      </motion.p>
    </section>
  );
}
