import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/server.ts'],
  outDir: 'dist',
  format: ['esm'],
  target: 'node18',
  platform: 'node',
  sourcemap: true,
  clean: true,
  dts: false,
  esbuildOptions(options) {
    options.external = options.external ?? [];
    options.external.push('@prisma/client');
    options.external.push('@prisma/adapter-pg');
    options.external.push('pg');
    options.external.push('stripe');
  },
});
