import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, RotateCcw, Zap, Bot, Database, Workflow, CheckCircle2 } from 'lucide-react';

export default function InteractivePipeline() {
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);

  const steps = [
    {
      id: 0,
      title: '1. Inbound Inquiry Arrives',
      sub: 'Website Forms, Ads, or Email',
      desc: 'A prospective client submits a contact form or requests a service quote.',
      speed: 'Instant (< 1s)',
      icon: Workflow,
    },
    {
      id: 1,
      title: '2. Smart AI Analyzes Request',
      sub: 'Intent & Budget Scoring',
      desc: 'Our AI agent reviews the inquiry, identifies their budget, and selects the right service package.',
      speed: '12 Seconds',
      icon: Zap,
    },
    {
      id: 2,
      title: '3. Instant Personalized Outreach',
      sub: 'Email, SMS & Dossier',
      desc: 'The prospect receives a personalized proposal, answers to their questions, and a calendar booking link.',
      speed: '18 Seconds',
      icon: Bot,
    },
    {
      id: 3,
      title: '4. CRM Updated & Team Alerted',
      sub: 'HubSpot, Salesforce & Slack',
      desc: 'Deal created in your CRM, calendar booked, and your sales team receives an instant notification.',
      speed: 'Complete',
      icon: Database,
    },
  ];

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    const t1 = setTimeout(() => setActiveStep(1), 600);
    const t2 = setTimeout(() => setActiveStep(2), 1200);
    const t3 = setTimeout(() => {
      setActiveStep(3);
      setIsRunning(false);
    }, 1800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  };

  const handleReset = () => {
    setActiveStep(-1);
    setIsRunning(false);
  };

  return (
    <section id="pipeline-sim" className="py-24 bg-transparent select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between pb-12 border-b border-[#E5E5E3] mb-12 gap-4"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-3 font-bold rounded-full">
              <span>HOW AUTOMATION WORKS // INTERACTIVE DEMO</span>
            </div>
            <h2 className="hugeTitle">
              How A Lead Is Handled on Autopilot.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleStart}
              disabled={isRunning}
              className="dd-button text-xs py-3 px-5 shadow-md disabled:opacity-50"
            >
              <Play className="w-3.5 h-3.5 fill-current text-white" />
              <span>{isRunning ? 'Processing Steps...' : 'Simulate Inbound Lead'}</span>
            </button>

            <button
              onClick={handleReset}
              className="p-3 bg-white/80 border border-neutral-300 rounded-full hover:border-[#161615] transition-colors shadow-sm"
              title="Reset Demo"
              aria-label="Reset Demo"
            >
              <RotateCcw className="w-4 h-4 text-neutral-800" />
            </button>
          </div>
        </motion.div>

        {/* 4 Connected Clear Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCompleted = activeStep >= idx;
            const isCurrent = activeStep === idx && isRunning;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onClick={() => setActiveStep(idx)}
                className={`p-6 border transition-all cursor-pointer rounded-2xl flex flex-col justify-between min-h-[220px] backdrop-blur-md ${
                  isCurrent
                    ? 'bg-white border-[#161615] ring-2 ring-[#161615] shadow-lg'
                    : isCompleted
                    ? 'bg-white/90 border-neutral-800 shadow-md'
                    : 'bg-white/60 border-[#E5E5E3] hover:border-neutral-400'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100 mb-4">
                    <div
                      className={`w-9 h-9 border flex items-center justify-center rounded-xl ${
                        isCompleted ? 'bg-[#161615] text-white border-[#161615]' : 'bg-neutral-100 text-neutral-600 border-neutral-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-700 font-bold bg-neutral-100/80 px-2.5 py-0.5 border border-neutral-200 rounded-full">
                      {step.speed}
                    </span>
                  </div>

                  <h4 className="font-figtree font-bold text-base text-[#161615] mb-1">
                    {step.title}
                  </h4>
                  <div className="font-mono text-[11px] text-[#161615] font-bold mb-2">
                    {step.sub}
                  </div>
                  <p className="text-xs text-neutral-600 leading-relaxed font-figtree">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono mt-4">
                  <span className="text-neutral-500 font-bold">STATUS:</span>
                  <span className={isCompleted ? 'text-emerald-700 font-bold' : 'text-neutral-400'}>
                    {isCompleted ? '✔ COMPLETED' : 'STANDBY'}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Summary Footer */}
        <div className="p-4 bg-white/80 backdrop-blur-md border border-[#E5E5E3] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-700 shadow-sm">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Total Time From Submission to Team Alert: <strong className="text-[#161615] font-bold">&lt; 30 Seconds</strong></span>
          </div>
          <span className="font-bold text-[#161615] uppercase">Zero Human Data Entry Required</span>
        </div>
      </div>
    </section>
  );
}
