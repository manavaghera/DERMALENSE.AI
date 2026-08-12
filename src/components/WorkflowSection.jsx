import React from 'react';
import { Camera, Brain, Link2, Check } from 'lucide-react';

export default function WorkflowSection() {
  const steps = [
    {
      icon: Camera,
      number: '01',
      title: 'CAPTURE',
      label: 'Capture',
      description: 'Guided photo checks for light, blur, and angle—with retake prompts.',
      color: '#f16f61',
    },
    {
      icon: Brain,
      number: '02',
      title: 'ANALYZE',
      label: 'Analyze',
      description: 'EfficientNet-B7 / ResNet-152 / ViT score the image with confidence and Grad-CAM explainability.',
      color: '#f16f61',
    },
    {
      icon: Link2,
      number: '03',
      title: 'CONNECT',
      label: 'Connect',
      description: 'AYUSH-linked remedies, multilingual output, and the nearest doctor.',
      color: '#a8d6bd',
    },
    {
      icon: Check,
      number: '04',
      title: 'REVIEW',
      label: 'Review',
      description: 'Doctor approval, edit, or override—human-in-the-loop, always.',
      color: '#a8d6bd',
    },
  ];

  return (
    <section id="workflow" className="relative overflow-hidden bg-[#102d2a] text-white">
      <div className="mx-auto max-w-[1320px] px-7 py-20 lg:px-10">
        {/* Header */}
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.25em] text-[#f16f61]">
              <span className="h-px w-10 bg-[#f16f61]"></span>
              How it works
            </p>
            <h2 className="mt-4 font-display text-[48px] leading-[1.04] tracking-[-.04em] text-white md:text-[58px]">
              The workflow <span className="hindi text-[30px] text-[#a8d6bd]">/ कार्य प्रवाह</span>
            </h2>
          </div>
          <p className="max-w-[390px] text-sm leading-7 text-white/65">
            A calm, transparent journey from the first image to a more informed care decision.
          </p>
        </div>

        {/* Steps grid */}
        <div className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Connecting line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-gradient-to-r from-[#f16f61] via-[#a8d6bd] to-[#087f59] md:block"></div>

          {/* Step cards */}
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <article key={idx} className="relative z-10 md:text-center">
                <div
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border bg-[#102d2a] text-xl shadow-[0_0_0_8px_rgba(241,111,97,.08)]"
                  style={{
                    borderColor: `${step.color}99`,
                    color: step.color,
                  }}
                >
                  <Icon size={20} />
                </div>
                <span className="mt-7 block text-[10px] font-extrabold uppercase tracking-[.22em]" style={{ color: step.color }}>
                  {step.number} · {step.label}
                </span>
                <h3 className="mt-2 font-display text-2xl text-white">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-6 text-white/60">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
