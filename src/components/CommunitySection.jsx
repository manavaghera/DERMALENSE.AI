import React from 'react';
import { Heart, Users, Stethoscope } from 'lucide-react';

export default function CommunitySection() {
  return (
    <section id="community" className="relative overflow-hidden bg-gradient-to-br from-[#102d2a] via-[#123e70] to-[#102d2a] text-white">
      <div className="mx-auto max-w-[1320px] px-7 py-14 lg:px-10">
        <div className="grid grid-cols-12 items-end gap-8">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#f16f61]">
              Designed for real care journeys
            </p>
            <h2 className="mt-4 font-display text-[43px] leading-[1.04] tracking-[-.04em]">
              Technology that
              <br />
              <span className="text-[#a8d6bd]">meets people.</span>
            </h2>
          </div>
          <p className="col-span-12 max-w-[430px] text-sm leading-7 text-white/65 lg:col-span-4 lg:col-start-8">
            From a village visit to a doctor's dashboard, DERMALENSE AI brings structure, context, and confidence to the first step in skin care.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-3">
          <article className="bg-[#102d2a] p-7">
            <Heart size={32} className="text-[#f16f61]" />
            <h3 className="mt-8 font-display text-2xl">For patients</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Understand a visible concern with simple guidance in Hindi or English, a risk score in plain language,
              and AYUSH-informed home-care suggestions alongside the nearest doctor.
            </p>
          </article>

          <article className="bg-[#102d2a] p-7">
            <Users size={32} className="text-[#a8d6bd]" />
            <h3 className="mt-8 font-display text-2xl">For ASHA workers</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Capture better images with guided, location-tagged photo checks, explain results in the patient's
              language, and keep a structured case history for every household visit.
            </p>
          </article>

          <article className="bg-[#102d2a] p-7">
            <Stethoscope size={32} className="text-[#f16f61]" />
            <h3 className="mt-8 font-display text-2xl">For practitioners</h3>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Review the Grad-CAM/LIME explanation behind each result, approve, edit, or override the preliminary
              diagnosis, and consult directly—records stay interoperable via FHIR.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
