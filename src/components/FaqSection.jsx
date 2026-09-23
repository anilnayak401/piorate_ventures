import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../data/content';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 px-6 md:px-12 bg-transparent max-w-7xl mx-auto overflow-hidden border-b border-[#E5E5E3]">
      {/* Background Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="relative z-10 space-y-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="border-b border-[#E5E5E3] pb-8"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 block mb-2 font-bold font-mono">CLEARITY & ARCHITECTURE FAQS</span>
          <h2 className="hugeTitle">Frequently Answered Questions</h2>
        </motion.div>

        {/* Accordion List */}
        <div className="divide-y divide-[#E5E5E3] border-t border-b border-[#E5E5E3]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div 
                key={faq.q} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="py-6"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-center justify-between gap-6 group"
                >
                  <span className="font-figtree font-medium text-lg md:text-xl text-[#161615] group-hover:underline">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-[#E5E5E3] bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 group-hover:border-[#161615] transition-colors shadow-sm">
                    {isOpen ? <Minus className="w-4 h-4 text-[#161615]" /> : <Plus className="w-4 h-4 text-[#161615]" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 text-neutral-700 text-base font-figtree leading-relaxed max-w-4xl font-normal">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
