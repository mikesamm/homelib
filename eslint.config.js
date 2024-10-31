import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["src/controllers/openlib-books-controller.ts", "src/controllers/example-controller.ts"]
  }
);