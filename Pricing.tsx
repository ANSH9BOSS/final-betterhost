import React from 'react';
import { Plan } from '../types';

const plans: Plan[] = [
  {
    id: 'STARTER',
    name: 'Starter Cloud',
    price: '₹50',
    period: '/mo',
    features: ['10GB NVMe Storage', '1 Core Ryzen 9', 'Standard Priority', 'Free SSL', '24/7 Support'],
  },
  {
    id: 'PROFESSIONAL',
    name: 'Professional Pro',
    price: '₹250',
    period: '/mo',
    features: ['100GB NVMe Storage', '4 Cores Ryzen 9', 'High Priority', 'Daily Backups', 'Free Domain'],
    recommended: true,
  },
  {
    id: 'ENTERPRISE',
    name: 'Enterprise Ultra',
    price: '₹1500',
    period: '/mo',
    features: ['Unmetered NVMe', '16 Cores Ryzen 9', 'Critical Priority', 'VIP Discord Support', 'Custom WAF'],
  }
];

const Pricing: React.FC = () => {
  const discordLink = "https://discord.gg/bGpNXb2Njq";

  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 animate-reveal">
          <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter italic text-white">Premium <span className="blue-gradient-text">Tiers</span></h2>
          <p className="text-slate-500 font-bold uppercase tracking-widest">Enterprise infrastructure tailored for scale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`relative flex flex-col p-10 rounded-[2.5rem] transition-all duration-500 tilt-card backdrop-blur-md ${
                plan.recommended 
                  ? 'bg-blue-600 text-white scale-105 z-20 shadow-2xl shadow-blue-600/30' 
                  : 'glass-panel border-slate-800 bg-slate-900/60 hover:bg-slate-900/80 text-white'
              }`}
            >
              {plan.recommended && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-2xl shadow-blue-500/50">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-black mb-4 uppercase italic ${plan.recommended ? 'text-white' : 'text-slate-200'}`}>{plan.name}</h3>
              <div className="flex items-baseline mb-10">
                <span className="text-5xl font-black tracking-tighter">{plan.price}</span>
                <span className={`ml-2 font-bold uppercase text-xs ${plan.recommended ? 'text-blue-100' : 'text-slate-500'}`}>{plan.period}</span>
              </div>
              <ul className="space-y-5 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-bold">
                    <svg className={`w-5 h-5 mr-4 shrink-0 ${plan.recommended ? 'text-white' : 'text-blue-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={plan.recommended ? 'text-blue-50' : 'text-slate-400'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button 
                onClick={() => window.open(discordLink, '_blank')}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all active:scale-95 shadow-lg ${
                plan.recommended 
                  ? 'bg-white text-blue-600 hover:bg-blue-50' 
                  : 'bg-blue-600 text-white hover:bg-blue-500'
              }`}>
                Configure Deployment
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;