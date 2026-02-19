
import React, { useState, useEffect } from 'react';
import { analytics } from '../services/analytics';

export const AnalyticsDashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stats, setStats] = useState(analytics.getStats());

  useEffect(() => {
    const unsubscribe = analytics.onEvent(() => {
      setStats(analytics.getStats());
    });
    return unsubscribe;
  }, []);

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[100] w-12 h-12 bg-slate-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform border border-white/20"
        title="Admin Analytics"
      >
        <span className="material-symbols-outlined text-xl">query_stats</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-[100] w-80 bg-slate-900 text-white rounded-3xl shadow-2xl border border-white/10 overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
      <div className="p-5 border-b border-white/10 flex justify-between items-center bg-primary">
        <h3 className="font-display font-bold text-sm flex items-center">
          <span className="material-symbols-outlined text-lg mr-2">monitoring</span>
          Live Analytics
        </h3>
        <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>
      
      <div className="p-5 space-y-6 max-h-[400px] overflow-y-auto">
        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-3">Vues par page</p>
          <div className="space-y-2">
            {/* Fix: Explicitly cast values to number for arithmetic operation to satisfy TS requirements */}
            {Object.entries(stats.views).sort((a,b) => (b[1] as number) - (a[1] as number)).map(([page, count]) => (
              <div key={page} className="flex items-center justify-between group">
                <span className="text-xs text-slate-300 truncate pr-2 capitalize">{page}</span>
                <div className="flex items-center">
                  {/* Fix: Explicitly cast count to number for width calculation */}
                  <div className="h-1 bg-secondary rounded-full mr-3" style={{ width: `${Math.min((count as number) * 5, 60)}px` }}></div>
                  <span className="text-xs font-black text-secondary">{count}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-3">Top Interactions (Clicks)</p>
          <div className="space-y-2">
            {Object.entries(stats.clicks).slice(0, 5).map(([label, count]) => (
              <div key={label} className="flex items-center justify-between">
                <span className="text-xs text-slate-300 truncate pr-2">{label}</span>
                <span className="text-xs font-black text-primary bg-white px-2 py-0.5 rounded-full">{count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex justify-between items-center">
          <span className="text-[10px] text-slate-500 italic">Total Événements: {stats.total}</span>
          <button 
            onClick={() => { localStorage.removeItem('sotel_analytics'); window.location.reload(); }}
            className="text-[10px] text-red-400 hover:underline font-bold"
          >
            Effacer
          </button>
        </div>
      </div>
    </div>
  );
};
