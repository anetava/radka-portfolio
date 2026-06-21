'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [hoveringImage, setHoveringImage] = useState(false);
  const [hidden, setHidden] = useState(true);

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);

  const ringX = useSpring(useMotionValue(-200), { damping: 28, stiffness: 90 });
  const ringY = useSpring(useMotionValue(-200), { damping: 28, stiffness: 90 });

  // Keep ring values in sync via internal refs
  const rxRef = useRef(ringX);
  const ryRef = useRef(ringY);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      rxRef.current.set(e.clientX);
      ryRef.current.set(e.clientY);
      if (hidden) setHidden(false);
    };
    const leave = () => setHidden(true);
    const enter = () => setHidden(false);

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseleave', leave);
    document.addEventListener('mouseenter', enter);

    const handleEnter = () => setHoveringImage(true);
    const handleLeave = () => setHoveringImage(false);
    const imgs = document.querySelectorAll('[data-cursor="expand"]');
    imgs.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseleave', leave);
      document.removeEventListener('mouseenter', enter);
    };
  }, [cursorX, cursorY, hidden]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed z-[9999] pointer-events-none top-0 left-0"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-oyster mix-blend-difference" />
      </motion.div>

      {/* Ring */}
      <motion.div
        className="fixed z-[9998] pointer-events-none top-0 left-0 flex items-center justify-center"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: hidden ? 0 : 1,
        }}
        animate={{
          width: hoveringImage ? 80 : 40,
          height: hoveringImage ? 80 : 40,
        }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      >
        <div
          className="w-full h-full rounded-full border border-oyster/40 flex items-center justify-center"
        >
          {hoveringImage && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-body text-[9px] tracking-[0.2em] uppercase text-oyster"
            >
              View
            </motion.span>
          )}
        </div>
      </motion.div>
    </>
  );
}
