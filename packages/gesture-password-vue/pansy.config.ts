import { Config } from '@walrus/pansy';

const config: Config = {
  output: {
    format: [
      'cjs',
      'esm',
      'umd'
    ],
    moduleName: 'gesturePassword'
  },
  plugins: {
    vue: true
  }
}

export default config
