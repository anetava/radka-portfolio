'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Selected Series', href: '#selected-series' },
  { label: 'Tearsheets',      href: '#tearsheets' },
  { label: 'Manifesto',       href: '#manifesto' },
  { label: 'Inquire',         href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'py-4 bg-obsidian/90 backdrop-blur-md border-b border-white/5'
          : 'py-7'
      }`}
    >
      <div className="px-8 md:px-14 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-2xl font-light text-oyster tracking-tight leading-none"
        >
          R<span className="italic text-gold">S</span>
        </a>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="group relative font-body text-[10px] tracking-[0.3em] uppercase text-oyster/50 hover:text-oyster transition-colors duration-300"
              >
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
