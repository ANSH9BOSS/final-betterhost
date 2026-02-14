import React from 'react';

const featureList = [
  {
    title: 'NVMe Gen4 Speed',
    desc: 'Bypass storage bottlenecks with 7,000MB/s speeds. Your server files load instantly, guaranteed.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Self-Healing Cloud',
    desc: 'Proprietary node migration ensures zero downtime. If a node fails, your instance moves in milliseconds.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Quantum DDoS Filter',
    desc: '120Gbps hardware-level filtering combined with advanced traffic analysis to block all known attacks.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Global Anycast DNS',
    desc: 'Proprietary DNS routing that puts your domain on a Tier-1 network. Resolution in under 10ms.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase italic text-white">
            Quantum <span className="blue-gradient-text">Core</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto font-bold italic uppercase tracking-widest text-xs">Engineered for absolute performance without compromise.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {featureList.map((f, i) => (
            <div 
              key={i} 
              className="group glass-panel p-10 rounded-2xl transition-all duration-500 hover:-translate-y-4 bg-[#0f172a] border-slate-800"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-slate-800 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm`}>
                {f.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-white italic transition-colors group-hover:text-blue-400 uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium mb-8">{f.desc}</p>
              
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-400 transition-all">
                Blueprints
                <svg className="w-4 h-4 translate-x-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;