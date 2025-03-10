import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: './app',
  app: {
    baseURL: process.env.base_URL || '/MinePlan/',
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  // rootDir: './app',
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  imports: {
    autoImport: true,
    dirs: ['app/composables', 'app/components'],
  },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/app.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
