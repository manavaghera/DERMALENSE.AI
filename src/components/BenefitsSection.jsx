import React from 'react';
import { Brain, Zap, IndianRupee, Stethoscope } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'AI-Powered Analysis',
    desc: 'A CNN/ViT ensemble (EfficientNet-B7, ResNet-152, ViT) evaluates skin concerns with a confidence score and Grad-CAM visual explanation.',
    accent: '#087f59',
  },
  {
    icon: Zap,
    title: 'Instant Results',
    desc: 'From photo capture to risk assessment in seconds—no waiting rooms, no appointments, just clear insights when you need them.',
    accent: '#f16f61',
  },
  {
    icon: IndianRupee,
    title: 'Affordable & Accessible',
    desc: 'Built for rural and underserved communities. Free screening guidance in Hindi or English, powered by Bhashini integration.',
    accent: '#123e70',
  },
  {
    icon: Stethoscope,
    title: 'Expert Connectivity',
    desc: 'Get mapped to the nearest qualified doctor and AYUSH-linked home-care suggestions. AI supports decisions, never replaces a doctor.',
    accent: '#087f59',
  },
];

export default function BenefitsSection() {
  return (
    <section className="relative mx-auto max-w-[1320px] px-7 py-16 lg:px-10" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      <span className="absolute top-4 right-6 font-display text-[100px] font-bold leading-none pointer-events-none select-none text-[#f16f61] rotate-[-8deg]">02</span>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">Why DERMALENSE AI</p>
          <h2 className="mt-3 font-display text-[clamp(1.75rem,5vw,2.625rem)] tracking-[-.04em]">Better skin health, for everyone.</h2>
        </div>
        <p className="max-w-[350px] text-sm leading-6 text-[#61736e]">
          Technology designed to make skin care accessible, affordable, and backed by real medical expertise.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl border border-[#102d2a]/8 bg-white/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ background: `${item.accent}14` }}
              >
                <Icon size={22} style={{ color: item.accent }} />
              </div>
              <h3 className="mt-5 font-extrabold text-[#102d2a]">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#61736e]">{item.desc}</p>
              <div
                className="absolute bottom-0 left-0 h-[3px] w-0 transition-all duration-300 group-hover:w-full"
                style={{ background: item.accent }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
