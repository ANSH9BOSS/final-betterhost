import React, { useState } from 'react';

const minecraftData = {
  Basic: [
    { id: 'MC_SILVERFISH', name: 'Silverfish Node', price: '₹50', features: ['2GB DDR4', '50% CPU', '20GB NVMe'], specs: { ram: '2GB', cpu: '50%', storage: '20GB' } },
    { id: 'MC_ZOMBIE', name: 'Zombie Core', price: '₹100', features: ['4GB DDR4', '100% CPU', '20GB NVMe'], specs: { ram: '4GB', cpu: '100%', storage: '20GB' } },
  ],
  Standard: [
    { id: 'MC_CREEPER', name: 'Creeper Ultra', price: '₹250', features: ['10GB DDR4', '275% CPU', '56GB NVMe'], specs: { ram: '10GB', cpu: '275%', storage: '56GB' }, recommended: true },
    { id: 'MC_GOLEM', name: 'Golem Cluster', price: '₹400', features: ['16GB DDR4', '375% CPU', '80GB NVMe'], specs: { ram: '16GB', cpu: '375%', storage: '80GB' } },
  ],
  Premium: [
    { id: 'MC_WITHER', name: 'Wither King', price: '₹600', features: ['24GB DDR4', '450% CPU', '120GB NVMe'], specs: { ram: '24GB', cpu: '450%', storage: '120GB' } },
    { id: 'MC_DRAGON', name: 'Ender Hub', price: '₹900', features: ['32GB DDR4', '550% CPU', '160GB NVMe'], specs: { ram: '32GB', cpu: '550%', storage: '160GB' } },
  ]
};

const MinecraftHosting: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Basic' | 'Standard' | 'Premium'>('Standard');
  const discordLink = "https://discord.gg/bGpNXb2Njq";

  return (
    <section id="minecraft" className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-reveal">
          <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic text-white">
            Node <span className="minecraft-gradient-text">Fabric</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-[0.3em]">Proprietary Ryzen 9 7950X Provisioning.</p>
        </div>

        <div className="flex justify-center mb-16 animate-reveal">
          <div className="flex p-1.5 glass-panel rounded-2xl border-slate-800 bg-slate-900/60 backdrop-blur-md">
            {(['Basic', 'Standard', 'Premium'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-10 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all duration-300 z-10 ${
                  activeTab === tab ? 'text-green-400' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-xl -z-10 shadow-inner"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {minecraftData[activeTab].map((plan, i) => (
            <div 
              key={plan.id} 
              className="group relative glass-panel rounded-[2.5rem] overflow-hidden tilt-card border-slate-800 shadow-xl bg-slate-900/80 backdrop-blur-md"
            >
              <div className="p-10">
                <div className="flex justify-between items-start mb-10">
                  <h3 className="text-3xl font-black text-white uppercase italic leading-none">{plan.name}</h3>
                  <div className="text-right">
                    <div className="text-3xl font-black text-green-500">{plan.price}</div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Monthly</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                  {[
                    { l: 'RAM', v: plan.specs.ram },
                    { l: 'CPU', v: plan.specs.cpu },
                    { l: 'SSD', v: plan.specs.storage }
                  ].map((s, idx) => (
                    <div key={idx} className="bg-slate-800/50 p-4 rounded-2xl border border-slate-700 text-center">
                      <span className="block text-[8px] text-green-500/60 font-black uppercase tracking-widest mb-1">{s.l}</span>
                      <span className="text-xs font-black text-white">{s.v}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => window.open(discordLink, '_blank')}
                  className="w-full py-5 rounded-2xl bg-green-600 hover:bg-green-500 text-white font-black text-xs uppercase tracking-widest transition-all shadow-lg active:scale-95"
                >
                  Provision Node
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinecraftHosting;