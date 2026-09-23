import React from 'react';
import { WHO_WE_SERVE, TRUST_PILLARS } from '../data/content';
import { CheckCircle2, Rocket, TrendingUp, Building2, Code2, Award, Layers, Wrench, Activity } from 'lucide-react';

const personaIcons = {
  Rocket: Rocket,
  TrendingUp: TrendingUp,
  Building2: Building2,
};

const trustIcons = {
  Code2: Code2,
  Award: Award,
  Layers: Layers,
  Wrench: Wrench,
  Activity: Activity,
};

export default function WhoWeServeAndTrust() {
  return (
    <section id="who-we-serve" className="py-24 bg-white border-b border-neutral-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-left max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-700 mb-4 rounded-none">
            <span>TARGET PARTNERS & ENTERPRISE PROOF</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight leading-tight uppercase">
            Architected for Every Scale.
          </h2>
          <p className="text-neutral-600 text-sm sm:text-base mt-2 font-sans">
            From venture-backed startups to modernizing corporate teams, we engineer the autonomous systems foundation required for scale.
          </p>
        </div>

        {/* 3 Archetypes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {WHO_WE_SERVE.map((persona) => {
            const Icon = personaIcons[persona.icon] || Rocket;

            return (
              <div
                key={persona.title}
                className="p-8 bg-neutral-50 border border-neutral-200 hover:border-neutral-900 transition-colors flex flex-col justify-between rounded-none"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-logo-steel">
                      {persona.badge}
                    </span>
                    <div className="w-8 h-8 border border-neutral-300 bg-white flex items-center justify-center text-neutral-900 rounded-none">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-neutral-950 mb-2">
                    {persona.title}
                  </h3>

                  <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-6">
                    {persona.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-200 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-neutral-400 uppercase font-bold tracking-widest mb-2">
                    Core Outcomes:
                  </div>
                  {persona.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-neutral-800 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-logo-steel flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* 5 Trust Pillars */}
        <div className="p-8 sm:p-10 bg-neutral-50 border border-neutral-200 rounded-none">
          <div className="text-left max-w-2xl mb-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold block mb-1">
              ENGINEERING INTEGRITY
            </span>
            <h3 className="font-display font-bold text-2xl text-neutral-950 uppercase">
              Why Forward-Thinking Ventures Trust Our Systems
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {TRUST_PILLARS.map((pillar) => {
              const Icon = trustIcons[pillar.icon] || Code2;
              return (
                <div
                  key={pillar.title}
                  className="p-5 bg-white border border-neutral-200 flex flex-col justify-between rounded-none"
                >
                  <div className="w-8 h-8 border border-neutral-200 flex items-center justify-center text-logo-steel mb-3 rounded-none">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-neutral-950 mb-1">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed font-sans">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
