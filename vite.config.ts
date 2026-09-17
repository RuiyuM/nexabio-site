import tailwindcss from '@tailwindcss/postcss';
import vinext from 'vinext';
import { defineConfig } from 'vite';

// This site is exported as static files and hosted only on GitHub Pages.
export default defineConfig({
  css: { postcss: { plugins: [tailwindcss()] } },
  plugins: [vinext()],
});
