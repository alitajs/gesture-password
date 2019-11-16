export default {
  esm: {
    type: 'rollup',
  },
  cjs: {
    type: 'rollup',
  },
  umd: {
    name: 'GesturePassword',
    globals: {
      react: 'React',
    },
  },
  disableTypeCheck: true,
};
