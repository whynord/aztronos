// Minimal static-asset handler for the Aztronos Vite build.
// Serves files from the `dist/` directory (bound as ASSETS).
// The site is a single-page scroll experience, so every request
// is resolved against the static asset set (e.g. "/" -> index.html).
export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
};
