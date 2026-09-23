import React, { useState } from 'react';
import { Boxes, Bot, Layers, Workflow, Zap, Check, ArrowRight, ShieldCheck, Sparkles, Terminal } from 'lucide-react';

export default function FeatureShowcase({ onOpenAudit }) {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      id: 0,
      badge: "RAPID MVP TO SCALE",
      title: "Micro SaaS Development",
      headline: "Autonomous, subscription-ready software built in 2-3 weeks.",
      desc: "We engineer lightweight, ultra-scalable Micro SaaS applications for founders and internal enterprise divisions. Complete with multi-tenant auth, automated Stripe subscription engines, resilient PostgreSQL backends, and background cron worker fleets.",
      specs: [
        "Full-Stack React / Next.js architecture",
        "Automated Stripe billing & webhook reconciliation",
        "Autonomous AI agent background workers",
        "Sub-200ms database response latency"
      ],
      icon: Boxes,
      metric: "2-3 Wks",
      metricLabel: "From Concept to Live MVP"
    },
    {
      id: 1,
      badge: "SUB-50MS AGENTIC AI",
      title: "Open Source Agentic Frameworks",
      headline: "Uncensored, lightning-fast Nous Hermes & Groq Bot fleets.",
      desc: "Harness modern open-source agent ecosystems. We deploy custom fine-tuned Nous Hermes reasoning models, sub-50ms Groq LPU inference, OpenClaw web-crawler intelligence agents, and LangGraph multi-agent swarms with zero vendor lock-in.",
      specs: [
        "Nous Hermes fine-tuned reasoning swarms",
        "Groq LPU orchestration for <50ms token output",
        "OpenClaw autonomous web research crawlers",
        "Private local Ollama / LLaMA enterprise clusters"
      ],
      icon: Bot,
      metric: "< 50ms",
      metricLabel: "Real-Time Agent Token Latency"
    },
    {
      id: 2,
      badge: "AWWWARDS-GRADE DESIGN",
      title: "High-Performance 3D Web Systems",
      headline: "Bespoke WebGL storytelling that hooks high-ticket enterprise clients.",
      desc: "Move beyond cookie-cutter SaaS templates. We engineer silky smooth 60fps Three.js / WebGL 3D canvas architectures, kinetic typography, interactive product configurators, and Apple-grade scrollytelling that converts visitors into high-ticket partners.",
      specs: [
        "Three.js / WebGL / Canvas interactive engines",
        "Fluid 60 FPS mobile and desktop performance",
        "Kinetic typography & spatial micro-interactions",
        "High-conversion architectural art direction"
      ],
      icon: Layers,
      metric: "60 FPS",
      metricLabel: "Silky Smooth 3D WebGL Rendering"
    },
    {
      id: 3,
      badge: "FAULT-TOLERANT ARCHITECTURE",
      title: "Intelligent Automation Flows",
      headline: "Self-healing data pipelines connecting your entire software stack.",
      desc: "Eliminate repetitive manual labor forever. We build resilient end-to-end automation flows linking Make, Zapier, n8n, custom Python microservices, and CRMs (HubSpot, Salesforce) with automatic retry logic and zero dropped records.",
      specs: [
        "Make, n8n, and custom Python webhook meshes",
        "Bi-directional CRM, ERP, and database sync",
        "Self-healing error detection & auto-retry",
        "Bank-level AES-256 TLS encrypted payloads"
      ],
      icon: Workflow,
      metric: "0%",
      metricLabel: "Lead & Data Leakage Guaranteed"
    }
  ];

  const activePillar = pillars[activeTab];
  const IconComponent = activePillar.icon;

  return (
    <section id="features" className="py-24 bg-slate-50/50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            FLAGSHIP PILLARS
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight mb-4">
            Engineered For The Modern Frontier.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Explore the four technical pillars powering high-growth ventures across the globe.
          </p>
        </div>

        {/* Feature Tab Selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            const isSelected = activeTab === idx;
            return (
              <button
                key={p.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-slate-950 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                <span>{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Cinematic Feature Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-600 block mb-2">
                {activePillar.badge}
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-950 tracking-tight mb-4">
                {activePillar.headline}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
                {activePillar.desc}
              </p>

              {/* Specs List */}
              <div className="space-y-3 mb-8">
                {activePillar.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800 font-medium">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenAudit}
                className="px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-slate-800 transition-colors flex items-center gap-2 shadow-xs"
              >
                Audit Your Infrastructure
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Right Metric & Interactive Graphic Showcase */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 mb-6 shadow-sm">
                <IconComponent className="w-8 h-8 text-blue-600" />
              </div>

              <div className="font-display font-extrabold text-5xl sm:text-6xl text-slate-950 tracking-tight mb-2">
                {activePillar.metric}
              </div>

              <div className="text-xs font-bold text-slate-700 font-mono uppercase tracking-wider mb-6">
                {activePillar.metricLabel}
              </div>

              <div className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-left text-xs font-mono text-slate-600 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-slate-400">Architecture:</span>
                  <span className="text-slate-900 font-semibold">{activePillar.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Status:</span>
                  <span className="text-emerald-700 font-semibold">Production Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
