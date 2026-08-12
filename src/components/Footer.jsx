import React from 'react';

export default function Footer({ language }) {
  return (
    <footer id="practitioners" className="border-t border-[#102d2a]/15 bg-[#f16f61]">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-5 px-7 py-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="font-display text-2xl font-bold">Care begins with a closer look.</p>
          <p className="mt-1 text-xs font-semibold text-[#102d2a]/70">पहला कदम सही दिशा में उठाइए।</p>
          <p className="mt-2 max-w-[420px] text-[11px] font-semibold leading-5 text-[#102d2a]/60">
            A preliminary screening aid, not a diagnosis—always confirm with a qualified doctor or AYUSH practitioner.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a]">
          <a href="#community" className="hover:underline">About</a>
          <a href="#privacy" className="hover:underline">Privacy</a>
          <a href="mailto:care@sehatdrishti.in" className="hover:underline">Contact</a>
          <span>&copy; 2026 DERMALENSE AI · Team TwistedMinds</span>
        </div>
      </div>
    </footer>
  );
}
