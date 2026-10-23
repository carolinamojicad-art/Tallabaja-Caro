import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({ command }) => {
  const localFile = fileURLToPath(new URL('./src/data/tallaBajaPatients.local.json', import.meta.url));
  const virtualId = 'virtual:talla-baja-patients';
  const resolvedId = '\0' + virtualId;
  const privatePatients = {
    name: 'local-private-patients',
    resolveId(id: string) { if (id === virtualId) return resolvedId; },
    load(id: string) {
      if (id !== resolvedId) return;
      // Private rows are served only by the local development server.
      // Production always receives empty records, regardless of local files.
      const data = command === 'serve' && existsSync(localFile)
        ? JSON.parse(readFileSync(localFile, 'utf8')) : {'2025': [], '2026': []};
      return 'export default ' + JSON.stringify(data) + ';';
    },
  };
  return {
    plugins: [privatePatients, react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.dirname(fileURLToPath(import.meta.url)),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
