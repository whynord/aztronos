import { useEffect } from 'react';

// Drives the palette inversion: while the visitor is in the lit "origin" (the
// hero, roughly the first viewport), the page stays light; once they scroll
// past the threshold into the "uncharted territory" below, <html> gains the
// `.theme-dark` class and the whole palette crossfades to dark. Scrolling back
// up restores the light origin.
export function useScrollTheme(thresholdRatio = 0.55) {
  useEffect(() => {
    const root = document.documentElement;
    let ticking = false;

    const apply = () => {
      ticking = false;
      const trigger = window.innerHeight * thresholdRatio;
      if (window.scrollY > trigger) {
        root.classList.add('theme-dark');
      } else {
        root.classList.remove('theme-dark');
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [thresholdRatio]);
}
