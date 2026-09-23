import React from 'react';
import { METRICS } from '../data/content';

export default function ScrollMetrics() {
  const marqueeItemsRow1 = [
    'CUSTOM WEB APPLICATIONS',
    'AI CUSTOMER AGENTS',
    'CRM & STRIPE INTEGRATION',
    'NEXT.JS & REACT APPS',
    'HUBSPOT & SALESFORCE SYNC',
    'SLACK & EMAIL AUTOMATIONS',
    'CLIENT MEMBERSHIP PORTALS',
  ];

  const marqueeItemsRow2 = [
    'SAVE 20+ HOURS A WEEK',
    '2-4 WEEK RAPID LAUNCH',
    'ZERO DROPPED LEADS',
    'SUB-30 SECOND REPLIES',
    'DEDICATED POST-LAUNCH SUPPORT',
    'ENTERPRISE DATA SECURITY',
  ];

  return (
    <section className="py-20 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-none font-bold">
            <span>PROVEN BUSINESS OUTCOMES</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-tight uppercase">
            Built For Growth. <br />
            <span className="text-neutral-500 font-normal">Measured in Results.</span>
          </h2>
        </div>

        {/* 4 Sharp Minimal Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {METRICS.map((metric) => (
            <div
              key={metric.label}
              className="p-8 bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition-colors rounded-none flex flex-col justify-between shadow-xs"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono px-2 py-0.5 bg-white border border-neutral-300 text-neutral-700 font-bold uppercase rounded-none">
                  {metric.trend}
                </span>
                <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-none" />
              </div>

              <div>
                <div className="font-display font-extrabold text-4xl sm:text-5xl text-neutral-950 mb-2">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-800 mb-1">
                  {metric.label}
                </div>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  {metric.subtext}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Minimal Marquee */}
      <div className="space-y-2 select-none border-t border-b border-neutral-200 py-3 bg-neutral-50">
        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-4 animate-marquee">
            {[...marqueeItemsRow1, ...marqueeItemsRow1].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider rounded-none"
              >
                <span className="w-1.5 h-1.5 bg-neutral-950 rounded-none" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden whitespace-nowrap">
          <div className="flex items-center gap-4 animate-marquee-reverse">
            {[...marqueeItemsRow2, ...marqueeItemsRow2].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 bg-white border border-neutral-200 text-xs font-mono text-neutral-800 font-bold uppercase tracking-wider rounded-none"
              >
                <span className="w-1.5 h-1.5 bg-[#1e3a5f] rounded-none" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
