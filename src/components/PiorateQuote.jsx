import React from 'react';
import ScrollyWordHighlight from './ScrollyWordHighlight';
import { BRAND } from '../data/content';

export default function PiorateQuote() {
  const quoteText1 = `${BRAND.name} is a high-performance technical and strategic partner for your business. We engineer resilient infrastructure from the ground up, dive deep into your operational bottlenecks, build bespoke 3D web interfaces, and deploy custom autonomous agent fleets.`;
  
  return (
    <section className="relative py-28 px-6 md:px-12 bg-transparent overflow-hidden border-y border-[#E5E5E3]">
      {/* Background Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-10 text-left">
        <div className="space-y-6">
          <ScrollyWordHighlight 
            text={quoteText1}
            className="font-figtree text-2xl md:text-4xl text-[#161615] font-normal leading-snug tracking-tight"
          />

          <p className="font-figtree text-xl md:text-3xl text-neutral-800 font-light leading-relaxed pt-4">
            Everything converges into an automated ecosystem where you can truly say: <span className="font-serif-italic text-[#161615] text-2xl md:text-4xl">“yes, our business runs like clockwork.”</span>
          </p>
        </div>

        <div className="pt-4 flex items-center justify-start gap-3">
          <span className="w-8 h-[1px] bg-[#161615]" />
          <span className="font-figtree font-medium text-sm text-[#161615] tracking-wide">
            {BRAND.name} ・ Engineering Autonomous Velocity
          </span>
        </div>
      </div>
    </section>
  );
}
