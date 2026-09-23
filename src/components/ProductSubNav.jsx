import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ProductSubNav({ onOpenAudit }) {
  const [activeSection, setActiveSection] = useState('features');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);

      const sections = ['features', 'manifesto', 'pipeline-sim', 'services', 'ecosystem', 'calculator'];
      const scrollPos = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  const navItems = [
    { id: 'features', label: '01 Services' },
    { id: 'manifesto', label: '02 Why Us' },
    { id: 'pipeline-sim', label: '03 How It Works' },
    { id: 'services', label: '04 Capabilities' },
    { id: 'ecosystem', label: '05 Integrations' },
    { id: 'calculator', label: '06 Calculator' },
  ];

  return (
    <aside aria-label="Quick Section Navigation" className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden md:block">
      <div className="flex items-center bg-white border border-neutral-300 shadow-lg p-1 rounded-none">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider transition-colors rounded-none font-semibold ${
                isActive
                  ? 'bg-[#16222f] text-white'
                  : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-100'
              }`}
            >
              {item.label}
            </a>
          );
        })}

        <div className="w-[1px] h-4 bg-neutral-300 mx-1.5" />

        <button
          onClick={onOpenAudit}
          className="btn-primary px-3.5 py-1.5 text-[11px] flex items-center gap-1.5"
        >
          <span>Audit</span>
          <ArrowRight className="w-3 h-3 text-white" />
        </button>
      </div>
    </aside>
  );
}
