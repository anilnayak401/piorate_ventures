import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import MenuDrawer from './MenuDrawer';
import { BRAND } from '../data/content';

export default function Navbar({ onOpenAudit }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[#E5E5E3] transition-all">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          {/* Logo Column */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={BRAND.logoUrl} 
              alt={BRAND.name} 
              className="w-10 h-10 md:w-12 md:h-12 object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="font-figtree font-extrabold text-base md:text-lg tracking-tight text-[#161615]">
              {BRAND.name.toUpperCase()}
            </span>
          </a>

          {/* Nav Links & Burger Column */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#161615]">
              <a href="#hero" className="hover:text-neutral-500 transition-colors">Home</a>
              <a href="#about" className="hover:text-neutral-500 transition-colors">Why Us</a>
              <a href="#projects" className="hover:text-neutral-500 transition-colors flex items-center gap-1.5">
                Capabilities <span className="text-[10px] bg-neutral-100 text-neutral-600 px-1.5 py-0.5 rounded-full font-mono">11</span>
              </a>
              <a href="#expertises" className="hover:text-neutral-500 transition-colors">Services</a>
              <a href="#pipeline-sim" className="hover:text-neutral-500 transition-colors">Pipeline</a>
              <a href="#faq" className="hover:text-neutral-500 transition-colors">FAQs</a>
            </nav>

            <button 
              onClick={onOpenAudit}
              className="hidden lg:inline-flex dd-button text-xs py-2 px-4"
            >
              <div className="arrows-box">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="label-container">
                <span className="label-slide">Audit Your Workflow</span>
                <span className="label-slide">Audit Your Workflow</span>
              </div>
            </button>

            {/* Door Dennis 3-Line Burger Toggle Button */}
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="flex flex-col justify-between w-7 h-4 cursor-pointer group py-0.5"
              aria-label="Open menu"
            >
              <span className="w-full h-[1.5px] bg-[#161615] transition-transform group-hover:translate-x-1" />
              <span className="w-full h-[1.5px] bg-[#161615] transition-transform group-hover:-translate-x-1" />
              <span className="w-full h-[1.5px] bg-[#161615] transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </header>

      {/* Slide Out Drawer */}
      <MenuDrawer 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onOpenAudit={onOpenAudit} 
      />
    </>
  );
}
