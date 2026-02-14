import React from 'react';

const Terms: React.FC = () => {
  return (
    <section id="rules" className="py-24 bg-transparent relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white italic uppercase">Rules & <span className="blue-gradient-text">Policies</span></h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Built on security, fairness, and transparency.</p>
        </div>

        <div className="glass-panel p-8 md:p-12 rounded-2xl border-slate-800 space-y-12 max-h-[70vh] overflow-y-auto custom-scrollbar shadow-2xl bg-[#0f172a]/90 backdrop-blur-xl">
          {/* General Rules */}
          <div className="animate-reveal">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-black text-white italic shadow-lg shadow-blue-600/20">!</div>
              <h3 className="text-2xl font-black text-white uppercase italic">General Protocols</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8 text-sm text-slate-400 font-medium italic">
              <div className="space-y-6">
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">01</span> Be respectful to all users, staff, and customers.</p>
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">02</span> No racism, hate speech, or toxic behaviors.</p>
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">03</span> No impersonation of staff or other brands.</p>
              </div>
              <div className="space-y-6">
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">04</span> Account security is the user's responsibility.</p>
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">05</span> strictly one free account per physical user.</p>
                <p className="flex gap-4 p-4 rounded-xl bg-slate-900 border border-slate-800"><span className="text-blue-400 font-black">06</span> For any queries, contact the Engineering team.</p>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-800" />

          {/* Hosting Details */}
          <div className="grid md:grid-cols-2 gap-12 animate-reveal">
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center gap-3 italic uppercase">
                <span className="text-blue-400 font-black tracking-tighter">01.</span> Free Hosting
              </h4>
              <ul className="space-y-3 text-sm text-slate-500 list-none font-semibold">
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Compliance with all legal policies is mandatory.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Zero tolerance for prohibited or illegal activities.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Resources are limited and shared on free nodes.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> No hosting of malicious content or script kits.</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center gap-3 italic uppercase">
                <span className="text-blue-400 font-black tracking-tighter">02.</span> Paid Infrastructure
              </h4>
              <ul className="space-y-3 text-sm text-slate-500 list-none font-semibold">
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Minecraft, VPS, and Web nodes are provisioned instantly.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Subscriptions must be active for node availability.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Prices may adjust with 30-day notice cycles.</li>
                <li className="flex gap-2 items-start"><span className="text-blue-400">●</span> Priority support access included in all paid tiers.</li>
              </ul>
            </div>
          </div>

          <div className="h-px bg-slate-800" />

          {/* Data and Refunds */}
          <div className="grid md:grid-cols-2 gap-12 animate-reveal">
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center gap-3 italic uppercase">
                <span className="text-blue-400 font-black tracking-tighter">03.</span> Data Continuity
              </h4>
              <p className="text-sm text-slate-500 leading-relaxed italic border-l-4 border-blue-500/20 pl-6 font-medium">
                BetterHost provides automated backups but cannot guarantee 100% data preservation against catastrophic failure or user error. Off-site backups are highly recommended.
              </p>
            </div>
            <div className="space-y-6">
              <h4 className="text-xl font-black text-white flex items-center gap-3 italic uppercase">
                <span className="text-blue-400 font-black tracking-tighter">04.</span> Settlement
              </h4>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-xs text-slate-500 font-bold">
                <p className="text-blue-400 uppercase mb-2 tracking-widest">Refund Policy:</p>
                <p className="leading-relaxed">Requests must be logged within 24 hours of first payment. Note that VPS and Specialized node allocations are strictly non-refundable due to resource reservation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;