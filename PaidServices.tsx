
import React from 'react';

const PaidServices: React.FC = () => {
  const setupServices = [
    {
      title: 'Panel & Node Setup',
      price: '₹100',
      type: 'One-Time',
      desc: 'Complete Pterodactyl Panel installation + secure Node configuration.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      accent: 'blue'
    },
    {
      title: 'Nebula Pack Deployment',
      price: '₹150',
      type: 'One-Time',
      desc: 'Blueprints & Nebula Pack with 10 premium functional addons included.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      accent: 'emerald'
    },
    {
      title: 'Automated Bot Hosting',
      price: '₹200',
      type: 'One-Time',
      desc: 'Specialized environment for Discord bots and automation scripts.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      accent: 'purple'
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 animate-reveal">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg glass-panel text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">
              Premium Solutions
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
              Managed <span className="text-amber-500">Deployments</span>
            </h2>
            <p className="text-slate-400 text-lg font-medium">
              Industrial-grade server solutions for community owners and scaling enterprises.
            </p>
          </div>
          <a href="https://discord.com" target="_blank" className="flex items-center gap-4 px-8 py-5 glass-panel rounded-2xl border-amber-500/20 hover:bg-amber-500/10 transition-all group">
            <div className="text-white font-black text-sm uppercase tracking-widest">Connect to Engineering</div>
            <svg className="w-5 h-5 text-amber-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 glass-panel rounded-3xl p-10 relative overflow-hidden border-blue-500/20 bg-blue-500/[0.02] animate-reveal">
            <div className="flex flex-col h-full">
              <div className="mb-10">
                <div className="w-14 h-14 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500 mb-6 border border-blue-500/20">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black mb-2 text-white">EPYC MASTER INFRASTRUCTURE</h3>
                <p className="text-slate-400 font-medium">Full node virtualization for massive networks.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { val: '64GB', label: 'DDR4 ECC' },
                  { val: '16 vCPU', label: 'AMD EPYC' },
                  { val: '500GB', label: 'GEN4 NVME' }
                ].map((stat, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                    <div className="text-2xl font-black text-white">{stat.val}</div>
                    <div className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col md:flex-row items-center gap-8 border-t border-white/5 pt-8">
                <div>
                  <div className="text-4xl font-black text-white">₹1,500<span className="text-sm text-slate-500">/mo</span></div>
                  <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-1">Enterprise Grade SLA</div>
                </div>
                <button className="w-full md:w-auto px-10 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-widest transition-all">
                  Reserve Instance
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {setupServices.map((service, i) => (
              <div key={i} className="glass-panel p-6 rounded-2xl border-white/5 hover:border-amber-500/20 transition-all group animate-reveal" style={{animationDelay: `${(i + 2) * 0.1}s`}}>
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-amber-500 border border-white/10 group-hover:bg-amber-500 group-hover:text-white transition-all">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-black text-white">{service.price}</div>
                    <div className="text-[9px] font-bold text-slate-500 uppercase">One-Time Fee</div>
                  </div>
                </div>
                <h4 className="text-sm font-bold text-white mb-1">{service.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaidServices;
