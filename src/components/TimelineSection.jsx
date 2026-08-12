import React, { useEffect, useRef } from 'react';
import { Camera, Brain, Link2, Check } from 'lucide-react';
import './TimelineSection.css';

const timelineData = [
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
  const timelineRef = useRef(null);

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const blocks = timeline.querySelectorAll('.tl-block');
    const imgs = timeline.querySelectorAll('.tl-img');
    const contents = timeline.querySelectorAll('.tl-content');
    const offset = 0.8;

    const showBlocks = () => {
      blocks.forEach((block, i) => {
        if (
          contents[i].classList.contains('tl-content--hidden') &&
          block.getBoundingClientRect().top <= window.innerHeight * offset
        ) {
          imgs[i].classList.add('tl-img--bounce-in');
          contents[i].classList.add('tl-content--bounce-in');
          imgs[i].classList.remove('tl-img--hidden');
          contents[i].classList.remove('tl-content--hidden');
        }
      });
    };

    // Initial hide
    imgs.forEach(img => img.classList.add('tl-img--hidden'));
    contents.forEach(c => c.classList.add('tl-content--hidden'));

    // Trigger on load after a short delay
    setTimeout(showBlocks, 200);

    window.addEventListener('scroll', showBlocks, { passive: true });
    return () => window.removeEventListener('scroll', showBlocks);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#f5f1e9]" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      {/* Header */}
      <div className="mx-auto max-w-[1320px] px-7 pt-20 pb-6 lg:px-10">
        <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">
          <span className="h-px w-10 bg-[#087f59]"></span>
          How it works
        </p>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,6vw,2.7rem)] leading-[1.04] tracking-[-.04em] text-[#102d2a]">
          The journey from image
          <br />
          <span className="text-[#087f59]">to informed care.</span>
        </h2>
      </div>

      {/* Timeline */}
      <section ref={timelineRef} className="cd-timeline">
        <div className="cd-timeline__container">
          {timelineData.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="tl-block cd-timeline__block">
                {/* Icon circle */}
                <div
                  className="tl-img cd-timeline__img"
                  style={{ borderColor: item.accent, background: `${item.accent}18` }}
                >
                  <span className="text-[11px] font-extrabold" style={{ color: item.accent }}>
                    {item.num}
                  </span>
                </div>

                {/* Content card */}
                <div className="tl-content cd-timeline__content">
                  <div className="cd-timeline__content-inner">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-lg"
                        style={{ background: `${item.accent}14` }}
                      >
                        <Icon size={18} style={{ color: item.accent }} />
                      </div>
                      <span
                        className="text-[10px] font-extrabold uppercase tracking-[.2em]"
                        style={{ color: item.accent }}
                      >
                        Step {item.num}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-[#102d2a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#61736e]">{item.desc}</p>
                    <div className="mt-4 flex items-center gap-2">
                      <div
                        className="h-[3px] w-8 rounded-full"
                        style={{ background: item.accent }}
                      />
                      <span className="text-[10px] font-bold uppercase tracking-[.15em] text-[#102d2a]/40">
                        {item.num} of {String(timelineData.length).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
