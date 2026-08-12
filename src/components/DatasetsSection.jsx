import React from 'react';
import { Database, Image, Globe, Shield, BarChart3, Layers } from 'lucide-react';

const datasets = [
  {
    icon: Database,
    name: 'DermaCon-IN',
    desc: 'Indian dermatology dataset with clinically annotated skin conditions across diverse skin tones, specifically curated for the Indian population.',
    stats: '2,500+ images',
    accent: '#087f59',
  },
  {
    icon: Image,
    name: 'Fitzpatrick17k',
    desc: '17,000 dermatology images labeled by Fitzpatrick skin type (I–VI), enabling fairness-aware training across all skin tones.',
    stats: '17,000+ images',
    accent: '#f16f61',
  },
  {
    icon: Globe,
    name: 'ISIC Archive',
    desc: 'International Skin Imaging Collaboration archive — the largest open-source collection of dermoscopy images for skin lesion analysis.',
    stats: '70,000+ images',
    accent: '#123e70',
  },
  {
    icon: Shield,
    name: 'HAM10000',
    desc: 'Large collection of multi-source dermatoscopic images of common pigmented skin lesions, used for benchmarking model accuracy.',
    stats: '10,000+ images',
    accent: '#087f59',
  },
  {
    icon: BarChart3,
    name: 'PH2 Dataset',
    desc: 'Dermoscopic images with expert segmentation and clinical diagnosis, used for validating lesion boundary detection.',
    stats: '200 images',
    accent: '#a8d6bd',
  },
  {
    icon: Layers,
    name: 'Custom Augmented Set',
    desc: 'In-house augmented and synthetically balanced dataset combining multiple sources, tuned to reduce bias and improve generalization on Indian skin.',
    stats: '50,000+ samples',
    accent: '#f16f61',
  },
];

export default function DatasetsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#102d2a] via-[#0e2a27] to-[#102d2a] text-white">
      <span className="absolute bottom-4 right-12 font-display text-[clamp(5rem,12vw,10rem)] font-bold leading-none opacity-20 pointer-events-none select-none text-[#087f59] rotate-[-12deg]">07</span>
      <div className="mx-auto max-w-[1320px] px-7 py-20 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.25em] text-[#f16f61]">
              <span className="h-px w-10 bg-[#f16f61]"></span>
              Training data
            </p>
            <h2 className="mt-4 font-display text-[clamp(1.75rem,6vw,2.7rem)] leading-[1.04] tracking-[-.04em] md:text-[52px]">
              The datasets behind
              <br />
              <span className="text-[#a8d6bd]">every prediction.</span>
            </h2>
          </div>
          <p className="max-w-full text-sm leading-7 text-white/55 md:max-w-[400px]">
            A diverse, multi-source training pipeline — rigorously curated to ensure accuracy across skin types, conditions, and imaging environments.
          </p>
        </div>

        {/* Dataset grid */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {datasets.map((item, idx) => {
            const Icon = item.icon;
            return (
              <article key={idx} className="group bg-[#102d2a] p-7 transition-colors duration-300 hover:bg-[#14353a]">
                <div className="flex items-center justify-between">
                  <Icon size={24} style={{ color: item.accent }} />
                  <span
                    className="rounded-full px-3 py-1 text-[10px] font-extrabold uppercase tracking-[.15em]"
                    style={{ color: item.accent, background: `${item.accent}15` }}
                  >
                    {item.stats}
                  </span>
                </div>
                <h3 className="mt-5 font-extrabold text-white/90">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-white/45">{item.desc}</p>
              </article>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center gap-3 text-center">
          <p className="text-xs leading-5 text-white/40">
            All datasets are used in compliance with their respective licenses. No patient-identifiable data is stored or shared.
          </p>
        </div>
      </div>
    </section>
  );
}
