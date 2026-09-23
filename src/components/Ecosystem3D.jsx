import React, { useState } from 'react';
import { ECOSYSTEM_TOOLS, BRAND } from '../data/content';
import { ExternalLink, CheckCircle2 } from 'lucide-react';

export default function Ecosystem3D() {
  const [selectedTool, setSelectedTool] = useState(ECOSYSTEM_TOOLS[0]);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Agentic AI', 'Orchestration', 'Inference Engine', 'LLM Foundation', '3D Engine', 'CRM / Sales'];

  const filteredTools = ECOSYSTEM_TOOLS.filter((t) => {
    if (activeCategory === 'All') return true;
    return t.category === activeCategory;
  });

  return (
    <section id="ecosystem" className="py-24 bg-neutral-50 border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Chapter Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-3 rounded-none font-bold">
            <span>TOOLS & PLATFORMS WE INTEGRATE</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-tight uppercase">
            We Connect Your Existing Stack. <br />
            <span className="text-neutral-400 font-normal">Everything Works Together.</span>
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2">
            No need to throw away your current software. We connect your favorite tools — CRMs, AI models, databases, and billing platforms — into one unified, self-driving pipeline.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-neutral-200 mb-8">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActiveCategory(c)}
              className={`px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors rounded-none border ${
                activeCategory === c
                  ? 'bg-[#16222f] text-white border-[#16222f] font-bold shadow-xs'
                  : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Matrix & Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Tool Cards Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {filteredTools.map((tool) => {
              const isSelected = selectedTool.name === tool.name;
              return (
                <div
                  key={tool.name}
                  onClick={() => setSelectedTool(tool)}
                  className={`cursor-pointer p-4 bg-white border transition-colors rounded-none ${
                    isSelected
                      ? 'border-neutral-950 ring-2 ring-neutral-950 bg-neutral-100/50'
                      : 'border-neutral-200 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="w-2.5 h-2.5 rounded-none"
                      style={{ backgroundColor: tool.color }}
                    />
                    <span className="text-[10px] font-mono text-neutral-600 uppercase font-semibold">
                      {tool.category}
                    </span>
                  </div>

                  <div className="font-display font-bold text-sm text-neutral-950 mb-1">
                    {tool.name}
                  </div>

                  <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed font-sans">
                    {tool.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Node Inspector Card */}
          <div className="lg:col-span-4 p-6 sm:p-8 bg-white border border-neutral-300 shadow-md rounded-none">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 font-bold">
                INTEGRATION SPECIFICATIONS
              </span>
              <span className="text-[11px] font-mono text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-200 rounded-none">
                ● FULLY SUPPORTED
              </span>
            </div>

            <div className="mb-6">
              <div
                className="w-10 h-10 mb-3 flex items-center justify-center font-bold text-base text-white rounded-none shadow-xs"
                style={{ backgroundColor: selectedTool.color }}
              >
                {selectedTool.name.slice(0, 2).toUpperCase()}
              </div>
              <h3 className="font-display font-bold text-2xl text-neutral-950 mb-1">
                {selectedTool.name}
              </h3>
              <p className="text-xs font-mono text-[#1e3a5f] font-bold uppercase tracking-wider mb-3">
                CATEGORY: {selectedTool.category}
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                {selectedTool.desc}
              </p>
            </div>

            <div className="space-y-2 mb-6 text-xs font-mono">
              <div className="flex justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-neutral-500">Security & Privacy:</span>
                <span className="text-neutral-950 font-bold">Enterprise Encrypted</span>
              </div>
              <div className="flex justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-neutral-500">Sync Frequency:</span>
                <span className="text-neutral-950 font-bold">Real-Time Instant</span>
              </div>
              <div className="flex justify-between p-2.5 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-neutral-500">Setup Timeline:</span>
                <span className="text-[#1e3a5f] font-bold">Included in 2-4 Wk Sprint</span>
              </div>
            </div>

            <a
              href={BRAND.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-3.5 px-4 text-xs flex items-center justify-center gap-2"
            >
              <span>Connect {selectedTool.name} To Your System</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
