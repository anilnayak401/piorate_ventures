import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COMPARISONS } from '../data/content';
import { Check, X, ArrowUpRight } from 'lucide-react';

export default function TechSpecsComparison({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('inHouse');

  const currentComparison = activeTab === 'inHouse' ? COMPARISONS.inHouse : COMPARISONS.traditionalAgencies;

  return (
    <section id="comparison-specs" className="py-24 bg-transparent select-none border-b border-[#E5E5E3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-full font-bold">
            <span>TECHNICAL SPECIFICATIONS & ECONOMICS</span>
          </div>
          <h2 className="hugeTitle">
            Piorate vs. Industry Standard.
          </h2>
          <p className="text-neutral-700 text-base mt-2 font-figtree">
            {currentComparison.subtitle}
          </p>

          {/* Tab Switcher */}
          <div className="flex flex-wrap gap-2 mt-6">
            <button
              onClick={() => setActiveTab('inHouse')}
              className={`px-5 py-2.5 font-figtree text-xs font-semibold tracking-wider transition-all rounded-full border ${
                activeTab === 'inHouse'
                  ? 'bg-[#161615] text-white border-[#161615] shadow-md'
                  : 'bg-white/80 text-neutral-800 border-[#E5E5E3] hover:border-neutral-400'
              }`}
            >
              vs. In-House Team ($201k+ Cost)
            </button>
            <button
              onClick={() => setActiveTab('agencies')}
              className={`px-5 py-2.5 font-figtree text-xs font-semibold tracking-wider transition-all rounded-full border ${
                activeTab === 'agencies'
                  ? 'bg-[#161615] text-white border-[#161615] shadow-md'
                  : 'bg-white/80 text-neutral-800 border-[#E5E5E3] hover:border-neutral-400'
              }`}
            >
              vs. Traditional Agencies
            </button>
          </div>
        </motion.div>

        {/* Feature Comparison Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-[#E5E5E3] bg-white/70 backdrop-blur-md mb-12 rounded-2xl overflow-x-auto shadow-sm"
        >
          <table className="w-full text-left border-collapse font-figtree">
            <thead>
              <tr className="border-b border-[#E5E5E3] bg-neutral-100/70 text-xs font-mono uppercase tracking-wider text-neutral-700">
                <th className="p-4 font-bold w-1/3">Evaluation Vector</th>
                <th className="p-4 font-bold text-[#161615] w-1/3 bg-white/60">Piorate Ventures</th>
                <th className="p-4 font-bold text-neutral-600 w-1/3">
                  {activeTab === 'inHouse' ? 'In-House Engineer' : 'Traditional Agency'}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E5E3] text-xs sm:text-sm">
              {currentComparison.table.map((row) => (
                <tr key={row.feature} className="hover:bg-white/90 transition-colors">
                  <td className="p-4 font-bold text-[#161615]">{row.feature}</td>
                  <td className="p-4 font-medium text-[#161615] bg-white/50">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="font-semibold text-[#161615]">{row.piorate}</span>
                    </div>
                  </td>
                  <td className="p-4 text-neutral-600">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>{row.other}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* In-House Cost Summary */}
        {activeTab === 'inHouse' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 bg-white/70 backdrop-blur-md border border-[#E5E5E3] rounded-2xl font-mono text-xs space-y-3 shadow-sm">
              <span className="font-bold text-neutral-600 uppercase tracking-widest text-[10px] block">
                YEAR 1 EXPENSE RUN-RATE
              </span>
              <div className="flex justify-between p-3.5 bg-white border border-[#E5E5E3] rounded-xl">
                <span className="text-neutral-700">In-House Hire (Salary + Benefits):</span>
                <strong className="text-rose-700 font-bold">$201,000 / Yr</strong>
              </div>
              <div className="flex justify-between p-3.5 bg-white border border-[#E5E5E3] rounded-xl">
                <span className="text-neutral-700">Piorate Turnkey Architecture:</span>
                <strong className="text-[#161615] font-bold">$20,000 / Yr</strong>
              </div>
            </div>

            <div className="p-6 bg-[#161615] text-white rounded-2xl flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-mono text-emerald-400 font-bold uppercase tracking-widest block mb-1">
                  Guaranteed Net Year 1 Arbitrage
                </span>
                <div className="font-figtree font-bold text-3xl sm:text-4xl text-white">
                  Save $181,000 in Year 1
                </div>
              </div>
              <button
                onClick={onOpenAudit}
                className="dd-button bg-white text-[#161615] hover:bg-neutral-200 mt-4 py-3 px-5 text-xs font-bold self-start"
              >
                <div className="arrows-box">
                  <ArrowUpRight className="w-4 h-4 text-[#161615]" />
                  <ArrowUpRight className="w-4 h-4 text-[#161615]" />
                </div>
                <div className="label-container">
                  <span className="label-slide">Audit Your Savings</span>
                  <span className="label-slide">Audit Your Savings</span>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
