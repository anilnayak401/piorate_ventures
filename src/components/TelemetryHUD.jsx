import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Zap, Bot, ChevronUp, ChevronDown } from 'lucide-react';

export default function TelemetryHUD({ onOpenAudit }) {
  const [minimized, setMinimized] = useState(true);
  const [tokensProcessed, setTokensProcessed] = useState(4829100);
  const [activeLatency, setActiveLatency] = useState(38);

  useEffect(() => {
    const interval = setInterval(() => {
      setTokensProcessed(prev => prev + Math.floor(Math.random() * 450 + 120));
      setActiveLatency(Math.floor(32 + Math.random() * 14));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="glass-panel rounded-2xl border border-sky-500/20 shadow-[0_10px_35px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300">
        {/* Header Bar */}
        <div
          onClick={() => setMinimized(!minimized)}
          className="px-4 py-2.5 bg-white/[0.02] hover:bg-white/[0.04] cursor-pointer flex items-center justify-between gap-3 select-none"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[11px] font-mono font-bold text-white uppercase tracking-wider">
              Autonomous Mesh Telemetry
            </span>
          </div>
          <button className="text-slate-400 hover:text-white">
            {minimized ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Expanded Telemetry Stats */}
        {!minimized && (
          <div className="p-4 space-y-3 font-mono text-[11px] border-t border-white/[0.06] bg-[#070a0f]">
            <div className="flex justify-between items-center text-slate-400">
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 text-sky-400" />
                Inference Latency:
              </span>
              <span className="text-emerald-400 font-bold">{activeLatency}ms (Groq LPU)</span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span className="flex items-center gap-1.5">
                <Bot className="w-3 h-3 text-sky-400" />
                Autonomous Agents:
              </span>
              <span className="text-white font-bold">12,500+ Active</span>
            </div>

            <div className="flex justify-between items-center text-slate-400">
              <span className="flex items-center gap-1.5">
                <Activity className="w-3 h-3 text-amber-400" />
                Live Tokens Streamed:
              </span>
              <span className="text-sky-300 font-bold">{tokensProcessed.toLocaleString()}</span>
            </div>

            <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[10px] text-slate-500 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                SOC2 / TLS Encrypted
              </span>
              <button
                onClick={onOpenAudit}
                className="text-[10px] text-sky-400 hover:text-white font-bold underline uppercase"
              >
                Run Audit
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
