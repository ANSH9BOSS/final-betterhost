import React from 'react';

const staff = {
  founders: [
    { name: 'AAYU', id: '1' },
    { name: 'ATHARV', id: '2' }
  ],
  developers: [
    { name: 'ANSH9BOSS', id: '1' }
  ],
  members: [
    { name: 'aaditya_gg', id: '1' },
    { name: 'Mt_Void', id: '2' },
    { name: 'Sanchitt', id: '3' },
    { name: 'Suvansh_', id: '4' }
  ]
};

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">
            Behind the <span className="blue-gradient-text">Core</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Meet the team powering your hosting experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Founders */}
          <div className="glass-panel p-8 rounded-3xl border-slate-800 bg-slate-900/60 backdrop-blur-md animate-reveal">
            <h3 className="text-xl font-black text-white mb-6 uppercase italic flex items-center gap-3">
              <span className="text-blue-500">01.</span> Trusted Founders
            </h3>
            <div className="space-y-4">
              {staff.founders.map(f => (
                <div key={f.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-sm font-black text-slate-200">{f.name}</span>
                  <span className="text-[10px] font-black text-blue-500 uppercase">#0{f.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Developers */}
          <div className="glass-panel p-8 rounded-3xl border-slate-800 bg-slate-900/60 backdrop-blur-md animate-reveal" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-black text-white mb-6 uppercase italic flex items-center gap-3">
              <span className="text-purple-500">02.</span> Trusted Developers
            </h3>
            <div className="space-y-4">
              {staff.developers.map(d => (
                <div key={d.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-sm font-black text-slate-200">{d.name}</span>
                  <span className="text-[10px] font-black text-purple-500 uppercase">#0{d.id}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="glass-panel p-8 rounded-3xl border-slate-800 bg-slate-900/60 backdrop-blur-md animate-reveal" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-black text-white mb-6 uppercase italic flex items-center gap-3">
              <span className="text-emerald-500">03.</span> Trusted Members
            </h3>
            <div className="space-y-4">
              {staff.members.map(m => (
                <div key={m.name} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 border border-slate-800">
                  <span className="text-sm font-black text-slate-200">{m.name}</span>
                  <span className="text-[10px] font-black text-emerald-500 uppercase">#0{m.id}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;