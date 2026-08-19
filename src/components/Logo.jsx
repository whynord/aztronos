import React from 'react';
import logoUrl from '../assets/aztronos-logo.svg';

// Clean vector wordmark (no hardcoded fill — it renders black by default).
// We recolor it for the dark "uncharted" territory via the `.brand-logo`
// filter rules in index.css: black on the lit hero, white once <html> gains
// `.theme-dark`. Monochrome filter avoids any off-palette tint.
export default function Logo({ className = 'h-12 w-auto' }) {
  return (
    <img src={logoUrl} alt="Aztronos Studio Logo" className={`brand-logo ${className}`} />
  );
}
