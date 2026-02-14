import React, { useState } from 'react';

const faqs = [
  {
    question: "What is your DDoS protection capacity?",
    answer: "BetterHost utilizes an industrial-grade filtering layer capable of mitigating up to 120Gbps of traffic. Our Layer 7 behavioral analysis ensures your server remains online even during complex application-layer attacks."
  },
  {
    question: "How long does it take to deploy a server?",
    answer: "Our provisioning system is fully automated. Minecraft nodes and VPS instances are typically online within 60 seconds of order confirmation."
  },
  {
    question: "Do you offer free hosting?",
    answer: "Yes, we provide specialized free tiers for community growth. Our ecosystem supports both Free and Paid users with high-performance hardware, though paid tiers enjoy higher resource priority."
  },
  {
    question: "What hardware powers the nodes?",
    answer: "We only use premium hardware. Our game nodes run on AMD Ryzen 9 7950X processors, while our cloud VPS clusters utilize high-frequency AMD EPYC CPUs and enterprise NVMe Gen4 storage."
  },
  {
    question: "Can I migrate my existing server files?",
    answer: "Absolutely. Our Pterodactyl-powered panel supports easy SFTP access and ZIP imports. If you need help, our engineering team on Discord can assist with larger migrations."
  },
  {
    question: "How do I get technical support?",
    answer: "Our primary support hub is our Discord server. We have a dedicated 'Engineering' team available 24/7 to handle critical infrastructure issues and general queries."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-transparent">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-reveal">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter text-white uppercase italic">
            Common <span className="blue-gradient-text">Queries</span>
          </h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Everything you need to know about BetterHost.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="glass-panel rounded-2xl border-slate-800 bg-slate-900/40 overflow-hidden transition-all duration-300 shadow-xl"
            >
              <button 
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors group"
              >
                <span className="text-sm md:text-base font-black text-slate-200 uppercase tracking-tight italic group-hover:text-blue-400 transition-colors">
                  {faq.question}
                </span>
                <svg 
                  className={`w-5 h-5 text-blue-500 transition-transform duration-500 ${openIndex === i ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-6 text-slate-400 text-sm font-medium leading-relaxed italic border-t border-slate-800/30 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;