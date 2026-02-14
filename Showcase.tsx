import React from 'react';

const showcaseItems = [
  {
    title: 'Modern Survival',
    desc: 'Lush landscapes powered by high-frequency cores.',
    src: 'https://cdn.discordapp.com/attachments/1437386050342359123/1467790510994231409/Minecraft_TheGardenAwakens_DotNet_2048x2048.png?ex=6981a9f0&is=69805870&hm=9257a3124c40e618ba7519fd2b5c2363b793e446efc90b62f363e85b86405c7c&',
    tag: 'Next-Gen',
    layout: 'lg:col-span-2'
  },
  {
    title: 'Network Hub',
    desc: 'BungeeCord optimized clusters for global reach.',
    src: 'https://cdn.discordapp.com/attachments/1437386050342359123/1467790368404672572/wallpaper_minecraft_pc_bundle_1080x1920.png?ex=6981a9ce&is=6980584e&hm=7c03c0e12b7da80689012d0cf63f0a3c12734bfb83f7351f676f3c2fc6e45d12&',
    tag: 'Cluster',
    layout: 'lg:col-span-1'
  },
  {
    title: 'Season Events',
    desc: 'Specialized node cluster for peak traffic spikes.',
    src: 'https://cdn.discordapp.com/attachments/1437386050342359123/1467790401283821608/MCV_HOL25Drop_MoM_DotNet_Wallpaper_1080x1920.png?ex=6981a9d5&is=69805855&hm=0e8ec4cf5bf08fb241150c5658c8ae4ecb4731a3190d0ac49773598afca983ca&',
    tag: 'Event',
    layout: 'lg:col-span-1'
  },
  {
    title: 'Vibrant SMP',
    desc: 'Industrial hosting for massive multiplayer worlds.',
    src: 'https://cdn.discordapp.com/attachments/1437386050342359123/1467790457621975113/MCV_HOL25Drop_MoM_DotNet_Wallpaper_2560x1440.png?ex=6981a9e3&is=69805863&hm=d2fc9a53a6a71563cb8f1a77539ee01fef2a485e53f9c5ed3d000d86b64e7efa&',
    tag: 'Enterprise',
    layout: 'lg:col-span-2'
  }
];

const Showcase: React.FC = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12 md:mb-20 animate-reveal text-center md:text-left">
          <h2 className="text-4xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter uppercase italic text-white">
            Ultimate <span className="blue-gradient-text">Showcase</span>
          </h2>
          <p className="text-slate-500 text-sm md:text-lg font-bold max-w-2xl italic mx-auto md:mx-0">
            Engineered for clarity and absolute stability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {showcaseItems.map((item, i) => (
            <div 
              key={i} 
              className={`group relative glass-panel rounded-2xl md:rounded-[2rem] overflow-hidden h-[350px] md:h-[450px] border-slate-800 shadow-xl transition-all duration-700 hover:shadow-blue-500/10 ${item.layout}`}
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 opacity-60 md:opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-600 text-white text-[8px] md:text-[9px] font-black uppercase tracking-widest mb-3 md:mb-4">
                  {item.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black mb-1 md:mb-2 text-white uppercase italic leading-none">{item.title}</h3>
                <p className="text-slate-400 text-[10px] md:text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;