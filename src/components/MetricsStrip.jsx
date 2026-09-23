import React from 'react';
import { METRICS } from '../data/content';
import { TrendingUp, Activity, ShieldCheck, Clock } from 'lucide-react';

export default function MetricsStrip() {
  const icons = [TrendingUp, Activity, ShieldCheck, Clock];

  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {METRICS.map((metric, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={metric.label}
                className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:border-slate-300 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-800 shadow-xs">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700">
                    {metric.trend}
                  </span>
                </div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight mb-1">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mb-1">
                  {metric.label}
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
