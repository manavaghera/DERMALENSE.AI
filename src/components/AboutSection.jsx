import React from 'react';
import { Check, HeartHandshake, Heart } from 'lucide-react';

export default function AboutSection({ language }) {
  return (
    <section id="about-us" className="relative linen-texture bg-[#f5f1e9]" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      <span className="absolute bottom-2 left-4 font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-none opacity-[0.08] pointer-events-none select-none text-[#087f59]">06</span>
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-7 py-20 lg:grid-cols-2 lg:px-10">
        {/* Left content */}
        <div>
          <p className="flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">
            <span className="h-px w-10 bg-[#087f59]"></span>
            <span className="hindi text-sm">हमारा मिशन</span> · Our mission
          </p>

          <h2 className="mt-5 max-w-full font-display text-[clamp(1.75rem,7vw,3rem)] leading-[1.02] tracking-[-.045em] text-[#102d2a] md:max-w-[590px] md:text-[58px]">
            Built on trust.
            <br />
            <span className="text-[#087f59]">Designed for care.</span>
          </h2>

          <p className="mt-6 max-w-[560px] text-[15px] leading-7 text-[#61736e]">
            DERMALENSE AI brings responsible AI and human clinical judgment together, so every community can take a clearer first step toward skin care.
          </p>

          {/* Mission points */}
          <ul className="mt-8 space-y-5 text-sm text-[#49615c]">
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f16f61]/15 text-[#087f59]">
                <Check size={16} />
              </span>
              <span>
                <strong className="font-extrabold text-[#102d2a]">Rural accessibility.</strong> Low-connectivity, edge-inference (TensorFlow Lite / ONNX) support with Hindi and English guidance via Bhashini for patients and ASHA workers.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#a8d6bd]/40 text-[#087f59]">
                <Check size={16} />
              </span>
              <span>
                <strong className="font-extrabold text-[#102d2a]">Clinical rigor.</strong> Preliminary AI insights carry confidence thresholds and uncertainty flags, and stay connected to practitioner review before any care decision.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#123e70]/10 text-[#123e70]">
                <Check size={16} />
              </span>
              <span>
                <strong className="font-extrabold text-[#102d2a]">Radical transparency.</strong> Grad-CAM/LIME explainability, visible confidence scores, and FHIR-based records so people and doctors see what informed each result.
              </span>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#f16f61]/15 text-[#087f59]">
                <Check size={16} />
              </span>
              <span>
                <strong className="font-extrabold text-[#102d2a]">Built for Indian skin.</strong> Trained and fine-tuned on the DermaCon-IN and Fitzpatrick17k datasets, with fairness-aware tuning to reduce skin-tone bias.
              </span>
            </li>
          </ul>
        </div>

        {/* Right side - Trust card */}
        <div className="relative mx-auto w-full max-w-full sm:max-w-[470px]">
          <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border-[14px] border-[#f16f61]/70"></div>

          <div className="relative overflow-hidden rounded-[2px] border border-[#102d2a]/15 bg-[#102d2a] p-8 shadow-[18px_20px_0_rgba(8,127,89,.18)] md:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-[#f16f61]/80 to-transparent opacity-80"></div>

            <HeartHandshake size={40} className="relative text-[#a8d6bd]" />

            <p className="relative mt-10 font-display text-[32px] leading-[1.12] text-white">
              "Technology should make care feel closer, not more complicated."
            </p>

            <div className="relative mt-10 flex items-center gap-3 border-t border-white/15 pt-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f16f61] text-[#102d2a]">
                <Heart size={18} />
              </span>
              <div>
                <p className="text-xs font-extrabold text-white">The DERMALENSE AI team</p>
                <p className="mt-1 text-[11px] text-white/55">Built for India's care communities, in step with the Ministry of AYUSH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
