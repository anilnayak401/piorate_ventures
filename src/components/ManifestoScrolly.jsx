import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ManifestoScrolly() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  const lines = [
    { text: "TOO MANY BUSINESSES LOSE CLIENTS TO SLOW REPLIES.", bold: true },
    { text: "TEAMS WASTE 20+ HOURS A WEEK ON REPETITIVE MANUAL WORK.", bold: true },
    { text: "VALUABLE LEADS DIE IN UNANSWERED INBOXES AND SPREADSHEETS.", bold: true },
    { text: "WE SOLVE THIS WITH CUSTOM SOFTWARE & AI AUTOMATION:", bold: false },
    { text: "CUSTOM WEB APPS. SMART AI ASSISTANTS. AUTOMATED PIPELINES.", bold: true },
    { text: "BUILT IN 2-4 WEEKS. SCALING YOUR REVENUE ON AUTOPILOT.", bold: true },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = containerRef.current.querySelectorAll('.scrolly-word');

      gsap.fromTo(
        words,
        {
          opacity: 0.18,
          y: 8,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: '+=140%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="manifesto"
      className="relative min-h-screen bg-white text-neutral-950 flex flex-col justify-between py-20 px-4 sm:px-12 md:px-20 overflow-hidden select-none border-b border-neutral-200"
    >
      {/* Chapter Indicator */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pb-6 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold text-[#1e3a5f] uppercase tracking-widest px-3 py-1 bg-neutral-100 border border-neutral-300 rounded-none">
            WHY WORK WITH US // THE MISSION
          </span>
          <span className="text-xs font-mono text-neutral-500 hidden sm:inline-block">
            SCROLL TO READ
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-neutral-700 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>PROVEN SYSTEM METHODOLOGY</span>
        </div>
      </div>

      {/* Main Clear Manifesto Typography */}
      <div
        ref={textRef}
        className="relative z-10 max-w-6xl mx-auto my-auto py-12 flex flex-col gap-6 sm:gap-8 justify-center"
      >
        {lines.map((line, lIdx) => {
          const words = line.text.split(' ');
          return (
            <div
              key={lIdx}
              className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[1.04] text-left uppercase text-neutral-950"
            >
              {words.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="scrolly-word inline-block mr-3 sm:mr-4 transition-opacity will-change-[opacity,transform]"
                >
                  {word}
                </span>
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer Scrolly Cue */}
      <div className="relative z-10 flex items-center justify-between w-full max-w-7xl mx-auto pt-6 border-t border-neutral-200 text-xs font-mono text-neutral-600">
        <div>
          <span>Core Promise: <strong>Fast execution, production quality, and zero technical bloat.</strong></span>
        </div>
        <div className="flex items-center gap-2 text-neutral-950 font-bold animate-bounce">
          <span>Explore our 4 core services below</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </div>
      </div>
    </section>
  );
}
