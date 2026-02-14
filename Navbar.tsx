import React, { useState, useRef, useEffect } from 'react';

interface NavbarProps {
  currentPath: string;
}

const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const logoUrl = "https://cdn.discordapp.com/attachments/1437386050342359123/1467870340553379952/Screenshot_20260202-160438_1.png?ex=6981f448&is=6980a2c8&hm=ea24bc5a9890399d9abdcaee65ff383abab24c0613d28e7e42ff551a4917d98f&";
  const discordLink = "https://discord.gg/bGpNXb2Njq";

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Minecraft', path: '#minecraft' },
    { name: 'VPS', path: '#vps' },
    { name: 'Pricing', path: '#pricing' },
    { name: 'About', path: '#about' },
    { name: 'FAQ', path: '#faq' },
    { name: 'Rules', path: '#rules' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) setIsMobileMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-panel border-slate-800 rounded-2xl px-4 md:px-6 h-16 md:h-20 flex items-center justify-between shadow-2xl bg-slate-950/60">
        <a href="#home" className="flex items-center gap-2 md:gap-3 group">
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl overflow-hidden border border-slate-700 shadow-lg group-hover:scale-110 transition-transform bg-[#0f172a] p-1.5 md:p-2">
            <img src={logoUrl} alt="BetterHost Logo" className="w-full h-full object-contain" />
          </div>
          <span className="text-lg md:text-xl font-black tracking-tight text-white italic">Better<span className="text-blue-500">Host</span></span>
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.path}
              href={link.path} 
              className={`px-3 xl:px-4 py-2 rounded-xl text-[10px] xl:text-xs font-black uppercase tracking-widest transition-all duration-200 ${
                currentPath === link.path 
                  ? 'text-blue-400 bg-slate-800' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-3 md:px-5 py-2 md:py-3 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-200 bg-slate-900 border border-slate-800 hover:bg-slate-800 transition-all active:scale-95"
          >
            Dashboard
          </a>

          <button 
            onClick={() => window.open(discordLink, '_blank')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-600/30 active:scale-95"
          >
            Deploy
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-400">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden absolute top-20 left-0 w-full glass-panel border-slate-800 rounded-2xl p-4 bg-slate-950/95 shadow-2xl animate-reveal origin-top">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navLinks.map((link) => (
              <a key={link.path} href={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center justify-center p-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${currentPath === link.path ? 'text-blue-400 bg-slate-800 border border-blue-500/20' : 'text-slate-400 border border-slate-800'}`}>
                {link.name}
              </a>
            ))}
          </div>
          <div className="h-px bg-slate-800 mb-4" />
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-blue-600 group transition-all">
            <span className="text-[10px] font-black uppercase text-slate-100 group-hover:text-white tracking-widest">Client Area</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;