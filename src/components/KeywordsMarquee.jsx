import React from 'react';

export default function KeywordsMarquee() {
  const keywords = [
    "Micro SaaS Development",
    "Autonomous AI Agents",
    "Sub-50ms Groq Inference",
    "Nous Hermes Models",
    "OpenClaw Web Crawlers",
    "n8n / Make Automation",
    "3D WebGL Canvas",
    "Three.js Shaders",
    "Zero Lead Leakage",
    "Unified Data Hubs",
    "Predictive Analytics",
    "Enterprise SOC2 Security",
    "LangGraph Swarms",
    "Claude 3.5 & GPT-4o RAG",
    "10x Operational Output",
    "Custom Python Webhooks",
    "HubSpot & Salesforce Bridges"
  ];

  return (
    <div className="w-full py-5 bg-[#161615] text-white overflow-hidden border-y border-neutral-800 select-none">
      <div className="flex animate-dd-marquee whitespace-nowrap gap-8 items-center">
        {keywords.concat(keywords).map((keyword, index) => (
          <div key={index} className="flex items-center gap-8">
            <span className="font-figtree text-sm md:text-base font-medium tracking-wide text-neutral-200 hover:text-white transition-colors">
              {keyword}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
          </div>
        ))}
      </div>
    </div>
  );
}
