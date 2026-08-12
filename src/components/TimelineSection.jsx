import React, { useEffect, useRef } from 'react';
import { Camera, Brain, Link2, Check } from 'lucide-react';
import './TimelineSection.css';

const steps = [
  {
    num: '01',
    icon: Camera,
    title: 'Capture',
    desc: 'Guided photo checks for light, blur, and angle—with retake prompts to ensure high-quality images every time.',
    accent: '#f16f61',
  },
  {
    num: '02',
    icon: Brain,
    title: 'Analyze',
    desc: 'EfficientNet-B7, ResNet-152, and ViT evaluate the image with confidence scores and Grad-CAM/LIME explainability.',
    accent: '#a8d6bd',
  },
  {
    num: '03',
    icon: Link2,
    title: 'Connect',
    desc: 'AYUSH-linked home-care suggestions and mapping to the nearest qualified doctor, in Hindi or English via Bhashini.',
    accent: '#087f59',
  },
  {
    num: '04',
    icon: Check,
    title: 'Review',
    desc: 'A practitioner approves, edits, or overrides—AI stays decision support, never a diagnosis on its own.',
    accent: '#f16f61',
  },
];

export default function TimelineSection() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const blocks = el.querySelectorAll('.tl-block');
    const cards = el.querySelectorAll('.tl-card');
    const dots = el.querySelectorAll('.tl-dot');

    const reveal = () => {
      blocks.forEach((block, i) => {
        if (block.dataset.revealed) return;
        const rect = block.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.82) {
          block.dataset.revealed = '1';
          dots[i].classList.add('tl-dot--in');
          cards[i].classList.add(i % 2 === 0 ? 'tl-card--left-in' : 'tl-card--right-in');
        }
      });
    };

    setTimeout(reveal, 300);
    window.addEventListener('scroll', reveal, { passive: true });
    return () => window.removeEventListener('scroll', reveal);
  }, []);

  return (
    <section ref={ref} className="tl-section">
      {/* Vertical line */}
      <div className="tl-line" />

      <div className="tl-container">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLeft = i % 2 === 0;
          return (
            <div key={i} className={`tl-block ${isLeft ? 'tl-block--left' : 'tl-block--right'}`}>
              {/* Card */}
              <div className="tl-card">
                <div className="tl-card-inner">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ background: `${step.accent}18` }}
                    >
                      <Icon size={20} style={{ color: step.accent }} />
                    </div>
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-[.22em]"
                      style={{ color: step.accent }}
                    >
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step.desc}</p>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-[3px] w-8 rounded-full" style={{ background: step.accent }} />
                    <span className="text-[10px] font-bold uppercase tracking-[.15em] text-white/30">
                      {step.num} of 04
                    </span>
                  </div>
                </div>
              </div>

              {/* Center dot */}
              <div className="tl-dot" style={{ borderColor: step.accent }}>
                <span className="tl-dot-num" style={{ color: step.accent }}>{step.num}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
