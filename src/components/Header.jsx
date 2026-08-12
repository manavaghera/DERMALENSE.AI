import React, { useState } from 'react';
import { Heart, Languages, ArrowUpRight } from 'lucide-react';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from './ui/resizable-navbar';

export default function Header({ language, setLanguage, onStartScreening }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', link: '#home' },
    { name: 'The process', link: '#process' },
    { name: 'For communities', link: '#community' },
    { name: 'Practitioners', link: '#practitioners' },
  ];

  const Logo = () => (
    <a href="#home" className="group relative z-20 flex items-center gap-3 mr-4 px-2 py-1">
      <span className="flex h-11 w-11 rotate-3 items-center justify-center rounded-full bg-[#087f59] text-white transition group-hover:rotate-0">
        <Heart size={20} />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[22px] font-bold tracking-[-.03em] text-[#102d2a]">DERMALENSE AI</span>
        <span className="mt-1 block text-[9px] font-extrabold uppercase tracking-[.22em] text-[#087f59]">
          AI skin intelligence
        </span>
      </span>
    </a>
  );

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <Logo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="hidden h-11 items-center gap-2 rounded-full border border-[#102d2a]/20 px-4 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a] transition hover:border-[#087f59] hover:text-[#087f59] sm:flex"
            aria-label="Switch language"
          >
            <Languages size={16} />
            {language === 'en' ? 'हिंदी / EN' : 'EN / हिंदी'}
          </button>
          <button
            onClick={onStartScreening}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#102d2a] px-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-[#087f59]"
          >
            Start screening <ArrowUpRight size={14} />
          </button>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-[12px] font-bold uppercase tracking-[.14em] text-[#49615c] transition hover:text-[#087f59]"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-3">
            <button
              onClick={() => {
                setLanguage(language === 'en' ? 'hi' : 'en');
                setIsMobileMenuOpen(false);
              }}
              className="flex h-11 items-center justify-center gap-2 rounded-full border border-[#102d2a]/20 px-4 text-[11px] font-extrabold uppercase tracking-[.12em] text-[#102d2a]"
            >
              <Languages size={16} />
              {language === 'en' ? 'हिंदी / EN' : 'EN / हिंदी'}
            </button>
            <button
              onClick={() => {
                onStartScreening();
                setIsMobileMenuOpen(false);
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#102d2a] px-5 text-[11px] font-extrabold uppercase tracking-[.12em] text-white transition hover:bg-[#087f59]"
            >
              Start screening <ArrowUpRight size={14} />
            </button>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
