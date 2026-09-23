import React, { useState } from 'react';
import { X, ArrowRight, Check, Send, CheckCircle2 } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bottlenecks: [],
    serviceTarget: 'Micro SaaS & Open Source AI Agents',
    timeline: 'Within 2-4 Weeks',
    name: '',
    email: '',
    company: '',
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const bottleneckOptions = [
    'Dropped Inbound Leads & Slow Followups (>30m delay)',
    'Manual Spreadsheet & Data Entry Toil (>15 hrs/wk)',
    'Fragmented Tools (CRMs, Make, Stripe, Email disconnected)',
    'Need Custom Micro SaaS or 3D Web Experience Built',
    'Want to deploy Nous Hermes / Groq Open Source AI',
  ];

  const toggleBottleneck = (option) => {
    setFormData((prev) => {
      const exists = prev.bottlenecks.includes(option);
      return {
        ...prev,
        bottlenecks: exists
          ? prev.bottlenecks.filter((b) => b !== option)
          : [...prev.bottlenecks, option],
      };
    });
  };

  const handleNext = () => setStep((s) => s + 1);
  const handlePrev = () => setStep((s) => s - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-white border border-neutral-900 p-6 sm:p-10 shadow-2xl text-neutral-900 rounded-none">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 border border-neutral-200 hover:border-neutral-900 text-neutral-500 hover:text-black transition-colors rounded-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header */}
            <div className="mb-8 pr-12 sm:pr-14">
              <div className="flex items-center justify-between text-xs font-mono text-neutral-500 font-bold mb-2">
                <span>DIAGNOSTIC AUDIT // STEP {step} OF 3</span>
                <span>{step === 1 ? '33%' : step === 2 ? '66%' : '100%'}</span>
              </div>
              <div className="w-full h-1 bg-neutral-200 rounded-none overflow-hidden">
                <div
                  className="h-full bg-[#16222f] transition-all duration-300 rounded-none"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Bottlenecks */}
            {step === 1 && (
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mb-2 uppercase">
                  Select Key Operational Friction Points
                </h3>
                <p className="text-xs text-neutral-500 mb-6 font-sans">
                  Select all that apply to guide your architecture blueprint.
                </p>

                <div className="space-y-2 mb-8">
                  {bottleneckOptions.map((option) => {
                    const isSelected = formData.bottlenecks.includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleBottleneck(option)}
                        className={`w-full p-3.5 border text-left text-xs sm:text-sm font-mono transition-colors flex items-center justify-between rounded-none ${
                          isSelected
                            ? 'bg-[#16222f] text-white border-[#16222f]'
                            : 'bg-white border-neutral-200 text-neutral-800 hover:border-neutral-400'
                        }`}
                      >
                        <span>{option}</span>
                        <div
                          className={`w-4 h-4 border flex items-center justify-center text-xs rounded-none ${
                            isSelected ? 'bg-white text-black border-white' : 'border-neutral-400'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  className="btn-primary w-full py-4 text-xs flex items-center justify-center gap-2"
                >
                  <span>Proceed to Scope</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            )}

            {/* Step 2: Scope & Timing */}
            {step === 2 && (
              <div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mb-2 uppercase">
                  Deployment Scope & Parameters
                </h3>
                <p className="text-xs text-neutral-500 mb-6 font-sans">
                  Define your intended engineering deployment parameters.
                </p>

                <div className="space-y-4 mb-8 font-mono text-xs">
                  <div>
                    <label className="text-neutral-500 uppercase font-bold block mb-1.5">
                      Primary Solution Category:
                    </label>
                    <select
                      value={formData.serviceTarget}
                      onChange={(e) => setFormData({ ...formData, serviceTarget: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 focus:outline-none focus:border-neutral-900 rounded-none font-sans text-sm"
                    >
                      <option>Micro SaaS & Open Source AI Agents</option>
                      <option>Intelligent CRM & Automation Mesh</option>
                      <option>High-Performance 3D Web Experience</option>
                      <option>Full Enterprise Turnkey Infrastructure</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-neutral-500 uppercase font-bold block mb-1.5">
                      Target Launch Window:
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 focus:outline-none focus:border-neutral-900 rounded-none font-sans text-sm"
                    >
                      <option>Within 2-4 Weeks (Immediate Sprint)</option>
                      <option>Next Quarter (Strategic Planning)</option>
                      <option>Exploring Capabilities & ROI Feasibility</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={handlePrev}
                    className="btn-secondary px-6 py-4 text-xs"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    className="btn-primary flex-1 py-4 text-xs flex items-center justify-center gap-2"
                  >
                    <span>Final Step: Contact Details</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact */}
            {step === 3 && (
              <form onSubmit={handleSubmit}>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-neutral-950 mb-2 uppercase">
                  Where should we send your Blueprint?
                </h3>
                <p className="text-xs text-neutral-500 mb-6 font-sans">
                  Our principal infrastructure team will review your parameters within 24 hours.
                </p>

                <div className="space-y-3 mb-8 font-mono text-xs">
                  <div>
                    <label className="text-neutral-500 block mb-1 uppercase font-semibold">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-none font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-500 block mb-1 uppercase font-semibold">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-none font-sans text-sm"
                    />
                  </div>

                  <div>
                    <label className="text-neutral-500 block mb-1 uppercase font-semibold">Company Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Dynamics"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full p-3 bg-neutral-50 border border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 rounded-none font-sans text-sm"
                    />
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="btn-secondary px-6 py-4 text-xs"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="btn-primary flex-1 py-4 text-xs flex items-center justify-center gap-2"
                  >
                    <span>Generate Architecture Dossier</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            )}
          </div>
        ) : (
          /* Success Screen */
          <div className="text-center py-8">
            <div className="w-12 h-12 bg-neutral-950 text-white flex items-center justify-center mx-auto mb-4 rounded-none">
              <CheckCircle2 className="w-6 h-6 stroke-[2]" />
            </div>

            <h3 className="font-display font-extrabold text-2xl text-neutral-950 mb-2 uppercase">
              Audit Request Registered
            </h3>

            <p className="text-neutral-600 text-sm max-w-md mx-auto leading-relaxed mb-6 font-sans">
              Thank you, <strong className="text-neutral-950">{formData.name}</strong>. Our engineering team is reviewing operational parameters for <strong className="text-neutral-950">{formData.company}</strong>. We will deliver your architecture dossier to <strong className="text-neutral-950">{formData.email}</strong>.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  onClose();
                }}
                className="btn-primary px-6 py-2.5 text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
