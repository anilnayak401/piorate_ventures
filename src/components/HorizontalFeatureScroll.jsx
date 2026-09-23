import React, { useRef, useState } from 'react';
import { Boxes, Bot, Layers, Workflow, ArrowRight } from 'lucide-react';

// Clean Micro SaaS Simulator
function CleanSaasSimulator() {
  const [subCount, setSubCount] = useState(140);
  const mrr = subCount * 120;

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-none font-mono text-xs my-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-3">
        <span className="text-neutral-600 uppercase font-bold text-[10px]">SUBSCRIPTION APP REVENUE ESTIMATOR</span>
        <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 border border-emerald-200">
          ● PRODUCTION READY
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
        <div>
          <span className="text-[10px] text-neutral-500 uppercase font-bold">Simulated Subscribers ($120/mo)</span>
          <div className="font-display font-extrabold text-2xl text-neutral-950 mt-0.5">
            ${mrr.toLocaleString()} <span className="text-xs text-neutral-500 font-mono font-normal">Monthly Revenue</span>
          </div>
          <input
            type="range"
            min="20"
            max="500"
            value={subCount}
            onChange={(e) => setSubCount(Number(e.target.value))}
            className="w-full h-1.5 bg-neutral-200 accent-[#16222f] cursor-pointer mt-2"
          />
        </div>

        <div className="space-y-1.5 text-[11px] text-neutral-700 border-l border-neutral-200 pl-4">
          <div className="flex justify-between">
            <span>Tech Stack:</span>
            <strong className="text-neutral-950">Next.js + PostgreSQL</strong>
          </div>
          <div className="flex justify-between">
            <span>Payments:</span>
            <strong className="text-neutral-950">Stripe Subscriptions</strong>
          </div>
          <div className="flex justify-between">
            <span>Turnaround:</span>
            <strong className="text-neutral-950">2-3 Weeks to Launch</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

// Clean AI Assistant Simulator
function CleanHermesSimulator() {
  const [activePrompt, setActivePrompt] = useState(0);
  const [output, setOutput] = useState('Click a scenario below to test how our AI Agent answers customer questions.');

  const testCases = [
    { 
      label: 'High-Value Lead', 
      res: 'AI Agent Response: "Welcome Alex! For property acquisitions above $2M, our senior advisor Sarah is available today at 3:00 PM. I have reserved your spot and emailed your confirmation."' 
    },
    { 
      label: 'Customer Support FAQ', 
      res: 'AI Agent Response: "Yes, our team provides full end-to-end setup and 30-day post-launch support. Would you like me to share our standard SLA agreement?"' 
    },
  ];

  const handleRun = (idx) => {
    setActivePrompt(idx);
    setOutput('AI Agent analyzing request and generating tailored reply...');
    setTimeout(() => {
      setOutput(testCases[idx].res);
    }, 350);
  };

  return (
    <div className="p-5 bg-white border border-neutral-200 rounded-none font-mono text-xs my-4">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-200 mb-3">
        <span className="text-neutral-600 uppercase font-bold text-[10px]">INTERACTIVE AI AGENT SIMULATOR</span>
        <span className="text-[#1e3a5f] font-bold text-[10px] bg-neutral-100 px-2 py-0.5 border border-neutral-300">
          SUB-30 SECOND REPLIES
        </span>
      </div>

      <div className="flex gap-2 mb-3">
        {testCases.map((tc, i) => (
          <button
            key={tc.label}
            onClick={() => handleRun(i)}
            className={`px-3 py-1.5 text-[11px] font-bold uppercase transition-colors rounded-none border ${
              activePrompt === i
                ? 'bg-[#16222f] text-white border-[#16222f]'
                : 'bg-white text-neutral-800 border-neutral-300 hover:bg-neutral-100'
            }`}
          >
            {tc.label}
          </button>
        ))}
      </div>

      <div className="p-3 bg-neutral-50 border border-neutral-200 text-[11px] text-neutral-900 min-h-[50px] leading-relaxed">
        {output}
      </div>
    </div>
  );
}

export default function HorizontalFeatureScroll({ onOpenAudit }) {
  const sectionRef = useRef(null);

  const pillars = [
    {
      id: 'pillar-1',
      index: '01 / 04',
      badge: 'SERVICE 01',
      title: 'Custom Web Apps & Micro SaaS',
      headline: 'Subscription-ready web software built and launched in 2-3 weeks.',
      desc: 'We design and build custom web applications, client membership portals, and internal dashboards. Complete with user authentication, Stripe subscription billing, and database backends.',
      metric: '2-3 Wks',
      metricLabel: 'From Concept to Live Web App',
      icon: Boxes,
      interactive: <CleanSaasSimulator />,
    },
    {
      id: 'pillar-2',
      index: '02 / 04',
      badge: 'SERVICE 02',
      title: 'AI Customer & Sales Agents',
      headline: '24/7 intelligent agents that qualify leads and book meetings in seconds.',
      desc: 'Never let another lead go cold. We build and deploy smart AI chatbots that understand your services, answer questions, pre-qualify high-intent buyers, and book appointments directly on your calendar.',
      metric: '< 30s',
      metricLabel: 'Average Lead Response Time',
      icon: Bot,
      interactive: <CleanHermesSimulator />,
    },
    {
      id: 'pillar-3',
      index: '03 / 04',
      badge: 'SERVICE 03',
      title: 'High-Converting Websites',
      headline: 'Fast, beautiful, conversion-focused websites that win enterprise clients.',
      desc: 'Ditch generic templates. We engineer bespoke, lightning-fast marketing websites with smooth animations, compelling copywriting, and seamless mobile responsiveness designed to turn visitors into buyers.',
      metric: '60 FPS',
      metricLabel: 'Smooth Kinetic Interactions',
      icon: Layers,
    },
    {
      id: 'pillar-4',
      index: '04 / 04',
      badge: 'SERVICE 04',
      title: 'Business Workflow Automation',
      headline: 'Connect your tools and run your repetitive operations on autopilot.',
      desc: 'Stop wasting hours manually copying data between spreadsheets, emails, and software. We connect your CRM (HubSpot, Salesforce), billing tools, and email marketing into one seamless, self-driving pipeline.',
      metric: '20+ Hrs',
      metricLabel: 'Saved Every Week Per Team Member',
      icon: Workflow,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="features"
      className="py-24 bg-white border-b border-neutral-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-neutral-200 mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-3 rounded-none font-bold">
              <span>OUR 4 CORE SERVICES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-neutral-950 tracking-tight uppercase">
              What We Build For You.
            </h2>
          </div>
          <p className="text-xs font-mono text-neutral-600 max-w-sm">
            Everything your business needs to eliminate manual work, look world-class, and scale revenue.
          </p>
        </div>

        {/* 4 Sharp Minimal Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="p-8 bg-neutral-50 border border-neutral-200 hover:border-neutral-950 transition-colors flex flex-col justify-between rounded-none shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-neutral-200 mb-6">
                    <span className="font-mono text-xs font-bold text-[#1e3a5f] uppercase tracking-widest">
                      {pillar.index} • {pillar.badge}
                    </span>
                    <div className="w-8 h-8 border border-neutral-300 bg-white flex items-center justify-center text-neutral-950 rounded-none">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-semibold text-neutral-800 mb-3">
                    {pillar.headline}
                  </p>

                  <p className="text-xs text-neutral-600 leading-relaxed font-sans mb-4">
                    {pillar.desc}
                  </p>

                  {pillar.interactive}
                </div>

                <div className="pt-6 border-t border-neutral-200 flex items-center justify-between mt-6">
                  <div>
                    <div className="font-display font-extrabold text-3xl text-neutral-950">
                      {pillar.metric}
                    </div>
                    <div className="text-[10px] font-mono text-neutral-600 uppercase tracking-wider font-semibold">
                      {pillar.metricLabel}
                    </div>
                  </div>

                  <button
                    onClick={onOpenAudit}
                    className="btn-primary px-5 py-2.5 text-xs flex items-center gap-2"
                  >
                    <span>Audit This Service</span>
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
