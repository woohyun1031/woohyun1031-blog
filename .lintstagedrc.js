module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'npx tsc --noEmit',

  // Lint & Prettify TS and JS files
  '**/*.(ts|tsx)': (filenames) => {
    return [
      `npx eslint --cache --fix ${filenames.join(' ')}`,
      `npx prettier --write ${filenames.join(' ')}`,
    ];
  },
};
