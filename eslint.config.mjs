import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintConfigPrettier from 'eslint-config-prettier';

export default createConfigForNuxt()
  .append(eslintConfigPrettier)
  .append({
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'import/no-unresolved': 'off',
      'import/no-dynamic-require': 'warn',
      'import/no-nodejs-modules': 'warn',
      'vue/no-multiple-template-root': 'off',
    },
  });
