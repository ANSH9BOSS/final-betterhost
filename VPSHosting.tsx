import React from 'react';

const vpsPlans = [
  { id: 'VPS_COAL', name: 'Instance v1', price: '₹175', features: ['1 Core EPYC', '4GB RAM', '50GB NVMe'], specs: { ram: '4GB', cpu: '1 Core', storage: '50GB' } },
  { id: 'VPS_COPPER', name: 'Instance v2', price: '₹260', features: ['2 Core EPYC', '8GB RAM', '100GB NVMe'], specs: { ram: '8GB', cpu: '2 Core', storage: '100GB' } },
  { id: 'VPS_IRON', name: 'Instance v3', price: '₹380', features: ['4 Core EPYC', '16GB RAM', '150GB NVMe'], specs: { ram: '16GB', cpu: '4 Core', storage: '150GB' }, recommended: true },
  { id: 'VPS_DIAMOND', name: 'Instance v4', price: '₹980', features: ['6 Core EPYC', '32GB RAM', '200GB NVMe'], specs: { ram: '32GB', cpu: '6 Core', storage: '200GB' } },
  { id: 'VPS_NETHERITE', name: 'Instance v5', price: '₹1400', features: ['8 Core EPYC', '64GB RAM', '300GB NVMe'], specs: { ram: '64GB', cpu: '8 Core', storage: '300GB' } }
];

const VPSHosting: React.FC = () => {
  const discordLink = "https://discord.gg/bGpNXb2Njq";

  return (
    <section id="vps" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 animate-reveal">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-4">
              Infrastructure v4.0
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-white italic">Scalable <span className="blue-gradient-text">VPS</span> Engines</h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm font-bold uppercase italic tracking-wider">Root access. KVM virtualization. AMD EPYC high-frequency cores.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {vpsPlans.map((plan, i) => (
            <div 
              key={plan.id} 
              className={`group glass-panel rounded-2xl p-6 transition-all duration-500 tilt-card border-slate-800 bg-slate-900/60 backdrop-blur-md animate-reveal ${plan.recommended ? 'ring-2 ring-blue-500 shadow-2xl scale-105' : 'shadow-md'}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
                  </svg>
                </div>
                <h3 className="font-black text-white tracking-tight uppercase italic text-xs">{plan.name}</h3>
              </div>
              
              <div className="mb-8">
                <div className="text-2xl font-black text-white">{plan.price}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">/ monthly</div>
              </div>

              <div className="space-y-4 mb-8">
                {Object.entries(plan.specs).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center text-[9px] font-black border-b border-slate-800 pb-2">
                    <span className="text-slate-500 uppercase tracking-widest">{key}</span>
                    <span className="text-white uppercase">{val}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => window.open(discordLink, '_blank')}
                className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                plan.recommended 
                ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg' 
                : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
              }`}>
                Deploy
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VPSHosting;