import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollyWordHighlight({ text, className = "", serifWord = "" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"]
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap gap-x-2.5 gap-y-1 ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1.0]);
        const y = useTransform(scrollYProgress, [start, end], [8, 0]);

        const isSerif = serifWord && word.toLowerCase().includes(serifWord.toLowerCase());

        return (
          <motion.span 
            key={i} 
            style={{ opacity, y }}
            className={`inline-block transition-colors duration-200 ${
              isSerif ? "font-serif-italic text-[#161615] pr-1" : ""
            }`}
          >
            {word}
          </motion.span>
        );
      })}
    </p>
  );
}
