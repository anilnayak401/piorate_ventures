import React, { useState, useEffect } from 'react';
import { X, ChevronDown } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [categories, setCategories] = useState({
    functional: true,
    preferences: false,
    statistics: true,
    marketing: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('dd_cookie_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('dd_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDeny = () => {
    localStorage.setItem('dd_cookie_consent', 'denied');
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('dd_cookie_consent', JSON.stringify(categories));
    setIsVisible(false);
  };

  if (!isVisible) {
    return (
      <button 
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 z-40 bg-[#161615] text-white text-xs font-figtree py-2 px-4 rounded-full shadow-lg hover:bg-neutral-800 transition-all border border-neutral-700"
      >
        Manage consent
      </button>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm md:max-w-md bg-white border border-[#E5E5E3] rounded-2xl shadow-2xl p-6 font-figtree text-[#161615] transition-all animate-in fade-in slide-in-from-bottom-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#E5E5E3]">
        <h4 className="font-bold text-base">Manage Consent</h4>
        <button 
          onClick={() => setIsVisible(false)}
          className="text-neutral-400 hover:text-[#161615] p-1"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Message */}
      <div className="py-4 text-xs text-neutral-600 leading-relaxed">
        We care about your data, and we'd use cookies only to improve your experience. By using this website, you accept our <a href="#privacy" className="underline hover:text-[#161615]">Cookies Policy</a>.
      </div>

      {/* Category Toggles (Shown if View Preferences clicked) */}
      {showPreferences && (
        <div className="space-y-3 py-3 border-t border-b border-[#E5E5E3] max-h-48 overflow-y-auto text-xs">
          <div className="flex items-center justify-between">
            <span className="font-medium">Functional</span>
            <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-mono">Always active</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Preferences</span>
            <input 
              type="checkbox" 
              checked={categories.preferences}
              onChange={(e) => setCategories({...categories, preferences: e.target.checked})}
              className="accent-[#161615] w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Statistics</span>
            <input 
              type="checkbox" 
              checked={categories.statistics}
              onChange={(e) => setCategories({...categories, statistics: e.target.checked})}
              className="accent-[#161615] w-4 h-4"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="font-medium">Marketing</span>
            <input 
              type="checkbox" 
              checked={categories.marketing}
              onChange={(e) => setCategories({...categories, marketing: e.target.checked})}
              className="accent-[#161615] w-4 h-4"
            />
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="pt-4 flex flex-wrap items-center gap-2">
        <button 
          onClick={handleAccept}
          className="flex-1 bg-[#161615] text-white text-xs font-medium py-2.5 px-4 rounded-full hover:bg-neutral-800 transition-colors"
        >
          Accept
        </button>
        <button 
          onClick={handleDeny}
          className="flex-1 bg-white text-[#161615] border border-[#E5E5E3] text-xs font-medium py-2.5 px-4 rounded-full hover:bg-neutral-100 transition-colors"
        >
          Deny
        </button>
        <button 
          onClick={() => setShowPreferences(!showPreferences)}
          className="w-full text-center text-xs text-neutral-500 hover:text-[#161615] pt-1"
        >
          {showPreferences ? "Hide preferences" : "View preferences"}
        </button>
      </div>
    </div>
  );
}
