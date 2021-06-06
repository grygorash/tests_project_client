const path = require('path');
const {
  override,
  fixBabelImports,
  addBabelPresets,
  addBabelPlugins,
  addWebpackModuleRule,
} = require('customize-cra');

const { presets, plugins } = require('./babel.config');

const isProduction = process.env.NODE_ENV === 'production';
const overrideConfig = {
  fixBabelImportsConfig: ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
  mjsRule: { type: 'javascript/auto', test: /\.mjs$/, use: [] },
};

const customOverride = () => (config) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      'react-redux': isProduction ? 'react-redux/lib' : 'react-redux/dist/react-redux.js',
    },
  },
  optimization: { ...config.optimization, sideEffects: false },
});

module.exports = override(
  fixBabelImports(...overrideConfig.fixBabelImportsConfig),
  addWebpackModuleRule(overrideConfig.mjsRule),
  ...addBabelPresets(...presets),
  ...addBabelPlugins(...plugins),
  customOverride(),
);
