import { cn } from "../../lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import React, { useState, useCallback } from "react";

export const Navbar = ({ children, className }) => {
  return (
    <div className={cn("sticky inset-x-0 top-0 z-40 w-full bg-[#f5f1e9] border-b border-[#102d2a]/10", className)}>
      {children}
    </div>
  );
};

export const NavBody = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto flex w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex",
        className
      )}
    >
      {children}
    </div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);

  const handleClick = useCallback((e, item, callback) => {
    if (item.link.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(item.link);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    if (callback) callback();
  }, []);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          onMouseEnter={() => setHovered(idx)}
          onClick={(e) => handleClick(e, item, onItemClick)}
          className="relative px-4 py-2 text-[12px] font-bold uppercase tracking-[.14em] text-[#49615c] transition-colors duration-200 hover:text-[#087f59]"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <span className="absolute inset-0 rounded-full bg-[#087f59]/10" />
          )}
          <span className="relative z-20">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen }) => {
  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-[#f5f1e9] px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-[#102d2a]" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-[#102d2a]" onClick={onClick} />
  );
};
