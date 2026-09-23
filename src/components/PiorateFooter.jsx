import React from 'react';
import { BRAND } from '../data/content';

export default function PiorateFooter({ onOpenAudit }) {
  return (
    <footer className="relative bg-[#161615] text-white pt-16 pb-12 px-6 md:px-12 border-t border-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Bottom Footer Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
          {/* Col 1: Logo */}
          <div className="space-y-3">
            <a href="#" className="flex items-center gap-3 text-white">
              <img 
                src={BRAND.logoUrl} 
                alt={BRAND.name} 
                className="w-10 h-10 object-contain"
              />
              <span className="font-figtree font-extrabold text-base tracking-tight text-white">
                {BRAND.name.toUpperCase()}
              </span>
            </a>
            <p className="text-xs text-neutral-400 font-figtree">
              {BRAND.tagline}
            </p>
          </div>

          {/* Col 2: Policy Links */}
          <div className="space-y-2 text-sm text-neutral-400 font-figtree">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-2 font-semibold">Governance</span>
            <a href="#privacy" className="block hover:text-white transition-colors">Privacy & Data Governance</a>
            <a href="#terms" className="block hover:text-white transition-colors">SOC2 Compliance</a>
            <a href={BRAND.bookingUrl} target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">Book Strategy Call</a>
          </div>

          {/* Col 3: Socials */}
          <div className="space-y-2 text-sm text-neutral-400 font-figtree">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-2 font-semibold">Network</span>
            <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">LinkedIn</a>
            <a href={BRAND.twitter} target="_blank" rel="noreferrer" className="block hover:text-white transition-colors">Twitter / X</a>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-2 text-sm text-neutral-400 font-figtree">
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-mono block mb-2 font-semibold">Direct Contact</span>
            <a href={`mailto:${BRAND.email}`} className="block hover:text-white transition-colors">{BRAND.email}</a>
            <a href={`tel:${BRAND.phone}`} className="block hover:text-white transition-colors">{BRAND.phone}</a>
            <span className="block text-xs text-neutral-500 pt-2">San Francisco, CA & Remote</span>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="pt-8 text-xs text-neutral-500 flex justify-between items-center border-t border-neutral-900">
          <span>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Engineered for 10x Output.</span>
        </div>
      </div>
    </footer>
  );
}
