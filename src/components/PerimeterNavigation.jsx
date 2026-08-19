import React, { useState, useEffect } from 'react';
import logoImg from '../assets/aztronos-logo-transparent.png';

const NAV_ITEMS = [
  { label: 'Nexus', href: '#nexus', corner: 'tl', code: '00.00' },
  { label: 'Logic', href: '#logic', corner: 'tr', code: '00.01' },
  { label: 'Impact', href: '#impact', corner: 'bl', code: '01.00' },
  { label: 'Gateway', href: '#gateway', corner: 'br', code: '01.01' },
];

const CORNER_CLASSES = {
  tl: 'top-5 left-5 items-start',
  tr: 'top-5 right-5 items-end',
  bl: 'bottom-5 left-5 items-start',
  br: 'bottom-5 right-5 items-end',
};

export default function PerimeterNavigation() {
  const [activeSection, setActiveSection] = useState('nexus');

  useEffect(() => {
    const sectionIds = ['nexus', 'logic', 'impact', 'gateway'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Perimeter Line */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-3 z-40 border border-[var(--fg)]/15 animate-[perimBreath_6s_ease-in-out_infinite]"
      />

      {/* 4 Corner Navigation Anchors */}
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`fixed z-50 flex flex-col gap-1 ${CORNER_CLASSES[item.corner]} hidden md:flex`}
        >
          <span className="label-mono text-[8px] text-[var(--fg)]/40">
            {item.code}
          </span>
          <span
            className={`label-mono text-[10px] transition-colors duration-300 ${
              activeSection === item.href.slice(1)
                ? 'text-[var(--fg)]'
                : 'text-[var(--fg)]/45 hover:text-[var(--fg)]'
            }`}
          >
            {item.label}
          </span>
        </a>
      ))}

      {/* Centered Top Brand Logo (Visible on mobile & desktop with true PNG transparency) */}
      <div className="fixed left-1/2 top-4 z-50 flex items-center justify-center -translate-x-1/2">
        <a href="#nexus" className="hover:opacity-75 transition-opacity block">
          <img
            src={logoImg}
            alt="Aztronos Studio Logo"
            className="h-12 sm:h-16 md:h-18 w-auto object-contain"
          />
        </a>
      </div>
    </>
  );
}
