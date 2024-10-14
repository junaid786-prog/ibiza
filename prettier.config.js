/** @type {import('prettier').Config} */
module.exports = {
  singleQuote: true,
  arrowParens: 'always',
  trailingComma: 'none',
  printWidth: 100,
  tabWidth: 2,
  semi: true, // Ensure statements are terminated with semicolons
  bracketSpacing: true, // Add spaces between brackets in object literals
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.js', // Ensure Tailwind plugin uses your project's configuration
  endOfLine: 'auto', // Automatically adjust line endings based on the file content
};
