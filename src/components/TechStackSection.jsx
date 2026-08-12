import React from 'react';
import { Cpu, Layers, Languages, FileCode2, Eye } from 'lucide-react';

const stack = [
  {
    icon: Layers,
    title: 'EfficientNet-B7',
    desc: 'High-accuracy image classification backbone optimized for skin lesion features at multiple scales.',
    accent: '#087f59',
  },
  {
    icon: Cpu,
    title: 'ResNet-152',
    desc: 'Deep residual network that captures fine-grained texture and edge patterns in dermatological images.',
    accent: '#a8d6bd',
  },
  {
    icon: Layers,
    title: 'Vision Transformer',
    desc: 'ViT captures global context across the entire image, complementing CNN-localized features.',
    accent: '#f16f61',
  },
  {
    icon: Eye,
    title: 'Grad-CAM / LIME',
    desc: 'Explainable AI overlays that highlight exactly which regions drove the model\'s prediction.',
    accent: '#087f59',
  },
  {
    icon: Languages,
    title: 'Bhashini',
    desc: 'Government NLP pipeline enabling Hindi and English guidance, with more Indian languages planned.',
    accent: '#a8d6bd',
  },
  {
    icon: FileCode2,
    title: 'FHIR Interop',
    desc: 'Standard healthcare data format so patient records stay portable across clinics and systems.',
    accent: '#f16f61',
  },
];

export default function TechStackSection() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      <span className="absolute bottom-6 left-8 font-display text-[clamp(4rem,10vw,8rem)] font-bold leading-none opacity-[0.06] pointer-events-none select-none text-[#102d2a] rotate-[12deg]">04</span>
      <div className="mx-auto max-w-[1320px] px-7 py-16 lg:px-10">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">
              Under the hood
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,6vw,2.7rem)] leading-[1.04] tracking-[-.04em] text-[#102d2a]">
              The tech that powers
              <br />
              every prediction.
            </h2>
          </div>
          <p className="col-span-12 max-w-full self-end text-sm leading-7 text-[#61736e] lg:col-span-4 lg:col-start-8 lg:max-w-[430px]">
            Three model architectures, explainable AI, multilingual support, and healthcare-grade interoperability—working together in every screening.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article key={idx} className="group relative overflow-hidden rounded-2xl border border-[#102d2a]/8 bg-white/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
