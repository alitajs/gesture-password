import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: ['cjs', 'esm', 'umd'],
    moduleName: 'gesturePassword'
  },
  bundleNodeModules: true,
  disableTypeCheck: true,
  plugins: {
    vue: true
  }
};

export default config;
