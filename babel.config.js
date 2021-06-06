const isProduction = process.env.NODE_ENV === 'production';
const presets = [
  ['@babel/preset-react', { runtime: 'automatic' }],
  '@babel/preset-env',
];
const plugins = [
  '@babel/plugin-syntax-jsx',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-proposal-optional-chaining',
  '@babel/plugin-proposal-throw-expressions',
  '@babel/plugin-proposal-class-properties',
  [
    'babel-plugin-styled-components',
    {
      ssr: isProduction,
      minify: isProduction,
      pure: isProduction,
      displayName: !isProduction,
    },
  ],
];

module.exports = { presets, plugins };
