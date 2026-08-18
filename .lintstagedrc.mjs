export default {
  'back-end/**/*.{js,ts}': [
    'pnpm --dir back-end exec eslint --fix',
    'pnpm --dir back-end exec prettier --write',
  ],
  'dashboard/**/*.{js,jsx,ts,tsx}': [
    'pnpm --dir dashboard exec eslint --fix',
    'pnpm --dir dashboard exec prettier --write',
  ],
  'shop/**/*.{js,jsx,ts,tsx}': [
    'pnpm --dir shop exec eslint --fix',
    'pnpm --dir shop exec prettier --write',
  ],
  '**/*.{json,md,css,scss}': ['prettier --write'],
};
