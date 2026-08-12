import React from 'react';

export default function ProcessSection() {
  const steps = [
    { num: '01', title: 'Capture', desc: 'Guided photo checks for light, blur, and angle, with retake prompts to keep image quality high.', color: '#f16f61' },
    { num: '02', title: 'Understand', desc: 'A CNN/ViT ensemble (EfficientNet-B7, ResNet-152, ViT) scores the image with a confidence level and a Grad-CAM/LIME visual explanation.', color: '#087f59' },
    { num: '03', title: 'Connect', desc: 'Results are mapped to AYUSH-linked remedies and the nearest qualified doctor, in Hindi or English via Bhashini.', color: '#123e70' },
    { num: '04', title: 'Review', desc: 'A doctor can approve, edit, or override the preliminary result—AI stays decision support, never a diagnosis on its own.', color: '#f16f61' },
  ];

  return (
    <section id="process" className="linen-texture mx-auto max-w-[1320px] px-7 py-16 lg:px-10" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">The process</p>
          <h2 className="mt-3 font-display text-[clamp(1.5rem,5vw,2.625rem)] tracking-[-.04em]">From image to insight.</h2>
        </div>
        <p className="max-w-[350px] text-sm leading-6 text-[#61736e]">
          A calm, transparent flow—never a replacement for a qualified medical opinion.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-4">
        {steps.map((step, idx) => (
          <div key={idx}>
            <span className="font-display text-3xl sm:text-5xl" style={{ color: step.color }}>
              {step.num}
            </span>
            <h3 className="mt-4 font-extrabold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#61736e]">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
