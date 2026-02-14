
import React from 'react';

const inviteTiers = [
  { count: '4', ram: '2GB', cpu: '50%', storage: '20GB', equivalent: '50GB Scale', color: 'blue' },
  { count: '8', ram: '4GB', cpu: '100%', storage: '30GB', equivalent: '100GB Scale', color: 'indigo' },
  { count: '12', ram: '6GB', cpu: '150%', storage: '40GB', equivalent: '150GB Scale', color: 'purple' },
  { count: '15', ram: '8GB', cpu: '200%', storage: '50GB', equivalent: '200GB Scale', color: 'blue' },
];

const boostTiers = [
  { boosts: '1', cpu: '100%', ram: '6GB', storage: '12GB' },
  { boosts: '2', cpu: '150%', ram: '12GB', storage: '15GB' },
  { boosts: '3', cpu: '150%', ram: '14GB', storage: '25GB' },
  { boosts: '4', cpu: '200%', ram: '16GB', storage: '35GB' },
];

const Rewards: React.FC = () => {
  return (
    <section id="rewards" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-reveal">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            Performance Incentive Program
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Growth</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            Support the BetterHost ecosystem and earn dedicated high-performance hardware allocations at no cost.
          </p>
        </div>

        {/* Invite Rewards Grid */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-12 animate-reveal">
            <h3 className="text-2xl font-black flex items-center gap-4 text-white">
              <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-500/20">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              Invite Tiers
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inviteTiers.map((tier, i) => (
              <div 
                key={i} 
                className="group glass-panel p-8 rounded-[2rem] border-white/5 hover:border-blue-500/30 transition-all duration-500 tilt-card animate-reveal"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-white">{tier.count}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Invites</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]`}></div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-xs font-bold uppercase">RAM</span>
                    <span className="text-white font-black">{tier.ram}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-xs font-bold uppercase">CPU</span>
                    <span className="text-white font-black">{tier.cpu}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-slate-500 text-xs font-bold uppercase">NVMe</span>
                    <span className="text-white font-black">{tier.storage}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-600/5 border border-blue-500/10 text-center">
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.2em]">
                    {tier.equivalent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Boost Rewards Table Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-8 animate-reveal">
            <div className="glass-panel p-10 rounded-[2.5rem] border-purple-500/20 bg-purple-500/[0.05] shadow-2xl">
              <h3 className="text-3xl font-black mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-600/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                Boost
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                Sustain the network by boosting our Discord. Earn permanent monthly performance enhancements for your project.
              </p>
              <div className="space-y-4">
                {['Issued Every 30 Days', 'Exclusive Network Priority', 'Dynamic Scaling Enabled'].map((item, j) => (
                  <div key={j} className="flex items-center gap-4 text-xs font-bold text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 rounded-[2rem] p-8">
              <div className="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-widest mb-3">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Infrastructure Notice
              </div>
              <p className="text-[11px] text-red-400/80 leading-relaxed font-semibold">
                Revoking a Discord boost results in an immediate suspension of tier rewards. Maintain active status for uninterrupted performance.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 glass-panel rounded-[3rem] p-1 overflow-hidden border-white/5 shadow-2xl animate-reveal" style={{ animationDelay: '0.2s' }}>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-900/50">
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Boost Count</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Compute</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Memory</th>
                  <th className="p-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Storage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {boostTiers.map((row, i) => (
                  <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                    <td className="p-8">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 font-black text-sm border border-purple-500/20">{row.boosts}</div>
                        <span className="text-white font-bold tracking-tight">Level {row.boosts}</span>
                      </div>
                    </td>
                    <td className="p-8 font-black text-white text-lg">{row.cpu}</td>
                    <td className="p-8 font-black text-white text-lg">{row.ram}</td>
                    <td className="p-8 font-black text-white text-lg">{row.storage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Rewards;
