import React from 'react';
import { Users, Stethoscope, ArrowRight, ArrowLeft } from 'lucide-react';
import PixelCard from './PixelCard';

export default function RoleSelectionPage({ onBack }) {
  return (
    <div className="min-h-screen bg-[#f5f1e9] font-sans text-[#102d2a]" style={{ backgroundImage: 'linear-gradient(rgba(16,45,42,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(16,45,42,.02) 1px, transparent 1px)', backgroundSize: '7px 7px, 9px 9px' }}>
      {/* Top bar */}
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-7 py-6 lg:px-10">
        <button
          onClick={onBack}
          className="premium-transition inline-flex h-11 items-center gap-2 rounded-full border border-[#102d2a]/20 px-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a] transition hover:border-[#087f59] hover:text-[#087f59]"
        >
          <ArrowLeft size={16} />
          Back to home
        </button>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1320px] px-7 pb-20 pt-10 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-[11px] font-extrabold uppercase tracking-[.25em] text-[#087f59]">
            Get started
          </p>
          <h1 className="mt-4 font-display text-[clamp(1.75rem,8vw,3rem)] leading-[1.04] tracking-[-.04em] text-[#102d2a] md:text-[58px]">
            Choose your role
          </h1>
          <p className="mt-4 max-w-[480px] text-[15px] leading-7 text-[#61736e]">
            Select how you'd like to use DERMALENSE AI. Each role provides a tailored experience for your needs.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:mt-14 sm:gap-10 md:flex-row md:gap-14">
          {/* Patient / ASHA Worker Card */}
          <PixelCard variant="green" className="w-full max-w-[320px] py-10 px-6 sm:py-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#087f59]/15">
                <Users size={32} className="text-[#087f59]" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-[#102d2a]">
                Patient / ASHA Worker
              </h2>
              <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#61736e]">
                Upload a skin photo for AI-assisted screening, get instant results and home-care guidance.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#087f59] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[.12em] text-white transition group-hover:gap-3">
                Start screening <ArrowRight size={14} />
              </div>
            </div>
          </PixelCard>

          {/* Doctor / Practitioner Card */}
          <PixelCard variant="coral" className="w-full max-w-[320px] py-10 px-6 sm:py-12">
            <div className="flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#f16f61]/15">
                <Stethoscope size={32} className="text-[#f16f61]" />
              </div>
              <h2 className="mt-5 font-display text-2xl font-bold text-[#102d2a]">
                Doctor / Practitioner
              </h2>
              <p className="mt-3 max-w-[240px] text-sm leading-6 text-[#61736e]">
                Review AI-generated reports, approve or override diagnoses, and consult with patients directly.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f16f61] px-6 py-3 text-[11px] font-extrabold uppercase tracking-[.12em] text-white transition group-hover:gap-3">
                Practitioner login <ArrowRight size={14} />
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </div>
  );
}
