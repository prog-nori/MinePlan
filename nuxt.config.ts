import { defineNuxtConfig } from 'nuxt/config';
import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  rootDir: './app',
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  imports: {
    autoImport: true,
  },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/css/app.css'],
  vite: {
    plugins: [tailwindcss()],
  },
});
