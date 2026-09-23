import React, { useState } from 'react';
import { SERVICES } from '../data/content';
import { ArrowUpRight, CheckCircle2, ArrowRight, X } from 'lucide-react';

export default function ServicesGrid({ onOpenAudit }) {
  const [hoveredService, setHoveredService] = useState(SERVICES[0]);
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Disciplines (11)' },
    { id: 'saas', name: 'Micro SaaS & 3D' },
    { id: 'agents', name: 'Agentic Frameworks' },
    { id: 'flows', name: 'Automation Mesh' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'saas') return ['micro-saas', '3d-websites'].includes(s.id);
    if (activeFilter === 'agents') return ['agentic-frameworks', 'custom-ai-agents', 'predictive-analytics'].includes(s.id);
    if (activeFilter === 'flows') return ['automation-flows', 'workflow-automation', 'unified-data', 'crm-management'].includes(s.id);
    return true;
  });

  return (
    <section id="services" className="py-24 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-neutral-200 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-none font-bold">
              <span>ENGINEERING INDEX // 11 CAPABILITIES</span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl text-neutral-950 tracking-tight leading-tight uppercase">
              The Architectural Roster.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-colors rounded-none border ${
                  activeFilter === c.id
                    ? 'bg-[#16222f] text-white border-[#16222f] font-bold shadow-xs'
                    : 'bg-neutral-50 text-neutral-800 border-neutral-300 hover:bg-neutral-100'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Index Rows & Sticky Spec Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Editorial Rows */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {filteredServices.map((service, index) => {
              const isSelected = hoveredService?.id === service.id;
              const paddedIdx = String(index + 1).padStart(2, '0');

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredService(service)}
                  onClick={() => setActiveDrawer(service)}
                  className={`group py-5 px-3 cursor-pointer transition-colors flex items-center justify-between rounded-none ${
                    isSelected ? 'bg-neutral-100/90' : 'hover:bg-neutral-50'
                  }`}
                >
                  <div className="flex items-center gap-4 sm:gap-6">
                    <span className="font-mono text-sm font-bold text-neutral-400 group-hover:text-neutral-950 transition-colors">
                      {paddedIdx}
                    </span>
                    <div>
                      <h3 className="font-display font-bold text-lg sm:text-2xl text-neutral-950 group-hover:text-[#1e3a5f] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-neutral-600 mt-1 line-clamp-1 font-sans">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                    <span className="hidden sm:inline-block text-[11px] font-mono text-neutral-700 font-semibold bg-white border border-neutral-300 px-2 py-0.5 rounded-none">
                      {service.stats}
                    </span>
                    <div className="w-8 h-8 border border-neutral-300 bg-white group-hover:bg-[#16222f] group-hover:text-white flex items-center justify-center transition-colors rounded-none">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Spec Card */}
          <div className="lg:col-span-5 sticky top-28 hidden lg:block">
            {hoveredService && (
              <div className="p-8 bg-neutral-50 border border-neutral-300 rounded-none shadow-md">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                  <span className="font-mono text-xs text-[#1e3a5f] font-bold uppercase tracking-widest">
                    {hoveredService.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-900 font-bold bg-white border border-neutral-300 px-2.5 py-0.5 rounded-none">
                    {hoveredService.stats}
                  </span>
                </div>

                <h4 className="font-display font-extrabold text-2xl text-neutral-950 mb-3">
                  {hoveredService.title}
                </h4>

                <p className="text-sm text-neutral-700 leading-relaxed font-sans mb-6">
                  {hoveredService.fullDesc}
                </p>

                <div className="space-y-2 mb-8">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1 font-bold">
                    Integrated Architecture Components:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {hoveredService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-white border border-neutral-300 text-xs font-mono text-neutral-800 font-semibold rounded-none"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="btn-primary w-full py-3.5 text-xs flex items-center justify-center gap-2"
                >
                  <span>Audit This Discipline</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Slide-Out Detail Modal */}
      {activeDrawer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="relative w-full max-w-2xl bg-white border border-neutral-900 p-8 shadow-2xl rounded-none">
            <button
              onClick={() => setActiveDrawer(null)}
              className="absolute top-6 right-6 p-2 border border-neutral-300 text-neutral-700 hover:text-black hover:border-neutral-900 rounded-none"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#1e3a5f] font-bold px-2.5 py-1 bg-neutral-100 border border-neutral-300 rounded-none">
                {activeDrawer.badge}
              </span>
              <span className="text-xs font-mono text-neutral-800 font-bold">{activeDrawer.stats}</span>
            </div>

            <h3 className="font-display font-extrabold text-3xl text-neutral-950 mb-4">
              {activeDrawer.title}
            </h3>

            <p className="text-sm text-neutral-700 leading-relaxed font-sans mb-6">
              {activeDrawer.fullDesc}
            </p>

            <div className="p-4 bg-neutral-50 border border-neutral-200 mb-6 rounded-none space-y-2">
              <div className="text-[11px] font-mono text-neutral-600 uppercase tracking-widest mb-2 font-bold">
                Production Deliverables:
              </div>
              <div className="grid grid-cols-2 gap-2">
                {activeDrawer.tags.map((tag) => (
                  <div key={tag} className="flex items-center gap-2 text-xs font-mono text-neutral-900">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setActiveDrawer(null)}
                className="btn-secondary px-5 py-2.5 text-xs"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setActiveDrawer(null);
                  onOpenAudit();
                }}
                className="btn-primary px-6 py-2.5 text-xs"
              >
                Audit Architecture
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
