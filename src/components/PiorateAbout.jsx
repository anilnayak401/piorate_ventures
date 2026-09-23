import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { BRAND } from '../data/content';

export default function PiorateAbout({ onOpenAudit }) {
  const techStack = [
    { 
      name: "n8n Automation", 
      category: "Orchestration",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#EA4B71]">
          <path d="M18.847 4.5a3.847 3.847 0 0 0-3.847 3.847c0 .546.115 1.066.322 1.536l-3.322 2.658c-.37-.25-.813-.394-1.288-.394-.475 0-.918.144-1.288.394L6.102 9.883A3.834 3.834 0 0 0 6.424 8.35 3.847 3.847 0 1 0 2.576 12.2a3.832 3.832 0 0 0 .322-1.536l3.322-2.658c.37.25.813.394 1.288.394.475 0 .918-.144 1.288-.394l3.322 2.658c-.207.47-.322.99-.322 1.536a3.847 3.847 0 1 0 7.694 0 3.847 3.847 0 0 0-3.847-3.847Z"/>
        </svg>
      )
    },
    { 
      name: "Groq Sub-50ms", 
      category: "Inference Engine",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#F05A28]">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2.5V13H13v3.5zm0-5.5h-2.5V7H13v4z"/>
        </svg>
      )
    },
    { 
      name: "Nous Hermes", 
      category: "Agentic Models",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#8B5CF6]">
          <path d="M12 2v20M7 4c0 4.5 2.5 8 5 8s5-3.5 5-8M5 16c2 2 4.5 3 7 3s5-1 7-3"/>
        </svg>
      )
    },
    { 
      name: "OpenAI GPT-4o", 
      category: "LLM Reasoning",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#10A37F]">
          <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0814 4.7938-2.7667a.795.795 0 0 0 .3937-.6813v-6.7583l2.0298 1.172a.771.771 0 0 1 .3937.6622v5.4542a4.5126 4.5126 0 0 1-4.8765 4.0391zm-9.1764-4.3562a4.4708 4.4708 0 0 1-.5351-3.0031l.142.0861 4.7986 2.762a.795.795 0 0 0 .7923 0l5.8524-3.3742v2.344a.771.771 0 0 1-.3937.6622l-4.7275 2.724a4.5078 4.5078 0 0 1-5.929-1.401zm-1.8942-10.15a4.466 4.466 0 0 1 2.346-1.9577v5.698a.795.795 0 0 0 .3984.686l5.8524 3.3742-2.0298 1.172a.771.771 0 0 1-.7923 0l-4.7275-2.7287a4.5078 4.5078 0 0 1-1.0472-6.2438zm16.5828 3.5186l-5.8524-3.3742 2.0298-1.172a.771.771 0 0 1 .7923 0l4.7275 2.7287a4.5078 4.5078 0 0 1 1.0472 6.2438 4.466 4.466 0 0 1-2.346 1.9577v-5.698a.795.795 0 0 0-.3984-.686zm2.3413-3.6622l-.142-.0861-4.7986-2.762a.795.795 0 0 0-.7923 0L9.7424 12.308V9.964a.771.771 0 0 1 .3937-.6622l4.7275-2.724a4.5078 4.5078 0 0 1 6.4641 4.4041zm-12.0016-5.7471a4.5126 4.5126 0 0 1 4.8765-4.0391 4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0814-4.7938 2.7667a.795.795 0 0 0-.3937.6813v6.7583l-2.0298-1.172a.771.771 0 0 1-.3937-.6622V5.4243zm-1.0425 10.6127l-2.8575-1.65 2.8575-1.65 2.8575 1.65z"/>
        </svg>
      )
    },
    { 
      name: "Make.com", 
      category: "Integrations",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#6D00CC]">
          <path d="M12 0L1.5 6v12L12 24l10.5-6V6L12 0zm7.5 16.5l-7.5 4.3-7.5-4.3V7.5l7.5-4.3 7.5 4.3v9z"/>
        </svg>
      )
    },
    { 
      name: "Three.js", 
      category: "3D Shaders",
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#161615]">
          <path d="M2.203 1.055L0 22.945l11.895-4.145L22.203 1.055zM12 16.79L3.548 19.73l1.713-17.067L12 16.79zM19.167 3.73l-6.275 12.37L10.51 2.663l8.657 1.067z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 bg-transparent max-w-7xl mx-auto overflow-hidden border-t border-[#E5E5E3]">
      {/* Background Hairlines */}
      <div className="vertical-lines-grid">
        <div className="line" />
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>

      <div className="relative z-10 space-y-12">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="pb-6 flex items-end justify-between flex-wrap gap-4 border-b border-[#E5E5E3]"
        >
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981]" />
              <span className="text-xs uppercase tracking-widest font-mono text-neutral-500 font-bold">WHY US</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#161615]">
              <span className="font-serif italic text-neutral-400 font-light mr-3">Why</span>
              <span className="font-figtree font-extrabold text-[#161615]">Piorate Ventures</span>
            </h2>
          </div>
        </motion.div>

        {/* Row 1: Tech Stack & Statement Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 uppercase tracking-widest font-bold">
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              <span>POWERED BY BEST-IN-CLASS STACK</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {techStack.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative p-4 rounded-xl flex flex-col justify-between overflow-hidden group hover:bg-neutral-100/60 transition-all aspect-[4/3] border border-transparent hover:border-neutral-200/60"
                >
                  {/* Background Tool Logo Watermark */}
                  <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500 ease-out transform translate-x-3 translate-y-3">
                    {React.cloneElement(item.icon, { className: "w-24 h-24" })}
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10">
                    <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider font-semibold block">{item.category}</span>
                  </div>
                  <div className="relative z-10 mt-auto">
                    <span className="font-figtree font-bold text-xs sm:text-sm text-[#161615] block">{item.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Statement Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="font-figtree text-2xl md:text-3xl text-[#161615] font-normal leading-relaxed">
              We partner with ambitious founders and enterprise leaders who demand precision, technical mastery, and rapid execution. Our expertise combines AI engineering, modern WebGL graphics, and zero-touch automation.
            </p>
          </motion.div>
        </div>

        {/* Row 2: CTA Button & Subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#E5E5E3]">
          {/* Left Column: CTA Button */}
          <div className="lg:col-span-5 space-y-6">
            <button 
              onClick={onOpenAudit}
              className="dd-button text-base py-3.5 px-7 w-full sm:w-auto shadow-md"
            >
              <div className="arrows-box">
                <ArrowUpRight className="w-5 h-5 text-white" />
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              <div className="label-container">
                <span className="label-slide">Audit Your Workflow</span>
                <span className="label-slide">Audit Your Workflow</span>
              </div>
            </button>
          </div>

          {/* Right Column: Image + Subtext */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-shrink-0 flex items-center justify-center p-2">
              <img 
                src={BRAND.logoUrl} 
                alt={BRAND.name} 
                className="w-36 sm:w-48 h-32 object-contain"
              />
            </div>
            <p className="font-figtree text-lg text-neutral-700 font-light leading-relaxed">
              From architecture blueprinting to live production rollout, we turn manual operational drag into resilient autonomous business infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
