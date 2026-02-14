
import React from 'react';

const pricingTiers = [
  { 
    range: '₹20', 
    title: 'Core Logic', 
    features: ['Custom commands', 'Cooldown triggers', 'Standard IO'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  { 
    range: '₹50+', 
    title: 'Entity Mechanics', 
    features: ['Ability systems', 'Particle drivers', 'Custom loot'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  { 
    range: '₹120+', 
    title: 'Interface Suite', 
    features: ['Dynamic GUIs', 'Combat HUDs', 'Action bars'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    )
  },
  { 
    range: '₹200+', 
    title: 'Systems Forge', 
    features: ['Skills systems', 'Economy bridges', 'Leveling cores'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.183.319l-3.08 1.925a8 8 0 1013.984-5.996l-4.407 4.407" />
      </svg>
    )
  },
  { 
    range: '₹300+', 
    title: 'Network Architect', 
    features: ['SMP Core clusters', 'Global data Sync', 'Proxy bridges'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9m-9-9a9 9 0 019-9" />
      </svg>
    )
  },
  { 
    range: '₹500+', 
    title: 'Enterprise Core', 
    features: ['Full engine builds', 'Custom server jars', 'API provision'],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
];

const PluginServices: React.FC = () => {
  return (
    <section id="plugins" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-panel text-rose-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            Development & Systems
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
            Custom <span className="text-rose-500">Plugin</span> Engineering
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            Deploy bespoke Java logic optimized for BetterHost infrastructure. Engineered for stability and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, i) => (
            <div 
              key={i} 
              className="group glass-panel p-8 rounded-[2rem] border-white/5 hover:border-rose-500/20 transition-all duration-500 tilt-card animate-reveal"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-14 h-14 rounded-2xl bg-rose-600/10 flex items-center justify-center text-rose-500 border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all shadow-inner">
                  {tier.icon}
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-white">{tier.range}</div>
                  <div className="text-[9px] font-black text-rose-500 uppercase tracking-widest">Baseline</div>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-rose-400 transition-colors tracking-tight">{tier.title}</h4>
              <ul className="space-y-3">
                {tier.features.map((feat, j) => (
                  <li key={j} className="text-sm text-slate-400 flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500/40"></div>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-reveal">
          {/* Visuals */}
          <div className="glass-panel p-10 rounded-[3rem] border-white/5 flex flex-col md:flex-row gap-8 items-center bg-rose-500/[0.02] hover:border-rose-500/20 transition-all">
            <div className="w-24 h-24 rounded-3xl bg-rose-600/10 flex items-center justify-center text-rose-500 border border-rose-500/20 shadow-inner">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">Visual Identity</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                Bespoke resource packs and custom UI elements designed for full server integration.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-[10px] font-bold text-rose-400 uppercase border border-white/10 tracking-widest">
                Custom Quote Required
              </div>
            </div>
          </div>

          <div className="glass-panel p-10 rounded-[3rem] border-white/5 flex flex-col md:flex-row gap-8 items-center bg-emerald-500/[0.02] hover:border-emerald-500/20 transition-all">
            <div className="w-24 h-24 rounded-3xl bg-emerald-600/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20 shadow-inner">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-black text-white mb-2 tracking-tight">System Provisioning</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 font-medium">
                Advanced YAML/JSON configuration modules for dynamic server management and hot-loading.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-600/10 text-[10px] font-bold text-emerald-400 uppercase border border-emerald-600/20 tracking-widest">
                Starts at ₹400
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PluginServices;
