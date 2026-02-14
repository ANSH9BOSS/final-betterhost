
import React from 'react';

const edgeFeatures = [
  {
    title: 'Robust Infrastructure',
    desc: 'Powered by flagship Intel & AMD processors, providing unbeatable performance at an affordable price.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'text-blue-600',
    glow: 'shadow-blue-500/10'
  },
  {
    title: 'Global Anycast',
    desc: 'Strategic nodes in North America, Europe, and Asia ensuring sub-20ms latency for global audiences.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9-9c1.657 0 3 4.03 3 9s-1.343 9-3 9m0-18c-1.657 0-3 4.03-3 9s1.343 9-3 9m-9-9a9 9 0 019-9" />
      </svg>
    ),
    color: 'text-blue-500',
    glow: 'shadow-blue-500/10'
  },
  {
    title: 'Layer 7 Filter',
    desc: 'Fortified hardware-level filtering with behavioral analysis to keep your project resilient.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'text-blue-400',
    glow: 'shadow-blue-500/10'
  },
  {
    title: 'Easy Control',
    desc: 'Pterodactyl-powered control panels with one-click plugin installs and automated scheduling.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    color: 'text-blue-600',
    glow: 'shadow-blue-500/10'
  }
];

const CuttingEdgeFeatures: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden bg-blue-50/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-reveal">
          <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase italic text-slate-900">
            Industrial <span className="text-blue-600">Edge</span>
          </h2>
          <p className="text-slate-500 text-lg md:text-xl max-w-3xl mx-auto font-bold leading-relaxed italic">
            Engineered for the most demanding production environments. Everything you need to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {edgeFeatures.map((feature, i) => (
            <div 
              key={i} 
              className="group glass-panel p-10 rounded-[2.5rem] border border-blue-100 hover:border-blue-300 transition-all duration-500 tilt-card flex flex-col items-start bg-white"
            >
              <div className={`w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-8 ${feature.color} group-hover:scale-110 transition-all shadow-sm`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-black mb-4 text-slate-900 group-hover:text-blue-600 transition-colors tracking-tight italic uppercase">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-semibold italic">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuttingEdgeFeatures;
