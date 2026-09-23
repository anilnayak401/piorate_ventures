import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight, Sparkles, Zap, RefreshCw } from 'lucide-react';
import { SERVICES } from '../data/content';

export default function PiorateProjects({ onOpenAudit }) {
  const capabilityImages = [
    "/capability_assets/cap_1_nobg.png",
    "/capability_assets/cap_2_nobg.png",
    "/capability_assets/cap_3_nobg.png",
    "/capability_assets/cap_4_nobg.png",
    "/capability_assets/cap_5_nobg.png",
    "/capability_assets/cap_6_nobg.png"
  ];

  const items = SERVICES.slice(0, 6).map((service, idx) => ({
    ...service,
    image: capabilityImages[idx]
  }));

  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(activeIndex);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const [rotationAngle, setRotationAngle] = useState(0);
  const stageRef = useRef(null);

  const rotateTo = (index) => {
    setActiveIndex(index);
    const step = 360 / items.length;
    setRotationAngle(-index * step);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndexRef.current - 1 + items.length) % items.length;
    rotateTo(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (activeIndexRef.current + 1) % items.length;
    rotateTo(nextIdx);
  };

  // Capture Phase Wheel Lock: No height multiplier, ZERO extra blank space!
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let isCooldown = false;

    const onWheel = (e) => {
      const rect = stage.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Lock scroll when section is centered in viewport
      const isInFocus = rect.top <= viewportHeight * 0.35 && rect.bottom >= viewportHeight * 0.65;
      if (!isInFocus) return;

      const currentIdx = activeIndexRef.current;

      // Scrolling Down
      if (e.deltaY > 15) {
        if (currentIdx < items.length - 1) {
          e.preventDefault();
          e.stopPropagation();
          if (!isCooldown) {
            const nextIdx = currentIdx + 1;
            rotateTo(nextIdx);
            isCooldown = true;
            setTimeout(() => { isCooldown = false; }, 180); // Fast 180ms debounce
          }
        }
      }
      // Scrolling Up
      else if (e.deltaY < -15) {
        if (currentIdx > 0) {
          e.preventDefault();
          e.stopPropagation();
          if (!isCooldown) {
            const nextIdx = currentIdx - 1;
            rotateTo(nextIdx);
            isCooldown = true;
            setTimeout(() => { isCooldown = false; }, 180); // Fast 180ms debounce
          }
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false, capture: true });
    return () => window.removeEventListener('wheel', onWheel, { capture: true });
  }, [items.length]);

  const activeService = items[activeIndex] || items[0];

  return (
    <section id="projects" className="relative py-20 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-transparent">
      {/* Background Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="relative z-10 space-y-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#E5E5E3]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-bold">ENGINEERED CAPABILITIES</span>
            </div>
            <h2 className="hugeTitle text-[#161615]">Featured Capabilities</h2>
          </div>

          <button 
            onClick={onOpenAudit}
            className="dd-button text-sm py-2.5 px-5 self-start sm:self-auto shadow-md"
          >
            <div className="arrows-box">
              <ArrowUpRight className="w-4 h-4 text-white" />
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div className="label-container">
              <span className="label-slide">Explore All Capabilities</span>
              <span className="label-slide">Explore All Capabilities</span>
            </div>
          </button>
        </div>

        {/* 100% Transparent 3D Stage Container */}
        <div 
          ref={stageRef}
          className="relative min-h-[580px] flex flex-col justify-between py-2 bg-transparent"
        >
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-1.5 border-b border-neutral-200/60">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-neutral-800 bg-white/80 border border-neutral-200/80 px-3.5 py-1 rounded-full uppercase tracking-wider font-bold flex items-center gap-1.5 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#10b981]" /> 3D ORBITAL STAGE
              </span>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#161615] text-white font-semibold flex items-center gap-1.5 shadow-2xs">
                <RefreshCw className="w-3 h-3" /> Scroll Lock Active ({activeIndex + 1}/{items.length})
              </span>
            </div>

            {/* Orbit Dial Counter & Controls */}
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm tracking-widest text-neutral-500">
                <span className="text-[#161615] font-extrabold text-base">0{activeIndex + 1}</span> / 0{items.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-1.5 rounded-full bg-white/80 border border-neutral-300 text-[#161615] hover:bg-neutral-900 hover:text-white transition-all hover:scale-105 shadow-2xs"
                  aria-label="Previous capability"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-1.5 rounded-full bg-white/80 border border-neutral-300 text-[#161615] hover:bg-neutral-900 hover:text-white transition-all hover:scale-105 shadow-2xs"
                  aria-label="Next capability"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Central 3D Interactive Grid */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 my-auto bg-transparent">
            {/* Left Column: Fast Transparent Typography Specs */}
            <div className="lg:col-span-6 space-y-4 bg-transparent">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, x: -20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 20, filter: 'blur(4px)' }}
                  transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-3.5"
                >
                  <div className="inline-flex items-center gap-2 bg-neutral-900 text-white px-3.5 py-1 rounded-full text-xs font-mono font-semibold tracking-wider shadow-sm">
                    <Zap className="w-3.5 h-3.5 text-[#10b981]" />
                    {activeService.badge}
                  </div>

                  <h3 className="font-figtree font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight text-[#161615] leading-tight">
                    {activeService.title}
                  </h3>

                  <p className="font-figtree text-neutral-700 text-sm md:text-base font-light leading-relaxed">
                    {activeService.fullDesc || activeService.shortDesc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {activeService.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="bg-white/80 border border-neutral-300/80 text-neutral-800 text-xs font-mono px-2.5 py-0.5 rounded-md shadow-2xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Performance Metric Box */}
                  <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/70 backdrop-blur-md border border-neutral-200/80 shadow-sm mt-2">
                    <div>
                      <span className="text-[11px] font-mono text-neutral-500 block uppercase font-semibold">Benchmark Metric</span>
                      <span className="font-mono font-bold text-[#059669] text-base md:text-lg">{activeService.stats}</span>
                    </div>

                    <button 
                      onClick={onOpenAudit}
                      className="px-4 py-2 rounded-xl bg-[#161615] text-white hover:bg-neutral-800 font-figtree font-bold text-xs uppercase tracking-wider transition-all hover:scale-105 flex items-center gap-1.5 shadow-md"
                    >
                      Audit Flow <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Clean 3D Orbit Stage */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[380px] flex items-center justify-center bg-transparent">
              {/* Clean 3D Orbit Stage Ring */}
              <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] bg-transparent">
                {items.map((item, idx) => {
                  const total = items.length;
                  const angleStep = (360 / total);
                  const angle = (idx * angleStep + rotationAngle) * (Math.PI / 180);
                  
                  // 3D Elliptical Orbit Physics Calculation
                  const radiusX = 165;
                  const radiusZ = 110;
                  
                  const x = Math.sin(angle) * radiusX;
                  const z = Math.cos(angle) * radiusZ;
                  
                  const normalizedZ = (z + radiusZ) / (2 * radiusZ);
                  
                  const scale = 0.55 + normalizedZ * 0.55;
                  const opacity = 0.25 + normalizedZ * 0.75;
                  const isCurrent = idx === activeIndex;

                  return (
                    <motion.div
                      key={item.id}
                      onClick={() => rotateTo(idx)}
                      animate={{
                        x: x,
                        scale: isCurrent ? scale * 1.08 : scale,
                        opacity: opacity,
                        zIndex: Math.round(normalizedZ * 100)
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 24 }}
                      className={`absolute cursor-pointer flex flex-col items-center justify-center transition-all duration-150 group ${
                        isCurrent ? 'drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)]' : 'hover:opacity-100'
                      }`}
                      style={{
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      {/* Backgroundless Asset floating */}
                      <motion.div 
                        animate={isCurrent ? { y: [0, -8, 0] } : { y: 0 }}
                        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                        className="relative"
                      >
                        <img 
                          src={item.image} 
                          alt={item.title} 
                          className="w-40 h-40 sm:w-56 sm:h-56 object-contain pointer-events-none transition-transform duration-150"
                        />
                      </motion.div>

                      {/* Tooltip Label on Hover or Active */}
                      <div className={`mt-1.5 px-3 py-1 rounded-full text-[11px] font-mono transition-all ${
                        isCurrent 
                          ? 'bg-[#161615] text-white font-bold shadow-md scale-105' 
                          : 'bg-white/80 text-neutral-700 border border-neutral-200 backdrop-blur-md opacity-0 group-hover:opacity-100 shadow-xs'
                      }`}>
                        {item.title}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Capability Pills */}
          <div className="relative z-20 pt-2 border-t border-neutral-200/60 flex items-center justify-center gap-2 flex-wrap bg-transparent">
            {items.map((item, idx) => {
              const isCurrent = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => rotateTo(idx)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all flex items-center gap-1.5 border ${
                    isCurrent
                      ? 'bg-[#161615] text-white font-bold border-[#161615] scale-105 shadow-md'
                      : 'bg-white/80 text-neutral-600 border-neutral-300/80 hover:bg-neutral-100 hover:text-[#161615]'
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-[#10b981]' : 'bg-neutral-400'}`} />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
