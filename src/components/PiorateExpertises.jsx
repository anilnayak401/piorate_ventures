import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PiorateExpertises() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Development", "Architecture", "AI Strategy"];

  const expertises = [
    // Slide 0: Development
    [
      {
        number: "01",
        title: "Micro SaaS Engineering",
        desc: "Custom multi-tenant SaaS products, subscription workflows, Stripe billing, and background cron engines delivered with zero bloat."
      },
      {
        number: "02",
        title: "Intelligent Automation Flows",
        desc: "Hyper-resilient multi-step workflows connecting complex software stacks, self-healing webhooks, and zero-touch data pipelines."
      },
      {
        number: "03",
        title: "High-Performance 3D Web",
        desc: "Bespoke 3D web experiences, WebGL scrollytelling, and interactive shaders built for silky smooth 60fps performance."
      },
      {
        number: "04",
        title: "Open Source Agent Frameworks",
        desc: "Deployment and fine-tuning of cutting-edge agent ecosystems: Nous Hermes, Groq Bot (sub-50ms), and OpenClaw web crawlers."
      },
      {
        number: "05",
        title: "Unified Data Infrastructure",
        desc: "Connecting Postgres, BigQuery, Snowflake, and CRMs into a single source of truth without manual data entry or sync lag."
      }
    ],

    // Slide 1: Architecture
    [
      {
        number: "01",
        title: "Operational Drag Audit",
        desc: "Forensic audit of your existing manual workflows, tech stack, and data silos to calculate labor leakage and map highest-ROI vectors."
      },
      {
        number: "02",
        title: "System Blueprinting",
        desc: "Custom architecture blueprints specifying agent personas, LLM models, RAG vector stores, and fail-safe API schematics."
      },
      {
        number: "03",
        title: "Enterprise Governance & Security",
        desc: "Bank-level AES-256 encryption in transit and at rest, role-based access controls (RBAC), and SOC2 / GDPR compliant data governance."
      },
      {
        number: "04",
        title: "24/7 Telemetry & Optimization",
        desc: "Continuous execution monitoring, token latency optimization, API version handling, and proactive model upgrades."
      },
      {
        number: "05",
        title: "Employee Onboarding Systems",
        desc: "Automated account provisioning, compliance training checklists, internal documentation routing, and AI workspace guidance."
      }
    ],

    // Slide 2: AI Strategy
    [
      {
        number: "01",
        title: "Context-Aware Custom LLMs",
        desc: "Deploy context-aware LLMs (Claude 3.5, GPT-4o, Gemini) fine-tuned on your company's proprietary knowledge base."
      },
      {
        number: "02",
        title: "High-Precision RAG Vector Stores",
        desc: "Transform raw LLMs into domain experts that comprehend your business voice, SLA requirements, and complex organizational data."
      },
      {
        number: "03",
        title: "Zero Lead Leakage Routing",
        desc: "Instant inbound lead qualification, automated enrichment, scoring, and bi-directional CRM routing within 30 seconds."
      },
      {
        number: "04",
        title: "Predictive Analytics & Forecasting",
        desc: "AI-driven predictive models processing historical customer interactions, pipeline velocity, and churn indicators."
      },
      {
        number: "05",
        title: "Multi-Agent LangGraph Swarms",
        desc: "Autonomous cyclic state machines and multi-agent fleets handling complex multi-step cross-departmental tasks."
      },
      {
        number: "06",
        title: "Brand Voice Alignment",
        desc: "Enforcing a consistent, precise tone of voice for your brand across all automated client touchpoints and AI communication channels."
      }
    ]
  ];

  // 8 Color tiles for bottom color divider bar
  const colorTiles = [
    "#161615",
    "#2b2a29",
    "#403f3e",
    "#5e5d5b",
    "#7d7b78",
    "#a19f9b",
    "#c8c6c2",
    "#e6e5e1"
  ];

  return (
    <section id="expertises" className="relative py-24 px-6 md:px-12 bg-transparent max-w-7xl mx-auto overflow-hidden">
      {/* Background Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="relative z-10 space-y-12">
        {/* Header & Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end pb-8 border-b border-[#E5E5E3]"
        >
          <div>
            <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 block mb-2 font-bold">ENGINEERING SERVICES</span>
            <h2 className="hugeTitle">Services & Capabilities</h2>
          </div>

          <div className="md:col-span-2 flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {tabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2.5 rounded-full font-figtree font-medium text-sm transition-all whitespace-nowrap border ${
                  activeTab === idx 
                    ? "bg-[#161615] text-white border-[#161615] shadow-md" 
                    : "bg-white/80 text-neutral-700 border-[#E5E5E3] hover:border-neutral-400"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Numbered Items List with AnimatePresence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          <AnimatePresence mode="wait">
            {expertises[activeTab].map((item, idx) => (
              <motion.div 
                key={`${activeTab}-${idx}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-md border border-[#E5E5E3] space-y-4 hover:border-[#161615] transition-all group shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-[#161615]">
                    {item.number}.
                  </span>
                  <span className="w-2 h-2 rounded-full bg-neutral-400 group-hover:bg-[#10b981] transition-colors" />
                </div>

                <h4 className="font-figtree font-bold text-lg text-[#161615]">
                  {item.title}
                </h4>

                <p className="text-sm text-neutral-600 font-figtree leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Iconic 8-Tile Color Divider Bar */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
          className="pt-12 origin-left"
        >
          <div className="color-divider-bar rounded-full overflow-hidden shadow-sm">
            {colorTiles.map((hex, index) => (
              <div 
                key={index} 
                className="color-tile" 
                style={{ backgroundColor: hex }} 
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
