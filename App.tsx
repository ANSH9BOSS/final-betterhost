import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Pricing from './components/Pricing.tsx';
import Features from './components/Features.tsx';
import Terms from './components/Terms.tsx';
import Footer from './components/Footer.tsx';
import MinecraftHosting from './components/MinecraftHosting.tsx';
import VPSHosting from './components/VPSHosting.tsx';
import PaidServices from './components/PaidServices.tsx';
import PluginServices from './components/PluginServices.tsx';
import Rewards from './components/Rewards.tsx';
import Showcase from './components/Showcase.tsx';
import CuttingEdgeFeatures from './components/CuttingEdgeFeatures.tsx';
import GamingSection from './components/GamingSection.tsx';
import GameHighlight from './components/GameHighlight.tsx';
import GlobalPresence from './components/GlobalPresence.tsx';
import AboutUs from './components/AboutUs.tsx';
import FAQ from './components/FAQ.tsx';

// New Utility Components for 20+ items
const StatsBanner = () => (
  <section className="py-12 border-y border-slate-800 bg-slate-950/50">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { l: 'Total Nodes', v: '412', a: '+' },
        { l: 'RAM Capacity', v: '16.4', a: 'TB' },
        { l: 'Happy Clients', v: '12', a: 'k+' },
        { l: 'Global Uptime', v: '99.99', a: '%' }
      ].map((s, i) => (
        <div key={i} className="text-center group">
          <div className="text-3xl md:text-5xl font-black text-white italic group-hover:scale-110 transition-transform duration-500">
            {s.v}<span className="text-blue-500 text-lg ml-1">{s.a}</span>
          </div>
          <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mt-2">{s.l}</div>
        </div>
      ))}
    </div>
  </section>
);

const PartnerMarquee = () => (
  <div className="py-12 overflow-hidden bg-slate-950 border-b border-slate-800">
    <div className="flex whitespace-nowrap animate-[marquee_30s_linear_infinite] opacity-30 hover:opacity-100 transition-opacity">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="flex gap-24 items-center px-12">
          {['INTEL', 'RYZEN', 'AMD EPYC', 'NVIDIA', 'CLOUDFLARE', 'PTERODACTYL', 'UBUNTU', 'DEBIAN'].map(p => (
            <span key={p} className="text-3xl font-black text-slate-400 italic tracking-tighter">{p}</span>
          ))}
        </div>
      ))}
    </div>
  </div>
);

const logoUrl = "https://cdn.discordapp.com/attachments/1437386050342359123/1467870340553379952/Screenshot_20260202-160438_1.png?ex=6981f448&is=6980a2c8&hm=ea24bc5a9890399d9abdcaee65ff383abab24c0613d28e7e42ff551a4917d98f&";
const abstractVideo = "https://media.discordapp.net/attachments/1452158530453766255/1457264160340574279/Screen_Recording_20260104_121434_YouTube.mp4?ex=69819a02&is=69804882&hm=8d2a60e9e73bdfded0ee404ff2c226e9a7b79629c597763dd5b8bc8962dc063e";
const minecraftVideo = "https://media.discordapp.net/attachments/1437386050342359123/1467790160128114856/minecraft-aquarium.3840x2160.mp4?ex=6981a99c&is=6980581c&hm=cd7d7219de4400b80b34320ce17ee1918b8ffab25c6b254779cdae3c086479ac";
const discordLink = "https://discord.gg/bGpNXb2Njq";

const BackgroundVideo = ({ src }: { src: string }) => (
  <div className="fixed inset-0 -z-20 w-full h-full overflow-hidden pointer-events-none">
    <video
      key={src}
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 grayscale brightness-50 transition-all duration-1000"
      src={src}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617]" />
  </div>
);

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 10));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-[#020617] flex flex-col items-center justify-center">
      <div className="relative mb-12">
        <div className="w-24 h-24 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl animate-bounce bg-[#0f172a] p-4 flex items-center justify-center">
          <img src={logoUrl} alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>
      <div className="w-64 h-1 bg-slate-900 rounded-full overflow-hidden">
        <div className="h-full bg-blue-600 transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.8)]" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

const HomePage = () => (
  <div className="space-y-0">
    <header className="relative pt-48 pb-32 overflow-hidden min-h-screen flex items-center bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-900/80 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-[0.4em] mb-12 animate-reveal border border-slate-800 shadow-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Industrial Infrastructure v4.0
        </div>
        <h1 className="text-6xl md:text-[9rem] font-black mb-8 leading-[0.85] tracking-tighter animate-reveal uppercase italic text-white">
          Better<span className="purple-blue-gradient-text">Host.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-16 font-semibold uppercase tracking-widest animate-reveal italic">
          High-performance nodes. Zero-latency networking. Pure power.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-reveal">
          <button onClick={() => window.open(discordLink, '_blank')} className="px-12 py-6 rounded-2xl bg-blue-600 text-white font-black text-xl hover:scale-105 hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 uppercase italic">
            Deploy Now
          </button>
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className="px-12 py-6 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-slate-800 text-slate-200 font-black text-xl hover:bg-slate-800 transition-all active:scale-95 uppercase shadow-md italic">
            Join Discord
          </a>
        </div>
      </div>
    </header>
    <StatsBanner />
    <AboutUs />
    <GameHighlight />
    <PartnerMarquee />
    <Showcase />
    <GlobalPresence />
    <GamingSection />
    <CuttingEdgeFeatures />
    <Features />
    <FAQ />
  </div>
);

const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState(window.location.hash || '#home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentPath(hash);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => {
      clearTimeout(timer);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const currentVideo = currentPath === '#minecraft' ? minecraftVideo : abstractVideo;

  const renderContent = () => {
    switch (currentPath) {
      case '#home': return <HomePage />;
      case '#about': return <div className="pt-24"><AboutUs /></div>;
      case '#minecraft': return <div className="pt-24"><MinecraftHosting /></div>;
      case '#vps': return <div className="pt-24"><VPSHosting /></div>;
      case '#plugins': return <div className="pt-24"><PluginServices /></div>;
      case '#services': return <div className="pt-24"><PaidServices /></div>;
      case '#rewards': return <div className="pt-24"><Rewards /></div>;
      case '#pricing': return <div className="pt-24"><Pricing /></div>;
      case '#rules': return <div className="pt-24"><Terms /></div>;
      case '#faq': return <div className="pt-24"><FAQ /></div>;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden selection:bg-blue-600/30 selection:text-white bg-[#020617] text-slate-200">
      {isLoading && <LoadingScreen />}
      <BackgroundVideo src={currentVideo} />
      <div className={`transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar currentPath={currentPath} />
        <main className="min-h-[90vh]">
          {renderContent()}
        </main>
        <Footer />
        <div className="fixed bottom-8 right-8 z-[100]">
          <a 
            href={discordLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-glow"
          >
            <svg className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.086 2.157 2.419c0 1.334-.946 2.419-2.157 2.419z"/>
            </svg>
          </a>
        </div>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default App;