import React from 'react';
import { Camera, Sparkles, ShieldCheck, Wifi, ArrowRight, Eye, Brain, Link2, Check } from 'lucide-react';
import Stepper, { Step } from './Stepper';

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[650px] max-w-[1320px] grid-cols-12 px-7 lg:px-10">
      {/* Animated accent dot */}
      <div className="accent-drift absolute left-[5%] top-16 hidden h-2 w-2 rounded-full bg-[#f16f61] lg:block"></div>

      {/* Decorative SVG line */}
      <svg
        className="accent-drift pointer-events-none absolute right-[45%] top-24 hidden h-8 w-32 text-[#f16f61] lg:block"
        viewBox="0 0 128 32"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 24C28 2 54 29 78 12C94 1 108 5 126 2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      </svg>

      {/* Left content */}
      <div className="col-span-12 flex flex-col justify-center pb-10 pt-10 sm:pb-14 sm:pt-16 lg:col-span-7 lg:pb-20 lg:pt-20">
        <p className="mb-7 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.25em] text-[#f16f61]">
          <span className="h-px w-10 bg-[#f16f61]"></span>
          Preliminary skin intelligence · त्वचा की पहली समझ
        </p>

        <h1 className="max-w-full font-display text-[clamp(2.2rem,8vw,5rem)] font-semibold leading-[.98] tracking-[-.055em] text-[#102d2a] lg:text-[82px]">
          See skin health
          <br />
          <span className="text-[#087f59]">more clearly.</span>
        </h1>

        <p className="mt-5 max-w-[560px] text-[21px] leading-9 text-[#49615c]">
          त्वचा की समस्या को समझने की दिशा में पहला आसान कदम।
        </p>

        <p className="mt-5 max-w-[510px] text-[15px] leading-7 text-[#61736e]">
          A guided, AI-assisted first screening built for patients, ASHA workers, and the doctors who care for them—wherever they are.
        </p>

        <p className="mt-4 max-w-[540px] text-[13.5px] leading-6 text-[#61736e]">
          Upload a photo and our deep-learning ensemble (EfficientNet-B7, ResNet-152, ViT) returns a preliminary
          diagnosis with a confidence score, a Grad-CAM/LIME explanation of what it saw, and an AYUSH-informed next
          step—reviewed and confirmed by a practitioner before it becomes a decision.
        </p>

        {/* CTA Buttons */}
        <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            href="#start"
            className="premium-transition inline-flex h-12 min-h-[44px] items-center gap-2 rounded-full bg-[#f16f61] px-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a] shadow-[0_12px_24px_rgba(241,111,97,.2)] transition hover:-translate-y-1 hover:bg-[#ff806f] sm:h-14 sm:gap-3 sm:px-7 sm:text-[12px]"
          >
            Capture a concern <Camera size={18} />
          </a>
          <a
            href="#practitioners"
            className="premium-transition inline-flex h-12 min-h-[44px] items-center gap-2 rounded-full border border-[#102d2a]/25 px-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a] transition hover:border-[#087f59] hover:text-[#087f59] sm:h-14 sm:gap-3 sm:px-6 sm:text-[12px]"
          >
            For practitioners <ArrowRight size={18} />
          </a>
        </div>

        {/* Trust indicators */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-[10px] font-bold text-[#61736e] sm:mt-10 sm:gap-x-7 sm:text-[11px]">
          <span className="flex items-center gap-2">
            <ShieldCheck size={18} className="text-[#087f59]" />
            Private by design
          </span>
          <span className="flex items-center gap-2">
            <Wifi size={18} className="text-[#087f59]" />
            Low-connectivity ready
          </span>
          <span className="flex items-center gap-2">
            <Eye size={18} className="text-[#087f59]" />
            Explainable, not a black box
          </span>
        </div>

        {/* Quick stats */}
        <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#102d2a]/10 pt-5 text-[9px] font-extrabold uppercase tracking-[.08em] text-[#102d2a]/70 sm:mt-8 sm:gap-x-8 sm:pt-6 sm:text-[11px] sm:tracking-[.1em]">
          <span>3 model architectures</span>
          <span className="hidden h-3 w-px bg-[#102d2a]/15 sm:block"></span>
          <span>Hindi + English (Bhashini)</span>
          <span className="hidden h-3 w-px bg-[#102d2a]/15 sm:block"></span>
          <span>AYUSH-mapped remedies</span>
          <span className="hidden h-3 w-px bg-[#102d2a]/15 sm:block"></span>
          <span>Doctor-verified results</span>
        </div>
      </div>

      {/* Right side - Stepper */}
      <div className="relative col-span-12 min-h-[380px] sm:min-h-[420px] lg:col-span-5 lg:min-h-0">
        {/* Stepper Card */}
        <div className="premium-transition mx-auto w-full max-w-[390px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#102d2a] via-[#0e2a27] to-[#102d2a] shadow-[0_28px_70px_rgba(16,45,42,.3)] hover:-translate-y-2 hover:shadow-[0_38px_90px_rgba(16,45,42,.4)] sm:absolute sm:right-4 sm:top-9 lg:w-[420px]">
          {/* Decorative circle */}
          <div className="absolute -right-14 -top-12 h-48 w-48 rounded-full border-[30px] border-[#f16f61]/30"></div>

          <Stepper
            initialStep={1}
            backButtonText="Previous"
            nextButtonText="Next"
            stepCircleContainerClassName="!border-[#087f59]/30 !bg-transparent !shadow-none !rounded-2xl"
            stepContainerClassName="!px-5 !pt-5 !pb-2"
            contentClassName="!px-0"
            footerClassName="!px-5 !pb-5"
          >
            <Step>
              <div className="px-5 py-4 text-center">
                <Camera size={28} className="mx-auto text-[#f16f61]" />
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[.22em] text-[#f16f61]">01 · Capture</span>
                <h3 className="mt-2 font-display text-xl text-white">Guided photo checks</h3>
                <p className="mx-auto mt-2 max-w-[280px] text-xs leading-5 text-white/55">
                  Lighting, focus, and angle checks—with retake prompts—to ensure high-quality images every time.
                </p>
              </div>
            </Step>
            <Step>
              <div className="px-5 py-4 text-center">
                <Brain size={28} className="mx-auto text-[#f16f61]" />
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[.22em] text-[#f16f61]">02 · Analyze</span>
                <h3 className="mt-2 font-display text-xl text-white">AI-powered scoring</h3>
                <p className="mx-auto mt-2 max-w-[280px] text-xs leading-5 text-white/55">
                  EfficientNet-B7, ResNet-152, and ViT evaluate the image with confidence scores and Grad-CAM explainability.
                </p>
              </div>
            </Step>
            <Step>
              <div className="px-5 py-4 text-center">
                <Link2 size={28} className="mx-auto text-[#a8d6bd]" />
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a8d6bd]">03 · Connect</span>
                <h3 className="mt-2 font-display text-xl text-white">Remedies & doctors</h3>
                <p className="mx-auto mt-2 max-w-[280px] text-xs leading-5 text-white/55">
                  AYUSH-linked home-care suggestions and mapping to the nearest qualified doctor, in Hindi or English.
                </p>
              </div>
            </Step>
            <Step>
              <div className="px-5 py-4 text-center">
                <Check size={28} className="mx-auto text-[#a8d6bd]" />
                <span className="mt-3 block text-[10px] font-extrabold uppercase tracking-[.22em] text-[#a8d6bd]">04 · Review</span>
                <h3 className="mt-2 font-display text-xl text-white">Doctor verification</h3>
                <p className="mx-auto mt-2 max-w-[280px] text-xs leading-5 text-white/55">
                  A practitioner approves, edits, or overrides—AI stays decision support, never a diagnosis on its own.
                </p>
              </div>
            </Step>
          </Stepper>
        </div>

        {/* Step number */}
        <span className="absolute bottom-2 left-4 font-display text-[100px] font-bold leading-none text-[#f16f61] lg:-left-5 lg:bottom-14">
          01
        </span>
      </div>
    </section>
  );
}
