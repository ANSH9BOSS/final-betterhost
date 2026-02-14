
import React, { useState, useEffect } from 'react';

const GamingSection: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  const serverIP = 'play.hypixel.net'; 

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        setIsOnline(data.online);
      } catch (error) {
        setIsOnline(false);
      }
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusColor = isOnline ? 'blue' : 'slate';

  return (
    <section className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-24 animate-reveal">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic text-slate-900">
            Industrial <span className="text-blue-600">Engines</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em]">
            Ultra-low latency networking with Ryzen 9 Fabric.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="glass-panel p-10 rounded-[2.5rem] border-blue-100 h-full shadow-xl bg-white/70 backdrop-blur-md">
              <h3 className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] mb-10 px-2 border-b border-blue-50 pb-4">
                Platform Sync
              </h3>
              <div className="space-y-8">
                <div className="relative">
                  <div className={`flex items-center justify-between p-6 rounded-2xl border border-${statusColor}-100 bg-${statusColor}-50/30 shadow-sm transition-all`}>
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${statusColor}-400 opacity-75`}></span>
                        <span className={`relative inline-flex rounded-full h-3 w-3 bg-${statusColor}-600`}></span>
                      </span>
                      <span className="font-black text-slate-900 uppercase italic text-sm">Cluster</span>
                    </div>
                    <span className={`text-${statusColor}-600 text-[9px] font-black uppercase`}>
                      {isOnline === null ? 'SYNC' : isOnline ? 'ACTIVE' : 'OFFLINE'}
                    </span>
                  </div>
                </div>
                
                {['Proxy A', 'Node-42', 'Engine V3'].map((node) => (
                  <div key={node} className="flex items-center justify-between p-5 rounded-2xl border border-blue-50 bg-blue-50/20 hover:bg-blue-50 transition-all cursor-default">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-blue-600"></span>
                      <span className="font-black text-slate-500 uppercase italic text-xs">{node}</span>
                    </div>
                    <span className="text-[9px] font-black uppercase text-blue-600/60 tracking-widest">STABLE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-[3rem] overflow-hidden border border-blue-100 min-h-[600px] flex flex-col group tilt-card shadow-2xl bg-white/90 backdrop-blur-md">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://cdn.discordapp.com/attachments/1437386050342359123/1467790457621975113/MCV_HOL25Drop_MoM_DotNet_Wallpaper_2560x1440.png?ex=6981a9e3&is=69805863&hm=d2fc9a53a6a71563cb8f1a77539ee01fef2a485e53f9c5ed3d000d86b64e7efa&" 
                  alt="Background" 
                  className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-all duration-1000 scale-105 group-hover:scale-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/50 to-blue-50/30"></div>
              </div>

              <div className="relative z-10 p-16 flex flex-col h-full">
                <div className="mb-12">
                  <div className="inline-block px-5 py-2 rounded-xl bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6 shadow-lg shadow-blue-600/20">
                    Flagship Cloud
                  </div>
                  <h3 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter italic leading-[0.8]">Superior<br />Compute.</h3>
                </div>

                <p className="text-slate-500 text-xl font-bold max-w-xl mb-16 italic leading-relaxed">
                  Premium Java nodes with instant provisioning. Engineered for massive player counts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  {[
                    { l: 'PROCESSOR', v: 'Ryzen 9 7950X', i: 'M9 3v2m6-2v2M9 19v2m6-2v2' },
                    { l: 'MEMORY', v: 'DDR5 ECC', i: 'M19 11H5m14 0a2 2 0 012 2v6' },
                    { l: 'STORAGE', v: 'Gen4 NVMe', i: 'M5 12h14M5 12a2 2 0 01-2-2' }
                  ].map((spec, i) => (
                    <div key={i} className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-110 transition-transform">
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={spec.i} />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{spec.l}</div>
                        <div className="text-sm font-black text-slate-900">{spec.v}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-auto pt-16 border-t border-blue-50 flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter">₹50</span>
                    <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">/Monthly</span>
                  </div>
                  <button className="px-14 py-6 rounded-2xl bg-blue-600 text-white font-black text-xs uppercase tracking-widest hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95 italic">
                    Deploy Node
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamingSection;
