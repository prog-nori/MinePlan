module.exports = {
  content: [
    './app/components/*.{vue,ts}',
    './app/components/**/*.{vue,ts}',
    './app/pages/*.{vue,ts}',
    './app/pages/**/*.{vue,ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')], // daisyUI のプラグイン追加
};
