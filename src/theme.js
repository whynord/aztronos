// Theme color bridge for the canvas layers.
// The DOM recolor is handled by CSS variables (--bg / --fg / --grid-rgb) that
// flip when <html> gains the `.theme-dark` class. The <canvas> 2D layers can't
// read those variables per-frame cheaply, so we expose the current grid color
// (an "r, g, b" triplet) and notify subscribers whenever the theme class flips.

const root = typeof document !== 'undefined' ? document.documentElement : null;

function readGridRGB() {
  if (!root) return '10, 10, 12';
  const v = getComputedStyle(root).getPropertyValue('--grid-rgb').trim();
  return v || '10, 10, 12';
}

let cached = readGridRGB();
const listeners = new Set();

if (root && typeof MutationObserver !== 'undefined') {
  const observer = new MutationObserver(() => {
    const next = readGridRGB();
    if (next && next !== cached) {
      cached = next;
      listeners.forEach((fn) => fn(cached));
    }
  });
  observer.observe(root, { attributes: true, attributeFilter: ['class'] });
}

export function getGridRGB() {
  return cached;
}

export function onGridColorChange(fn) {
  listeners.add(fn);
  fn(cached);
  return () => listeners.delete(fn);
}
