import React from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { BRAND } from '../data/content';

export default function MenuDrawer({ isOpen, onClose, onOpenAudit }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#161615] text-white transition-opacity duration-300 ease-out overflow-y-auto">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-6 md:px-12 py-6 border-b border-neutral-800">
        <a href="#" className="flex items-center gap-3">
          <img 
            src={BRAND.logoUrl} 
            alt={BRAND.name} 
            className="w-10 h-10 object-contain"
          />
          <span className="font-figtree font-extrabold text-lg text-white tracking-tight">
            {BRAND.name.toUpperCase()}
          </span>
        </a>

        <button 
          onClick={onClose} 
          className="p-3 text-neutral-400 hover:text-white transition-colors border border-neutral-700 rounded-full"
          aria-label="Close menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Drawer Content */}
      <div className="flex-1 flex flex-col justify-between px-6 md:px-12 py-12 max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Menu Items */}
          <nav className="flex flex-col space-y-6">
            <a href="#hero" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2">
              Home
            </a>
            <a href="#about" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2">
              Why Us
            </a>
            <a href="#projects" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2 flex items-center gap-3">
              Capabilities <span className="text-xs bg-neutral-800 text-neutral-400 px-2 py-1 rounded-full font-mono">11</span>
            </a>
            <a href="#expertises" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2">
              Services
            </a>
            <a href="#pipeline-sim" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2">
              Interactive Pipeline
            </a>
            <a href="#faq" onClick={onClose} className="text-4xl md:text-5xl font-figtree font-light hover:italic transition-all hover:translate-x-2">
              FAQs
            </a>
          </nav>

          {/* CTA Box inside Drawer */}
          <div className="flex flex-col justify-between h-full space-y-8 md:pl-12 md:border-l border-neutral-800">
            <div>
              <p className="text-neutral-400 text-lg mb-6 leading-relaxed">
                {BRAND.subheading}
              </p>
              <button 
                onClick={() => { onClose(); onOpenAudit(); }}
                className="dd-button bg-white text-[#161615] hover:bg-neutral-200"
              >
                <div className="arrows-box">
                  <ArrowUpRight className="w-4 h-4 text-[#161615]" />
                  <ArrowUpRight className="w-4 h-4 text-[#161615]" />
                </div>
                <div className="label-container">
                  <span className="label-slide">Audit Your Workflow</span>
                  <span className="label-slide">Audit Your Workflow</span>
                </div>
              </button>
            </div>

            {/* Socials & Direct Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-neutral-800">
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-2 font-mono">Socials</span>
                <div className="flex flex-col space-y-2 text-sm text-neutral-300">
                  <a href={BRAND.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                  <a href={BRAND.twitter} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Twitter / X</a>
                </div>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-neutral-500 block mb-2 font-mono">Contact</span>
                <div className="flex flex-col space-y-2 text-sm text-neutral-300">
                  <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">{BRAND.phone}</a>
                  <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">{BRAND.email}</a>
                  <span className="text-neutral-500 text-xs mt-2">San Francisco, CA & Remote</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info in Drawer */}
        <div className="pt-12 text-xs text-neutral-600 flex justify-between items-center border-t border-neutral-900 mt-12">
          <span>&copy; {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <span>Autonomous Business Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
