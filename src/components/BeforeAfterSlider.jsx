import React, { useState, useRef } from 'react';
import { ArrowLeftRight, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';

export default function BeforeAfterSlider({ onOpenAudit }) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <section id="comparison" className="py-24 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-none font-bold">
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#1e3a5f]" />
            <span>OPERATIONAL COMPARISON // BEFORE & AFTER</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-tight uppercase">
            Manual Chaos vs. Automated Flow.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-sans">
            Drag the slider below to see how your daily business operations transform when you automate your repetitive tasks.
          </p>
        </div>

        {/* Draggable Comparison Box */}
        <div
          ref={containerRef}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
          className="relative w-full h-[400px] border border-neutral-300 bg-neutral-50 overflow-hidden cursor-ew-resize select-none rounded-none shadow-sm"
        >
          {/* RIGHT LAYER: AFTER (Automated with Piorate) */}
          <div className="absolute inset-0 bg-white p-6 sm:p-12 flex flex-col justify-between">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-200">
              <span className="font-mono text-xs font-bold text-neutral-950 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                AFTER // AUTOMATED WITH PIORATE
              </span>
              <span className="font-mono text-xs text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 border border-emerald-200">
                +340% FASTER EXECUTION
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-auto font-mono">
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Lead Response Time</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mt-1">&lt; 30 Seconds</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">Inquiries answered instantly 24/7</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Lost Inquiries</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mt-1">0% Zero Lost</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">100% captured and logged in CRM</p>
              </div>
              <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Team Focus</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mt-1">100% High-Value</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">No more manual copy-pasting data</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-neutral-600 border-t border-neutral-200 pt-4">
              <span>Operational Bottlenecks: <strong className="text-emerald-700">Eliminated</strong></span>
              <span className="text-neutral-950 font-bold">Business Runs Smoothly</span>
            </div>
          </div>

          {/* LEFT LAYER: BEFORE (Manual Chaos - Clipped) */}
          <div
            className="absolute inset-0 bg-neutral-100 p-6 sm:p-12 flex flex-col justify-between border-r border-neutral-900"
            style={{
              clipPath: `polygon(0% 0%, ${sliderPos}% 0%, ${sliderPos}% 100%, 0% 100%)`,
            }}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-300">
              <span className="font-mono text-xs font-bold text-rose-800 uppercase tracking-widest flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                BEFORE // MANUAL DELAYS & FRUSTRATION
              </span>
              <span className="font-mono text-xs text-rose-700 font-bold bg-rose-50 px-2 py-0.5 border border-rose-200">
                35% LOST OPPORTUNITIES
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-auto font-mono">
              <div className="p-4 bg-white border border-neutral-300 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Lead Response Time</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-rose-700 mt-1">4.5+ Hours</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">Prospects leave and hire competitors</p>
              </div>
              <div className="p-4 bg-white border border-neutral-300 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Lost Inquiries</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-rose-700 mt-1">35% Dropped</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">Buried in spreadsheets and messy inboxes</p>
              </div>
              <div className="p-4 bg-white border border-neutral-300 rounded-none">
                <span className="text-[10px] text-neutral-500 uppercase font-bold">Wasted Staff Time</span>
                <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mt-1">20h / Week</div>
                <p className="text-[11px] text-neutral-600 mt-1 font-sans">Burned out on repetitive manual admin</p>
              </div>
            </div>

            <div className="flex justify-between items-center text-xs font-mono text-neutral-600 border-t border-neutral-300 pt-4">
              <span>Operational Drag: <strong className="text-rose-700">Severe Friction</strong></span>
              <span className="text-neutral-800 font-bold">High Staff Churn</span>
            </div>
          </div>

          {/* Sharp Vertical Hairline Divider */}
          <div
            className="absolute top-0 bottom-0 w-[2px] bg-neutral-900 cursor-ew-resize z-30"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-neutral-950 text-white flex items-center justify-center border border-white rounded-none shadow-sm">
              <ArrowLeftRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={onOpenAudit}
            className="font-mono text-xs uppercase tracking-widest text-[#16222f] hover:text-black font-bold flex items-center gap-2"
          >
            <span>Upgrade Your Business to Automated Operations</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <span className="font-mono text-xs text-neutral-500 font-semibold">[ELIMINATE MANUAL ADMIN IN 2-4 WEEKS]</span>
        </div>
      </div>
    </section>
  );
}
