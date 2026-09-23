import React, { useState } from 'react';
import { COMPARISONS, BRAND } from '../data/content';
import { Check, X, Scale, ArrowRight } from 'lucide-react';

export default function ComparisonMatrix({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState('inHouse');

  const currentComparison = activeTab === 'inHouse' ? COMPARISONS.inHouse : COMPARISONS.traditionalAgencies;

  return (
    <section id="comparison" className="py-24 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-xs">
            <Scale className="w-3.5 h-3.5 text-blue-600" />
            STRATEGIC BENCHMARK
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-5">
            Compare The Alternatives. <br />
            <span className="text-slate-600 font-normal">Build vs. Buy vs. Agencies.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            See why high-growth companies choose specialized engineering over multi-month hiring overhead and rigid agency retainers.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-10">
          <div className="p-1 rounded-2xl bg-white border border-slate-200 inline-flex shadow-xs">
            <button
              onClick={() => setActiveTab('inHouse')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'inHouse'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              vs. In-House Team ($201K/yr)
            </button>
            <button
              onClick={() => setActiveTab('traditional')}
              className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === 'traditional'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              vs. Traditional Agencies (Template Retainers)
            </button>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="rounded-3xl bg-white border border-slate-200 overflow-hidden shadow-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-12 p-6 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider font-mono">
            <div className="md:col-span-4">Evaluation Metric</div>
            <div className="md:col-span-4 text-slate-900">
              Piorate Ventures (Custom Engine)
            </div>
            <div className="md:col-span-4 text-slate-500">
              {activeTab === 'inHouse' ? 'In-House Full-Time Team' : 'Traditional Agency'}
            </div>
          </div>

          <div className="divide-y divide-slate-100">
            {currentComparison.table.map((row, idx) => (
              <div
                key={row.feature}
                className="grid grid-cols-1 md:grid-cols-12 p-6 gap-4 items-center hover:bg-slate-50/70 transition-colors"
              >
                <div className="md:col-span-4 font-bold text-slate-900 text-sm">
                  {row.feature}
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-900 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="font-semibold text-emerald-900">{row.piorate}</span>
                </div>
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center text-rose-800 flex-shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span>{row.other}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown Cards (if inHouse) */}
        {activeTab === 'inHouse' && COMPARISONS.inHouse.costBreakdown && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="p-8 rounded-3xl bg-white border border-rose-200 shadow-card">
              <div className="flex justify-between items-center pb-4 border-b border-rose-100 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-rose-700 font-bold">
                    INTERNAL OVERHEAD
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    True Cost of 1 In-House Hire (Year 1)
                  </h3>
                </div>
                <div className="font-display font-extrabold text-2xl text-rose-700">
                  $201,000
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {COMPARISONS.inHouse.costBreakdown.inHouse.map((item) => (
                  <div
                    key={item.label}
                    className={`flex justify-between p-2.5 rounded-xl ${
                      item.total ? 'bg-rose-50 border border-rose-200 text-rose-900 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.cost}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-emerald-200 shadow-card">
              <div className="flex justify-between items-center pb-4 border-b border-emerald-100 mb-6">
                <div>
                  <span className="text-[10px] font-mono uppercase text-emerald-700 font-bold">
                    PREDICTABLE VALUE
                  </span>
                  <h3 className="font-display font-bold text-xl text-slate-900">
                    Partnering with Piorate (Year 1)
                  </h3>
                </div>
                <div className="font-display font-extrabold text-2xl text-emerald-700">
                  $20,000
                </div>
              </div>

              <div className="space-y-3 font-mono text-xs mb-6">
                {COMPARISONS.inHouse.costBreakdown.piorate.map((item) => (
                  <div
                    key={item.label}
                    className={`flex justify-between p-2.5 rounded-xl ${
                      item.total ? 'bg-emerald-50 border border-emerald-200 text-emerald-900 font-bold' : 'text-slate-600'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="font-semibold">{item.cost}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center font-bold text-emerald-900 text-xs">
                Save $181,000+ in Year 1 vs Full-Time Internal Hire
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
