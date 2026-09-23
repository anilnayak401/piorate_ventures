import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export default function PiorateHero({ onOpenAudit }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const opacityScrub = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-transparent"
    >
      {/* Background Subtle Vertical Grid Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <motion.div 
        style={{ y: heroY, opacity: opacityScrub }}
        className="relative z-10 space-y-10"
      >
        {/* Main Headline with Serif Italic Accent */}
        <div className="max-w-5xl">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="hugeTitle"
          >
            The <em className="font-serif-italic font-normal text-[#161615] pr-1">autonomous partner</em> for ventures engineered to scale with resilient AI infrastructure.
          </motion.h1>
        </div>

        {/* Subtitle Paragraph */}
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-neutral-700 leading-relaxed font-figtree font-medium"
          >
            {BRAND.subheading}
          </motion.p>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button 
            onClick={onOpenAudit}
            className="dd-button text-base py-3.5 px-7 shadow-lg"
          >
            <div className="arrows-box">
              <ArrowUpRight className="w-5 h-5 text-white" />
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <div className="label-container">
              <span className="label-slide">Audit Your Workflow</span>
              <span className="label-slide">Audit Your Workflow</span>
            </div>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
