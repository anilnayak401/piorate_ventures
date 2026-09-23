import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND } from '../data/content';
import { ArrowRight, ArrowUpRight, Bot, Database, Workflow, Play, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollPinned({ onOpenAudit }) {
  const containerRef = useRef(null);
  const heroTextRef = useRef(null);
  const card3dRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const specsRef = useRef(null);

  const [demoActive, setDemoActive] = useState(false);
  const [statusLog, setStatusLog] = useState('Click "Run Live Demo" to see how an automated inquiry is processed in real time.');

  const handleRunDemo = () => {
    setDemoActive(true);
    setStatusLog('Step 1: Website inquiry received from buyer ($2.5M budget)...');
    setTimeout(() => {
      setStatusLog('Step 2: AI Agent analyzed request, generated custom dossier, and sent SMS reply in 14 seconds.');
    }, 900);
    setTimeout(() => {
      setStatusLog('Step 3: CRM deal created in HubSpot, sales team alerted on Slack, appointment booked on calendar.');
      setDemoActive(false);
    }, 1800);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=120%',
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
        },
      });

      // 1. Text scales and fades slightly
      tl.to(
        heroTextRef.current,
        {
          scale: 0.94,
          opacity: 0.25,
          y: -30,
          duration: 2,
          ease: 'power1.inOut',
        },
        0
      );

      // 2. Console scales gently
      tl.to(
        card3dRef.current,
        {
          scale: 1.02,
          duration: 3,
          ease: 'power2.inOut',
        },
        0
      );

      // 3. Deconstruct 3 sharp layers
      tl.to(
        layer1Ref.current,
        {
          x: -30,
          y: 15,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
        },
        1
      );

      tl.to(
        layer2Ref.current,
        {
          y: -20,
          scale: 1.02,
          duration: 2,
          ease: 'power2.out',
        },
        1.2
      );

      tl.to(
        layer3Ref.current,
        {
          x: 30,
          y: 15,
          opacity: 1,
          duration: 2,
          ease: 'power2.out',
        },
        1.4
      );

      // 4. Specs fade in
      tl.fromTo(
        specsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' },
        2
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-neutral-900 overflow-hidden flex flex-col justify-between pt-28 pb-12 select-none border-b border-neutral-200"
    >
      {/* Subtle Hairline Architectural Grid */}
      <div className="absolute inset-0 bg-arch-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full flex-1 flex flex-col justify-center items-center relative z-10">
        {/* Main Clear Business Headline */}
        <div ref={heroTextRef} className="text-center max-w-5xl mx-auto mb-8 transition-transform will-change-transform">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-6 rounded-none font-bold">
            <span className="w-1.5 h-1.5 bg-[#16222f] rounded-none" />
            <span>CUSTOM SOFTWARE DEVELOPMENT & BUSINESS AUTOMATION</span>
          </div>

          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-neutral-950 tracking-tight leading-[0.98] mb-6 uppercase">
            WE BUILD CUSTOM SOFTWARE & AI AGENTS THAT <br />
            <span className="text-neutral-500 font-normal">SCALE YOUR BUSINESS.</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-700 max-w-2xl mx-auto leading-relaxed mb-8 font-normal">
            We build subscription-ready web apps, intelligent AI customer agents, and automated business workflows that eliminate manual work and generate revenue on autopilot.
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
        </div>

        {/* Pinned Architectural Deconstruction: The 3-Step Automated Engine */}
        <div
          ref={card3dRef}
          className="relative w-full max-w-5xl bg-white border border-neutral-300 shadow-md p-6 sm:p-8 overflow-hidden rounded-none"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-neutral-200 mb-6 gap-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 font-bold block">
                HOW OUR AUTOMATED SYSTEMS WORK
              </span>
              <h3 className="font-display font-bold text-lg text-neutral-950">
                The 3-Step Automated Client Engine
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleRunDemo}
                disabled={demoActive}
                className="btn-accent px-4 py-2 font-mono text-xs flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 fill-current text-white" />
                <span className="text-white font-bold">{demoActive ? 'Processing...' : 'Run Live Demo'}</span>
              </button>
              <span className="text-[10px] font-mono text-neutral-500 uppercase hidden sm:inline-block">
                [SCROLL TO EXPAND]
              </span>
            </div>
          </div>

          {/* 3 Clear Real-World Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative min-h-[220px]">
            {/* Step 1 */}
            <div
              ref={layer1Ref}
              className="p-6 bg-neutral-50 border border-neutral-200 flex flex-col justify-between rounded-none shadow-xs"
            >
              <div>
                <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-[#1e3a5f] mb-3 rounded-none">
                  <Workflow className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold">Step 01</span>
                <h4 className="font-display font-bold text-base text-neutral-950 mb-1">
                  Automatic Lead Ingestion
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Inquiries from your website forms, emails, and ads are captured automatically. Zero dropped leads.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-900 font-bold flex justify-between">
                <span>Capture Speed</span>
                <span className="text-emerald-700 font-bold">Instant (&lt; 1 sec)</span>
              </div>
            </div>

            {/* Step 2 */}
            <div
              ref={layer2Ref}
              className="p-6 bg-[#16222f] text-white border border-neutral-800 flex flex-col justify-between relative rounded-none md:-translate-y-2 shadow-lg"
            >
              <div className="text-[10px] font-mono uppercase tracking-widest text-sky-200 font-bold mb-1">
                STEP 02 // INTELLIGENT AGENT
              </div>
              <div>
                <div className="w-10 h-10 bg-white/10 border border-white/20 flex items-center justify-center text-white mb-3 rounded-none">
                  <Bot className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-base text-white mb-1">
                  AI Qualification & Reply
                </h4>
                <p className="text-xs text-neutral-200 leading-relaxed font-sans">
                  Smart AI reads the inquiry, determines buyer budget and urgency, and sends personalized info in seconds.
                </p>
              </div>
              <div className="pt-3 border-t border-white/20 text-[11px] font-mono text-white font-bold flex justify-between">
                <span>Response Time</span>
                <span className="text-emerald-400 font-bold">Under 30 Seconds</span>
              </div>
            </div>

            {/* Step 3 */}
            <div
              ref={layer3Ref}
              className="p-6 bg-neutral-50 border border-neutral-200 flex flex-col justify-between rounded-none shadow-xs"
            >
              <div>
                <div className="w-10 h-10 border border-neutral-300 bg-white flex items-center justify-center text-[#1e3a5f] mb-3 rounded-none">
                  <Database className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase text-neutral-500 font-bold">Step 03</span>
                <h4 className="font-display font-bold text-base text-neutral-950 mb-1">
                  CRM & Calendar Sync
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed font-sans">
                  Deal records are created in HubSpot/Salesforce, sales reps are notified on Slack, and calendar bookings are confirmed.
                </p>
              </div>
              <div className="pt-3 border-t border-neutral-200 text-[11px] font-mono text-neutral-900 font-bold flex justify-between">
                <span>Manual Effort</span>
                <span className="text-emerald-700 font-bold">0 Minutes Needed</span>
              </div>
            </div>
          </div>

          {/* Real-time Status Message */}
          <div className="mt-6 pt-3 border-t border-neutral-200 flex items-center gap-2 font-mono text-xs text-neutral-700">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="truncate font-medium">{statusLog}</span>
          </div>
        </div>

        {/* 4 Tangible Business Value Metrics */}
        <div
          ref={specsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto w-full mt-6"
        >
          <div className="p-4 bg-white border border-neutral-200 text-center rounded-none shadow-xs">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950">2 to 4 Wks</div>
            <div className="text-xs font-mono uppercase text-neutral-600 mt-1 font-semibold">Average Launch Time</div>
          </div>
          <div className="p-4 bg-white border border-neutral-200 text-center rounded-none shadow-xs">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-[#1e3a5f]">&lt; 30 Sec</div>
            <div className="text-xs font-mono uppercase text-neutral-600 mt-1 font-semibold">Lead Response Time</div>
          </div>
          <div className="p-4 bg-white border border-neutral-200 text-center rounded-none shadow-xs">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-emerald-700">80% Saved</div>
            <div className="text-xs font-mono uppercase text-neutral-600 mt-1 font-semibold">In Weekly Admin Hours</div>
          </div>
          <div className="p-4 bg-white border border-neutral-200 text-center rounded-none shadow-xs">
            <div className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950">100%</div>
            <div className="text-xs font-mono uppercase text-neutral-600 mt-1 font-semibold">Data Accuracy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
