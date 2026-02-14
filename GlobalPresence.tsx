import React from 'react';

const locations = [
  { name: 'Mumbai', country: 'India', flag: '🇮🇳' },
  { name: 'Frankfurt', country: 'Germany', flag: '🇩🇪' },
  { name: 'Singapore', country: 'Singapore', flag: '🇸🇬' },
  { name: 'New York', country: 'US', flag: '🇺🇸' },
];

const GlobalPresence: React.FC = () => {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center lg:text-left mb-20 animate-reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white uppercase italic">
            Global <span className="blue-gradient-text">Presence, Local</span> Performance
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl font-medium">
            Our rapidly expanding datacenter network spans across the Americas and Europe ensuring minimal latency for your global userbase.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Location Grid (Vertical List) */}
          <div className="space-y-4">
            {locations.map((loc, i) => (
              <div 
                key={loc.name}
                className="group flex items-center justify-between p-6 rounded-2xl bg-[#0f172a] border border-slate-800 shadow-sm hover:shadow-blue-500/10 hover:-translate-y-1 transition-all animate-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{loc.flag}</span>
                  <div>
                    <h4 className="text-xl font-black text-white italic">{loc.name}</h4>
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">{loc.country}</span>
                  </div>
                </div>
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Globe Visual (Right Side) */}
          <div className="relative aspect-square flex items-center justify-center animate-reveal">
            {/* Glowing Aura */}
            <div className="absolute w-[85%] h-[85%] rounded-full bg-blue-500/10 blur-[100px] animate-pulse"></div>
            
            {/* 3D Globe Placeholder */}
            <div className="relative w-[80%] h-[80%] rounded-full border border-slate-800 shadow-[0_0_50px_rgba(59,130,246,0.1)] flex items-center justify-center overflow-hidden bg-slate-950/40 backdrop-blur-xl">
              <svg className="w-full h-full text-blue-500/20" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <ellipse cx="50" cy="50" rx="48" ry="15" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <ellipse cx="50" cy="50" rx="15" ry="48" fill="none" stroke="currentColor" strokeWidth="0.1" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="currentColor" strokeWidth="0.1" />
                <line x1="50" y1="0" x2="50" y2="100" stroke="currentColor" strokeWidth="0.1" />
              </svg>
              
              {/* Pulse Effects */}
              <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-ping"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,1)] animate-pulse delay-700"></div>
              <div className="absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] animate-pulse delay-300"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-slate-900/50 rounded-full flex items-center justify-center border border-slate-800 shadow-2xl animate-float">
                   <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9m-9-9a9 9 0 019-9" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="absolute top-0 right-0 p-6 glass-panel border-slate-700 rounded-2xl animate-float shadow-2xl">
              <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest block mb-1">Total Throughput</span>
              <div className="text-3xl font-black text-white italic">4.2 Tbps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;