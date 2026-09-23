import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CASE_STUDY_AUSSIE } from '../data/content';
import { AlertTriangle, Target, Zap, TrendingUp, Play, Pause, Building2, MapPin } from 'lucide-react';

const stageIcons = {
  AlertTriangle: AlertTriangle,
  Target: Target,
  Zap: Zap,
  TrendingUp: TrendingUp,
};

const fixedWaveformHeights = [4, 12, 8, 16, 22, 14, 18, 10, 20, 15, 8, 14, 20, 12, 6, 18, 10];

export default function CaseStudy3D() {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeStage, setActiveStage] = useState(0);

  const toggleAudio = () => {
    setIsPlayingAudio(!isPlayingAudio);
  };

  return (
    <section id="case-study" className="py-24 bg-transparent select-none border-b border-[#E5E5E3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-full font-bold">
            <span>CLIENT DEPLOYMENT DOSSIER</span>
          </div>
          <h2 className="hugeTitle">
            Aussie Property. <br />
            <span className="font-serif-italic text-neutral-500 font-normal">Autopilot Transformation.</span>
          </h2>
          <p className="text-neutral-700 text-base mt-2 font-figtree">
            {CASE_STUDY_AUSSIE.headline}
          </p>
        </motion.div>

        {/* Executive Voice Player Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 sm:p-10 bg-white/70 backdrop-blur-md border border-[#E5E5E3] rounded-2xl mb-12 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6">
            <div className="flex items-center gap-5">
              <img
                src={CASE_STUDY_AUSSIE.photo}
                alt={CASE_STUDY_AUSSIE.executive}
                className="w-16 h-16 object-cover border border-neutral-300 rounded-full shadow-sm"
              />
              <div>
                <h3 className="font-figtree font-bold text-2xl text-[#161615]">
                  {CASE_STUDY_AUSSIE.executive}
                </h3>
                <div className="text-xs font-mono text-[#161615] font-bold">
                  {CASE_STUDY_AUSSIE.role}, {CASE_STUDY_AUSSIE.client}
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1 font-figtree">
                  <MapPin className="w-3 h-3 text-neutral-400" /> {CASE_STUDY_AUSSIE.location}
                  <span>|</span>
                  <Building2 className="w-3 h-3 text-neutral-400" /> {CASE_STUDY_AUSSIE.industry}
                </div>
              </div>
            </div>

            {/* Clean Audio Player */}
            <div className="flex items-center gap-4 bg-white/80 px-4 py-2.5 border border-neutral-200 rounded-full font-mono text-xs shadow-xs">
              <button
                onClick={toggleAudio}
                className="w-8 h-8 bg-[#161615] text-white flex items-center justify-center rounded-full hover:bg-neutral-800 transition-colors"
                title="Play Audio Quote"
              >
                {isPlayingAudio ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>

              <div className="flex items-center gap-1 h-5">
                {fixedWaveformHeights.map((h, i) => (
                  <span
                    key={i}
                    className={`w-0.5 rounded-full ${
                      isPlayingAudio ? 'bg-[#161615] animate-pulse' : 'bg-neutral-300'
                    }`}
                    style={{ height: `${h}px` }}
                  />
                ))}
              </div>

              <span className="text-[11px] text-neutral-700 font-bold uppercase">
                {isPlayingAudio ? '0:07 / 0:34' : 'Play Audio'}
              </span>
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-800 italic leading-relaxed my-6 font-serif-italic">
            "{CASE_STUDY_AUSSIE.quote}"
          </p>

          {/* 4 Big Metrics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-[#E5E5E3] font-mono">
            {CASE_STUDY_AUSSIE.metrics.map((m) => (
              <div key={m.label} className="p-4 bg-white/80 border border-[#E5E5E3] rounded-xl shadow-xs">
                <div className="font-figtree font-bold text-2xl sm:text-3xl text-[#161615] mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-neutral-800 mb-0.5">{m.label}</div>
                <div className="text-[10px] text-neutral-500 font-figtree">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4 Narrative Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {CASE_STUDY_AUSSIE.stages.map((stage, idx) => {
            const Icon = stageIcons[stage.icon] || Zap;
            const isSelected = activeStage === idx;

            return (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStage(idx)}
                className={`cursor-pointer p-6 border transition-all rounded-2xl backdrop-blur-md ${
                  isSelected
                    ? 'bg-white border-[#161615] ring-2 ring-[#161615] shadow-md'
                    : 'bg-white/60 border-[#E5E5E3] hover:border-neutral-400'
                }`}
              >
                <div className="w-9 h-9 border border-neutral-300 bg-white flex items-center justify-center text-[#161615] mb-4 rounded-xl shadow-xs">
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <h4 className="font-figtree font-bold text-base text-[#161615] mb-2">
                  {stage.title}
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-figtree">
                  {stage.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
