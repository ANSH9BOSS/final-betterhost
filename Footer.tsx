import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "https://cdn.discordapp.com/attachments/1437386050342359123/1467870340553379952/Screenshot_20260202-160438_1.png?ex=6981f448&is=6980a2c8&hm=ea24bc5a9890399d9abdcaee65ff383abab24c0613d28e7e42ff551a4917d98f&";
  const discordLink = "https://discord.gg/bGpNXb2Njq";

  return (
    <footer className="py-24 bg-slate-950/80 backdrop-blur-md border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <a href="#home" className="flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-700 shadow-sm group-hover:scale-105 transition-transform bg-[#0f172a] p-2">
              <img src={logoUrl} alt="BetterHost Logo" className="w-full h-full object-contain" />
            </div>
            <span className="text-2xl font-black tracking-tight text-white italic">BetterHost</span>
          </a>
          <p className="text-sm font-bold text-slate-500 italic leading-relaxed mb-8">
            The next generation of cloud infrastructure. Pure white-label performance engineered for absolute zero-latency.
          </p>
          <div className="space-y-4">
             <h4 className="font-black text-slate-400 uppercase text-[9px] tracking-[0.3em]">Stay Updated</h4>
             <div className="flex gap-2">
                <input type="email" placeholder="Your Email" className="bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs font-black uppercase tracking-widest text-slate-300 w-full" />
                <button className="bg-blue-600 p-2 rounded-lg text-white hover:bg-blue-500 transition-colors"><svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg></button>
             </div>
          </div>
        </div>
        <div>
          <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em]">Infrastructure</h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-500">
            <li><a href="#minecraft" className="hover:text-blue-500 transition-colors">Minecraft Nodes</a></li>
            <li><a href="#vps" className="hover:text-blue-500 transition-colors">VPS Clusters</a></li>
            <li><a href="#services" className="hover:text-blue-500 transition-colors">Setup Lab</a></li>
            <li><a href="#pricing" className="hover:text-blue-500 transition-colors">Cloud Pricing</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em]">Community</h4>
          <ul className="space-y-4 text-xs font-black uppercase tracking-widest text-slate-500">
            <li><a href={discordLink} target="_blank" className="hover:text-blue-500 transition-colors flex items-center gap-2">Client Area <span className="text-[8px] bg-blue-500/10 text-blue-500 px-1.5 py-0.5 rounded border border-blue-500/20 animate-pulse">GATEWAY</span></a></li>
            <li><a href="#about" className="hover:text-blue-500 transition-colors">About Team</a></li>
            <li><a href="#faq" className="hover:text-blue-500 transition-colors">FAQ Support</a></li>
            <li><a href="#rules" className="hover:text-blue-500 transition-colors">Legal Framework</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-black mb-8 text-white uppercase text-xs tracking-[0.3em]">Connect</h4>
          <div className="flex flex-wrap gap-3">
            {[
              { n: 'Discord', l: discordLink, c: 'bg-blue-600' },
              { n: 'Status', l: '#', c: 'bg-emerald-600' },
              { n: 'Twitter', l: '#', c: 'bg-slate-800' },
              { n: 'GitHub', l: '#', c: 'bg-slate-800' }
            ].map(s => (
              <a key={s.n} href={s.l} target="_blank" className={`px-4 py-2 rounded-lg ${s.c} text-white text-[9px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-lg`}>
                {s.n}
              </a>
            ))}
          </div>
          <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800">
             <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Global Status</span>
             </div>
             <p className="text-[9px] text-slate-500 font-bold leading-relaxed">All systems operational across 4 major regions. Latency optimized.</p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
          &copy; {new Date().getFullYear()} BetterHost Systems. Precision Engineered.
        </div>
        <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 shadow-sm">
          <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Architected By</span>
          <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest italic">ANSH9BOSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;