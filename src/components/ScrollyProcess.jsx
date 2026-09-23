import React, { useState } from 'react';
import { PROCESS_STEPS, CASE_STUDY_AUSSIE } from '../data/content';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function ScrollyProcess({ onOpenAudit }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-24 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-neutral-200 mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-3 rounded-none font-bold">
              <span>METHODOLOGY & SPRINT FRAMEWORK</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight uppercase">
              From Chaos to Clockwork.
            </h2>
          </div>
          <p className="text-neutral-600 text-sm sm:text-base max-w-md font-sans">
            Tested, live systems deployed in 2 to 4 weeks with zero operational downtime.
          </p>
        </div>

        {/* 4 Stages Sharp Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer p-6 bg-neutral-50 border transition-colors flex flex-col justify-between rounded-none ${
                  isActive ? 'border-neutral-950 bg-white ring-2 ring-neutral-950 shadow-sm' : 'border-neutral-200 hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-6">
                    <span className="font-mono font-extrabold text-2xl text-neutral-950">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-white border border-neutral-300 text-neutral-800 font-bold rounded-none">
                      {step.duration}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-neutral-950 mb-1">
                    {step.name}
                  </h3>

                  <p className="text-xs font-mono text-[#1e3a5f] font-bold uppercase tracking-wider mb-3">
                    {step.title}
                  </p>

                  <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-neutral-500 uppercase font-bold tracking-widest mb-2">
                    Key Outputs:
                  </div>
                  {step.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-neutral-800 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Banner */}
        <div className="p-8 sm:p-10 bg-[#16222f] text-white flex flex-col lg:flex-row items-center justify-between gap-8 rounded-none shadow-md">
          <div className="flex items-center gap-5">
            <img
              src={CASE_STUDY_AUSSIE.photo}
              alt={CASE_STUDY_AUSSIE.executive}
              className="w-16 h-16 object-cover border border-white/20 rounded-none flex-shrink-0"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <div>
              <div className="text-lg font-bold text-white font-display">
                {CASE_STUDY_AUSSIE.executive}
              </div>
              <div className="text-xs text-sky-200 font-mono font-semibold">
                {CASE_STUDY_AUSSIE.role}, {CASE_STUDY_AUSSIE.client}
              </div>
              <div className="text-xs text-neutral-300 font-mono mt-0.5">
                {CASE_STUDY_AUSSIE.location} • Real Estate Infrastructure
              </div>
            </div>
          </div>

          <div className="max-w-2xl text-left font-sans">
            <p className="text-neutral-200 text-sm sm:text-base italic leading-relaxed">
              "{CASE_STUDY_AUSSIE.quote}"
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="btn-secondary px-6 py-3.5 text-xs flex items-center gap-2 whitespace-nowrap flex-shrink-0 font-bold"
          >
            <span>Audit Process</span>
            <ArrowRight className="w-4 h-4 text-neutral-950" />
          </button>
        </div>
      </div>
    </section>
  );
}
