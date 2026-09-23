import React from 'react';
import { BRAND } from '../data/content';
import { ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function CtaBanner({ onOpenAudit }) {
  return (
    <section className="py-24 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-6 rounded-none font-bold">
          <span>NOW ACCEPTING NEW CLIENTS // 2 SLOTS REMAINING FOR Q3</span>
        </div>

        <h2 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-neutral-950 tracking-tight leading-[0.98] mb-6 uppercase">
          Ready to Automate Your Operations <br />
          <span className="text-neutral-500 font-normal">And Scale Your Business?</span>
        </h2>

        <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-10 font-sans">
          Schedule a 20-minute strategy call or request a free workflow audit. We will analyze your bottlenecks, show you what can be automated, and deliver a clear implementation roadmap.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenAudit}
            className="btn-primary px-8 py-4 text-xs flex items-center gap-2.5"
          >
            <span>Get Free Workflow Audit</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <a
            href={BRAND.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-8 py-4 text-xs flex items-center gap-2"
          >
            <span>Book Strategy Call</span>
            <ArrowUpRight className="w-4 h-4 text-neutral-600" />
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-neutral-600 font-semibold">
          <span className="flex items-center gap-1.5 text-neutral-900">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> Bank-Grade Data Security
          </span>
          <span>•</span>
          <span>Zero Vendor Lock-In</span>
          <span>•</span>
          <span>2-4 Week Production Delivery</span>
        </div>
      </div>
    </section>
  );
}
