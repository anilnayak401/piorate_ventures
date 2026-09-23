import React, { useState, useEffect } from 'react';
import { BRAND } from '../data/content';
import { ArrowUpRight, ArrowRight, Clock } from 'lucide-react';

export default function Footer({ onOpenAudit }) {
  const [times, setTimes] = useState({
    sydney: '',
    sf: '',
    london: '',
    tokyo: '',
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        sydney: now.toLocaleTimeString('en-US', { timeZone: 'Australia/Sydney', hour: '2-digit', minute: '2-digit' }),
        sf: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-US', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        tokyo: now.toLocaleTimeString('en-US', { timeZone: 'Asia/Tokyo', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-white text-neutral-900 border-t border-neutral-200 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* World Clocks Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-12 border-b border-neutral-200 font-mono text-xs">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none shadow-xs">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1 uppercase font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#1e3a5f]" /> SYDNEY (HQ)
            </div>
            <div className="text-base text-neutral-950 font-bold">{times.sydney || '10:30 PM'} AEST</div>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none shadow-xs">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1 uppercase font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#1e3a5f]" /> SAN FRANCISCO
            </div>
            <div className="text-base text-neutral-950 font-bold">{times.sf || '04:30 AM'} PDT</div>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none shadow-xs">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1 uppercase font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#1e3a5f]" /> LONDON
            </div>
            <div className="text-base text-neutral-950 font-bold">{times.london || '12:30 PM'} BST</div>
          </div>
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-none shadow-xs">
            <div className="flex items-center gap-1.5 text-neutral-500 mb-1 uppercase font-semibold">
              <Clock className="w-3.5 h-3.5 text-[#1e3a5f]" /> TOKYO
            </div>
            <div className="text-base text-neutral-950 font-bold">{times.tokyo || '09:30 PM'} JST</div>
          </div>
        </div>

        {/* Middle Navigation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 items-start">
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={BRAND.logoUrl}
                alt={BRAND.name}
                className="w-10 h-10 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="font-display font-extrabold text-xl tracking-tight text-neutral-950">
                {BRAND.name.toUpperCase()}
              </span>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed max-w-md font-sans mb-6">
              Engineering high-performance business infrastructure, Micro SaaS applications, sub-50ms open-source agents (Hermes, Groq Bot), and bespoke 3D web systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={onOpenAudit}
                className="btn-primary px-5 py-2.5 text-xs flex items-center gap-2"
              >
                <span>Diagnostic Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>

              <a
                href={BRAND.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-5 py-2.5 text-xs flex items-center gap-2"
              >
                <span>Strategy Call</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 font-mono text-xs space-y-2.5">
            <div className="font-bold text-neutral-950 uppercase tracking-widest mb-3">
              ARCHITECTURAL PILLARS
            </div>
            <div>
              <a href="#features" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                01 Micro SaaS Development
              </a>
            </div>
            <div>
              <a href="#features" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                02 Nous Hermes 70B & Groq
              </a>
            </div>
            <div>
              <a href="#features" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                03 60FPS 3D WebGL Canvas
              </a>
            </div>
            <div>
              <a href="#features" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                04 Intelligent Automation Mesh
              </a>
            </div>
            <div>
              <a href="#services" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                05 Full Engineering Index
              </a>
            </div>
          </div>

          <div className="lg:col-span-3 font-mono text-xs space-y-2.5">
            <div className="font-bold text-neutral-950 uppercase tracking-widest mb-3">
              DIRECT CHANNELS
            </div>
            <div>
              <a href={`mailto:${BRAND.email}`} className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                {BRAND.email}
              </a>
            </div>
            <div>
              <a href={BRAND.twitter} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                𝕏 @piorateventures
              </a>
            </div>
            <div>
              <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer" className="text-neutral-600 hover:text-neutral-950 transition-colors block">
                LinkedIn / piorate-ventures
              </a>
            </div>
            <div className="pt-2 text-emerald-700 font-bold">
              ● All Clusters Operating 99.99%
            </div>
          </div>
        </div>

        {/* Monogram Footer */}
        <div className="pt-8 pb-4 text-center border-t border-neutral-200">
          <h2 className="font-display font-extrabold text-[12vw] leading-none tracking-tighter text-neutral-200/60 uppercase select-none">
            PIORATE
          </h2>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-2">
          <span>© {new Date().getFullYear()} Piorate Ventures Pty Ltd. Autonomous Infrastructure.</span>
          <span>Zero Vendor Lock-In • 2-4 Week Production SLA</span>
        </div>
      </div>
    </footer>
  );
}
