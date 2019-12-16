import { Config } from '@walrus/types';

const config: Config = {
  plugins: {
    release: {
      mode: 'lerna',
      organization: 'alitajs'
    }
  }
};

export default config;
