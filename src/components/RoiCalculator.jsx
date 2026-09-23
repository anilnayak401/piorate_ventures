import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function RoiCalculator({ onOpenAudit }) {
  const [teamSize, setTeamSize] = useState(10);
  const [hoursPerWeek, setHoursPerWeek] = useState(14);
  const [hourlyRate, setHourlyRate] = useState(60);

  const weeklyWastedHours = teamSize * hoursPerWeek;
  const annualWastedHours = weeklyWastedHours * 50;
  const annualLaborCost = annualWastedHours * hourlyRate;

  const annualHoursSaved = Math.round(annualWastedHours * 0.8);
  const grossSavings = Math.round(annualLaborCost * 0.8);
  const piorateEstimatedCost = Math.min(25000, Math.max(12000, teamSize * 1400));
  const netYear1Savings = grossSavings - piorateEstimatedCost;
  const roiPercentage = Math.round((netYear1Savings / piorateEstimatedCost) * 100);
  const paybackMonths = (piorateEstimatedCost / (grossSavings / 12)).toFixed(1);

  return (
    <section id="calculator" className="py-24 bg-transparent select-none border-b border-[#E5E5E3]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-left max-w-3xl mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-neutral-300 text-[11px] font-mono uppercase tracking-widest text-neutral-800 mb-4 rounded-full font-bold">
            <Calculator className="w-3.5 h-3.5 text-[#161615]" />
            <span>FINANCIAL RETURN // SAVINGS CALCULATOR</span>
          </div>
          <h2 className="hugeTitle">
            Calculate Your Year 1 Savings.
          </h2>
          <p className="text-neutral-700 text-base mt-2 font-figtree">
            Adjust your team size and hours below to see how much payroll expense automation saves your company each year.
          </p>
        </motion.div>

        {/* Cockpit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sliders Input Box */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 p-8 bg-white/70 backdrop-blur-md border border-[#E5E5E3] rounded-2xl shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-6">
              {/* Slider 1 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <label className="font-bold text-[#161615] uppercase">Team Members Doing Repetitive Admin:</label>
                  <span className="font-bold text-[#161615] px-3 py-1 bg-white border border-neutral-300 rounded-full">
                    {teamSize} People
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="60"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 accent-[#161615] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                  <span>2 Staff</span>
                  <span>30 Staff</span>
                  <span>60 Staff</span>
                </div>
              </div>

              {/* Slider 2 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <label className="font-bold text-[#161615] uppercase">Hours Wasted Per Person Every Week:</label>
                  <span className="font-bold text-[#161615] px-3 py-1 bg-white border border-neutral-300 rounded-full">
                    {hoursPerWeek} Hours / Wk
                  </span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="35"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 accent-[#161615] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                  <span>4 hrs (Light)</span>
                  <span>14 hrs (Average)</span>
                  <span>35 hrs (Heavy Admin)</span>
                </div>
              </div>

              {/* Slider 3 */}
              <div>
                <div className="flex justify-between items-center mb-2 font-mono text-xs">
                  <label className="font-bold text-[#161615] uppercase">Average Hourly Cost / Wage:</label>
                  <span className="font-bold text-[#161615] px-3 py-1 bg-white border border-neutral-300 rounded-full">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="180"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-neutral-200 accent-[#161615] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-neutral-500 mt-1">
                  <span>$25/hr</span>
                  <span>$60/hr</span>
                  <span>$180/hr</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-mono text-neutral-600">
              <span className="flex items-center gap-1.5 text-neutral-800 font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                Based on conservative 80% task automation benchmark
              </span>
              <span>Audited Model</span>
            </div>
          </motion.div>

          {/* Results Summary Box */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 p-8 bg-[#161615] text-white rounded-2xl shadow-lg flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/20 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 font-bold">
                  PROJECTED FINANCIAL GAIN
                </span>
                <span className="px-3 py-1 bg-white/10 text-emerald-400 font-mono text-xs font-bold rounded-full border border-white/20">
                  {paybackMonths} Months Payback
                </span>
              </div>

              <div className="mb-8">
                <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest block mb-1">
                  Estimated Net Year 1 Savings
                </span>
                <div className="font-figtree font-bold text-4xl sm:text-6xl text-white tracking-tight">
                  ${netYear1Savings.toLocaleString()}
                </div>
                <span className="text-xs text-neutral-400 font-figtree mt-1 block">
                  Net capital back in your business after automation setup
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-8 font-mono">
                <div className="p-3.5 bg-white/10 border border-white/15 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block mb-0.5 font-semibold">Hours Saved / Year</span>
                  <div className="font-figtree font-bold text-xl text-white">
                    {annualHoursSaved.toLocaleString()} hrs
                  </div>
                </div>

                <div className="p-3.5 bg-white/10 border border-white/15 rounded-xl">
                  <span className="text-[10px] text-neutral-400 block mb-0.5 font-semibold">Return on Investment</span>
                  <div className="font-figtree font-bold text-xl text-emerald-400">
                    +{roiPercentage}%
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenAudit}
              className="dd-button bg-white text-[#161615] hover:bg-neutral-200 w-full py-3.5 text-xs font-bold"
            >
              <div className="arrows-box">
                <ArrowUpRight className="w-4 h-4 text-[#161615]" />
                <ArrowUpRight className="w-4 h-4 text-[#161615]" />
              </div>
              <div className="label-container">
                <span className="label-slide">Get Custom Savings Plan</span>
                <span className="label-slide">Get Custom Savings Plan</span>
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
