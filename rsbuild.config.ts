import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    alias: {
      '@/*': './src/*',
    },
  },
  html: {
    title: 'to webp',
    favicon: './src/assets/icon.png',
  },
});
