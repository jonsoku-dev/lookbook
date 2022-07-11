const path = require('path');

function getPackageDir(packagePath) {
  return path.dirname(require.resolve(path.join(packagePath, 'package.json')));
}

module.exports = {
  stories: [],
  addons: ['@storybook/addon-essentials', '@react-theming/storybook-addon'],
  // uncomment the property below if you want to apply some webpack config globally
  webpackFinal: async (config, { configType }) => {
    // Fixes npm packages that depend on some modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
      'emotion-theming': getPackageDir('@emotion/react'),
      // '~': path.resolve(__dirname, '../src/'),
    };
    config.resolve.plugins = config.resolve.plugins || [];
    // Important: return the modified config
    return config;
  },
};
