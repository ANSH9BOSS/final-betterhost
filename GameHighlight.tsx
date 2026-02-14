import React, { useState } from 'react';

const GameHighlight: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText('play.betterhost.org');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-[#020617] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter text-white uppercase italic">
            <span className="purple-blue-gradient-text">Power Up</span> Your Gaming
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Ultra-low latency servers with premium hardware and 24/7 support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 h-full flex flex-col shadow-xl backdrop-blur-xl">
              <h3 className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border-b border-slate-800 pb-4">
                Available Games
              </h3>
              <div className="space-y-4">
                <button className="w-full relative flex items-center justify-between p-4 rounded-2xl bg-green-500/10 border border-green-500/30 group transition-all hover:scale-[1.03] hover:bg-green-500/20 shadow-[0_0_20px_rgba(34,197,94,0.1)]">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                    </span>
                    <span className="font-black text-green-400 uppercase italic text-xs">Minecraft</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-green-600 text-[8px] font-black text-white uppercase tracking-tighter">
                    Popular
                  </span>
                </button>
                
                {['Valorant', 'Rust', 'Ark', 'CS2'].map((game) => (
                  <div key={game} className="w-full flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-900/50 opacity-40 transition-all">
                    <span className="font-black text-slate-500 uppercase italic text-xs">{game}</span>
                    <span className="text-[8px] font-black text-slate-600 uppercase tracking-tighter">Soon</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Detail Card */}
          <div className="lg:col-span-9">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 min-h-[550px] flex flex-col shadow-2xl bg-[#0f172a] group transition-all duration-500">
              {/* Background */}
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1615485500704-8e990f9900f1?q=80&w=2070&auto=format&fit=crop" 
                  className="w-full h-full object-cover opacity-20 grayscale brightness-50"
                  alt="Underwater Minecraft"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a]/80 to-slate-900/40"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 md:p-16 flex flex-col h-full">
                <div className="mb-10">
                  <h3 className="text-6xl md:text-8xl font-black text-white tracking-tighter italic leading-none mb-4 transform transition-transform group-hover:translate-x-2 uppercase">Minecraft</h3>
                  <p className="text-green-400 font-black uppercase tracking-[0.4em] text-sm italic mb-6">Your World, Your Rules</p>
                  <p className="text-slate-400 text-lg font-medium max-w-xl leading-relaxed">
                    Premium Java & Bedrock servers with instant setup and plugin support. Optimized for the latest Ryzen 9 7950X architectures with pure NVMe storage.
                  </p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {[
                    { l: 'PROCESSOR', v: 'Ryzen 9 / EPYC', i: 'M13 10V3L4 14h7v7l9-11h-7z' },
                    { l: 'MEMORY', v: 'DDR5 RAM', i: 'M19 11H5m14 0a2 2 0 012 2v6' },
                    { l: 'STORAGE', v: 'NVMe Gen4 SSD', i: 'M5 12h14M5 12a2 2 0 01-2-2' }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/80 border border-slate-800 transition-all hover:bg-slate-800/80">
                      <div className="w-10 h-10 rounded-xl bg-green-500/20 text-green-400 flex items-center justify-center shadow-lg shadow-green-500/10 group-hover:scale-110 transition-transform">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={spec.i} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[8px] font-black text-slate-500 uppercase tracking-widest">{spec.l}</div>
                        <div className="text-xs font-black text-slate-200">{spec.v}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-auto pt-10 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">1$<span className="text-sm text-slate-500">/GB</span></span>
                    <span className="text-[10px] text-green-400 font-black uppercase tracking-widest">Starting from Tier 1</span>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                     <button onClick={copyIP} className="flex-1 sm:flex-none px-8 py-5 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 font-black text-xs uppercase tracking-widest transition-all hover:text-white">
                      {copied ? 'Copied!' : 'play.betterhost.org'}
                    </button>
                    <button onClick={() => window.location.hash = '#minecraft'} className="flex-1 sm:flex-none px-10 py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-xs uppercase tracking-widest transition-all shadow-xl shadow-green-600/20 active:scale-95">
                      Get Started >
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHighlight;